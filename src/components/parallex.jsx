import VRShowroom from '@src/modules/VRShowroom';
import React, { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from 'framer-motion';
import { SwiperSection } from './SwiperSection';
import { useTranslation } from 'react-i18next';

const ParallaxSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const {i18n}=useTranslation('common')
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "end start"]
    });

    const xTransform = useTransform(scrollYProgress, [0, 1], [-window.innerWidth, window.innerWidth]);

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        setScrollPosition(currentScroll);

        // Check if this section is in view
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            setIsInView(isVisible);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ParallaxProvider key={'px11'}>
            <style>
                {`
              .parallax-container {
  position: relative;
  height: 200vh; /* Make the container tall enough to allow scrolling */
  overflow: hidden;
  @media (max-width: 1024px) {
  height:200vh;
}

.parallax-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: ${isInView ? '-1' : '-10'};
  transition: z-index 0.3s ease;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content2 {
  position: relative;
  height: 100vh;
  z-index: 2;
  color: white;
  text-align: center;
  padding: 50px;
  @media(max-width:1024px)
  {
  padding:10px}
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content3 {
  position: relative;
  height: 100vh;
  z-index: 2;
  color: white;
  text-align: center;
  padding: 50px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @media (max-width: 1024px) {
  height:100vh;
  padding:0px;
}
}
                
                `}
            </style>

            <div className="parallax-container" ref={sectionRef} id='performance'>
                <div className={`parallax-video ${isInView ? '' : 'opacity-0'}`}>
                    <video autoPlay
                        muted
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        controlsList="noremoteplayback"
                        disablePictureInPicture
                        src='/assets/videos/ktk-performance.webm'
                        className="video-element">
                        
                        
                    </video>
                </div>
                <div className="content2" ref={textRef}>
                  
                    <span
                        className={` ${i18n?.language == 'ar' ? 'font-[GSSMedium] text-[40px] lg:text-[100px]' :'font-[InterBold] text-3xl lg:text-[100px]'} font-extrabold  uppercase`}
                        
                    >
                        {i18n?.language == 'ar' ? `الأداء` : `Performance`}
                        <br/>
                   
                        <span
                            className={`text-lg mt-5 lg:mt-0 lg:text-2xl lg:w-[80%] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'} font-extrabold uppercase inline-block`}

                        >
                            {i18n?.language == 'en' ? `Bold capability, redefined. The Carens takes performance into a new dimension` : `قدرات جريئة، بمعني جديد كارينز تنقل معني الأداء الي بُعد جديد`}
                        </span>

                    </span>
                </div>
                <div className="content3 bg- bg-[linear-gradient(180deg,_#06141F00_0%,_#06141F00_20%,_#06141F_80%)]  ">
                    <SwiperSection bottom id={2} noBg={true} />
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default ParallaxSection;
