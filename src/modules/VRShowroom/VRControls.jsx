import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const VRControls = ({  onViewChange, view}) => {
  const { t } = useTranslation('common');
  const {locale}=useRouter()  
  return (
    <div
      className="vr-controls"
      style={{
        borderRadius: '10px',
        marginTop:'10px',
        color: 'white',
      }}
    >
      <div id={'styling'}>
        {/* <h3 style={{ marginBottom: '10px' }}>{t('view')}</h3> */}
        <div style={{ display: 'flex',width:'100%', justifyContent:'center', gap: '20px' ,marginTop:'100px'}}>
          <button className={`text-sm md:text-[21px] text-[#06141F] hover:text-white px-[27px] py-[10px] bg-white hover:bg-[#06141F]  btn-showRoom ${locale=='ar'?'font-["GSSBold"]':'font-["InterBold"]'} cursor-pointer `} onClick={() => onViewChange('exterior')}
>             {t('exterior')}</button>
          <button className={`text-sm md:text-[21px] text-[#06141F] hover:text-white px-[27px] py-[10px] bg-white hover:bg-[#06141F]  btn-showRoom ${locale=='ar'?'font-["GSSBold"]':'font-["InterBold"]'} cursor-pointer `}onClick={() => onViewChange('interior')}
          >
          
            {t('interior')}
          
           
          </button>

        
        </div>
      </div>
    </div>
  );
};

export default VRControls;
