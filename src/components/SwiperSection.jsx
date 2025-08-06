import { useState, useEffect } from 'react';

export const SwiperSection = ({ noBg, dark }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            image: 'https://methods.ae/wp-content/uploads/catalog_tasman_page10_image.png',
            description: 'Advanced chassis and suspension technology combines exceptional off-road capability with class-leading on-road refinement. Available is an AWD system with automatic rear electronic locking differential on selected variants.',
            featureTitle: 'Corner Steps',
            featureDescription: 'The structure in which the frame and body are separated ensures durability against impact when driving on rough roads.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/2-Copy.png',
            description: 'Experience unmatched performance with our advanced engineering. The vehicle delivers exceptional power and efficiency while maintaining superior handling and control.',
            featureTitle: 'Enhanced Safety',
            featureDescription: 'Comprehensive safety features ensure protection for all passengers with advanced driver assistance systems.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/2-Copy-copy.png',
            description: 'Luxurious interior design meets cutting-edge technology to provide the ultimate driving experience with premium materials and innovative features.',
            featureTitle: 'Smart Connectivity',
            featureDescription: 'Stay connected with the latest infotainment system featuring seamless smartphone integration and voice control.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/TK_RHD_X-Pro_Corner_steps-scaled.jpg',
            description: 'Built for adventure with robust construction and advanced terrain management systems that handle any challenge with confidence and reliability.',
            featureTitle: 'Durability',
            featureDescription: 'Engineered for longevity with premium materials and rigorous testing to ensure lasting performance in all conditions.'
        }
    ];

    const changeSlide = (newSlideIndex) => {
        setIsAnimating(true);
        setCurrentSlide(newSlideIndex);

        // Reset animation state after animation completes
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const nextSlide = () => {
        const newIndex = (currentSlide + 1) % slides.length;
        changeSlide(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        changeSlide(newIndex);
    };

    const goToSlide = (index) => {
        changeSlide(index);
    };

    return (
        <div className={`w-full ${noBg ? '' : 'bg-[#06141F]'} min-h-screen flex items-center justify-center`}>
            <div className="w-full max-w-7xl">
                <div className="flex h-[560px]">
                    {/* Left Section - Image with specific dimensions */}
                    <div className="w-[750px] h-[560px] relative overflow-hidden">
                        <div
                            style={{
                                backgroundImage: `url(${slides[currentSlide].image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                            className="w-full h-full rounded-2xl"
                        />

                        {/* Navigation arrows */}
                        <button
                            onClick={prevSlide}
                            disabled={isAnimating}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                        >
                            {"<"}
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={isAnimating}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                        >
                            {">"}
                        </button>
                    </div>

                    {/* Right Section - Content */}
                    <div className="flex-1 p-12 pe-0 flex flex-col justify-start relative min-w-[400px]">
                        <div className="text-white space-y-8">
                            {/* Main description */}
                            <div className="space-y-4">
                                <p className={`text-lg leading-relaxed  ${dark ? 'text-black text-start' :'text-gray-100'} `}>
                                    {slides[0].description}
                                </p>
                            </div>

                            {/* Feature section */}
                            <div className="space-y-4 ps-[30px]">
                                <h3 className={`text-2xl font-[InterBold] font-bold  ${dark ? 'text-black text-start' : "text-white"} transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {slides[currentSlide].featureTitle}
                                </h3>
                                <p className={`text-lg leading-relaxed ${dark ?'text-black text-start':'text-[#A3A8AD]'} transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {slides[currentSlide].featureDescription}
                                </p>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="absolute bottom-8 right-8 flex space-x-2.5">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    disabled={isAnimating}
                                    className={`w-[40px] h-[40px] flex items-center justify-center cursor-pointer  text-sm font-medium transition-all duration-300 ${index === currentSlide
                                        ? `${dark ? 'bg-[#06141F] text-white' :'bg-white text-blue-900'}`
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