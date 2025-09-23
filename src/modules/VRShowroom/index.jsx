'use client';;
import { useEffect, useState, useRef } from 'react';
import VRControls from './VRControls';
import { useTranslation } from 'next-i18next';
import PanoramaViewer from '@src/components/ImageViewer360';
import { useRouter } from 'next/router';
const cloudSrc ='https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg'
const VRShowroom = ({ showControl=false }) => {
  const containerRef = useRef(null);
  const [view, setView] = useState('exterior')

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const isDragging = useRef(false);
  const startX = useRef(0);
  const autoRotateRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [currentColor, setCurrentColor] = useState(0);
  const framePositionRef = useRef(0);
  const [colorTextKey, setColorTextKey] = useState(0);
  const { t ,i18n} = useTranslation('common');
  const { locale } = useRouter();


  const COLORS = [
    { id: 'white', name: t('colors.clear_white'), hex: '#FFFFFF', chip:"/97333cf4-011c-4050-53fc-3547e992cf00/public",index:0},
    { id: 'silver', name: t('colors.silver'), hex: '#939393', chip: "/ad13f2cb-eb37-400f-46ed-a1e81e575100/public" ,index:1},
    { id: 'snow', name: t('colors.snow_white_pearl'), hex: '#f6f6f6', chip: "/a87bec21-a2b6-4672-2f11-5af7e0537d00/public" ,index:2},
    { id: 'green', name: t('colors.green'), hex: "#565656", chip: "/b9087368-0b30-41a0-ea27-0f7b84968c00/public" ,index:3},
    { id: 'gray', name: t('colors.gray'), hex: "#565656", chip:"/77d3ddcf-8158-4e11-1b18-f3e731332000/public" ,index:4},
    { id: 'blue', name: t('colors.wave_blue'), hex: '#344f7e', chip:"/91a64c4d-3b92-4718-fb43-5f0fd8b24100/public" ,index:5},
    { id: 'black', name: t('colors.black'), hex: "#565656", chip: "/35deb35b-0ddd-416d-ac22-fadb7f476800/public" ,index:6},
    { id: 'steel', name: t('colors.steel_gray'), hex: "#565656", chip: "/8bf7623f-ab9f-4bcf-6ced-87e650d8d000/public" ,index:7},
    
  ];
  const imageSrc = [
    '/5541d17d-21df-4e52-ed34-4f297452dd00/big',
    '/699cd1a7-a0ce-49c2-fa50-f44732a89c00/big',
    '/0a693f6d-b1c6-4873-bcaf-a947c09f2600/big',
    '/95ff3259-3d64-4e5b-3805-fcfe4c1d8d00/big',
    '/ff3c94b2-c21b-47cc-b199-2efb93145f00/big',
    '/7269ad6f-131e-489b-0870-23c0af352600/big',
    '/74d778e8-ba50-40de-4544-3833489fb500/big',
    '/1bbc0bff-7d25-4668-99f8-210b80445a00/big',]

  const preloadColorImages = async () => {
    const imageElements = imageSrc.map(url => {
      const img = new Image();
      img.src = `${cloudSrc}${url}`;
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
      ).then((value) => {
        setLoadedImages([...value]);
      });

      

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



  const handleColorChange = async colorId => {
    setCurrentFrame(0)
    if (!loadedImages[colorId]) {
      stopAutoRotate();
      await preloadColorImages(colorId);
    }

    const currentPosition = framePositionRef.current;
    setCurrentColor(colorId);
    setColorTextKey(prev => prev + 1);
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
      <p id='vrShowroomText' className={`text-white text-base  md:text-[28px] z-[50] drop-shadow-2xl [text-shadow:_2px_2px_2px_rgba(0,0,0,0.4)] !absolute start-0 text-center lg:text-start lg:start-10 top-12 lg:!top-22  w-full leading-1   ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>
        {i18n?.language == 'ar' ? showControl ? `استكشف تفاصيل كارينز من الداخل والخارج` : `كيا كارينز تلبي جميع الأذواق` : showControl ? `Discover Kia Carens's Exterior & Interior in 360°` : 'The Carens Meets All Tastes'}
      </p>
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
                {COLORS?.filter?.((item) => item?.index == currentColor)?.[0]?.name}
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
                      onClick={() => handleColorChange(color.index)}
                      style={{
                        background: `url(${cloudSrc}${color.chip}) no-repeat center center`,

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

        /> :null}
      </div>
     
     
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          cursor:'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      
      >
        
        {view == 'exterior' ? <img
          src={loadedImages[currentColor]}
          alt={`360° View Frame1`}


          onError={handleImageError}
         
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            minWidth: '100vw',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            pointerEvents: 'none',
            minHeight: '500px',
          }}
          draggable={false}
         
        /> :
          <PanoramaViewer
            imageUrl="/assets/ktk-int360-v2.png"

          />
         
        } 
      </div>

    

     
   

    
    </div>
  );
};

export default VRShowroom;
