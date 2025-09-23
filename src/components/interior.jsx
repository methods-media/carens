import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { FloatingText2 } from "./floatingText2";

export const Interior = () => {
    const sectionRef = useRef(null);
    const { t, i18n } = useTranslation('common');
    const {locale}=useRouter()
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to scale and position values
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.6, 1, 0.4]);
    const y = useTransform(scrollYProgress, [0, 0.5], [-150, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    return (
        <div ref={sectionRef} id='interior' className="w-screen bg-[#06141F] flex flex-col  items-center justify-center h-[60vh] lg:h-[100vh]">
            <motion.p
                className={`text-[40px] lg:text-[62px] text-white text-center ${locale == 'ar' ? "font-['GSSMedium'] lg:-ms-[55px]" : "font-[InterBold]"} text-white uppercase font-[900] w-fit`}
                style={{ scale, y, opacity }}
            >
                {"   "}{i18n?.language == 'ar' ? `التصميم الداخلي` : `Interior`}
            </motion.p>
            <FloatingText2
                head1={i18n?.language == 'ar' ? `شعور بالعودة` : `THE FEELING`}
                head2={i18n?.language == 'ar' ? `الي` : `OF`}
                head3={i18n?.language == 'ar' ? `الوطن` : `HOMECOMING`}
                desc={t('int_desc')} />
     </div>
    )
}