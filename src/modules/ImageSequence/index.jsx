'use client';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const ScrollSequence = ({ id, imagesUrl, totalFrames, startTextFrame2, startTextFrame = 10, endTextFrame, text, text2, description, description2, endTextFrame2 }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const loadedImagesCount = useRef(0);
  const scrollTriggerRef = useRef(null);
  const timelineRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const { locale } = useRouter();
  useLayoutEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    let ctx = gsap.context(() => {
      timelineRef.current = gsap.timeline({
        defaults: { duration: 1 },
        paused: true,
      });

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=200%',
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
        fastScrollEnd: true,
        animation: timelineRef.current,
        onUpdate: self => {
          if (!imagesRef.current.length) return;

          const frameIndex = Math.floor(
            gsap.utils.clamp(
              0,
              imagesRef.current.length - 1,
              self.progress * (imagesRef.current.length - 1),
            ),
          );
          setShowText(frameIndex >= startTextFrame && frameIndex <= endTextFrame);
          setShowText2(frameIndex >= startTextFrame2 && frameIndex <= endTextFrame2);
          if (imagesRef.current[frameIndex]) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(imagesRef.current[frameIndex], 0, 0);
          }
        },
        onEnter: () => {
          setIsVisible(true);
          gsap.set(container, { zIndex: 10, immediateRender: false });
        },
        onLeave: () => {
          const lastImage = imagesRef.current[imagesRef.current.length - 1];
          if (lastImage) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(lastImage, 0, 0);
          }
          gsap.timeline().to(container, {
            zIndex: 1,
            duration: 0.1,
            onComplete: () => setIsVisible(false),
          });
        },
        onEnterBack: () => {
          setIsVisible(true);
          gsap.set(container, { zIndex: 10, immediateRender: false });
        },
        onLeaveBack: () => {
          const firstImage = imagesRef.current[0];
          if (firstImage) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(firstImage, 0, 0);
          }
          gsap.timeline().to(container, {
            zIndex: 1,
            duration: 0.1,
            onComplete: () => setIsVisible(false),
          });
        },
      });
    }, container);

    const loadImages = async () => {
      setIsLoading(true);
      imagesRef.current = [];
      loadedImagesCount.current = 0;

      const loadImage = src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedImagesCount.current += 1;
            resolve(img);
          };
          img.onerror = reject;
          img.src = src;
        });
      };

      try {
        const loadedImages = await Promise.all(
          imagesUrl.map(url => loadImage(url)),
        );
        imagesRef.current = loadedImages;

        if (loadedImages[0]) {
          canvas.width = loadedImages[0].width;
          canvas.height = loadedImages[0].height;
          context.drawImage(loadedImages[0], 0, 0);
        }

        setIsLoading(false);
      } catch (error) {
        console.error(`Error loading images for sequence ${id}:`, error);
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ctx.revert();
      if (contextRef.current) {
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      }
      imagesRef.current = [];
      loadedImagesCount.current = 0;
      gsap.set(container, { clearProps: 'all' });
    };
  }, [id, imagesUrl, totalFrames, startTextFrame]);
  return (
    <div
      ref={containerRef}
      className="w-screen h-screen relative"
      style={{
        position: 'relative',
        zIndex: isVisible ? 10 : 1,
        backgroundColor: '#000',
        willChange: 'transform, z-index',
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        transition: 'opacity 0.3s ease-out',
        opacity: isVisible ? 1 : 0.99,
      }}
    >

      <canvas
        ref={canvasRef}
        id={id}
        className="w-full h-full object-cover"
        style={{
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'transform',
          objectPosition: id == 'canvas5' ? 'center bottom' : '',
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default ScrollSequence;
