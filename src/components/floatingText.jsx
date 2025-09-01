import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const FloatingText = ({ head, desc }) => {
    const sectionRef = useRef(null);
    const { t, i18n } = useTranslation('common');
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, isMobile?100:300]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <div ref={sectionRef} className='min-h-[30vh] w-screen bg-[#06141F] flex items-start flex-col justify-start '>
            {head ? <p className='text-[40px] lg:text-[62px] font-[InterBold] text-white text-center w-full'>{head}</p> : ''}
            <motion.p
                style={{ y, opacity }}
                className={`text-white text-sm lg:text-xl px-5  leading-[30px] ${i18n?.language=='ar'? "font-['GSSMedium']" :"font-[InterRegular]"} text-center max-w-[1330px] mx-auto`}>
                {desc}
            </motion.p>
        </div>
    )
}