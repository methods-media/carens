import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

const Dimensions = () => {
    const { t ,i18n} = useTranslation('common');
    const [selectedSpec, setSelectedSpec] = useState('length');
    const [isInView, setIsInView] = useState(false)
    const sectionRef = useRef(null)
    const [animationKey, setAnimationKey] = useState(0)
const isArabic=i18n?.language=='ar'
    const specifications = [
        {
            key: 'length', label: isArabic ? `الطول` : 'Length', value: isArabic ? `4,550 مم` : '4,550MM', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/443ba543-7504-4342-29da-0e933d74aa00/public` },
        {
            key: 'width', label: isArabic ? `العرض` : 'Width', value: isArabic ? `1,800 مم` : '1,800 mm', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/cb876741-5520-4ced-0464-5dcb0b89c300/public`},
        {
            key: 'height', label: isArabic ? `الارتفاع` : 'Height', value: isArabic ? `1,708 مم` : '1,708 mm', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/e3af4c00-879e-4298-a290-fe67d2755f00/public`},
      {
          key: 'wheelbase', label: isArabic ? `قاعدة العجلات` : 'Wheelbase', value: isArabic ? `2,780 مم` : '2,780 mm', icon:`https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/81358983-119e-485f-bd95-922b8f87e000/public`},
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

        
            <section ref={sectionRef} className="min-h-[80vh] bg-white flex flex-col  gap-5 justify-start  relative overflow-hidden" id='specs'>
                <div className='h-full py-10 w-full 2xl:w-[1350px] mx-auto flex flex-col justify-start  lg:px-4 xl:px-0'>

                <h2 className={`text-3xl lg:text-5xl text-center lg:text-start font-bold text-[#06141F] mb-8 ${isArabic ? 'font-[GSSMedium]' :''}`}>
                        {isArabic ? `كارينز في أرقام` : `Carens in Numbers`}
                </h2>
                    <div
                        id='scroller'
                      
                        className="flex ps-[147px] lg:ps-0  overflow-x-auto space-y-3   gap-3 lg:gap-7  items-start  justify-center  w-full ">
                    {specifications.map((spec) => (
                        <button
                            key={spec.key}
                            onClick={() => setSelectedSpec(spec.key)}
                           
                            className={`text-sm  lg:w-auto lg:text-[22px] text-nowrap text-ellipsis   cursor-pointer font-medium transition-colors pb-3 px-1 lg:px-2 duration-300 ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'} ${selectedSpec === spec.key
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
                        
                        <div className={`relative flex flex-col ${isArabic?'gap-2':'gap-0'}  items-start w-full lg:w-[40%]`}>
                            <p className={` ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular] '}   justify-center leading-normal  text-[#DADADA] text-[45px]`}>
                                {getCurrentSpec()?.label.toUpperCase()}
                            </p>
                            <div className='flex items-center gap-1 h-full text-white  leading-normal    justify-center text-center' style={{marginTop:'-28px'}}>

                                <p key={`engine-1-${animationKey}`} className={`text-[52px]  ${isArabic ? 'font-[GSSMedium]' : 'font-[InterBold]'} text-[#06141F]  ${isInView ? 'in-view' : ''}`}>{getCurrentSpec()?.value?.includes('4,550')?
                             
                             <>
                                {getCurrentSpec()?.value?.split('4,550')?.[0]}
                                <span className={'font-[InterBold]'}>4,550</span>
                                  {getCurrentSpec()?.value?.split('4,550')?.[1]}
                                </>
                                
                                :
                                
                                
                                
                                getCurrentSpec()?.value?.includes('1,800')?
                             
                             <>
                                {getCurrentSpec()?.value?.split('1,800')?.[0]}
                                <span className={'font-[InterBold]'}>1,800</span>
                                  {getCurrentSpec()?.value?.split('1,800')?.[1]}
                                </>
                                
                                :
                                



                                 getCurrentSpec()?.value?.includes('1,708')?
                             
                             <>
                                {getCurrentSpec()?.value?.split('1,708')?.[0]}
                                <span className={'font-[InterBold]'}>1,708</span>
                                  {getCurrentSpec()?.value?.split('1,708')?.[1]}
                                </>
                                
                                :


    getCurrentSpec()?.value?.includes('252')?
                             
                             <>
                                {getCurrentSpec()?.value?.split('252')?.[0]}
                                <span className={'font-[InterBold]'}>252</span>
                                  {getCurrentSpec()?.value?.split('252')?.[1]}
                                </>
                                
                                :



                                  getCurrentSpec()?.value?.includes('2,780')?
                             
                             <>
                                {getCurrentSpec()?.value?.split('2,780')?.[0]}
                                <span className={'font-[InterBold]'}>2,780</span>
                                  {getCurrentSpec()?.value?.split('2,780')?.[1]}
                                </>
                                
                                :



                                  getCurrentSpec()?.value?.includes('1,336')?
                             
                             <>
                                {getCurrentSpec()?.value?.split('1,336')?.[0]}
                                <span className={'font-[InterBold]'}>1,336</span>
                                  {getCurrentSpec()?.value?.split('1,336')?.[1]}
                                </>
                                
                                :

                                   getCurrentSpec()?.value?.includes('1,151')?
                             
                             <>
                                {getCurrentSpec()?.value?.split('1,151')?.[0]}
                                <span className={'font-[InterBold]'}>1,151</span>
                                  {getCurrentSpec()?.value?.split('1,151')?.[1]}
                                </>
                                
                                :

                                getCurrentSpec()?.value}</p>
                            </div>
                            {getCurrentSpec()?.desc ? <span className='text-xs mt-5 text-[#DADADA]'>{getCurrentSpec()?.desc}</span> : null}

                        </div>

                  
                    {/* Right Content - 3D Vehicle Render */}
                    <div className="w-full lg:w-[60%] flex justify-center items-center">
                            <img
                                src={getCurrentSpec()?.icon}
                                alt="Kia Carens 3D Render"
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
