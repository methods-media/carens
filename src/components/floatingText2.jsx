import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const FloatingText2 = ({ head, desc }) => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
        <div ref={sectionRef} className='h-[50vh] w-screen bg-[#06141F] flex items-center flex-col justify-center'>
            {head ? <p className='text-[62px] font-[InterBold] text-white text-center w-full'>{head}</p> : ''}
            <motion.p
                style={{ y, opacity }}
                className='text-white text-sm md:text-xl px-5 md:px-0 leading-[30px]   font-[InterRegular] text-center max-w-[1330px] mx-auto'>
                {desc}



            </motion.p>
        </div>
    )
}