import { Linkedin, Facebook, Network, Youtube, Instagram, TwitterIcon, } from "lucide-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
export default function Footer () {
    const { locale, pathname } = useRouter()
    const { t } = useTranslation('common')
    return (
        <>
          
{pathname.includes('configurator')?null:
<>
                    <div className="w-screen bg-[url('https://methods.ae/wp-content/uploads/catalog_tasman_page15_image.png')] footer-img  bg-no-repeat flex flex-col justify-start items-start bg-cover bg-center h-[40vh] md:h-screen bg-[#05141F]">
                        <div className={`${locale == 'ar' ? 'min-h-[8vh] md:min-h-[25vh]' : 'min-h-[8vh] md:min-h-[40vh]'}  footer-img-text md:mt-0  ps-4 md:px-15 flex w-full flex-col justify-center `}
                 dir="ltr" >
                            <p className={`leading-[30px]  mt-[-70px]   md:mt-0  md:leading-[38px] text-base md:text-[28px]  text-black ${locale == 'ar' ? "font-['GSSMedium']" : ""}`}>
                                This is the ending frame heading {t('kia_footer2')}

                            </p>
                   
                         

                </div>
                    </div>
                    <div className='!bg-[#05141F] w-full  flex flex-row items-center h-20 justify-between  px-10 relative  '>


                        <div className=' flex flex-wrap justify-center gap-5 md:gap-[30px] items-center   '>
                            <a href='https://worldwide.kia.com/int/kia-global-websites' target="_blank" rel="noopener">
                            <img src='/assets/world.png' className='w-[24px] h-[24px]' />
                            </a>
                            <a href='https://www.facebook.com/KiaMiddleEastandAfrica/' target="_blank" rel="noopener">
                            <img src='/assets/fb.png' className='w-[24px] h-[24px]' />
                            </a>
                            <a href='https://x.com/KIA__MEA' target="_blank" rel="noopener"> 
                            <img src='/assets/x.png' className='w-[24px] h-[24px]' />
                            </a>

                            <a href='https://www.instagram.com/kia_mea/' target="_blank" rel="noopener">
                                <Instagram className='text-white' width={24} height={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/kia-middle-east-africa/" target="_blank" rel="noopener">
                                <img src='/assets/link.png' className='w-[24px] h-[24px]' />
                            </a>
                            <a href='https://www.youtube.com/channel/UClAYWjFznLNw3saZHA5OkNw' target="_blank" rel="noopener">
                            <Youtube className='text-white' width={24} height={24} />
                            </a>
                            <a href='https://www.tiktok.com/@kia.mea' target="_blank" rel="noopener">
                                <img src='/assets/tiktok.png' className='w-[24px] h-[24px]' />
                            </a>
                                
                            <a href='https://www.snapchat.com/add/kia-mea' target="_blank" rel="noopener">
                                <img src='/assets/snap.png' className='w-[24px] h-[24px]' />
                               </a>
                          


                        </div>

                        <div className='flex justify-center gap-4  items-center   ' style={{ direction: 'ltr' }}>
                          
                            <p><span style={{ fontSize: '11px', color: '#ffffff' }} className=" font-['InterRegular']">© 2025 All Right Reserved. Kia Middle East</span></p>
                           
                        </div>

                    </div></>
              
}
</>


       )
}

const SvgDivider = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ zIndex: '150' }} height={250} viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="white" d="M0,6V0h1000v100L0,6z"></path>
    </svg>
);
