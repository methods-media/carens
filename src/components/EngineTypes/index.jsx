import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export const EngineTypesSection = () => {


    const [selectedEngine, setSelectedEngine] = useState(0)
    const [isInView, setIsInView] = useState(false)
    const [animationKey, setAnimationKey] = useState(0)
    const sectionRef = useRef(null)

    // Framer motion scroll animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress for "ANYTHING - ANYWHERE" animation
    const anythingScale = useTransform(scrollYProgress, [0.6, 0.9], [1, 1.8]);

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
        <div ref={sectionRef} className='w-screen min-h-screen bg-[#06141F]  flex flex-col items-center justify-start '>
            <style >{`
           
                .animate-bg-wipe1 {
                    position: relative;
                    overflow: hidden;
                }
                
                .animate-bg-wipe1.in-view::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: white;
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

            <div className='w-full flex items-center justify-center gap-20 '>

                <div className='flex flex-col gap-5 '>
                    <p class="!text-[62px] !font-[InterBold] !text-white">Powertrain</p>

                    <div className='flex items-start gap-5 mb-7'>
                        <button className={`text-sm md:text-[21px] bg-[#06141F] px-[27px] py-[10px]   ${selectedEngine == 1 ? 'text-[#06141F]  bg-gray-200 ' : 'text-gray-200 hover:text-[#06141F]  hover:bg-gray-200 border border-gray-200 '} rounded-sm   btn-showRoom font-["InterRegular"] cursor-pointer `} onClick={() => setSelectedEngine(1)}
                        >

                            Petrol Engine

                        </button>
                        <button className={`text-sm md:text-[21px] bg-[#06141F] px-[27px] py-[10px] ${selectedEngine == 0 ? 'text-[#06141F]  bg-gray-200 ' : 'text-gray-200 hover:text-[#06141F]  hover:bg-gray-200 border border-gray-200 '} rounded-sm  btn-showRoom font-["InterRegular"] cursor-pointer `} onClick={() => setSelectedEngine(0)}
                        >           Diesel Engine
                        </button>



                    </div>
                    <div className='relative flex items-end min-h-[120px] '>
                        <p className={`absolute top-[-0px]  font-[InterRegular]  justify-center  text-[#2A4152] text-[70px]`}>
                            ENGINE
                        </p>
                        <div className='flex items-center gap-1 h-full text-white ps-20 min-w-[600px]  justify-center text-center'>

                            <p key={`engine-1-${animationKey}`} className={`text-[50px] font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? '2.5L' : '2.2L'}</p>
                            <p key={`engine-2-${animationKey}`} className={`text-[50px] font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? 'T-GDI' : 'Turbocharged'}</p>
                        </div>
                    </div>

                    <div className='relative flex items-end min-h-[120px] '>
                        <p className={`absolute top-[-0px]   font-[InterRegular]  justify-center  text-[#2A4152] text-[70px]`}>
                            HORSEPOWER
                        </p>
                        <div className='flex items-center gap-1 h-full text-white ps-20 min-w-[600px]  justify-center text-center'>

                            <p key={`hp-1-${animationKey}`} className={`text-[50px] font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? '277' : '277'}</p>
                            <p key={`hp-2-${animationKey}`} className={`text-[50px] font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? 'HP' : 'HP'}</p>
                        </div>
                    </div>
                    <div className='relative flex items-end min-h-[120px] '>
                        <p className={`absolute top-[-0px]  font-[InterRegular]  justify-center  text-[#2A4152] text-[70px]`}>
                            TORQUE
                        </p>
                        <div className='flex items-center gap-1 h-full text-white ps-20 min-w-[600px]  justify-center text-center'>

                            <p key={`torque-1-${animationKey}`} className={`text-[50px] font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? '421' : '441'}</p>
                            <p key={`torque-2-${animationKey}`} className={`text-[50px] font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? 'Nm' : 'Nm'}</p>
                        </div>
                    </div>
                    <div className='relative flex items-end min-h-[120px] '>
                        <p className={`absolute top-[-0px]  font-[InterRegular]  justify-center  text-[#2A4152] text-[70px]`}>
                            TRANSMISSION
                        </p>
                        <div className='flex items-center gap-1 h-full text-white ps-20 min-w-[600px]  justify-center text-center'>

                            <p key={`trans-1-${animationKey}`} className={`text-[50px] font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? '8-Speed' : '8-Speed'}</p>
                            <p key={`trans-2-${animationKey}`} className={`text-[50px] font-[InterBold] animate-bg-wipe1 ${isInView ? 'in-view' : ''}`}>{selectedEngine ? 'SBW' : 'SBW'}</p>
                        </div>
                    </div>
                </div>
                <div className='py-10'>

                    <img
                        src='https://methods.ae/wp-content/uploads/tk-engine.png'
                        height={450}
                        width={550}
                        className="animate-bounce"
                        style={{
                            animation: 'float 2.5s ease-in-out infinite'

                        }}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-5 py-10">
                <h3
                    className="text-[40px] text-white font-[InterBold]"

                >
                    With such power, the Tasman can tow
                </h3>
                <motion.h3
                    className="text-[64px] text-white font-[InterBold] uppercase"
                    style={{
                        scale: anythingScale
                    }}
                >
                    ANYTHING - ANYWHERE
                </motion.h3>
            </div>
        </div>
    )
};



