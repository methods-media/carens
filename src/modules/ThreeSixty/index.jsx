'use client';;
import { useEffect, useState, useRef } from 'react';
import VRControls from './VRControls';
import { useTranslation } from 'next-i18next';
import PanoramaViewer from '@src/components/ImageViewer360';
import { useRouter } from 'next/router';
import { CDN_BEIGE_FENDER, FRAME_COUNT } from '@src/constants/imageSequence';
const ThreeSixty = ({ showControl = false }) => {
  const containerRef = useRef(null);
  const [view, setView] = useState('exterior')
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const isDragging = useRef(false);
  const startX = useRef(0);
  const autoRotateRef = useRef(null);
  const framePositionRef = useRef(0);
  const { t, i18n } = useTranslation('common');
  const { locale } = useRouter();



  const preloadColorImages = async () => {
    const urls = CDN_BEIGE_FENDER


    const imageElements = urls.map(url => {
      const img = new Image();
      img.src = url;
      img.crossOrigin = 'anonymous';
      return img;
    });

    try {
      await Promise.all(
        imageElements.map(
          img =>
            new Promise((resolve, reject) => {
              if (img.complete) {
                resolve(img.src);
              } else {
                img.onload = () => resolve(img.src);
                img.onerror = () =>
                  reject(new Error(`Failed to load ${img.src}`));
              }
            }),
        ),
      );
      setLoadedImages(prev => ({
        ...prev,
        ...urls,
      }));

      return true;
    } catch (error) {
      console.error('Error loading images:', error);
      return false;
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoaded(false);

        const initialSuccess = await preloadColorImages();
        if (initialSuccess) {
          setIsLoaded(true);


        }
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    };

    loadImages();
  }, []);



  const stopAutoRotate = () => {
    if (autoRotateRef.current) {
      clearTimeout(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const handleMouseDown = e => {
    isDragging.current = true;
    startX.current = e.pageX;
    stopAutoRotate();
  };

  const handleMouseMove = e => {
    if (!isDragging.current) return;

    const deltaX = e.pageX - startX.current;
    const sensitivity = 2;
    let frameDelta = deltaX / sensitivity;

    framePositionRef.current -= frameDelta;
    if (framePositionRef.current < 0) framePositionRef.current += FRAME_COUNT;
    if (framePositionRef.current >= FRAME_COUNT)
      framePositionRef.current -= FRAME_COUNT;

    setCurrentFrame(Math.floor(framePositionRef.current));
    startX.current = e.pageX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = e => {
    e.preventDefault();
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    stopAutoRotate();
  };
  const handleTouchMove = e => {
    if (!isDragging.current) return;
    e.preventDefault();

    const deltaX = e.touches[0].pageX - startX.current;
    const sensitivity = 2;
    let frameDelta = deltaX / sensitivity;

    framePositionRef.current -= frameDelta;
    if (framePositionRef.current < 0) framePositionRef.current += FRAME_COUNT;
    if (framePositionRef.current >= FRAME_COUNT)
      framePositionRef.current -= FRAME_COUNT;

    setCurrentFrame(Math.floor(framePositionRef.current));
    startX.current = e.touches[0].pageX;
  };



  const handleImageError = e => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = e.target.src;
  };

  if (!isLoaded) {
    return (
      <div
        className="vr-container"
        style={{
          aspectRatio: '16/9',
          maxWidth: '100%',
          background: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ color: 'white' }}>{t('loading')}</div>
      </div>
    );
  }
  return (
    <div
      className={`vr-showroom h-[500px] showRoom-container lg:h-screen z-[110]`}
      style={{
        aspectRatio: '16/9',
        maxWidth: '100%',
        position: 'relative',
        background: 'black',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >

      <p id='vrShowroomText2' className={`text-white text-base  md:text-[28px] z-[50] drop-shadow-2xl [text-shadow:_2px_2px_2px_rgba(0,0,0,0.4)] !absolute start-0 text-center lg:text-start lg:start-10 top-8 lg:!top-22  w-full leading-1   ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>
        {i18n?.language == 'ar' ? showControl ? `استكشف تفاصيل كارينز من الداخل والخارج` : `كيا كارينز تلبي جميع الأذواق` : showControl ? `Discover Kia Carens's Exterior & Interior in 360°` : 'The Carens Meets All Tastes'}
      </p>
      <div
       
        className={ `absolute top-0 right-0 w-full h-full flex flex-col justify-center items-center `}

      >


       
        <div
          className='mt-0 lg:mt-12.5 absolute bottom-3 lg:bottom-12.5 w-full text-white text-sm z-50 flex flex-col justify-end ps-0 lg:ps-[70px] gap-2 lg:gap-4 items-center'

        >



          {view == 'exterior' ?
            <div className='flex items-center flex-row-reverse gap-2'>

              {showControl ? null : <div className='flex flex-col items-center gap-2 lg:gap-4'>
                <p
                  key={colorTextKey}
                  className={`text-white text-base lg:text-2xl animate-fadeInUp ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}
                >
                  {COLORS?.filter?.((item) => item?.id == currentColor)?.[0]?.name}
                </p>
                <div className='flex  gap-1.5 lg:gap-3' dir='ltr' >
                  {COLORS.map(color => (
                    <div
                      key={color.id}
                      className='flex items-center gap-2 '
                    >
                      <button
                        key={color.name}
                        className=' rounded-sm w-7 btn-color-showRoom h-7 md:w-[50px] md:h-[50px] hover:scale-110 cursor-pointer '
                        onClick={() => handleColorChange(color.id)}
                        style={{
                          background: `url(${color.chip}) no-repeat center center`,

                          backgroundSize: 'cover',
                        }}


                      />


                    </div>
                  ))}
                </div>
              </div>}

            </div> : <p className={`text-white text-lg md:text-xl btn-showRoom mt-2 ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>        {t('colors.onyx_black')}</p>
          }
          {showControl ? <VRControls

            onViewChange={setView}
            view={view}

          /> : null}
        </div>
      </div>


      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          cursor: isDragging.current ? 'grabbing' : 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
       
        onMouseDown={handleMouseDown }
        onMouseMove={handleMouseMove }
        onMouseUp={handleMouseUp }
        onMouseLeave={handleMouseUp }
        onTouchStart={handleTouchStart }
        onTouchMove={handleTouchMove }
        onTouchEnd={handleMouseUp }
      >

        {view == 'exterior' ? <img
          src={loadedImages[currentFrame]}
          alt={`360° View Frame ${currentFrame + 1}`}
          onError={handleImageError}
          style={{
            maxWidth: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            pointerEvents: 'none',
            minHeight: '500px'

          }}
          draggable={false}
        /> :
          <PanoramaViewer
            imageUrl="/assets/panorama.png"

          />

        }
      </div>







    </div>
  );
};

export default ThreeSixty;
