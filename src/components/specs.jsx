import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const Specs = () => {
    const { t } = useTranslation('common');
    const [openCategory, setOpenCategory] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

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
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(trimLevels.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(trimLevels.length / 3)) % Math.ceil(trimLevels.length / 3));
    };

    const visibleTrims = trimLevels.slice(currentSlide * 3, (currentSlide * 3) + 3);

    const TrimCard = ({ trim }) => (
        <div className="bg-[#E7EBF0] rounded-[10px] p-6 h-full">
            {/* Trim Name */}
            <h2 className="text-6xl text-center font-bold text-[#06141F] mb-4">{trim.name}</h2>

            {/* Technical Specifications Section */}
            <div className="mb-6">
                <h3 className="text-lg font-medium text-black mb-3">Technical Specifications</h3>
                <div className="space-y-0">
                    {featureCategories.map((category, index) => (
                        <div key={category.title} className="w-full">
                            <button
                                onClick={() => toggleCategory(index)}
                                className={`w-full flex justify-between items-center p-3 text-sm font-medium  cursor-pointer transition-all duration-300 ${openCategory === index
                                    ? 'bg-[#06141F] text-white'
                                    : 'bg-[#7b848c] text-white '
                                    }`}
                            >
                                {category.title}
                                <span className="text-lg">
                                    {openCategory === index ? '−' : '+'}
                                </span>
                            </button>
                            {openCategory === index && (
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
                    <h1 className="text-[40px] font-[InterBold] text-[#06141F] mb-5">
                        Find the perfect trim for you
                    </h1>
                    <p className="text-lg text-[#06141F] text-start">
                        From rugged to refined, choose the Tasman trim that matches your drive and your style.
                    </p>
                </div>

                {/* Trim Cards Slider */}
                <div className="relative">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-[#06141F] text-white flex items-center justify-center hover:bg-[#0a2a3a] transition-colors z-10"
                    >
                        ‹
                    </button>

                    {/* Three Trim Cards */}
                    <div className="grid grid-cols-3 gap-8">
                        {visibleTrims.map((trim) => (
                            <TrimCard key={trim.id} trim={trim} />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-[#06141F] text-white flex items-center justify-center hover:bg-[#0a2a3a] transition-colors z-10"
                    >
                        ›
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.ceil(trimLevels.length / 3) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#06141F]' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specs;
