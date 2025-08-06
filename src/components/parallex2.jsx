import VRShowroom from '@src/modules/VRShowroom';
import React, { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from 'framer-motion';
import { SwiperSection } from './SwiperSection';

const ParallaxSectionSecond = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const textRef = useRef(null);
    const sectionRef = useRef(null);

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
        <ParallaxProvider>
            <style>
                {`
              .parallax-container1 {
  position: relative;
  height: 300vh; /* Make the container tall enough to allow scrolling */
  overflow: hidden;
}

.parallax-video1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: ${isInView ? '-1' : '-10'};
  transition: z-index 0.3s ease;
}

.image-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content22 {
  position: relative;
  height: 100vh;
  z-index: 2;
  color: white;
  padding: 50px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.content33 {
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
}
                
                `}
            </style>

            <div className="parallax-container1" ref={sectionRef}>
                <div className="parallax-video1">
                    <img src='https://methods.ae/wp-content/uploads/696798.jpg' className="image-element">

                    </img>
                </div>
                <div class="fixed-section" id="bg-section">
                    <div class="bg-image bg-image-1 visible w-screen h-screen bg-no-repeat bg-cover" style={{

                        backgroundImage: `url('https://methods.ae/wp-content/uploads/ktk-boat5.png')`
                    }} />
                  


                </div>
                <div className="content22 !w-full flex items-center justify-start font-[InterBold] !text-[62px]" ref={textRef}>
                    Advanced Driver <br/>
                    Assistance System<br />
                    (ADAS)
                </div>
                <div className="content33 bg- bg-[linear-gradient(180deg,_#FCFEFF00_0%,_#FCFEFF_100%)]  ">
                    <SwiperSection dark={true} noBg={true} />
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default ParallaxSectionSecond;
