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
                     "مصابيح خلفية LED + هالوجين",
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
      
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ? [
                    'عجلات ألمنيوم مقاس 17 بوصة',
                    'مصابيح نهارية LED (DRL)',
                    'رف سقف',
                    "جناح خلفي",
                ]
                : [
                    '17" Alloy Wheels',
                    'LED DRLs',
                    'Roof Rack',
                    "Rear Spoiler"
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    'لوح خلفي للمقعد (فئة فاخرة) — السائق/الراكب',
                    'نافذة السائق كهربائية صعوداً وهبوطاً تلقائياً مع خاصية الأمان',
                    'عجلة قيادة جلد + مقبض ناقل حركة أوتوماتيكي',
                    "ضابط ارتفاع مقعد السائق",
                    "صندوق أسفل الأرضية",
                    "شاشة 4.2 بوصة + نظام صوتي 8 بوصة",
                    "مقعد الصف الثالث قابل للطي بنسبة 50:50",
                    "مقاعد قماش + جلد صناعي",
                ]
                : [
                    'Premium Seat Back Panel - DR/Pass',
                    'Driver Power Window Auto Up/Down & Safety',
                    'Leather Steering Wheel + AT Knob',
                    "Driver Seat Height Adjuster",
                    "Underfloor Box",
                    "4.2\" Cluster + 8\" D/Audio",
                    "50:50 Split 3rd Row Seat",
                    "Cloth + Artificial Leather Seats"
                ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ? ["نظام ABS+ ESC+ DBC+ HAC",
                    '6 وسائد هوائية',
                    "مثبّت السرعة",
                    "حساسات اصطفاف خلفية",
                    "نظام مراقبة الرؤية الخلفية (RVM)",
                    "نظام مراقبة ضغط الإطارات (TPMS)",
                    "فرامل خلفية قرصية"
                ]
                : [
                    "ABS+ ESC+ DBC+ HAC",
                    '6 Airbags',
                    "Cruise Control",
                    "Rear Parking Sensors",
                    "RVM",
                    "TPMS",
                    "RR Disc Brakes"


                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    'مفتاح ذكي مع زر تشغيل',
                    'اختيار وضعيات القيادة',
                    "عجلة قيادة يدوية قابلة للإمالة والتمديد",
                    'مرايا خارجية قابلة للطي كهربائياً (ORVV)',
                    "مرايا خارجية قابلة للتعديل كهربائياً (ORVV)",
                    "دخول بدون مفتاح (مفتاح قابل للطي / مفتاح عن بُعد)",
                    "حامل أكواب أمامي مزود بخاصية التبريد والتسخين (مفرد) مع إضاءة",
                    "مرآة تجميل للراكب الأمامي",
                    "6 سماعات",
                    "مكيّف أمامي (FR MTC)",
                    "مكيّف خلفي (RR MTC)"
                ]
                : [
                    'Smart Key with Push Button Start',
                    'Drive Mode Select',
                    "Manual Tilt & Telescopic Steering",
                    'Power Folding ORVV',
                    "Power Adjustable ORVV",
                    "Keyless Entry (Folding Key / Remote Key)",
                    "Front Cup Holder Warmer & Cooler (Single) with Illumination",
                    "Passenger Side Vanity Mirror",
                    "6 Speakers",
                    "FR MTC",
                    "RR MTC"
                ]
        }
    ];
    const featureCategories2 = [
     
       
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ? [
                    'عجلات ألمنيوم مقاس 17 بوصة',
                    'مصابيح أمامية LED',
                    'مصابيح خلفية LED',
                    'مصباح خلفي كاشف',
                    'رف سقف',
                    "جناح خلفي",
                ]
                : [
                    '17" Alloy Wheels',
                    'LED Headlamps',
                    'LED Taillights',
                    "RR Spot Lamp",
                    'Roof Rack',
                    "Rear Spoiler",
                    
                   
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    'لوح خلفي للمقعد (فئة فاخرة) — السائق/الراكب',
                    'نوافذ كهربائية أمامية وخلفية صعوداً وهبوطاً تلقائياً مع خاصية الأمان',
                    'عجلة قيادة جلد + مقبض ناقل حركة أوتوماتيكي',
                    "ضابط ارتفاع مقعد السائق",
                    'مقاعد من الجلد الصناعي',
                    "صندوق أسفل الأرضية",
                    "شاشة 4.2 بوصة + نظام صوتي 8 بوصة",
                    "مقعد الصف الثالث قابل للطي بنسبة 50:50",
                    "مقاعد قماش + جلد صناعي",
                ]
                : [
                    'Premium Seat Back Panel - DR/Pass',
                    'FR/RR Power Window Auto Up/Down & Safety',
                    'Leather Steering Wheel + AT Knob',
                    "Driver Seat Height Adjuster",
                    'Artificial Leather Seats',
                    "Underfloor Box",
                    "4.2\" Cluster + 8\" D/Audio",
                    "50:50 Split 3rd Row Seat",
                    "Cloth + Artificial Leather Seats"
                ]
        },     
      {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ? [
                    'حساسات اصطفاف أمامية وخلفية',
                    "نظام ABS+ ESC+ DBC+ HAC",
                    '6 وسائد هوائية',
                    "مثبّت السرعة",
                    "نظام مراقبة الرؤية الخلفية (RVM)",
                    "نظام مراقبة ضغط الإطارات (TPMS)",
                    "فرامل خلفية قرصية"
                ]
                : [
                    'FR/RR Parking Sensors',
                    "ABS+ ESC+ DBC+ HAC",
                    '6 Airbags',
                    "Cruise Control",
                    "RVM",
                    "TPMS",
                    "RR Disc Brakes"


                ]
        
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    'مكيف هواء أوتوماتيكي - منطقة واحدة',
                    'فرامل ركن إلكترونية (EPB)',
                    'شاحن لاسلكي',
                    'حساس مطر',
                    'فتحة سقف',
                    'ألواح خلفية للمقاعد (السائق/الراكب)',
                    'طاولة خلفية بمقعد السائق/الراكب + درج تخزين تحت مقعد الراكب',
                    'مفتاح ذكي مع زر تشغيل',
                    'اختيار وضعيات القيادة',
                    "عجلة قيادة يدوية قابلة للإمالة والتمديد",
                    'مرايا خارجية قابلة للطي كهربائياً (ORVV)',
                    "مرايا خارجية قابلة للتعديل كهربائياً (ORVV)",
                    "دخول بدون مفتاح (مفتاح قابل للطي / مفتاح عن بُعد)",
                    "حامل أكواب أمامي مزود بخاصية التبريد والتسخين (مفرد) مع إضاءة",
                    "مرآة تجميل للراكب الأمامي",
                    "6 سماعات",
                    "مكيّف أمامي (FR MTC)",
                    "مكيّف خلفي (RR MTC)",

                ]
                : [
                    'Auto AC - Single Zone',
                    'EPB',
                    'Wireless Charger',
                    'Rain Sensor',
                    'Sunroof',
                    'Premium Seatback Panels - DR/Pass',
                    'Seat Back Table DR/Pass + Pass Seat Under Tray',
                    'Smart Key with Push Button Start',
                    'Drive Mode Select',
                    "Manual Tilt & Telescopic Steering",
                    'Power Folding ORVV',
                    "Power Adjustable ORVV",
                    "Keyless Entry (Folding Key / Remote Key)",
                    "Front Cup Holder Warmer & Cooler (Single) with Illumination",
                    "Passenger Side Vanity Mirror",
                    "6 Speakers",
                    "FR MTC",
                    "RR MTC",

                ]
        }
    ];
    


    const featureCategories3 = [


        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ? [
                    'عجلات ألمنيوم مقاس 17 بوصة',
                    'مصابيح أمامية LED',
                    'مصابيح خلفية LED',
                    'مصباح خلفي كاشف',
                    'رف سقف',
                    "جناح خلفي",
                    'مصباح مركزي أمامي للزينة',

                  
                ]
                : [
                    '17" Alloy Wheels',
                    'LED Headlamps',
                    'LED Taillights',
                    "RR Spot Lamp",
                    'Roof Rack',
                    "Rear Spoiler",
                    'Front Center Garnish Lamp',

                  
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    'لوح خلفي للمقعد (فئة فاخرة) — السائق/الراكب',
                    'نوافذ كهربائية أمامية وخلفية صعوداً وهبوطاً تلقائياً مع خاصية الأمان',
                    'عجلة قيادة جلد + مقبض ناقل حركة أوتوماتيكي',
                    "ضابط ارتفاع مقعد السائق",
                    "صندوق أسفل الأرضية",
                    "شاشة 4.2 بوصة + نظام صوتي 8 بوصة",
                    "مقعد الصف الثالث قابل للطي بنسبة 50:50",
                    'مقاعد من الجلد الصناعي',

                    'مقعد سائق كهربائي',
                    'مقاعد أمامية مدفأة ومهوّاة',
                    'أحزمة أمان أمامية قابلة لتعديل الارتفاع',
                    'ستائر للأبواب الخلفية',

                ]
                : [
                    'Premium Seat Back Panel - DR/Pass',
                    'FR/RR Power Window Auto Up/Down & Safety',
                    'Leather Steering Wheel + AT Knob',
                    "Driver Seat Height Adjuster",
                    "Underfloor Box",
                    "4.2\" Cluster + 8\" D/Audio",
                    "50:50 Split 3rd Row Seat",
                    'Artificial Leather Seats',

                    'Power Driver Seat',
                    'Heated + Ventilated FR Seats',
                    'Height Adjustable FR Seatbelts',
                    'Rear Door Curtains',
                   
                        ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ? [
                    'حساسات اصطفاف أمامية وخلفية',
                    "نظام ABS+ ESC+ DBC+ HAC",
                    'مثبّت سرعة ذكي',
                    '6 وسائد هوائية',
                    "حساسات اصطفاف خلفية",
                    "نظام مراقبة الرؤية الخلفية (RVM)",
                    "نظام مراقبة ضغط الإطارات (TPMS)",
                    "فرامل خلفية قرصية",
                    'نظام تجنب الاصطدام في المنطقة العمياء (BCA)',
                    "نظام FCA1.5 + LKA + LFA + SCC",
                 
                ]
                : [
                    'FR/RR Parking Sensors',
                    "ABS+ ESC+ DBC+ HAC",
                    'Smart Cruise Control',
                    '6 Airbags',
                    "Rear Parking Sensors",
                    "RVM",
                    "TPMS",
                    "RR Disc Brakes",
                    'BCA',
                    "FCA1.5 + LKA + LFA + SCC",
                  


                ]

        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    'نظام صوتي Bose مع مضخم إضافي وسماعة مركزية أمامية',
                    'مكيف هواء أوتوماتيكي - منطقة واحدة',
                    'شاحن لاسلكي',
                    'فرامل ركن إلكترونية (EPB)',
                    'حساس مطر',
                    'فتحة سقف',
                  
                    'ألواح خلفية للمقاعد (السائق/الراكب)',
                    'طاولة خلفية بمقعد السائق/الراكب + درج تخزين تحت مقعد الراكب',
                    'مفتاح ذكي مع زر تشغيل',
                    'اختيار وضعيات القيادة',
                    "عجلة قيادة يدوية قابلة للإمالة والتمديد",
                    'مرايا خارجية قابلة للطي كهربائياً (ORVV)',
                    "مرايا خارجية قابلة للتعديل كهربائياً (ORVV)",
                    "دخول بدون مفتاح (مفتاح قابل للطي / مفتاح عن بُعد)",
                    "حامل أكواب أمامي مزود بخاصية التبريد والتسخين (مفرد) مع إضاءة",
                    "مرآة تجميل للراكب الأمامي",
                    "6 سماعات",
                    "مكيّف أمامي (FR MTC)",
                    "مكيّف خلفي (RR MTC)"
                ]
                : [
                    'Bose Audio System + Ext. Amp + FR Center Speaker',
                    'Auto AC - Single Zone',
                    'Wireless Charger',
                    'EPB',
                    'Rain Sensor',
                    'Sunroof',

                    'Premium Seatback Panels - DR/Pass',
                    'Seat Back Table DR/Pass + Pass Seat Under Tray',
                    'Smart Key with Push Button Start',
                    'Drive Mode Select',
                    "Manual Tilt & Telescopic Steering",
                    'Power Folding ORVV',
                    "Power Adjustable ORVV",
                    "Keyless Entry (Folding Key / Remote Key)",
                    "Front Cup Holder Warmer & Cooler (Single) with Illumination",
                    "Passenger Side Vanity Mirror",
                    "6 Speakers",
                    "FR MTC",
                    "RR MTC"
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