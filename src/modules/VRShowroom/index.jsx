'use client';;
import { useEffect, useState, useRef } from 'react';
import { CDN_HAZE, CDN_WHITE, FRAME_COUNT, CDN_GRAY ,CDN_SNOW_WHITE,CDN_BLACK, CDN_BLUE, CDN_YELLOW, CDN_WAVY, CDN_RED, CDN_GRAY2} from '../../constants/imageSequence';
import VRControls from './VRControls';
import { useTranslation } from 'next-i18next';
import PanoramaViewer from '@src/components/ImageViewer360';
import { useRouter } from 'next/router';
const VRShowroom = ({ height }) => {
  const containerRef = useRef(null);
  const [view, setView] = useState('exterior')

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const isDragging = useRef(false);
  const startX = useRef(0);
  const autoRotateRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [currentColor, setCurrentColor] = useState('white');
  const framePositionRef = useRef(0);
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const COLORS = [
    { id: 'white', name: t('colors.clear_white'), hex: '#FFFFFF', chip:"/assets/colorsChips/ClearWhite.png"},
    { id: 'haze', name: t('colors.morning_haze'), hex: '#909598', chip:"/assets/colorsChips/MorningHaze.png" },
    { id: 'snow', name: t('colors.snow_white_pearl'), hex: '#f6f6f6', chip:"/assets/colorsChips/SnowWhitePearl.png" },
    { id: 'gray', name: t('colors.steel_gray'), hex: '#939393', chip:"/assets/colorsChips/SteelGray.png" },
    { id: 'black', name: t('colors.aurora_black_pearl'), hex: '#000000', chip:"/assets/colorsChips/AuroraBlackPearl.png" },
    { id: 'blue', name: t('colors.azure_blue'), hex: '#344f7e', chip:"/assets/colorsChips/AzureBlue.png" },
    { id: 'red', name: t('colors.fiery_red'), hex: '#ae2736', chip:"/assets/colorsChips/FireyRed.png" },
    { id: 'waveyBlue', name: t('colors.wave_blue'), hex: '#446da4', chip:"/assets/colorsChips/WaveBlue.png" },
    { id: 'interstellar_gray', name: t('colors.interstellar_gray'), hex: "#565656", chip: "/assets/colorsChips/InterstellarGray.png" },
    { id: 'interstellar_gray', name: t('colors.interstellar_gray'), hex: "#565656", chip:"/assets/colorsChips/InterstellarGray.png" },
    { id: 'interstellar_gray', name: t('colors.interstellar_gray'), hex: "#565656", chip: "/assets/colorsChips/InterstellarGray.png" },
  ];

  const preloadColorImages = async colorId => {
    const urls = colorId === 'white' ?
      CDN_WHITE : colorId === 'gray' ?
        CDN_GRAY : colorId === 'snow' ?
          CDN_SNOW_WHITE : colorId === 'black' ?
            CDN_BLACK : colorId === 'blue' ?
              CDN_BLUE : colorId === 'sparkling_yellow' ?
                CDN_YELLOW : colorId === 'waveyBlue' ?
                  CDN_WAVY :
                  colorId === 'red' ?
                    CDN_RED :
                    colorId === 'interstellar_gray' ?
                      CDN_GRAY2 :
                  CDN_HAZE;

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
        [colorId]: urls,
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

        const initialSuccess = await preloadColorImages('white');
        if (initialSuccess) {
          setIsLoaded(true);

          COLORS.forEach(color => {
            if (color.id !== 'white') {
              preloadColorImages(color.id).catch(console.error);
            }
          });
        }
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    };

    loadImages();
  }, []);

  const startAutoRotate = () => {
    if (autoRotateRef.current) return;

    const animate = () => {
      setCurrentFrame(prev => (prev + 1) % FRAME_COUNT);
      autoRotateRef.current = setTimeout(animate, 50);
    };

    autoRotateRef.current = setTimeout(animate, 50);
  };

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

  const handleColorChange = async colorId => {
    if (!loadedImages[colorId]) {
      stopAutoRotate();
      await preloadColorImages(colorId);
    }

    const currentPosition = framePositionRef.current;
    setCurrentColor(colorId);
    framePositionRef.current = currentPosition;
  };

  const handleImageError = e => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = e.target.src;
  };

  if (!isLoaded || !loadedImages[currentColor]) {
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
      <div
        style={{
          marginTop: '50px',
          position:'absolute',
          top:'50px',
          width:'100%',
          color: 'white',
          fontSize: '14px',
          zIndex: '50',
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          paddingInlineStart:'70px',
          gap:'32px',
          alignItems:'start',
        }}
      >
        <p id='vrShowroomText' className={`text-white text-lg md:text-[28px] text-start  w-full leading-1   ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>
          {'The Tasman Meets All Tastes'}
       
         

 </p>

        <VRControls
          
          onViewChange={setView}
          view={view}

        />
        {view == 'exterior' ?
          <div className='flex items-center flex-row-reverse gap-2'>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', direction: 'ltr' }}>
              {COLORS.map(color => (
                <div
                  className='flex items-center gap-2 '
                >
                  <button
                    key={color.name}
                    className=' rounded-full w-7 btn-color-showRoom h-7 md:w-[50px] md:h-[50px] hover:scale-110 cursor-pointer '
                    onClick={() => handleColorChange(color.id)}
                    style={{
                      background: `url(${color.chip}) no-repeat center center`,

                      backgroundSize: 'cover',
                    }}


                  />
                  <p className='text-white text-[19px]'>{color?.name}</p>

                </div>
              ))}
            </div>
          </div> : <p className={`text-white text-lg md:text-xl btn-showRoom mt-2 ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>        {t('colors.onyx_black')}</p>
        }
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        
        {view == 'exterior' ? <img
          src={loadedImages[currentColor][currentFrame]}
          alt={`360° View Frame ${currentFrame + 1}`}
          onError={handleImageError}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            minWidth: '100vw',

            userSelect: 'none',
            WebkitUserSelect: 'none',
            pointerEvents: 'none',
          }}
          draggable={false}
        /> :
          <PanoramaViewer
            imageUrl="/assets/new/KCL4-INT360v3AL.jpg"

          />
         
        } 
      </div>

    

     
   

    
    </div>
  );
};

export default VRShowroom;
