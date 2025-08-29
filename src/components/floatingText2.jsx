import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const FloatingText2 = ({ head1,head2,head3, desc }) => {
    const sectionRef = useRef(null);
    const { i18n } = useTranslation('common')
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
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
            {/* {head ? <p className={`text-[62px] ${i18n?.language == ' ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'} text-white text-center w-full`}>{head}</p> : ''} */}
            <div className='relative flex items-center justify-center h-20' >
                <motion.p
                    initial={{ x: 0, opacity: 0, scale: 0.8 }}
                    whileInView={{ x: i18n?.language=='ar'?200: -200, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute text-white text-4xl md:text-6xl font-bold  whitespace-nowrap overflow-ellipsis"
                >
                    {head1}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute text-white text-4xl md:text-6xl font-bold"
                >
                   {head2}
                </motion.p>
                <motion.p
                    initial={{ x: 0, opacity: 0, scale: 0.8 }}
                    whileInView={{ x: i18n?.language == 'ar' ? -150: 200, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute text-white text-4xl md:text-6xl font-bold"
                >
                    {head3}
                </motion.p>
            </div>
            <motion.p
                style={{ y, opacity }}
                className='text-white text-sm md:text-xl px-5 md:px-0 leading-[30px]   font-[InterRegular] text-center max-w-[1330px] mx-auto'>
                {desc}



            </motion.p>
        </div>
    )
}