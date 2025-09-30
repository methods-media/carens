import { useTranslation } from "react-i18next";

export const useSpecs = () => {
    
    const { t, i18n } = useTranslation('common');
    const isArabic = i18n?.language == 'ar'
     const featureCategories = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
             features: isArabic ?
                 [
                     "عجلات فولاذية مقاس 16 بوصة",
                     "أضواء خلفية LED + هالوجين",
                     "جناح خلفي"
                 ]
                 :
                 [
                 `16" Steel Wheels`,
                 "LED + Bulb Rear Tail Lights",
                 "Rear Spoiler"
             ] 
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                "ضابط ارتفاع مقعد السائق",
                "صندوق أسفل الأرضية",
                "شاشة 4.2 بوصة + نظام صوتي 8 بوصة",
                "مقعد الصف الثالث قابل للطي بنسبة 50:50",
                "مقاعد قماش + جلد صناعي"
            ] : [
                "Driver Seat Height Adjuster",
                "Underfloor Box",
                "4.2\" Cluster + 8\" D/Audio",
                "50:50 Split 3rd Row Seat",
                "Cloth + Artificial Leather Seats"
            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ? [
                "نظام EXBDC ",
                "وسادتان هوائيتان",
                "مثبّت السرعة",
                "حساسات اصطفاف خلفية",
                "نظام مراقبة الرؤية الخلفية (RVM)",
                "نظام مراقبة ضغط الإطارات (TPMS)",
                "فرامل خلفية قرصية"
            ] : [
                "EXBDC ",
                "2 Airbags",
                "Cruise Control",
                "Rear Parking Sensors",
                "RVM",
                "TPMS",
                "RR Disc Brakes"
            ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                "عجلة قيادة يدوية قابلة للإمالة والتمديد",
                "مرايا خارجية قابلة للتعديل كهربائياً (ORVV)",
                "دخول بدون مفتاح (مفتاح قابل للطي / مفتاح عن بُعد)",
                "حامل أكواب أمامي مزود بخاصية التبريد والتسخين (مفرد) مع إضاءة",
                "مرآة تجميل للراكب الأمامي",
                "6 سماعات",
                "مكيّف أمامي (FR MTC)",
                "مكيّف خلفي (RR MTC)"
            ] : [
                "Manual Tilt & Telescopic Steering",
                "Power Adjustable ORVV",
                "Keyless Entry (Folding Key / Remote Key)",
                "Front Cup Holder Warmer & Cooler (Single) with Illumination",
                "Passenger Side Vanity Mirror",
                "6 Speakers",
                "FR MTC",
                "RR MTC"
            ],

        },
      

    ];
    const featureCategories1 = [
        // {
        //     title:'',
        //     features: isArabic ? ['الإضافات مقارنةً بفئة LX'] : ["Added Vs LX"],
            
        // },
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ? [
                    'عجلات ألمنيوم مقاس 17 بوصة',
                    'مصابيح نهارية LED (DRL)',
                    'رف سقف'
                ]
                : [
                    '17" Alloy Wheels',
                    'LED DRLs',
                    'Roof Rack'
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    'لوح خلفي للمقعد (فئة فاخرة) — السائق/الراكب',
                    'نافذة السائق كهربائية صعوداً وهبوطاً تلقائياً مع خاصية الأمان',
                    'عجلة قيادة جلد + مقبض ناقل حركة أوتوماتيكي'
                ]
                : [
                    'Premium Seat Back Panel - DR/Pass',
                    'Driver Power Window Auto Up/Down & Safety',
                    'Leather Steering Wheel + AT Knob'
                ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ? ['6 وسائد هوائية']
                : ['6 Airbags']
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    'مرايا خارجية قابلة للطي كهربائياً (ORVV)',
                    'مفتاح ذكي مع زر تشغيل',
                    'اختيار وضعيات القيادة'
                ]
                : [
                    'Power Folding ORVV',
                    'Smart Key with Push Button Start',
                    'Drive Mode Select'
                ]
        }
    ];
    
    
    

    const featureCategories2 = [
     
        // {
        //     title: '',
        //     features: isArabic ? ['الإضافات مقارنةً بفئة LX+'] : ["Added Vs LX+"],

        // },
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ? [
                    'مصابيح أمامية LED',
                    'مصابيح خلفية LED',
                    'مصباح خلفي كاشف'
                ]
                : [
                    'LED Headlamps',
                    'LED Taillights',
                    'RR Spot Lamp'
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    'مقاعد من الجلد الصناعي',
                    'نوافذ كهربائية أمامية وخلفية صعوداً وهبوطاً تلقائياً مع خاصية الأمان'
                ]
                : [
                    'Artificial Leather Seats',
                    'FR/RR Power Window Auto Up/Down & Safety'
                ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ? ['حساسات اصطفاف أمامية وخلفية']
                : ['FR/RR Parking Sensors']
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    'مرايا خارجية قابلة للطي كهربائياً (ORVV)',
                    'مكيف هواء أوتوماتيكي - منطقة واحدة',
                    'شاحن لاسلكي',
                    'فرامل ركن إلكترونية (EPB)',
                    'حساس مطر',
                    'فتحة سقف',
                    'ألواح خلفية للمقاعد (السائق/الراكب)',
                    'طاولة خلفية بمقعد السائق/الراكب + درج تخزين تحت مقعد الراكب'
                ]
                : [
                    'Power Folding ORVV',
                    'Auto AC - Single Zone',
                    'Wireless Charger',
                    'EPB',
                    'Rain Sensor',
                    'Sunroof',
                    'Premium Seatback Panels - DR/Pass',
                    'Seat Back Table DR/Pass + Pass Seat Under Tray'
                ]
        }
    ];
    
 


    const featureCategories3 = [
        // {
        //     title: '',
        //     features: isArabic ? ['الإضافات مقارنةً بفئة EX'] : ["Added Vs EX"],

        // },
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ? [
                    'مصباح مركزي أمامي للزينة'
                ]
                : [
                    'Front Center Garnish Lamp'
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    'مقعد سائق كهربائي',
                    'مقاعد أمامية مدفأة ومهوّاة',
                    'أحزمة أمان أمامية قابلة لتعديل الارتفاع',
                    'ستائر للأبواب الخلفية'
                ]
                : [
                    'Power Driver Seat',
                    'Heated + Ventilated FR Seats',
                    'Height Adjustable FR Seatbelts',
                    'Rear Door Curtains'
                ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ? [
                    'نظام تجنب الاصطدام في المنطقة العمياء (BCA)',
                    'مثبّت سرعة ذكي',
                    'نظام lxsx'
                ]
                : [
                    'BCA',
                    'Smart Cruise Control',
                    'lxsx'
                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    'نظام صوتي Bose مع مضخم إضافي وسماعة مركزية أمامية'
                ]
                : [
                    'Bose Audio System + Ext. Amp + FR Center Speaker'
                ]
        }
    ];


 
    return {
        featureCategories,
        featureCategories1,
        featureCategories2,
        featureCategories3,
       
    }
}