import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function KiaConnectEnhanced () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const carouselRef = useRef(null);
    const { i18n } = useTranslation('common')
    const isArabic = i18n?.language == 'ar'
    const slides = [
        {
            title: isArabic ? "تشغيل/إيقاف المحرك عن بُعد" : "Remote Engine Start/Stop",
            description: isArabic ?`من خلال تطبيق Kia Connect ، يمكنك تشغيل أو إيقاف محرك سيارتك عن بُعد وأنت خارج المركبة`: "Using the Kia Connect App, you have the ability to remotely start or turn off your Kia from outside the vehicle.",

        },
        {
            title: isArabic ?`التحكم في المناخ عن بُعد`: "Remote Climate Control",
            description: isArabic ?`تحكم في درجة حرارة سيارتك من المنزل أو المكتب. من خلال تطبيق Kia Connect.
يمكنك ضبط درجة الحرارة المطلوبة مسبقًا، وسيقوم نظام التكييف أو التدفئة في سيارتك بضبط درجة الحرارة تلقائيًا.`: "Control your Kia's temperature from your home or office. With the Kia Connect App, you can set the desired temperature in advance and your Kia's air conditioner or heater will adjust accordingly.",

        },
        {
            title: isArabic ?`تشخيص السيارة`: "Vehicle Diagnostics",
            description: isArabic ?`يقدم تطبيق Kia Connect تشخيصًا لحالة سيارتك لضمان سلامتك.`: "Kia Connect provides a diagnosis of your vehicle for your safety.",

        },

        {
            title: isArabic ?`إشعارات الصيانة`: "Maintenance Notification",
            description: isArabic ?`يقوم تطبيق Kia Connect بإشعارك عند اكتشاف أي خلل في المكونات الرئيسية.`: "Kia Connect notifies you if any major components malfunction is detected.",

        },
        {
            title: isArabic ?`تحديثات الملاحة عبر الهواء (OTA)`: "OTA Navigation Updates",
            description: isArabic ?`احصل على تحديثات تلقائية لاسلكية للبرمجيات للحفاظ على نظام الملاحة محدثًا دائمًا.`: "Get automatic wireless software updates to keep your navigation up to date.",

        },
        {
            title: isArabic ?`تحديد موقع سيارتي`: "Find My Vehicle",
            description: isArabic ?`هل تواجه صعوبة في العثور على سيارتك Kia في موقف سيارات كبير؟ يمكن لـ Kia Connect مساعدتك في تحديد موقع سيارتك بسهولة.`: "Are you having trouble finding your Kia in a large parking lot? Kia Connect can help you easily locate your parked vehicle.",

        },
        {
            title: isArabic ?`تشغيل/إيقاف المحرك عن بُعد`: "Remote Engine Start/Stop",
            description: isArabic ?`من خلال تطبيق Kia Connect ، يمكنك تشغيل أو إيقاف محرك سيارتك عن بُعد وأنت خارج المركبة`: "Using the Kia Connect App, you have the ability to remotely start or turn off your Kia from outside the vehicle.",

        },

    ];

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };



    // Get the two slides to display
    const getVisibleSlides = () => {
        const slide1 = slides[currentSlide];
        const slide2 = slides[(currentSlide + 1) % slides.length];
        return [slide1, slide2];
    };

    return (
        <div className="min-h-[70vh] relative overflow-hidden flex flex-col justify-center"
            style={{
                backgroundImage: `url('https://methods.ae/wp-content/uploads/connect-remote-control-pt.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Background decorative elements */}


            <div className="container px-10  relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-[70vh]">

                    {/* First Column - Carousel */}
                    <div className={isArabic ? 'lg:order-2' : 'lg:order-1'}>
                        <div
                            className="relative px-8 flex flex-col justify-center h-[70vh]"
                            ref={carouselRef}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className='flex items-start justify-center gap-16'
                                >
                                    {getVisibleSlides().map((slide, index) => (
                                        <div key={index} className='flex-1 max-w-[220px]'>
                                            <p className='text-white text-[22px] font-[InterRegular]'>{slide?.title}</p>
                                            <p className='text-white text-lg font-[InterRegular] mt-5'>{slide?.description}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full  cursor-pointer transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full  cursor-pointer transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 text-white/70 hover:text-white" />
                            </button>

                            {/* Pagination Dots */}
                            <div className=" absolute bottom-30 w-full justify-center flex ">
                                <div className='flex  justify-center space-x-2 '>
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? 'bg-white '
                                                : 'bg-gray-500 hover:bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Column - Content */}
                    <div className={isArabic ? 'lg:order-1' : 'hidden lg:order-2'}>
                        <div className="flex flex-col justify-center h-[70vh] px-8">
                           
                        </div>
                    </div>

                </div>

                {/* Bottom CTA */}

            </div>
        </div>
    );
}
