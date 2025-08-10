import { useState, useEffect } from 'react';

export const SwiperSection = ({ noBg, dark ,id=0,slideLength}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const swiper2Slides = [
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-doorspotlamp-768x492.jpg',
            featureTitle: 'Door Spot Lamp',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-speakers-768x492.jpg',
            featureTitle: 'Harman Kardon Premium Sound System',
            featureDescription: 'Crank it up or set the mood – the Harman Kardon system delivers rich, immersive audio that transforms every journey into a soundtrack-worthy experience.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-dashboardstorage-768x492.jpg',
            featureTitle: 'Crashpad Multi-Storage',
            featureDescription: 'The passenger seat crash pad storage space allows you to store items anywhere within reach.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-recliningseats-768x492.jpg',
            featureTitle: 'Sliding & Reclining Rear Seats',
            featureDescription: `Stretch out or settle in. The rear seats slide and recline for maximum comfort – whether you're loading up gear or lounging after a long day outdoors.`
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-underseatstorage-768x492.jpg',
            featureTitle: 'Under-Seat Storage',
            featureDescription: `Smart design meets everyday convenience. The second-row packs 33 liters of hidden storage – perfect for keeping things tidy, secure, and easily accessible.`
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-bedlamp-768x492.jpg',
            featureTitle: 'Bed Lamp',
            featureDescription: 'LED lighting is standard to support night loading.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-bedpoweroutlet-768x492.jpg',
            featureTitle: 'Bed Power Outlet',
            featureDescription: 'The 220V Bedbu has improved work efficiency and leisure usability.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-allweathermat-768x492.jpg',
            featureTitle: 'All-Weather Matt',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        }
    ]
    const slides1Slides = [
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-allterrainwheels-768x492.jpg',
            featureTitle: '17” Alloy Wheels with All-Terrain Tires',
            featureDescription: 'A clean, confident design that blends everyday performance with understated style. These alloys bring a refined edge to your Tasman’s foundation.'},
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-ledheadlight-768x492.jpg',
            featureTitle: 'LED Projection Headlights',
            featureDescription: 'Shine brighter, see further. The Tasman’s LED headlights cut through the dark with precision and clarity – built for late-night drives and early starts.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-ledrearlights-768x492.jpg',
            featureTitle: 'LED Rear Lights',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-roofrack-768x492.jpg',
            featureTitle: 'Roof Rack',
            featureDescription: 'Built for extra cargo and bigger adventures – the roof rack expands your carrying capacity, so you can take more gear wherever the road leads.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-sidesteps-768x492.jpg',
            featureTitle: 'Side Steps',
            featureDescription: 'Built tough with a no-nonsense look, the pipe-type sidestep adds off-road flair and practical access. Ideal for those who like their ride a little rougher around the edges.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-cornersteps-768x492.jpg',
            featureTitle: 'Corner Steps',
            featureDescription: 'A step has been installed in the rear corner to make it easier to get on and off the bed.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-fenderstorage-768x492.jpg',
            featureTitle: 'Fender Side Storage',
            featureDescription: 'Smart, secure, and seamlessly built into the fender — perfect for stashing tools, gear, or anything you need on the go.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-skidplate-768x492.jpg',
            featureTitle: 'Underbody Skid Plate',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        }
    ];
    const swiper3Slides = [
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-framebody-768x492.jpg',
            featureTitle: 'Frame Body',
            featureDescription: 'The structure of the body and frame is separate, ensuring durability from impacts when driving on rough roads.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-xtrek-768x492.jpg',
            featureTitle: 'X-Trek Mode',
            featureDescription: 'Focus on the trail, not the throttle. Crawl Mode automatically controls speed and braking on rough terrain, so you can tackle steep climbs and descents with total confidence.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-terrainmode-768x492.jpg',
            featureTitle: 'Drive / Terrain Mode',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-wading-768x492.jpg',
            featureTitle: 'Wading',
            featureDescription: `Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.`
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-offroadscreen-768x492.jpg',
            featureTitle: 'Off-road Screen',
            featureDescription: `Provides vehicle status information necessary for off-road driving, providing a safer and more enjoyable driving experience.`
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-gvm-768x492.jpg',
            featureTitle: 'Ground View Monitor (GVM)',
            featureDescription: 'Get a clear view of what’s directly beneath and in front of your Tasman. The Ground View Monitor helps you navigate tight trails, rocky paths, and tricky terrain with confidence.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-dl-768x492.jpg',
            featureTitle: 'Electronic Locking Differential (e-LD)',
            featureDescription: 'With an electronic differential lock and off-road-tuned torque delivery, the Tasman pushes through sand, mud, and ruts with confidence.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-itbc-768x492.jpg',
            featureTitle: 'Integrated Trailer Brake Controller(ITBC)',
            featureDescription: `When a trailer is connected to a vehicle, it is a device that helps control the trailer's brakes, helping to tow the trailer safely.`
        }
    ]
    const swiper4Slides = [
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-framebody-768x492.jpg',
            featureTitle: 'Forward Collision-Avoidance Assist 2 (FCA2)',
            featureDescription: 'FCA 2 monitors the surroundings and automatically assists braking when the risk of collision increases with a vehicle, motorcyclist, pedestrian, or cyclist ahead; with an oncoming vehicle from the opposite side or from the left/right side at an intersection; or with a directly oncoming vehicle in the same lane. It also automatically assists steering when there is a risk of collision with an oncoming vehicle or a vehicle in the next lane while changing lanes, as well as with a vehicle or pedestrian on the edge of the lane.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-xtrek-768x492.jpg',
            featureTitle: 'Lane Following Assist 2 (LFA2)',
            featureDescription: 'LFA 2 helps center the vehicle in the lane. Steering control has been improved and a Hands-On Detection (HOD) sensor can determine whether the driver is holding the steering wheel for optimal system performance.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-terrainmode-768x492.jpg',
            featureTitle: 'Smart Cruise Control (SCC)',
            featureDescription: 'SCC helps you drive at a preset speed while maintaining a safe distance from the vehicle ahead. It automatically brings the Tasman to a stop then proceeds again when the vehicle ahead accelerates. If the stop is extended, you may need to press the accelerator pedal. When activated, SCC drives automatically, reflecting the learned driving style. When inactive (Off/Standby), SCC makes note of your driving style (distance between vehicles, acceleration, and reaction speed). When equipped with the Emergency Stop function, the vehicle stops in the lane and emits a warning if the driver does not steer or look forward continuously.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-wading-768x492.jpg',
            featureTitle: 'Remote Smart Parking Assist (RSPA)',
            featureDescription: `RSPA lets you park in or exit a parking spot as you stand outside the vehicle. Using sensor technology, it automatically assists with steering, accelerating, decelerating and shifting, while also automatically braking if it senses an obstacle.`
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-rcca-768x492.jpg',
            featureTitle: 'Rear Cross-Traffic Collision-Avoidance Assist',
            featureDescription: `If a risk of collision with an approaching vehicle from the left or right is detected while reversing, a warning is given, and if the risk of collision increases even after the warning, the system automatically assists with braking.`
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-bvm-768x492.jpg',
            featureTitle: 'Blind-Spot View Monitor (BVM)',
            featureDescription: 'BVM displays the rear-side image of the corresponding direction when the turn signal switch is engaged.'
        },
        {
            image: 'https://methods.ae/wp-content/uploads/ktk-svm-768x492.jpg',
            featureTitle: 'Surround View Monitor (SVM)',
            featureDescription: 'See it all, from every angle. The Surround View Monitor gives you a 360-degree bird’s-eye view of your surroundings – perfect for navigating tight trails or crowded city streets.'
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

    return (
        <div className={`w-full ${noBg ? '' : 'bg-[#06141F]'} min-h-screen py-10 gap-16 flex flex-col justify-center items-center`}>
            <p className='text-white text-xl leading-[30px]   font-[InterRegular] text-center max-w-[1330px] mx-auto'>
                {id == 1 ?`Rugged yet refined. Just as bold on the inside, the Kia Tasman’s interior offers enduring pickup truck quality. The outwardly simple design uses symmetry, pure forms, and a wealth of technology to strike a winning balance of spacious luxury and practicality.

`:id==0?' The Kia Tasman applies the latest function-based pickup design language to the Kia family look. The tiger-face radiator grille is framed by bold, vertical lights, a strong front bumper, and a broad, high hood that hints at powerful machinery within. A confident side profile, with unique and practical geometric fender highlights, gives the vehicle a commanding stance.':''}
                
               

 </p>
            <div className="w-full flex items-center justify-center max-w-7xl">
                <div className="flex h-[600px]">
                    {/* Left Section - Image with specific dimensions */}
                    <div className="w-[750px] h-[600px] relative overflow-hidden">
                        <div
                            style={{
                                backgroundImage: `url(${slides?.[id][currentSlide].image})`,
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
                    <div className="flex-1 p-12 pe-0 flex flex-col justify-start  relative min-w-[500px]">
                        <div className="text-white space-y-8">
                            {/* Main description */}
                            

                            {/* Feature section */}
                            <div className="space-y-4 ">
                                <h3 className={`text-2xl font-[InterBold] font-bold  ${dark ? 'text-[#06141F] text-start' : "text-white"} text-start transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {slides?.[id][currentSlide].featureTitle}
                                </h3>
                                <p className={`text-lg leading-relaxed ${dark ?'text-[#54595F] text-start':id==0?'text-[#A3A8AD]':'text-white'} text-start transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {slides?.[id][currentSlide].featureDescription}
                                </p>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="absolute bottom-8 end-0 flex space-x-2">
                            {slides?.[id].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    disabled={isAnimating}
                                    className={`w-[40px] h-[40px] flex items-center justify-center cursor-pointer  text-xl  font-[InterBold] transition-all duration-300 ${index === currentSlide
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