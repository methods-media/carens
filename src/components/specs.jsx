import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Specs = () => {
    const { t ,i18n} = useTranslation('common');
    const [openCategory, setOpenCategory] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'
    const isArabic=i18n?.language=='ar'

    const trimLevels = [
        { id: 'LX', name: 'LX' },
        { id: 'EX', name: 'EX' },
        { id: 'EX-Top', name: 'EX-Top' },
        { id: 'X-Line', name: 'X-Line' },
        { id: 'X-Pro', name: 'X-Pro' },
        { id: 'X-Pro+', name: 'X-Pro+' }
    ];

    const featureCategories = [
        {
            title: 'EXTERIOR',
            features: [
                'LED Headlights',
                'LED Daytime Running Lights',
                '18-inch Alloy Wheels',
                'Power Side Mirrors',
                'Rear Spoiler',
                'Chrome Grille',
                'Fog Lights',
                'Privacy Glass',
                'Roof Rails',
                'Tow Hitch',
                'Running Boards',
                'Mud Flaps'
            ]
        },
        {
            title: 'INTERIOR',
            features: [
                'Leather Steering Wheel',
                '8-inch Touchscreen',
                'Apple CarPlay',
                'Android Auto',
                'Bluetooth Connectivity',
                'USB Ports',
                'Climate Control',
                'Power Windows',
                'Power Locks',
                'Keyless Entry',
                'Push Button Start',
                'Wireless Charging'
            ]
        },
        {
            title: 'CONVENIENCE',
            features: [
                'Cruise Control',
                'Backup Camera',
                'Parking Sensors',
                'Blind Spot Detection',
                'Lane Departure Warning',
                'Adaptive Cruise Control',
                'Navigation System',
                'Premium Audio System',
                'Heated Seats',
                'Ventilated Seats',
                'Memory Seats',
                'Panoramic Sunroof'
            ]
        },
        {
            title: 'SAFETY',
            features: [
                'ABS Brakes',
                'Electronic Stability Control',
                'Traction Control',
                'Multiple Airbags',
                'Tire Pressure Monitoring',
                'Child Safety Locks',
                'ISOFIX Child Seat Anchors',
                'Emergency Brake Assist',
                'Hill Start Assist',
                'Trailer Sway Control',
                '360° Camera System',
                'Advanced Driver Assistance'
            ]
        }
    ];

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('next');
        setCurrentSlide((prev) => {
            const next = prev + 1;
            // Loop back to the beginning when reaching the end
            return next >= trimLevels.length - 2 ? 0 : next;
        });
        setTimeout(() => setIsAnimating(false), 300);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('prev');
        setCurrentSlide((prev) => {
            const next = prev - 1;
            // Loop to the end when going before the beginning
            return next < 0 ? trimLevels.length - 3 : next;
        });
        setTimeout(() => setIsAnimating(false), 300);
    };

    const goToSlide = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection(index > currentSlide ? 'next' : 'prev');
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 300);
    };

    // Get the 3 visible trim cards
    const getVisibleTrims = () => {
        const visibleTrims = [];
        for (let i = 0; i < 3; i++) {
            const index = currentSlide + i;
            if (index < trimLevels.length) {
                visibleTrims.push(trimLevels[index] );
            }
        }
        return visibleTrims;
    };

    const visibleTrims = getVisibleTrims();

    const TrimCard = ({ trim, index, isEntering }) => (
        <div
            className={`bg-[#E7EBF0] rounded-[10px] p-6 h-full transition-all duration-300 transform `}

        >
            {/* Trim Name */}
            <h2 className="text-6xl text-center font-bold text-[#06141F] mb-4">{trim.name}</h2>

            {/* Technical Specifications Section */}
            <div className="mb-6">
                <h3 className="text-lg font-medium text-black mb-3">Technical Specifications</h3>
                <div className="space-y-0">
                    {featureCategories.map((category, catIndex) => (
                        <div key={category.title} className="w-full">
                            <button
                                onClick={() => toggleCategory(catIndex)}
                                className={`w-full flex justify-between items-center p-3 text-sm font-medium  cursor-pointer transition-all duration-300 ${openCategory === catIndex
                                    ? 'bg-[#06141F] text-white'
                                    : 'bg-[#7b848c] text-white '
                                    }`}
                            >
                                {category.title}
                                <span className="text-lg">
                                    {openCategory === catIndex ? '−' : '+'}
                                </span>
                            </button>
                            {openCategory === catIndex && (
                                <div className="mt-2 ml-3 space-y-1">
                                    {category.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="text-xs text-gray-600 flex items-start">
                                            <span className="text-[#06141F] mr-2 mt-1">•</span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Available Interiors Section */}
            <div className="mb-6">
                <h3 className="text-lg font-medium text-black mb-3">Available Interiors</h3>
                <div className="flex gap-2">
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Available Wheels Section */}
            <div className="mb-6">
                <h3 className="text-lg font-medium text-black mb-3">Available Wheels</h3>
                <div className="flex gap-2">
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="min-h-screen bg-white w-full relative overflow-hidden">
            <div className='max-w-[1400px] mx-auto px-4 py-8'>
                {/* Header Section */}
                <div className="text-start mb-8">
                    <h1 className={`text-[40px] ${isArabic ? 'font-[GSSMedium]' : 'font-[InterBold]'} text-[#06141F] mb-5`}>
                        {isArabic ?`أختر الفئة التي تناسبك`:`  Find the perfect trim for you`}
                    </h1>
                    <p className={`text-lg text-[#06141F] text-start ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>
                        {isArabic ?`من الأداء القوي إلى التفاصيل الفاخرة، توفر لك تاسمان الخيار الذي يعكس شخصيتك ويُعبّر عن أسلوب قيادتك`:`  From rugged to refined, choose the Tasman trim that matches your drive and your style.`}
                    </p>
                </div>

                {/* Trim Cards Slider - Show 3 cards at once */}
                <div className="relative">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        disabled={isAnimating}
                        className={`absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full text-[#06141F] flex items-center justify-center transition-colors z-10 ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                    >
                        <ChevronLeft className="w-10 h-10 text-[#06141F]" />
                    </button>

                    {/* Three Trim Cards Container */}
                    <div className="flex justify-center gap-6 " dir='ltr'
>
                        {visibleTrims.map((trim, index) => (
                            <div key={trim.id} className="w-[30%]">
                                <TrimCard
                                    trim={trim}
                                    index={index}
                                    isEntering={
                                        (slideDirection === 'next' &&index === 2 && isAnimating) || // Next: animate rightmost card
                                        (slideDirection === 'prev' && index === 0 && isAnimating)    // Prev: animate leftmost card
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        disabled={isAnimating}
                        className={`absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full text-[#06141F] flex items-center justify-center transition-colors z-10 ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                    >
                        <ChevronRight className="w-10 h-10 text-[#06141F]" />
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8" dir={'ltr'}>
                    {Array.from({ length: Math.max(1, trimLevels.length - 2) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isAnimating}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#06141F]' : 'bg-gray-300'
                                } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Custom CSS for bounce animation */}
            <style jsx>{`
                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% {
                        transform: translate3d(0,0,0);
                    }
                    40%, 43% {
                        transform: translate3d(0,-8px,0);
                    }
                    70% {
                        transform: translate3d(0,-4px,0);
                    }
                    90% {
                        transform: translate3d(0,-2px,0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Specs;
