import { useTranslation } from "react-i18next";
import KiaConnectEnhanced from "./KiaConnectEnhanced";

export default function KiaConnect () {
const {i18n}=useTranslation('common')
    const isArabic=i18n?.language=='ar'
    return (
        <div className='h-[120vh] bg-white' id="kiaConnect">
            <div className='w-full max-w-[80%] mx-auto flex items-center justify-center flex-col  gap-6 lg:gap-0 lg:flex-row h-[50vh]'>
                <div className='flex  items-center justify-center w-[40%] '>
                    <img src='https://methods.ae/wp-content/uploads/KIA_Connect_icon.png' className="rounded-lg" width={200} height={200} />
                </div>
                <div className='flex flex-col w-[70%] gap-5 items-center lg:items-start'>
                    <p className='text-[#06141F] text-3xl lg:text-[40px] font-[InterRegular]'>Kia Connect</p>
                    <p className='text-[#54595F] text-base text-center lg:text-start lg:text-[20px] font-[InterRegular]'>{isArabic ?`Kia Connect بوابتك لرحلة أذكى وأكثر اتصالاً، تربط سيارتك كيا بهاتفك الذكي بكل سلاسة`:`Kia Connect is your gateway to a smarter, more connected drive, seamlessly linking your Kia to your smartphone`}.</p>
                    <button className='text-sm bg-[#06141F] py-3 px-6 text-white hover:text-[#06141F] hover:bg-white hover:border hover:border-[#06141F] rounded-[5px] w-fit '>{isArabic ? `إعرف المزيد` :`Learn More`}</button>
                </div>
            </div>
           
            <KiaConnectEnhanced/>
        </div>
    )
}