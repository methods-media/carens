import { useTranslation } from "react-i18next";
import KiaConnectEnhanced from "./KiaConnectEnhanced";

export default function KiaConnect () {
const {i18n}=useTranslation('common')
    const isArabic=i18n?.language=='ar'
    return (
        <div className="min-h-screen min-w-screen" dir="ltr">

        <div className='min-h-[30vh] lg:min-h-[73vh] w-screen relative bg-white' style={{
            backgroundImage: `url('https://methods.ae/wp-content/uploads/connect-remote-control-pt.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'

        }} id="kiaConnect">
            <div class="bg-gradient-to-b flex flex-col items-start   justify-center from-0% h-[30vh] lg:h-[75vh] w-screen  to-[#06141F] to-100% from-transparent" id="bg-section">
                    <div className="max-w-[80%] min-w-[80%] mx-auto flex items-start">
                        <img src='/assets/ktk-kiaconnectlogo.png' className="max-w-[90%] lg:max-w-[500px]" />
                  </div>
            </div>

                
           
           
            </div>
            <div className="  pt-5 lg:pt-0 bg-[#06141F] h-[70vh] lg:h-[25vh]">

                <div className="h-full lg:h-[25vh] max-w-[100%] lg:max-w-[80%]  mx-auto flex-col gap-5 lg:gap-0 lg:flex-row flex items-start   ">
                <div className="w-[90%] lg:flex-1 flex flex-col justify-center  mx-auto h-[50%] lg:h-auto lg:mx-0">
                    <div className='flex flex-col w-[100%] gap-5 items-start '>
                        <p className='text-white text-2xl lg:text-[40px] font-[InterBold]'>Kia Connect</p>
                            <p className={`text-white text-base  leading-[25px] text-center lg:text-start lg:text-[20px] ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>{isArabic ?
                            <>
                                {`بوابتك لرحلة أذكى وأكثر اتصالاً، تربط سيارتك كيا بهاتفك الذكي بكل سلاسة`}
                            </> : `Kia Connect is your gateway to a smarter, more connected drive, seamlessly linking your Kia to your smartphone.`}</p>
                            <button className={`text-sm hover:bg-[#06141F] cursor-pointer py-3 px-6 hover:text-white text-[#06141F] bg-white hover:border hover:border-[#06141F] w-full lg:w-fit rounded-[5px] ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>{isArabic ? `إعرف المزيد` : `Learn More`}</button>
                    </div>
                </div>
                <div className=" h-[50%] lg:h-auto w-full flex justify-center lg:flex-1">
                    <KiaConnectEnhanced />

                </div>
            </div>
            </div>

        </div>
    )
}