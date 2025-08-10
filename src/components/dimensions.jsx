import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

const Dimensions = () => {
    const { t } = useTranslation('common');
    const [selectedSpec, setSelectedSpec] = useState('length');
    const [isInView, setIsInView] = useState(false)
    const sectionRef = useRef(null)
    const [animationKey, setAnimationKey] = useState(0)

    const specifications = [
        { key: 'length', label: 'Length', value: '1,764 mm', icon:`https://methods.ae/wp-content/uploads/tasman-quarter-front-1.png` },
        { key: 'width', label: 'Width', value: '1,850 mm', icon:`https://methods.ae/wp-content/uploads/tasman-front-1.png `},
        { key: 'height', label: 'Height', value: '1,740 mm', icon:`https://methods.ae/wp-content/uploads/tasman-side-1.png`},
        { key: 'wheelbase', label: 'Wheelbase', value: '3,090 mm', icon:`https://methods.ae/wp-content/uploads/tasman-wheelbase.png`},
        { key: 'trunk', label: 'Trunk', value: '1,200 L', icon:`https://methods.ae/wp-content/uploads/tasman-back-1.png` },
        { key: 'weight', label: 'Weight (GVM)', value: '3,500 kg', icon:`https://methods.ae/wp-content/uploads/tasman-wheelbase.png`}
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
            <style >{`
           
                .animate-bg-wipe {
                    position: relative;
                    overflow: hidden;
                }
                
                .animate-bg-wipe.in-view::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: #06141F;
                    animation: wipeRight 2s ease-in-out forwards;
                    animation-delay: 0.5s;
                }
                
                @keyframes wipeRight {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(101%);
                    }
                }
            `}</style>
        
            <section ref={sectionRef} className="h-screen bg-white flex flex-col  gap-5 justify-center  relative overflow-hidden">
                <div className='h-full max-w-[1200px] mx-auto flex flex-col justify-center '>

                <h2 className="text-5xl font-bold text-[#06141F] mb-8">
                                Tasman in Numbers
                </h2>
                <div className="flex flex-wrap justify-between w-full">
                    {specifications.map((spec) => (
                        <button
                            key={spec.key}
                            onClick={() => setSelectedSpec(spec.key)}
                            className={`text-[22px] cursor-pointer font-medium transition-colors pb-3 px-2 duration-300 ${selectedSpec === spec.key
                                ? 'text-[#06141F] border-b-3 border-b-[#06141F]  underline-offset-4'
                                : 'text-[#54595F] hover:text-[#06141F] hover:border-b-3 hover:border-b-[#06141F]'
                                }`}
                        >
                            {spec.label}
                        </button>
                    ))}
                </div>
                <div className="w-full  flex items-center px-8 justify-between">
                        {/* Left Content */}
                        
                        <div className='relative flex items-end  '>
                            <p className={`absolute top-[-30px]  font-[InterRegular] -start-10  justify-center  text-[#DADADA] text-[52px]`}>
                                {getCurrentSpec()?.label.toUpperCase()}
                            </p>
                            <div className='flex items-center gap-1 h-full text-white    justify-center text-center'>

                                <p key={`engine-1-${animationKey}`} className={`text-[52px] font-[InterBold] text-[#06141F] animate-bg-wipe ${isInView ? 'in-view' : ''}`}>{getCurrentSpec()?.value}</p>
                            </div>
                        </div>

                  
                    {/* Right Content - 3D Vehicle Render */}
                    <div className="w-1/2 flex justify-center items-center">
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
