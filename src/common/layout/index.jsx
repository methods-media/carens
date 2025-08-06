"use client"
import Footer from './components/footer';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Layout = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { locale, pathname ,query} = useRouter()
  const { t } = useTranslation('common');
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls 80% of the way down
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrolled > (totalHeight - viewportHeight) * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const kia = {k:1}
  Object
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onClickBookNow = () => {
    if (query?.market == 'KSA-AlJaber')
      window.open('http://kia.com/aljabr/en/shopping-tools/request-a-quote.html', '_blank')
    else if (query?.market == 'KSA-NMC')
      window.open('https://6379093.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=15164&deploy=1&compid=6379093&ns-at=AAEJ7tMQ_CU52fLpebPShpbNok6vOdHYwklxK8cKttt50dtbr2w&camp=k4-rq', '_blank')

    else if (query?.market == 'UAE')
      window.open('https://www.kia-uae.com/request-a-test-drive/', '_blank')

    else if (query?.market == 'Kuwait')
      window.open('https://www.kia.com/kw/shopping-tools/request-a-test-drive.html', '_blank')

    else if (query?.market == 'Qatar')
      window.open('https://www.kiaqatar.com/quote-k4/', '_blank')

    else if (query?.market == 'South-Iraq')
      window.open('https://kiairaq.com/request-a-quote/', '_blank')

    else if (query?.market == 'North-Iraq')
      window.open('https://www.kiairaqnim.com/en/shopping-tools/request-a-quote.html', '_blank')
    else if (query?.market == 'oman')
      window.open('https://www.kia.com/om/en/shopping-tools/request-a-quote.html', '_blank')
    else 
      return null
    return 
  }

  return (
    <div>
      <Header />
      <div className="z-[1000]">{children}</div>
   
      <Footer />

      {pathname.includes('configurator') ? null :
        <div dir='ltr'>
      
          <button id='bookNowBtn' onClick={() => { onClickBookNow() }} className={`w-[148px] h-[44px] fixed bottom-[100px] z-[1100] end-[20px] bg-white flex items-center gap-3 justify-center rounded-[3px] ${Object.keys(query).length > 0 ? '' : 'hidden'}`}>
          <svg width="18" height="18" viewBox="0 0 100 100">
            <path d="M86.793,20.523L25.148,20.523C20.457,20.523 16.64,24.339 16.64,29.031L16.64,33.835C16.64,35.398 17.91,36.667 19.472,36.667C21.035,36.667 22.304,35.398 22.304,33.835L22.304,29.742L44.394,49.996L22.304,70.25L22.304,66.156C22.304,64.593 21.035,63.324 19.472,63.324C17.91,63.324 16.64,64.593 16.64,66.156L16.64,70.961C16.64,75.652 20.457,79.468 25.148,79.468L86.789,79.468C91.48,79.468 95.297,75.652 95.297,70.961L95.301,29.035C95.301,24.343 91.484,20.527 86.793,20.527L86.793,20.523ZM67.559,50L89.641,29.766L89.641,70.231L67.559,49.997L67.559,50ZM57.571,51.473C56.661,52.309 55.289,52.305 54.383,51.473L26.809,26.188L85.168,26.188L57.571,51.473ZM50.555,55.645C52.102,57.063 54.039,57.77 55.977,57.77C57.914,57.77 59.852,57.063 61.399,55.649L63.372,53.84L85.169,73.813L26.806,73.813L48.587,53.84L50.555,55.645ZM22.317,58.785L13.008,58.785C11.446,58.785 10.176,57.516 10.176,55.953C10.176,54.391 11.446,53.121 13.008,53.121L22.317,53.121C23.88,53.121 25.149,54.391 25.149,55.953C25.149,57.516 23.88,58.785 22.317,58.785ZM22.317,46.879L7.532,46.879C5.97,46.879 4.7,45.61 4.7,44.047C4.7,42.485 5.97,41.215 7.532,41.215L22.313,41.215C23.876,41.215 25.145,42.485 25.145,44.047C25.145,45.61 23.876,46.879 22.313,46.879L22.317,46.879Z" fill="black" />
          </svg>
          <p className={`text-[14px] ${locale == 'ar' ? "font-['GSSBold']" : "font-['InterBold']"}`}> {t('bookNow')} </p>
        </button>
          <button
            onClick={scrollToTop}
            className={`fixed bottom-[45px] right-8 bg-[#05141F] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#122334] ${showScrollTop
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
              }`}
            style={{ zIndex: 1000 }}
          >
            <ArrowUp size={24} />
          </button>
      </div>}
     
      {/* Scroll to top button */}
   
    </div>
  );
};

export default Layout;
