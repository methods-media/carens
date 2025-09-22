import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Engine } from 'public/assets/svg/engine';
import { Terrain } from 'public/assets/svg/otain';
import { Treck } from 'public/assets/svg/treck';
import { WarrantySVG } from 'public/assets/svg/warranty';
import { useRef, useState } from 'react';
const Banner = () => {
  const { t ,i18n} = useTranslation('common');
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
    <div id='highlights' className={`w-screen h-[65vh] lg:h-[100vh] md:h-screen z-[200] bg-[url(https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/380620e1-c1d0-4052-f469-2c1e229be700/big)] bg-cover bg-center bg-no-repeat   relative flex items-center justify-end overflow-hidden`}>
      <div className="absolute justify-center   inset-0 z-40  text-white md:start-[70px]  start-5 top-[100px]">
        <motion.h1
          className={`     sm:text-xl text-xl  ${locale == 'ar' ? "md:text-[52px] font-['GSSBold']" : " md:text-[72px] font-['InterBold']"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {locale == 'ar' ? (
            <>
              {t('kia_Carens')}

            </>
          ) : t('kia_Carens')}
        </motion.h1>
        <motion.p
          className={`text-lg md:text-[34px] ${locale == 'ar' ? "font-['GSSMedium']" : "font-['InterRegular']"} `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('push_beyond_ordinary')}
        </motion.p>

      </div>

    
      {/* bg-gradient-to-b from-transparent to-[#06141F] */}
      <motion.div
        className='absolute bottom-0 left-0 w-full bg-gradient-to-b from-[#06141f80] lg:from-transparent to-[#06141F] from-0% lg:from-0% to-100% flex-wrap md:flex-nowrap px-10 lg:px-0  h-auto md:h-[90px] py-2.5  grid  grid-cols-2 items-start  lg:flex lg:items-center mb-0 lg:justify-around md:!justify-center gap-5 md:!gap-[50px] '
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className='flex items-center  justify-start lg:justify-center  gap-[10px]'>
          <div className='w-8 md:w-[50px] h-8 md:h-[50px]'>
            <Engine />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-sm md:text-lg'>{i18n?.language == 'ar' ? "محرك 1.5 لتر تيربو" : '1.5L T-GDI'}</p>
            <p className='text-[#A3A8AD] text-xs md:text-sm'>{i18n?.language == 'ar' ? `117 حصان` : `117HP`}</p>
          </div>
        </div>
       
        <div className='flex items-center  justify-start lg:justify-center gap-[10px]'>
          <div className='w-8 md:w-[50px] h-8 md:h-[50px]'>
            <Terrain />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-sm md:text-lg'>{i18n?.language == 'ar' ? 'ناقل الحركة': "6-Speed AT" }</p>
            <p className='text-[#A3A8AD] text-xs md:text-sm'>{i18n?.language == 'ar' ? `6 سرعات أوتوماتيكي` : 'Transmission'}</p>
          </div>
        </div>
        <div className='flex items-center  justify-start lg:justify-center gap-[10px]'>
          <div className='w-8 md:w-[50px] h-8 md:h-[50px]'>
            <Treck />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-sm md:text-lg'>{i18n?.language == 'ar' ? `شاشة 26.62 أنش` : `26.62 Inch`}</p>
            <p className='text-[#A3A8AD] text-xs md:text-sm'>{i18n?.language == 'ar' ? `بانورامية` : 'Panoramic Screen'}</p>
          </div>
        </div>
        <div className='flex items-center  justify-start lg:justify-center  gap-1 md:gap-[10px]'>
          <div className='w-8 md:w-[50px] h-8 md:h-[50px]'>
            <WarrantySVG />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-sm md:text-lg'>{i18n?.language == 'ar' ? `ضمان 5 سنوات` : '5 Years Warranty'}</p>
            <p className='text-[#A3A8AD] text-xs md:text-sm'>{i18n?.language == 'ar' ? `أو 100 ألف كيلومتر (أيهما أقرب)` : 'Or 100,000 Km W.C.F'}</p>
          </div>
        </div>
      </motion.div> 
     
    </div>
  );
};

export default Banner;
