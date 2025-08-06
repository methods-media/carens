import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Engine } from 'public/assets/svg/engine';
import { Terrain } from 'public/assets/svg/otain';
import { Treck } from 'public/assets/svg/treck';
import { WarrantySVG } from 'public/assets/svg/warranty';
import { useRef, useState } from 'react';
const Banner = () => {
  const { t } = useTranslation('common');
  const { locale, query } = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoEnded(true); // Show content even if video fails
  };

  return (
    <div id='bannerID' className="w-screen h-[55vh] md:h-screen z-[200]  bg-[url('/assets/ktk-test-cover2.jpg')] bg-cover bg-center bg-no-repeat   relative flex items-center justify-end overflow-hidden">
      {!videoError && (
        <video
          ref={videoRef}
          onEnded={handleVideoEnd}
          onError={(error) => {
            console.log('error', error)
            handleVideoError(error)
          }}
          controls={false}
          autoPlay
          playsInline
          muted
          className='w-full h-full object-cover'
        >
          <source src="https://methods.ae/wp-content/uploads/ktk-cover-reveal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {(videoEnded || videoError) ? <>
        <div className="absolute justify-center inset-0 z-40  text-white md:start-[70px]  start-5 top-[100px]">
          <motion.h1
            className={`     sm:text-6xl text-2xl  ${locale == 'ar' ? "md:text-[52px] font-['GSSBold']" : " md:text-[72px] font-['InterBold']"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {locale == 'ar' ? (
              <>
                {t('kia_Tasman')}
              
              </>
            ) : t('kia_Tasman')}
          </motion.h1>
          <motion.p
            className={`md:text-[34px] ${locale == 'ar' ? "font-['GSSMedium']" : "font-['InterRegular']"} sm:text-3xl text-2xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('push_beyond_ordinary')}
          </motion.p>

        </div>
      
      
      </> : null}
      <div className='absolute bottom-0 left-0 w-full bg-gradient-to-b h-[90px] py-2.5 from-transparent to-[#06141F] flex items-center justify-center gap-[50px]'>
        <div className='flex items-center justify-center gap-[10px]'>
          <div className='w-[50px] h-[50px]'>
            <Engine />
        </div>
         <div className='flex flex-col '>
            <p className='text-white text-lg'>{'2.2L Turbo Engine'}</p>
            <p className='text-[#A3A8AD] text-sm'>{'278HP / 8-Speed AT'}</p>
         </div>
        </div>
        <div className='flex items-center justify-center gap-[10px]'>
          <div className='w-[50px] h-[50px]'>
            <Treck />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-lg'>{'X-Trek Mode'}</p>
            <p className='text-[#A3A8AD] text-sm'>{'278HP / 8-Speed AT'}</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-[10px]'>
          <div className='w-[50px] h-[50px]'>
            <Terrain />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-lg'>{'Terrain / Drive Mode'}</p>
            <p className='text-[#A3A8AD] text-sm'>{'Normal, Sport, ECO'}</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-[10px]'>
          <div className='w-[50px] h-[50px]'>
            <WarrantySVG />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-lg'>{'5 Years Warranty'}</p>
            <p className='text-[#A3A8AD] text-sm'>{'5 Years/150,000 Km'}</p>
          </div>
        </div>
            </div>
    </div>
  );
};

export default Banner;
