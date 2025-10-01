import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const SwiperSection = ({ noBg, dark, id = 0, height, bottom }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartXRef = useRef(0);
    const touchStartYRef = useRef(0);
    const touchCurrentXRef = useRef(0);
    const isDraggingRef = useRef(false);
    const { t, i18n } = useTranslation('common');
    const isArabic = i18n?.language == 'ar'
    const slides1Slides = [
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d23d7516-d3c1-46b0-4c63-e4d588eeae00/public',
            featureTitle: t('swiper.starmap0'),
            featureDescription: t('swiper.starmap1')
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/8b955558-af7c-4146-e897-6cf109438300/public',
            featureTitle: t('swiper.taillamp0'),
            featureDescription: t('swiper.taillamp1')
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/71cd0f42-0916-4cfa-7c08-10ad73961b00/public',
            featureTitle: t('swiper.rims0'),
            featureDescription: t('swiper.rims1')
        },


    ];

    const swiper2Slides = [
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/dd10d875-db68-49d3-8a39-ded3883a6300/public',
            featureTitle: t('swiper.Panoramic0'),
            featureDescription: t('swiper.Panoramic1'),
            dis: t('swiper.Panoramic2')
        },

        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/de84e446-2696-4f6e-7e5a-44565c84d000/public',
            featureTitle: t('swiper.Rear0'),
            featureDescription: t('swiper.Rear1')
        },

        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c7203a7f-a815-4967-6a41-8ecca5308500/public',
            featureTitle: t('swiper.Roof0'),
            featureDescription: t('swiper.Roof1')
        },


        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/580c2195-1938-410d-d8fd-48da1c3c0900/public',
            featureTitle: t('swiper.wirless0'),
            featureDescription: t('swiper.wirless1')
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c5cc729f-9dcb-4cac-c56c-d472a4234100/public',
            featureTitle: t('swiper.Sunroof0'),
            featureDescription: t('swiper.Sunroof1')
        },

    ]

    const swiper3Slides = []
    const swiper4Slides = [
        {
            video: '/assets/videos/kia-carens-bca.webm',
            featureTitle: isArabic ?`نظام مساعدة تجنب الاصطدام في النقاط العمياء (BCA)` : 'Blind-Spot Collision-Avoidance Assist (BCA)',
            featureDescription: isArabic ?`يكتشف المركبات الموجودة في النقاط العمياء ويمكنه المساعدة في الحفاظ على مسار المركبة في حالة محاولة تغيير المسار بشكل غير آمن`:"Detects vehicles in blind spots and can help maintain the vehicle's course if an unsafe lane change is attempted"        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/434e4ca7-da0a-4861-fa83-589697702100/public',
            featureTitle: isArabic ? `شاشة الرؤية المحيطة (SVM)` : 'Surround View Monitor (SVM)',
            featureDescription: isArabic ? `تعرض صور المركبة من كاميرات واسعة الزاوية لإظهار الرؤية المحيطية في أوضاع عرض مختلفة. توفر رؤية ثلاثية الأبعاد 360  درجة قابلة للتغيير.` : 'See it all, from every angle. The Surround View Monitor gives you a 360-degree bird’s-eye view of your surroundings – perfect for navigating tight trails or crowded city streets.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/70cba2aa-2e0f-4345-6321-5de1c12ec300/public',
            featureTitle: isArabic ? `نظام مساعد لتجنب الاصطدام الأمامي  (FCA)` : 'Forward Collision-Avoidance Assist (FCA)',
            featureDescription: isArabic ? `يراقب هذا النظام محيطك ويقوم بتحذيرك في حال تحديد خطر اصطدام بمركبة أخرى أو بأحد المشاة أو راكب دراجة أمامك. يقوم نظام FCA  بتوقيف السيارة تلقائياً، كما يساعد في توجيه عجلة القيادة في حال قام بتحديد خطر الاصطدام بمركبة أو أحد المشاة أو راكب دراجة، بالقرب من الجهة الأمامية للسيارة.` : 'FCA  monitors the surroundings and automatically assists braking when the risk of collision increases with a vehicle, motorcyclist, pedestrian, or cyclist ahead; with an oncoming vehicle from the opposite side or from the left/right side at an intersection; or with a directly oncoming vehicle in the same lane. It also automatically assists steering when there is a risk of collision with an oncoming vehicle or a vehicle in the next lane while changing lanes, as well as with a vehicle or pedestrian on the edge of the lane.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/eb906451-25ac-4664-1e3d-27ed44605900/public',
            featureTitle: isArabic ? `نظام المساعدة على اتباع المسار (LKA)` : 'Lane Keep Assist  (LKA)',
            featureDescription: isArabic ? `يستخدم هذا النظام كاميرا الرؤية الأمامية لمساعدتك على إبقاء السيارة في وسط المسار أثناء القيادة وذلك من خلال تحديد خطوط المسار أو السيارة التي أمامك.
`: 'LKA  helps center the vehicle in the lane. Steering control has been improved and a Hands-On Detection (HOD) sensor can determine whether the driver is holding the steering wheel for optimal system performance.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2f484718-f0a4-4b18-582b-7b0873988a00/public',
            featureTitle: isArabic ? `نظام تثبيت السرعة الذكي (SCC)` : 'Smart Cruise Control (SCC)',
            featureDescription: isArabic ? `يساعدك في الحفاظ على مسافة آمنة من السيارة التي أمامك بالسرعة التي تحددها. ستتوقف سيارتك EV5 تلقائياً في حال توقفت السيارة التي أمامك فجأة، ثم تستأنف سيرها. أما إذا توقفت السيارة لمدة أطول، فيمكنك عندها متابعة السير من خلال الضغط على دواسة الوقود أو مفتاح +/-.` : 'SCC helps you drive at a preset speed while maintaining a safe distance from the vehicle ahead. It automatically brings the Carens to a stop then proceeds again when the vehicle ahead accelerates. If the stop is extended, you may need to press the accelerator pedal. When activated, SCC drives automatically, reflecting the learned driving style.'
        },
        {
            video: '/assets/videos/Parking sensor.webm',
            featureTitle: isArabic ? `حساس الركن` : 'Parking Sensor',
            featureDescription: isArabic ?
                `يُساعدك حساس الاصطفاف على ركن السيارة بأمان من خلال تنبيهك عند الاقتراب من أي عائق. يعمل النظام بتقنية الاستشعار ليكشف المسافة بين سيارتك والعوائق المحيطة، مما يقلل من مخاطر الاصطدام ويسهّل عملية الاصطفاف سواء في الأماكن الضيقة أو أثناء المناورة.` :
                `The parking sensor helps you park safely by alerting you when approaching an obstacle. Using sensor technology, it detects the distance between your vehicle and surrounding objects, reducing the risk of collisions and making parking easier in tight spaces or while maneuvering.`
        },
        {
            image: '/assets/Saf-1.avif',
            featureTitle: isArabic ? "6 وسائد هوائية" : '6 Airbags as Standard ',
            featureDescription: isArabic ? "حماية شاملة لجميع الركاب، مما يضمن ركوب آمن للجميع." :
                "Comprehensive protection for all passengers, ensuring everyone rides securely."
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/8b35a08b-3fc8-423e-a608-5be784338100/public',
            featureTitle: isArabic ? "نظام ESC, HAC, VSM, DBC, ABS, BAS" : 'ESC, HAC, VSM, DBC, ABS, BAS',
            featureDescription: isArabic ? "ابق واثقاً في السيطرة مع أنظمة تدعم الفرملة، والانطلاق على المرتفعات، والاستقرار الديناميكي في كل رحلة."
                : "Stay confidently in control with systems that support braking, hill starts, and dynamic stability during every drive."
        },
        {
            image: '/assets/Saf-3.avif',
            featureTitle: isArabic ? "فرامل قرصية على جميع العجلات" : 'All Wheel Disc Brakes',
            featureDescription: isArabic ? "توقف أكثر سلاسة وأماناً، سواء في المدينة أو على الطريق السريع."
                : "Smoother, safer stops, whether in the city or on the highway."
        },


    ]
    const slides = [
        slides1Slides,
        swiper2Slides,
        swiper3Slides,
        swiper4Slides
    ]
    const changeSlide = (newSlideIndex) => {
        setIsAnimating(true);
        setCurrentSlide(newSlideIndex);

        // Reset animation state after animation completes
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const nextSlide = () => {
        const newIndex = (currentSlide + 1) % slides[id].length;
        changeSlide(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentSlide - 1 + slides?.[id].length) % slides?.[id].length;
        changeSlide(newIndex);
    };

    const goToSlide = (index) => {
        changeSlide(index);
    };

    const isMobileView = () => typeof window !== 'undefined' && window.innerWidth < 1024;

    const onTouchStart = (e) => {
        if (isAnimating || !isMobileView()) return;
        const touch = e.touches?.[0];
        if (!touch) return;
        touchStartXRef.current = touch.clientX;
        touchStartYRef.current = touch.clientY;
        touchCurrentXRef.current = touch.clientX;
        isDraggingRef.current = true;
    };

    const onTouchMove = (e) => {
        if (!isDraggingRef.current || !isMobileView()) return;
        const touch = e.touches?.[0];
        if (!touch) return;
        touchCurrentXRef.current = touch.clientX;
    };

    const onTouchEnd = () => {
        if (!isDraggingRef.current || !isMobileView()) return;
        const deltaX = touchCurrentXRef.current - touchStartXRef.current;
        const deltaY = Math.abs(touchStartYRef.current);
        isDraggingRef.current = false;
        // Trigger only for horizontal intent and sufficient distance
        if (Math.abs(deltaX) > 50) {
            if (deltaX < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    return (
        <div className={`w-full ${noBg ? '' : 'bg-[#06141F]'} ${height ? height : 'min-h-[50vh] lg:min-h-screen'} py-10 gap-16 flex flex-col justify-center items-center`} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>

            <div className="w-full flex items-center justify-between max-w-[1420px]">
                <div className=" flex-col items-center w-full lg:items-start lg:flex-row flex min-h-[600px] lg:h-[600px]">
                    {/* Left Section - Image with specific dimensions */}
                    {slides?.[id][currentSlide]?.image ?
                        <div className="w-[90%] lg:w-[550px] lg:ms-4 ms-0 xl:!w-[750px] h-[250px] lg:h-[400px] xl:!h-[600px] relative overflow-hidden">
                            <div
                                style={{
                                    backgroundImage: slides?.[id][currentSlide]?.image ? `url(${slides?.[id][currentSlide].image})` : 'null',
                                    backgroundSize:  'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                className="w-full h-full rounded-2xl"
                            />
                            {/* Navigation arrows */}
                            <button
                                onClick={prevSlide}
                                disabled={isAnimating}
                                className="absolute top-1/2 bg-[#06141f] lg:bg-transparent  lg:ms-0 left-[2px] lg:left-4 transform -translate-y-1/2 w-[30px] lg:w-12 h-[30px] lg:h-12 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                            >
                                <ChevronLeft className="w-10 h-10 text-white/70 hover:text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={isAnimating}
                                className="absolute top-1/2 bg-[#06141f] lg:bg-transparent   right-[2px] lg:right-4 transform -translate-y-1/2 w-[30px] lg:w-12 h-[30px] lg:h-12  bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                            >
                                <ChevronRight className="w-10 h-10 text-white/70 hover:text-white" />
                            </button>
                        </div>
                        : <div className='relative w-[90%] lg:w-[550px] lg:ms-4 xl:!w-[750px]'>
                            <video src={slides?.[id]?.[currentSlide]?.video} className={`w-full rounded-2xl ${currentSlide == 1 ? ' object-fit bg-black' : ' object-cover'} bg-black md:w-[750px] h-[250px] lg:h-[400px] xl:!h-[600px]`} muted playsInline autoPlay loop />
                            <button
                                onClick={prevSlide}
                                disabled={isAnimating}
                                className="absolute top-1/2 left-[2px] bg-[#06141f]   lg:bg-transparent md:left-4 transform -translate-y-1/2 w-[30px] lg:w-12 h-[30px] lg:h-12  bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                            >
                                <ChevronLeft className="w-10 h-10 text-white/70 hover:text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={isAnimating}
                                className="absolute top-1/2 right-[2px] md:right-4   bg-[#06141f] lg:bg-transparent transform -translate-y-1/2 w-[30px] lg:w-12 h-[30px] lg:h-12  bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                            >
                                <ChevronRight className="w-10 h-10 text-white/70 hover:text-white" />
                            </button>


                        </div>}


                    {/* Right Section - Content */}
                    <div className="flex-1 pt-4  lg:p-12 lg:ps-8 lg:pe-0 pe-0 flex flex-col justify-between lg:justify-start  relative w-[90%] lg:h-[100%]">
                        <div className="text-white space-y-8 w-[90vw] lg:w-auto">
                            {/* Main description */}


                            {/* Feature section */}
                            <div className="space-y-2 md:space-y-4 ">
                                <h3 className={`text-base md:text-2xl ${isArabic ? "font-['GSSMedium']" : "font-[InterBold]"} font-bold  ${dark ? 'text-[#06141F] text-start' : "text-white"} text-start transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {slides?.[id][currentSlide].featureTitle?.includes('17') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('17')?.[0]}
                                        <span className='font-[InterBold]'>17</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('17')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('BCA') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('BCA')?.[0]}
                                        <span className='font-[InterBold]'>BCA</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('BCA')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('LED') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('LED')?.[0]}
                                        <span className='font-[InterBold]'>LED</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('LED')?.[1]?.includes('Star-map') ? <>
                                            {slides?.[id][currentSlide].featureTitle?.split('LED')?.[1]?.split('Star-map')?.[0]}
                                            <span className='font-[InterBold]'>Star-map</span>
                                            {slides?.[id][currentSlide].featureTitle?.split('LED')?.[1]?.split('Star-map')?.[1]}

                                        </> : slides?.[id][currentSlide].featureTitle?.split('LED')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('FCA') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('FCA')?.[0]}
                                        <span className='font-[InterBold]'>FCA</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('FCA')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('26.62') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('26.62')?.[0]}
                                        <span className='font-[InterBold]'>26.62</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('26.62')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('(GVM)') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('(GVM)')?.[0]}
                                        <span className='font-[InterBold]'>(GVM)</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('(GVM)')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('e-LD') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('e-LD')?.[0]}
                                        <span className='font-[InterBold]'>e-LD</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('e-LD')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('ITBC') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('ITBC')?.[0]}
                                        <span className='font-[InterBold]'>ITBC</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('ITBC')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('FCA 2') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('FCA 2')?.[0]}
                                        <span className='font-[InterBold]'>FCA 2</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('FCA 2')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('LFA') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('LFA')?.[0]}
                                        <span className='font-[InterBold]'>LFA</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('LFA')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('SCC') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('SCC')?.[0]}
                                        <span className='font-[InterBold]'>SCC</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('SCC')?.[1]}
                                    </> : slides?.[id][currentSlide].featureTitle?.includes('64') ? <>
                                        {slides?.[id][currentSlide].featureTitle?.split('64')?.[0]}
                                        <span className='font-[InterBold]'>64</span>
                                        {slides?.[id][currentSlide].featureTitle?.split('64')?.[1]}
                                    </> :
                                        slides?.[id][currentSlide].featureTitle?.includes('RCTA') ? <>
                                            {slides?.[id][currentSlide].featureTitle?.split('RCTA')?.[0]}
                                            <span className='font-[InterBold]'>RCTA</span>
                                            {slides?.[id][currentSlide].featureTitle?.split('RCTA')?.[1]}
                                        </>
                                            : slides?.[id][currentSlide].featureTitle?.includes('BVM') ? <>
                                                {slides?.[id][currentSlide].featureTitle?.split('BVM')?.[0]}
                                                <span className='font-[InterBold]'>BVM</span>
                                                {slides?.[id][currentSlide].featureTitle?.split('BVM')?.[1]}
                                            </> :
                                                slides?.[id][currentSlide].featureTitle?.includes('SVM') ? <>
                                                    {slides?.[id][currentSlide].featureTitle?.split('SVM')?.[0]}
                                                    <span className='font-[InterBold]'>SVM</span>
                                                    {slides?.[id][currentSlide].featureTitle?.split('SVM')?.[1]}
                                                </> : slides?.[id][currentSlide].featureTitle?.includes('LKA') ? <>
                                                    {slides?.[id][currentSlide].featureTitle?.split('LKA')?.[0]}
                                                    <span className='font-[InterBold]'>LKA</span>
                                                    {slides?.[id][currentSlide].featureTitle?.split('LKA')?.[1]}
                                                </> : slides?.[id][currentSlide].featureTitle?.includes('6') ? <>
                                                    {slides?.[id][currentSlide].featureTitle?.split('6')?.[0]}
                                                    <span className='font-[InterBold]'>6</span>
                                                    {slides?.[id][currentSlide].featureTitle?.split('6')?.[1]}
                                                </> :


                                                    slides?.[id][currentSlide].featureTitle?.includes('ESC, HAC, VSM, DBC, ABS, BAS') ? <>
                                                        {slides?.[id][currentSlide].featureTitle?.split('ESC, HAC, VSM, DBC, ABS, BAS')?.[0]}
                                                        <span className='font-[InterBold]'>ESC, HAC, VSM, DBC, ABS, BAS</span>
                                                        {slides?.[id][currentSlide].featureTitle?.split('ESC, HAC, VSM, DBC, ABS, BAS')?.[1]}
                                                    </>
                                                        :

                                                        slides?.[id][currentSlide].featureTitle}
                                </h3>
                                <p className={`text-sm lg:text-lg leading-relaxed max-w-[80vw] ${dark ? 'text-[#54595F] text-start' : id == 0 ? 'text-[#A3A8AD]' : 'text-white'} ${isArabic ? "font-['GSSMedium']" : "font-[InterRegular]"} lg:max-w-full text-start transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {slides?.[id][currentSlide].featureDescription?.includes('17') ? <>
                                        {slides?.[id][currentSlide].featureDescription?.split('17')?.[0]}
                                        <span className='font-[InterBold]'>17</span>
                                        {slides?.[id][currentSlide].featureDescription?.split('17')?.[1]}
                                    </> : slides?.[id][currentSlide].featureDescription?.includes('FCA') ? <>
                                        {slides?.[id][currentSlide].featureDescription?.split('FCA')?.[0]}
                                        <span className='font-[InterBold]'>FCA</span>
                                        {slides?.[id][currentSlide].featureDescription?.split('FCA')?.[1]}
                                    </> : slides?.[id][currentSlide].featureDescription?.includes('LKA') ? <>
                                        {slides?.[id][currentSlide].featureDescription?.split('LKA')?.[0]}
                                        <span className='font-[InterBold]'>LKA</span>
                                        {slides?.[id][currentSlide].featureDescription?.split('LKA')?.[1]}
                                    </> : slides?.[id][currentSlide].featureDescription?.includes('EV5') ? <>
                                        {slides?.[id][currentSlide].featureDescription?.split('EV5')?.[0]}
                                        <span className='font-[InterBold]'>EV5</span>
                                        {slides?.[id][currentSlide].featureDescription?.split('EV5')?.[1]}
                                    </> :
                                        slides?.[id][currentSlide].featureDescription?.includes('360') ? <>
                                            {slides?.[id][currentSlide].featureDescription?.split('360')?.[0]}
                                            <span className='font-[InterBold]'>360</span>
                                            {slides?.[id][currentSlide].featureDescription?.split('360')?.[1]}
                                        </> : slides?.[id][currentSlide].featureDescription?.includes('LED') ? <>
                                            {slides?.[id][currentSlide].featureDescription?.split('LED')?.[0]}
                                            <span className='font-[InterBold]'>LED</span>
                                            {slides?.[id][currentSlide].featureDescription?.split('LED')?.[1]?.includes('Star-map') ? <>
                                                {slides?.[id][currentSlide].featureDescription?.split('LED')?.[1]?.split('Star-map')?.[0]}
                                                <span className='font-[InterBold]'>Star-map</span>
                                                {slides?.[id][currentSlide].featureDescription?.split('LED')?.[1]?.split('Star-map')?.[1]}

                                            </> : slides?.[id][currentSlide].featureDescription?.split('LED')?.[1]}
                                        </> : slides?.[id][currentSlide].featureDescription}
                                </p>
                                {slides?.[id]?.[currentSlide]?.dis ? <p className={`text-[10px] lg:text-sm flex items-start gap-2   leading-relaxed max-w-[80vw] ${dark ? 'text-[#54595F] text-start' : id == 0 ? 'text-[#A3A8AD]' : 'text-white'} ${isArabic ? "font-['GSSMedium']" : "font-[InterRegular]"} lg:max-w-full text-start transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    <img src='/assets/iinnff.png' width={16} className='mt-1' height={16} loading="lazy" decoding="async" />
                                    {slides?.[id]?.[currentSlide]?.dis}
                                </p> : null}
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className={`relative mt-5 lg:absolute ${bottom ? 'bottom-[14%]' : 'bottom-0 '} lg:bottom-8 end-0 lg:end-4 xl:end-0 justify-center lg:justify-start w-full lg:w-auto flex space-x-2`}>
                            {slides?.[id].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    disabled={isAnimating}
                                    className={`w-6 md:w-[40px] h-6 md:h-[40px] !font-[InterBold] flex items-center justify-center cursor-pointer text-base md:text-xl  ${isArabic ? "font-['GSSMedium']" : "font-[InterBold]"} transition-all duration-300 ${index === currentSlide
                                        ? `${dark ? 'bg-[#06141F] text-white' : 'bg-white text-[#06141F]'}`
                                        : `${dark ? 'text-black border-black ' : 'text-white border-white '} border-b-2 border-solid hover:bg-opacity-20`
                                        } ${isAnimating ? 'opacity-50' : ''}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};