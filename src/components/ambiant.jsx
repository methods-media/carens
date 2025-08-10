import { useState } from "react"

export default function AmbiantLight ({ isModalOpen, setIsModalOpen }) {
    const [isAmbiant, setIsAmbiant] = useState(false)
  
    return (
        <>
        <div className='relative'>
            <div className="absolute z-[90] left-0 w-full justify-center items-center bottom-6 gap-2  flex flex-col">
                <p className="text-sm font-[InterBold] text-white">Switch Ambient Light</p>
                <div className="flex items-center gap-2">
                    <p className="text-xs font-[InterBold] text-white">Off</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" value={isAmbiant} checked={isAmbiant} onChange={() => { setIsAmbiant(!isAmbiant) }} />
                        <div className="relative w-12 h-6 rounded-full bg-neutral-800 peer-checked:bg-green-400 transition-colors duration-300">
                            <div
                                className={`absolute top-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 shadow transform ${isAmbiant ? 'translate-x-6.5' : 'translate-x-0.5'
                                    }`}
                            ></div>
                        </div>
                    </label>
                    <p className="text-xs font-[InterBold] text-white">On</p>
                </div>
            </div>
            <img src='https://methods.ae/wp-content/uploads/ktk-dashboard.png' width={'100vw'} height={'100vh'} className='!w-[100vw] !h-[100vh] !object-cover' />
            <>
                {isAmbiant ? null : <>
                        <div onClick={() => {
                           

                        setIsModalOpen(1)
                    }} className=' absolute top-1/2 left-[42%] !w-5 bg-white z-[90] rounded-full !cursor-pointer !h-5'
                    > </div>
                        <div onClick={() => {
                           

                        setIsModalOpen(2)
                    }} className=' absolute top-[64%] left-[44%] !w-5 bg-white z-[90] rounded-full cursor-pointer !h-5'
                    > </div>
                        <div onClick={() => {
                           

                        setIsModalOpen(3)
                    }} className=' absolute top-[70%] left-[55%] !w-5 bg-white z-[90] rounded-full cursor-pointer !h-5'
                    > </div>
                  
                        <div onClick={() => {
                           

                            setIsModalOpen(4)
                        }} className=' absolute top-[70%] left-[65%] !w-5 bg-white z-[90] rounded-full cursor-pointer !h-5'
                    > </div>
                </>}
            </>


         
            </div>
           
        </>
    )
}