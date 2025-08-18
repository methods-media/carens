import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function KiaConnectEnhanced () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const carouselRef = useRef(null);

    const slides = [
        {
            title: "Remote Engine Start/Stop",
            description: "Using the Kia Connect App, you have the ability to remotely start or turn off your Kia from outside the vehicle.",

        },
        {
            title: "Remote Climate Control",
            description: "Control your Kia's temperature from your home or office. With the Kia Connect App, you can set the desired temperature in advance and your Kia's air conditioner or heater will adjust accordingly.",

        },
        {
            title: "Vehicle Diagnostics",
            description: "Kia Connect provides a diagnosis of your vehicle for your safety.",

        },

        {
            title: "Maintenance Notification",
            description: "Kia Connect notifies you if any major components malfunction is detected.",

        },
        {
            title: "OTA Navigation Updates",
            description: "Get automatic wireless software updates to keep your navigation up to date.",

        },
        {
            title: "Find My Vehicle",
            description: "Are you having trouble finding your Kia in a large parking lot? Kia Connect can help you easily locate your parked vehicle.",

        },
        {
            title: "Remote Engine Start/Stop",
            description: "Using the Kia Connect App, you have the ability to remotely start or turn off your Kia from outside the vehicle.",

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

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

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


                    <div >



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
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 text-white/70 hover:text-white" />
                            </button>

                            {/* Pagination Dots */}

                            <div className=" absolute bottom-16 w-full justify-center flex ">
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

                </div>

                {/* Bottom CTA */}

            </div>
        </div>
    );
}
