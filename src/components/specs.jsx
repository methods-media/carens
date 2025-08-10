import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const Specs = () => {
    const { t } = useTranslation('common');
    const [selectedTrim, setSelectedTrim] = useState('LX');

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

    return (
        <section className="h-screen bg-white flex items-center justify-center relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 w-full">
                <div className="text-start mb-12">
                    <h1 className="text-3xl font-[InterBold] text-[#06141F] mb-5">
                        Find the perfect trim for you
                    </h1>
                    <p className="text-xl text-[#06141F]  mx-auto text-start">
                        From rugged to refined, choose the Tasman trim that matches your drive and your style.
                    </p>
                </div>
               

                {/* Main Content */}
                <div className="flex gap-8 h-[500px]">
                    {/* Left Column - Trim Selection */}
                    <div className="w-1/4">
                        <div className="flex flex-col gap-3">
                            {trimLevels.map((trim) => (
                                <button
                                    key={trim.id}
                                    onClick={() => setSelectedTrim(trim.id)}
                                    className={`w-[200px] h-[55px] text-center  rounded-lg font-medium text-lg transition-all duration-300 ${selectedTrim === trim.id
                                        ? 'bg-[#06141F] text-white shadow-lg'
                                        : 'bg-gray-100 text-[#54595F] hover:bg-gray-200 hover:text-[#06141F]'
                                        }`}
                                >
                                    {trim.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Feature Categories */}
                    <div className="w-3/4">
                        <div className="grid grid-cols-4 gap-6 h-full">
                            {featureCategories.map((category) => (
                                <div key={category.title} className="flex flex-col">
                                    <h3 className="text-lg font-bold text-[#06141F] mb-4 pb-2 border-b-2 border-[#06141F]">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-2 flex-1">
                                        {category.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="text-sm text-[#54595F] flex items-start"
                                            >
                                                <span className="text-[#06141F] mr-2 mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
               
            </div>
        </section>
    );
};

export default Specs;
