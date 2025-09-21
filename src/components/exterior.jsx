import { useEffect, useRef, useState } from "react";
import { FloatingText } from "./floatingText"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const Exterior = () => {
    const sectionRef = useRef(null);
    const { t, i18n } = useTranslation('common');
    const { locale } = useRouter()
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Transform scroll progress to scale and position values
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.6, 1, 0.4]);
    const y = useTransform(scrollYProgress, [0, 0.5], [-300, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [-1, 1]);
    return (
        <div ref={sectionRef} className="w-screen bg-[#06141F] flex flex-col justify-center h-[50vh] lg:h-[70vh]">
            <motion.p
                className={`text-3xl md:text-[52px] text-white text-center ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"} text-white uppercase font-[900]`}
                style={{ scale, y, opacity }}
            >
                {i18n?.language == 'ar' ? `التصميم الخارجي` : `Exterior`}
            </motion.p>
            <FloatingText desc={t('ext_desc')} />
        </div>
    )
}