import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SwiperSection = ({ noBg, dark, id = 0, height }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slides1Slides = [
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/f44c6bdf-0295-4e7c-02b4-bc1b8f973d00/public',
            featureTitle: '17” Alloy Wheels with All-Terrain Tires',
            featureDescription: 'A clean, confident design that blends everyday performance with understated style. These alloys bring a refined edge to your Tasman’s foundation.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/0d1507c4-c94f-45c8-33df-c29ba19ab800/public',
            featureTitle: 'LED Projection Headlights',
            featureDescription: 'Shine brighter, see further. The Tasman’s LED headlights cut through the dark with precision and clarity – built for late-night drives and early starts.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2dc0d5c1-4ee1-496b-ffff-d0f1c1e16400/public',
            featureTitle: 'LED Rear Lights',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/275d62e7-19c7-41b1-eb22-f88ea4a7ab00/public',
            featureTitle: 'Roof Rack',
            featureDescription: 'Built for extra cargo and bigger adventures – the roof rack expands your carrying capacity, so you can take more gear wherever the road leads.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/25192b86-b024-4ee0-54d5-6674344f9c00/public',
            featureTitle: 'Side Steps',
            featureDescription: 'Built tough with a no-nonsense look, the pipe-type sidestep adds off-road flair and practical access. Ideal for those who like their ride a little rougher around the edges.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d0a780d6-59e9-477f-04d2-310e71f4ad00/public',
            featureTitle: 'Corner Steps',
            featureDescription: 'A step has been installed in the rear corner to make it easier to get on and off the bed.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/9158b597-5bfe-4a3c-daee-1e7595366b00/public',
            featureTitle: 'Fender Side Storage',
            featureDescription: 'Smart, secure, and seamlessly built into the fender — perfect for stashing tools, gear, or anything you need on the go.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c92d72f0-d329-4ff2-e090-fc98f0bafd00/public',
            featureTitle: 'Underbody Skid Plate',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        }
    ];
   
    const swiper2Slides = [
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d48b7706-7ab0-4d15-c40e-bb557f277b00/public',
            featureTitle: 'Door Spot Lamp',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/6647ac8c-52b0-4b1a-b195-b22f35d35d00/public',
            featureTitle: 'Harman Kardon Premium Sound System',
            featureDescription: 'Crank it up or set the mood – the Harman Kardon system delivers rich, immersive audio that transforms every journey into a soundtrack-worthy experience.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/9ba40bd5-a780-4a3e-fda5-589fe37e9100/public',
            featureTitle: 'Crashpad Multi-Storage',
            featureDescription: 'The passenger seat crash pad storage space allows you to store items anywhere within reach.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/71549e8b-dffb-4d4a-9c06-8fd409ebcb00/public',
            featureTitle: 'Sliding & Reclining Rear Seats',
            featureDescription: `Stretch out or settle in. The rear seats slide and recline for maximum comfort – whether you're loading up gear or lounging after a long day outdoors.`
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/ad39654d-7fae-4ede-3d9e-602755381700/public',
            featureTitle: 'Under-Seat Storage',
            featureDescription: `Smart design meets everyday convenience. The second-row packs 33 liters of hidden storage – perfect for keeping things tidy, secure, and easily accessible.`
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/8766195c-da08-4999-a010-1c9e6a319600/public',
            featureTitle: 'Bed Lamp',
            featureDescription: 'LED lighting is standard to support night loading.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/369879c6-5ca6-4ac3-bb6b-6ac9f0dbb100/public',
            featureTitle: 'Bed Power Outlet',
            featureDescription: 'The 220V Bedbu has improved work efficiency and leisure usability.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/b2d8b0b8-72a6-4257-4c45-2efd511afa00/public',
            featureTitle: 'All-Weather Matt',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        }
    ]
  
    const swiper3Slides = [
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/f06a30a2-7ec6-4ac3-80e2-0e4d750b0000/public',
            featureTitle: 'Frame Body',
            featureDescription: 'The structure of the body and frame is separate, ensuring durability from impacts when driving on rough roads.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/3d3a9997-dbd0-4628-2a56-749cfc9eda00/public',
            featureTitle: 'X-Trek Mode',
            featureDescription: 'Focus on the trail, not the throttle. Crawl Mode automatically controls speed and braking on rough terrain, so you can tackle steep climbs and descents with total confidence.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/114011a9-a6c3-45e9-ada0-5f80bbad1b00/public',
            featureTitle: 'Drive / Terrain Mode',
            featureDescription: 'Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/bf199f41-1282-40b3-17e6-260397980800/public',
            featureTitle: 'Wading',
            featureDescription: `Find all the tools you’ll need to create advanced websites in one place. Stop waisting time searching for solutions.`
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/87dcae85-2e22-40e0-abc9-eafceb0e2500/public',
            featureTitle: 'Off-road Screen',
            featureDescription: `Provides vehicle status information necessary for off-road driving, providing a safer and more enjoyable driving experience.`
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/f48cc070-cc92-42f7-c123-d32ea6959800/public',
            featureTitle: 'Ground View Monitor (GVM)',
            featureDescription: 'Get a clear view of what’s directly beneath and in front of your Tasman. The Ground View Monitor helps you navigate tight trails, rocky paths, and tricky terrain with confidence.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/51850fdf-eb13-4bed-37e0-44e865cb9e00/public',
            featureTitle: 'Electronic Locking Differential (e-LD)',
            featureDescription: 'With an electronic differential lock and off-road-tuned torque delivery, the Tasman pushes through sand, mud, and ruts with confidence.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/e61fd259-8f73-439e-2823-2ba47d01e200/public',
            featureTitle: 'Integrated Trailer Brake Controller(ITBC)',
            featureDescription: `When a trailer is connected to a vehicle, it is a device that helps control the trailer's brakes, helping to tow the trailer safely.`
        }
    ]
    const swiper4Slides = [
        {
            video: '/assets/videos/ktk-fca2.webm',
            featureTitle: 'Forward Collision-Avoidance Assist 2 (FCA2)',
            featureDescription: 'FCA 2 monitors the surroundings and automatically assists braking when the risk of collision increases with a vehicle, motorcyclist, pedestrian, or cyclist ahead; with an oncoming vehicle from the opposite side or from the left/right side at an intersection; or with a directly oncoming vehicle in the same lane. It also automatically assists steering when there is a risk of collision with an oncoming vehicle or a vehicle in the next lane while changing lanes, as well as with a vehicle or pedestrian on the edge of the lane.'
        },
        {
            video: '/assets/videos/ktk-lfa2.webm',
            featureTitle: 'Lane Following Assist 2 (LFA2)',
            featureDescription: 'LFA 2 helps center the vehicle in the lane. Steering control has been improved and a Hands-On Detection (HOD) sensor can determine whether the driver is holding the steering wheel for optimal system performance.'
        },
        {
            video: '/assets/videos/ktk-scc.webm',
            featureTitle: 'Smart Cruise Control (SCC)',
            featureDescription: 'SCC helps you drive at a preset speed while maintaining a safe distance from the vehicle ahead. It automatically brings the Tasman to a stop then proceeds again when the vehicle ahead accelerates. If the stop is extended, you may need to press the accelerator pedal. When activated, SCC drives automatically, reflecting the learned driving style. When inactive (Off/Standby), SCC makes note of your driving style (distance between vehicles, acceleration, and reaction speed). When equipped with the Emergency Stop function, the vehicle stops in the lane and emits a warning if the driver does not steer or look forward continuously.'
        },
        {
            video: '/assets/videos/ktk-rspa.webm',
            featureTitle: 'Remote Smart Parking Assist (RSPA)',
            featureDescription: `RSPA lets you park in or exit a parking spot as you stand outside the vehicle. Using sensor technology, it automatically assists with steering, accelerating, decelerating and shifting, while also automatically braking if it senses an obstacle.`
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/ccb1515c-3eeb-4d00-8ec0-6258bff05800/public',
            featureTitle: 'Rear Cross-Traffic Collision-Avoidance Assist',
            featureDescription: `If a risk of collision with an approaching vehicle from the left or right is detected while reversing, a warning is given, and if the risk of collision increases even after the warning, the system automatically assists with braking.`
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/03fd8687-2076-4b77-d7a5-0d301d081600/public',
            featureTitle: 'Blind-Spot View Monitor (BVM)',
            featureDescription: 'BVM displays the rear-side image of the corresponding direction when the turn signal switch is engaged.'
        },
        {
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/052940fd-d6f0-47cc-b326-349fa1d0c700/public',
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
        <div className={`w-full ${noBg ? '' : 'bg-[#06141F]'} ${height ? height:'min-h-screen'} py-10 gap-16 flex flex-col justify-center items-center`}>

            <div className="w-full flex items-center justify-center max-w-7xl">
                <div className="flex-col lg:flex-row flex h-[600px]">
                    {/* Left Section - Image with specific dimensions */}
                    {slides?.[id][currentSlide]?.image ?
                        <div className="w-full md:w-[750px] h-[350px] md:h-[600px] relative overflow-hidden">
                            <div
                                style={{
                                    backgroundImage: slides?.[id][currentSlide]?.image ? `url(${slides?.[id][currentSlide].image})` : 'null',
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
                                className="absolute top-1/2 left-8 md:left-4 transform -translate-y-1/2 w-12 h-12 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                            >
                                <ChevronLeft className="w-10 h-10 text-white/70 hover:text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={isAnimating}
                                className="absolute top-1/2 right-8 md:right-4 transform -translate-y-1/2 w-12 h-12 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                            >
                                <ChevronRight className="w-10 h-10 text-white/70 hover:text-white" />
                            </button>
                        </div>
                    : <div className='relative'>
                            <video src={slides?.[id]?.[currentSlide]?.video} className='w-full rounded-2xl object-cover md:w-[750px] h-[350px] md:h-[600px]' muted playsInline autoPlay />
                            <button
                                onClick={prevSlide}
                                disabled={isAnimating}
                                className="absolute top-1/2 left-8 md:left-4 transform -translate-y-1/2 w-12 h-12 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                            >
                                <ChevronLeft className="w-10 h-10 text-white/70 hover:text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={isAnimating}
                                className="absolute top-1/2 right-8 md:right-4 transform -translate-y-1/2 w-12 h-12 bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer transition-all duration-300 z-10 disabled:opacity-50"
                            >
                                <ChevronRight className="w-10 h-10 text-white/70 hover:text-white" />
                            </button>
                        
                        
                        </div>}
                  

                    {/* Right Section - Content */}
                    <div className="flex-1 pt-6 md:py-12 p-12 pe-0 flex flex-col justify-start  relative min-w-[500px]">
                        <div className="text-white space-y-8">
                            {/* Main description */}
                            

                            {/* Feature section */}
                            <div className="space-y-2 md:space-y-4 ">
                                <h3 className={`text-base md:text-2xl font-[InterBold] font-bold  ${dark ? 'text-[#06141F] text-start' : "text-white"} text-start transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {slides?.[id][currentSlide].featureTitle}
                                </h3>
                                <p className={`text-sm lg:text-lg leading-relaxed ${dark ?'text-[#54595F] text-start':id==0?'text-[#A3A8AD]':'text-white'} max-w-[89%] md:max-w-full text-start transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    {slides?.[id][currentSlide].featureDescription}
                                </p>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="absolute bottom-0 md:bottom-8 end-0 justify-center md:justify-start w-full md:w-auto flex space-x-2">
                            {slides?.[id].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    disabled={isAnimating}
                                    className={`w-6 md:w-[40px] h-6 md:h-[40px] flex items-center justify-center cursor-pointer text-base md:text-xl  font-[InterBold] transition-all duration-300 ${index === currentSlide
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