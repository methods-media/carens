import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

const Dimensions = () => {
    const { t } = useTranslation('common');
    const [selectedSpec, setSelectedSpec] = useState('length');
    const [isInView, setIsInView] = useState(false)
    const sectionRef = useRef(null)
    const [animationKey, setAnimationKey] = useState(0)

    const specifications = [
        { key: 'length', label: 'Length', value: '5,410MM', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/85d55440-c821-4ec1-aee1-a00c4ca79100/public` },
        { key: 'width', label: 'Width', value: '1,930 mm', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/04486424-3e73-455f-36f6-8ad07a97a100/public`},
        { key: 'height', label: 'Height', value: '1,920 mm', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/6c94dd75-4aec-4418-5880-733c43c1e500/public`},
        { key: 'Ground Clearance', label: 'Ground Clearance', value: '252 mm', icon: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/b487a28a-c69d-45fa-8979-f85450c4dc00/public` },
        { key: 'wheelbase', label: 'Wheelbase', value: '3,270 mm', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/b487a28a-c69d-45fa-8979-f85450c4dc00/public`},
        { key: 'Cargo (SAE)', label: 'Trunk', value: '1,336 L', desc: "(SAE capacity without bedliner)", icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/79dcebe4-368a-4e2a-b8b3-1dc230523b00/public` },
        { key: 'weight', label: 'Weight (GVM)', value: '3,250 kg', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/8f526431-4b6f-44fa-5a58-15025f1db600/public`}
    ];
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            {
                threshold: 0.3 // Trigger when 30% of the section is visible
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    // Restart animation when engine selection changes
    useEffect(() => {
        if (isInView) {
            setAnimationKey(prev => prev + 1)
        }
    }, [selectedSpec, isInView])
    const getCurrentSpec = () => {
        return specifications.find(spec => spec.key === selectedSpec);
    };

    return (
        <>

        
            <section ref={sectionRef} className="h-screen bg-white flex flex-col  gap-5 justify-start  relative overflow-hidden">
                <div className='h-full py-10 w-[1350px] mx-auto flex flex-col justify-start '>

                <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-bold text-[#06141F] mb-8">
                                Tasman in Numbers
                </h2>
                    <div className="flex flex-wrap space-y-3   items-start  justify-center lg:justify-between w-full">
                    {specifications.map((spec) => (
                        <button
                            key={spec.key}
                            onClick={() => setSelectedSpec(spec.key)}
                            className={`text-sm lg:text-[22px] cursor-pointer font-medium transition-colors pb-3 px-1 lg:px-2 duration-300 ${selectedSpec === spec.key
                                ? 'text-[#06141F]  border-b-1 lg:border-b-3 border-b-[#06141F]  underline-offset-4'
                                : 'text-[#54595F] hover:text-[#06141F] hover:border-b-1 lg:hover:border-b-3 hover:border-b-[#06141F]'
                                }`}
                        >
                            {spec.label}
                        </button>
                    ))}
                </div>
                <div className="w-full flex-col lg:flex-row pt-12 lg:pt-0 flex items-center px-8 justify-between">
                        {/* Left Content */}
                        
                        <div className='relative flex flex-col gap-0 items-start  w-[40%]'>
                            <p className={`  font-[InterRegular]   justify-center leading-normal  text-[#DADADA] text-[45px]`}>
                                {getCurrentSpec()?.label.toUpperCase()}
                            </p>
                            <div className='flex items-center gap-1 h-full text-white  leading-normal    justify-center text-center' style={{marginTop:'-28px'}}>

                                <p key={`engine-1-${animationKey}`} className={`text-[52px]  font-[InterBold] text-[#06141F]  ${isInView ? 'in-view' : ''}`}>{getCurrentSpec()?.value}</p>
                            </div>
                            {getCurrentSpec()?.desc ? <span className='text-xs mt-5 text-[#DADADA]'>{getCurrentSpec()?.desc}</span> : null}

                        </div>

                  
                    {/* Right Content - 3D Vehicle Render */}
                    <div className="w-[60%] flex justify-center items-center">
                            <img
                                src={getCurrentSpec()?.icon}
                                alt="Kia Tasman 3D Render"
                                className="w-full h-auto object-contain"
                            />
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default Dimensions;
