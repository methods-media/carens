import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from "react-i18next";

export const EngineTypesSection = () => {


    const [selectedEngine, setSelectedEngine] = useState(1)
    const [isInView, setIsInView] = useState(false)
    const [animationKey, setAnimationKey] = useState(0)
    const sectionRef = useRef(null)
    const { i18n } = useTranslation('common')
    const isArabic=i18n?.language=='ar'
    // Framer motion scroll animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress for "ANYTHING - ANYWHERE" animation
    const anythingScale = useTransform(scrollYProgress, [0.6, 0.9], [1, 1.4]);

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
    }, [selectedEngine, isInView])

    return (
        <div ref={sectionRef} className='w-screen min-h-auto lg:min-h-[150vh] bg-[#06141F] min-w-full 2xl:min-w-[1400px]  flex flex-col items-center justify-start '>
           

            <div className='w-full  min-h-screen flex-col lg:flex-row flex items-center  justify-center  gap-6 lg:gap-20 '>

                <div className='flex  flex-1 items-center lg:items-start w-full h-full lg:w-auto lg:h-auto ps-0 lg:ps-[10%] flex-col gap-5  max-w-full'>
                    <p class={`z-[10000] text-4xl mt-5 lg:mt-0 lg:!text-[62px]  ${isArabic ? "font-['GSSMedium']" : "!font-[InterBold]"} !text-white`}>{isArabic ?`مجموعة الدفع والحركة`:`Powertrain`}</p>

                    <div className='flex items-start gap-5 mb-7'>
                        <button className={`text-sm md:text-[21px] bg-[#06141F] px-[27px] py-[10px]   ${selectedEngine == 1 ? 'text-[#06141F]  bg-gray-200 ' : 'text-gray-200 hover:text-[#06141F]  hover:bg-gray-200 border border-gray-200 '} rounded-sm   btn-showRoom ${isArabic ? `font-["InterRegular"]` : `font-["InterRegular"]` } cursor-pointer `} onClick={() => setSelectedEngine(1)}
                        >

                            {`MPI`}

                        </button> 
                         <button className={`text-sm md:text-[21px] bg-[#06141F] px-[27px] py-[10px] ${selectedEngine == 0 ? 'text-[#06141F]  bg-gray-200 ' : 'text-gray-200 hover:text-[#06141F]  hover:bg-gray-200 border border-gray-200 '} rounded-sm  btn-showRoom ${isArabic ? `font-["InterRegular"]` : `font-["InterRegular"]` } cursor-pointer `} onClick={() => setSelectedEngine(0)}
                        >           
                            {`T-GDI`}
                        </button>



                    </div>
                    <div className="flex-col   gap-5">
                        <div className="flex items-start flex-1 gap-5 lg:flex-col  lg:gap-5">
                            <div className='relative flex-col gap-2 lg:gap-0 items-center lg:items-start flex min-h-[120px] '>
                                <p className={`  ${isArabic ? "font-['GSSMedium']" : "font-[InterRegular]"}  text-start  text-[#2A4152] text-2xl lg:text-[42px]`}>
                                    {isArabic ? `المحرك` : ` ENGINE`}
                                </p>
                                <div className='flex items-center gap-1 h-full text-white    justify-center text-center'>

                                    <p key={`engine-1-${animationKey}`} className={`text-xl lg:text-[50px] !font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{'1.5'}{ isArabic?'':'L'}</p>
                                    <p key={`engine-2-${animationKey}`} className={`text-xl lg:text-[50px] ${isArabic ? "font-['GSSMedium']" : "!font-[InterBold]"} animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? isArabic ? `لتر ` : 'MPI' : isArabic ? `لتر تيربو` : 'T-GDI'}</p>
                                </div>
                            </div>

                            <div className='relative flex-col  gap-2 lg:gap-0 items-center lg:items-start flex min-h-[120px] '>
                                <p className={`  ${isArabic ? "font-['GSSMedium']" : "font-[InterRegular]"}  text-start  text-[#2A4152] text-2xl lg:text-[42px]`}>
                                    {isArabic ? `القدرة الحصانية` : `HORSEPOWER`}
                                </p>
                                <div className='flex items-center gap-1 h-full text-white    justify-center text-center'>

                                    <p key={`hp-1-${animationKey}`} className={`text-xl lg:text-[50px] !font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? '115' : '160'}</p>
                                    <p key={`hp-2-${animationKey}`} className={`text-xl lg:text-[50px] ${isArabic ? "font-['GSSMedium']" : "!font-[InterBold]"} animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? isArabic ? `حصان` : 'HP' : isArabic ? `حصان` : 'HP'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 lg:flex-col lg:gap-5">

                        <div className='relative flex-col  gap-2 lg:gap-0 items-center lg:items-start flex min-h-[120px] '>
                            <p className={`  ${isArabic ? "font-['GSSMedium']" : "font-[InterRegular]"}  text-start  text-[#2A4152] text-2xl lg:text-[42px]`}>
                                {isArabic ? `عزم الدوران` : `TORQUE`}
                            </p>
                            <div className='flex items-center gap-1 h-full text-white    justify-center text-center'>

                                <p key={`torque-1-${animationKey}`} className={`text-2xl lg:text-[50px] !font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{!selectedEngine ? '253' : '143.8'}</p>
                                <p key={`torque-2-${animationKey}`} className={`text-xl lg:text-[50px] ${isArabic ? "font-['GSSMedium']" : "!font-[InterBold]"} animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{isArabic ? `نيوتن/متر` : `Nm`}</p>
                            </div>
                        </div>
                            <div className='relative flex-col  flex-1  gap-2 lg:gap-0 items-center lg:items-start flex min-h-[120px] '>
                            <p className={`  ${isArabic ? "font-['GSSMedium']" : "font-[InterRegular]"}  text-start  text-[#2A4152] text-2xl lg:text-[42px]`}>
                                {isArabic ? `ناقل السرعات` : `TRANSMISSION`}
                            </p>
                            <div className='flex items-center gap-1 h-full text-white    justify-center text-center'>

                                    <p key={`trans-1-${animationKey}`} className={`text-2xl lg:text-[50px] !font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? isArabic ? `6` : `6-Speed'` : isArabic ? `7` : `7-Speed'`}</p>
                                    <p key={`trans-2-${animationKey}`} className={`text-xl lg:text-[50px] ${isArabic ? "font-['GSSMedium']" : "!font-[InterBold]"} animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? isArabic ? 'سرعات' : 'CVT' : isArabic ? 'سرعات' : 'DCT'}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className='py-0 lg:py-10 pt-4 lg:pt-20 flex-1 flex justify-start'>

                    <img
                        src={selectedEngine == 1 ? 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/9db0c891-9dcd-4c4b-762a-df3cf86d8900/semi' :'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/0663c68e-5b72-427a-82b7-824b1907dd00/semi'}
                        height={550}
                        width={450}
                        className="animate-bounce w-[300px] h-[350px] xl:w-[550px] xl:h-[650px]"
                        style={{
                            animation: 'float 2.5s ease-in-out infinite'

                        }}
                    />
                </div>
            </div>
            <div className="flex  flex-col items-center  justify-center gap-5 pt-14 lg:py-10 py-10 h-auto lg:h-[50vh]">
                <h3
                    className={`text-xl lg:text-[64px] text-center lg:text-start  text-white  ${isArabic ? "font-['GSSMedium']" : "!font-[InterBold]"}`}

                >
                    {isArabic ? `وعد بالعناية` :`THE PROMISE OF CARING`}
                </h3>
                {/* <motion.h3
                    className={`text-base  lg:text-[40px] py-8  lg:py-12  text-center  text-white ${isArabic ? "font-['GSSMedium']" : "!font-[InterBold]"} `}
                    style={{
                        scale: anythingScale
                    }}
                >
                    {isArabic ? `قوة الجر في كارينز تفتح أفاقً جديدة من الإمكانات` :
                        
                        <>
                            {`Kia Carens's towing strength opens the way`}
                            <br />


                            {`to a new dimension of possibility`}
                        </>}
                </motion.h3> */}
            </div>
        </div>
    )
};



