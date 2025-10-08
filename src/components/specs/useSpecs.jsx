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
                "شاشة 4.2 بوصة + نظام صوتي 8 بوصة",
                "مقاعد قماش + جلد صناعي",
                "ضابط ارتفاع مقعد السائق",
                "صندوق أسفل الأرضية",
                "مقعد الصف الثالث قابل للطي بنسبة 50:50",
            ] : [
                `8" AV + 4.2" Cluster Screens`,
                "Artificial Leather + Cloth seats",
                "Driver Seat Height Adjuster",
                "Underfloor Box",
                "50:50 Split 3rd Row Seat",
            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ? [
                "وسائد هوائية للسائق والراكب الأمامي",
                "نظام EXBDC",
                "RVM - شاشة الرؤية الخلفية",
                "حساسات ركن خلفية",
                "مثبت سرعة ",
                "TPMS - نظام مراقبة ضغط الإطارات",
                "فرامل أقراص على العجلات الأربع"
            ] : [
                "Front Driver & Co-Passenger Airbags",
                "EXBDC ",
                "RVM - Rear View Monitor",
                "Rear Parking Sensors",
                "Cruise Control",
                "TPMS - Tyre Pressure Monitoring System",
                "All 4 wheel Disc brakes"
            ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                "دخول بدون مفتاح ",
                "6 مكبرات صوت",
                "عجلة قيادة يدوية قابلة للإمالة والتمديد",
                "مرايا خارجية قابلة للتعديل كهربائياً (ORVV)",
                "حامل أكواب أمامي مزود بخاصية التبريد والتسخين (مفرد)  ",
             
            ] : [
                "Keyless Entry",
                "6 Speakers",
                "Manual Tilt & Telescopic Steering",
                "Power Adjustable ORVV",
                "Front Cup Holder Warmer & Cooler (Single) ",
            ],

        },
      

    ];
    const featureCategories1 = [
      
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ?
                [
                    "جنوط ألمنيوم مقاس 17 إنش مزدوجة اللون بتصميم كريستالي",
                    "إضاءة نهارية LED بشكل خريطة النجوم",
                    "مصابيح خلفية LED + لمبة",
                    "حامل سقف",
                    "جناح خلفي"
                ]
                : [
                    '17" Crystal cut dual tone Alloy wheels',
                    'Star Map LED DRLs',
                    'LED + Bulb Rear Tail Lights',
                    "Roof rack",
                    "Rear Spoiler",
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    "شاشة 4.2 بوصة + نظام صوتي 8 بوصة",
                    "مقاعد من الجلد الصناعي + القماش",
                    "مقود جلدي مع مقبض ناقل حركة أوتوماتيكي",
                    "ضبط ارتفاع مقعد السائق",
                    "نافذة كهربائية للسائق (رفع/خفض تلقائي + أمان)",
                    "لوحة خلفية فاخرة للمقاعد - السائق/الراكب",
                    "صندوق أسفل الأرضية",
                    "مقعد الصف الثالث قابل للطي بنسبة 50:50"
                ]
                :
                [
                    "8\" AV + 4.2\" Cluster Screens",
                    "Artificial Leather + Cloth seats",
                    "Leather steering wheel + AT knob",
                    "Driver Seat Height adjuster",
                    "Driver Power window Auto Up/Down & Safety",
                    "Premium Seat back panel - DR/Pass",
                    "Underfloor box",
                    "50:50 Split Folding 3rd row seat"
                ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ?
                [
                    "6 وسائد هوائية",
                    "نظام EXBDC ",
                    "RVM - شاشة الرؤية الخلفية",
                    "حساسات ركن خلفية",
                    "مثبت سرعة",
                    "TPMS - نظام مراقبة ضغط الإطارات",
                    "فرامل أقراص لجميع العجلات الأربع"
                ]
                : [
                    "6 Airbags",
                    "EXBDC ",
                    "RVM - Rear View Monitor",
                    "Rear Parking Sensors",
                    "Cruise Control",
                    "TPMS - Tyre Pressure Monitoring System",
                    "All 4 wheel Disc brakes"
                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    "مفتاح ذكي مع زر تشغيل",
                    "اختيار وضع القيادة",
                    "6 مكبرات صوت",
                    "مقود قابل للإمالة والتلسكوب يدويًا",
                    "مرايا جانبية كهربائية قابلة للطي والتعديل",
                    "حامل أكواب أمامي بتبريد وتسخين (مفرد)"
                ]
                : [
                    "Smart Key with Push Button Start",
                    "Drive mode select",
                    "6 Speakers",
                    "Manual Tilt & Telescopic Steering",
                    "Power folding & Adjustable ORVV",
                    "Front Cup Holder Warmer & Cooler (Single)"
                ]
        }
    ];
    const featureCategories2 = [
     
       
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ? [
                    "جنوط ألمنيوم مزدوجة اللون مقاس 17 إنش بتصميم كريستالي",
                    "مصابيح أمامية LED",
                    "مصابيح خلفية LED",
                    "إضاءة نهارية LED بشكل خريطة النجوم",
                    "حامل سقف",
                    "جناح خلفي"
                ]
                : [
                    "17\" Crystal cut dual tone Alloy wheels",
                    "LED Headlamps",
                    "LED Taillights",
                    "Star Map LED DRLs",
                    "Roof rack",
                    "Rear Spoiler"
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    "شاشة 4.2 بوصة + نظام صوتي 8 بوصة",
                    "مقاعد من الجلد الصناعي",
                    "مقود جلدي مع مقبض ناقل حركة أوتوماتيكي",
                    "ضبط ارتفاع مقعد السائق",
                    "نوافذ كهربائية أمامية/خلفية مع رفع/خفض تلقائي وأمان",
                    "لوحة خلفية فاخرة للمقاعد - السائق/الراكب",
                    "صندوق أسفل الأرضية",
                    "مقعد الصف الثالث قابل للطي بنسبة 50:50"
                ]
                : [
                    "8\" AV + 4.2\" Cluster Screens",
                    "Artificial leather seats",
                    "Leather steering wheel + AT knob",
                    "Driver Seat Height adjuster",
                    "FR/RR Power window Auto Up/Down & Safety",
                    "Premium Seat back panel - DR/Pass",
                    "Underfloor box",
                    "50:50 Split Folding 3rd row seat"
                ]
        },     
      {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ? [
                    "حساسات ركن أمامية وخلفية",
                    "6 وسائد هوائية",
                    "نظام EXBDC ",
                    "RVM - شاشة الرؤية الخلفية",
                    "مثبت سرعة",
                    "TPMS - نظام مراقبة ضغط الإطارات",
                    "فرامل أقراص لجميع العجلات الأربع"
                ]
                : [
                    "Front & Rear Parking sensors",
                    "6 Airbags",
                    "EXBDC ",
                    "RVM - Rear View Monitor",
                    "Cruise Control",
                    "TPMS - Tyre Pressure Monitoring System",
                    "All 4 wheel Disc brakes"
                ]
        
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    "فتحة سقف",
                    "فرامل انتظار كهربائية",
                    "مكيف هواء أوتوماتيكي",
                    "شاحن لاسلكي",
                    "حساس المطر",
                    "مفتاح ذكي مع زر تشغيل",
                    "اختيار وضع القيادة",
                    "6 مكبرات صوت",
                    "مقود قابل للإمالة والتلسكوب يدويًا",
                    "مرايا جانبية كهربائية قابلة للطي والتعديل",
                    "حامل أكواب أمامي بتبريد وتسخين (مفرد)",
                    "ألواح خلفية فاخرة للمقاعد - السائق / الراكب",
                    "طاولة خلفية للمقاعد (سائق/راكب) + درج أسفل مقعد الراكب"
                ]
                : [
                    "Sunroof",
                    "Electric Parking Brake",
                    "Auto AC",
                    "Wireless charger",
                    "Rain sensor",
                    "Smart Key with Push Button Start",
                    "Drive mode select",
                    "6 Speakers",
                    "Manual Tilt & Telescopic Steering",
                    "Power folding & Adjustable ORVV",
                    "Front Cup Holder Warmer & Cooler (Single)",
                    "Premium Seatback panels - DR / Pass",
                    "Seat back table DR/Pass + Pass Seat under tray"
                ]
        }
    ];
    


    const featureCategories3 = [


        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic
                ? [
                    "جنوط ألمنيوم مزدوجة اللون مقاس 17 إنش بتصميم كريستالي",
                    "مصابيح أمامية LED",
                    "مصابيح خلفية LED",
                    "إضاءة نهارية LED بشكل خريطة النجوم",
                    "حامل سقف",
                    "جناح خلفي",
                    "مصباح تزييني أمامي مركزي"
                ]
                : [
                    "17\" Crystal cut dual tone Alloy wheels",
                    "LED Headlamps",
                    "LED Taillights",
                    "Star Map LED DRLs",
                    "Roof rack",
                    "Rear Spoiler",
                    "Front Center Garnish Lamp"
                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic
                ? [
                    "مقعد سائق كهربائي",
                    "مقاعد أمامية مدفأة ومهواة",
                    "مقاعد من الجلد الصناعي",
                    "مقود جلدي مع مقبض ناقل حركة أوتوماتيكي",
                    "ستائر للأبواب الخلفية",
                    "ضبط ارتفاع مقعد السائق",
                    "أحزمة أمان أمامية قابلة لتعديل الارتفاع",
                    "نوافذ كهربائية أمامية/خلفية مع رفع/خفض تلقائي وأمان",
                    "لوحة خلفية فاخرة للمقاعد - السائق/الراكب",
                    "صندوق أسفل الأرضية",
                    "مقعد الصف الثالث قابل للطي بنسبة 50:50"
                ]
                : [
                    "Power driver seat",
                    "Heated + Ventilated FR seats",
                    "Artificial leather seats",
                    "Leather steering wheel + AT knob",
                    "Rear Door curtains",
                    "Driver Seat Height adjuster",
                    "Height adjustable FR seatbelts",
                    "FR/RR Power window Auto Up/Down & Safety",
                    "Premium Seat back panel - DR/Pass",
                    "Underfloor box",
                    "50:50 Split Folding 3rd row seat"
                ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic
                ? [
                    "BCA - مساعد تفادي الاصطدام في النقطة العمياء",
                    "SCC - مثبت سرعة ذكي",
                    "xsxs - مساعد تفادي الاصطدام الأمامي",
                    "LKA - مساعد البقاء في المسار",
                    "LFA - مساعد متابعة المسار",
                    "حساسات ركن أمامية وخلفية",
                    "6 وسائد هوائية",
                    "نظام EXBDC ",
                    "RVM - شاشة الرؤية الخلفية",
                    "مثبت سرعة",
                    "TPMS - نظام مراقبة ضغط الإطارات",
                    "فرامل أقراص لجميع العجلات الأربع"
                ]
                : [
                    "BCA - Blind-Spot Collision Avoidance Assist",
                    "SCC - Smart Cruise Control",
                    "xsxs - Front Collision Avoidance Assist",
                    "LKA - Lane Keeping Assist",
                    "LFA - Lane Following Assist",
                    "Front & Rear Parking sensors",
                    "6 Airbags",
                    "EXBDC ",
                    "RVM - Rear View Monitor",
                    "Cruise Control",
                    "TPMS - Tyre Pressure Monitoring System",
                    "All 4 wheel Disc brakes"
                ]

        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic
                ? [
                    "نظام صوتي Bose مع مضخم إضافي ومكبر صوت أمامي مركزي",
                    "فتحة سقف",
                    "فرامل انتظار كهربائية",
                    "مكيف هواء أوتوماتيكي",
                    "شاحن لاسلكي",
                    "حساس المطر",
                    "مفتاح ذكي مع زر تشغيل",
                    "اختيار وضع القيادة",
                    "مقود قابل للإمالة والتلسكوب يدويًا",
                    "حامل أكواب أمامي بتبريد وتسخين (مفرد)",
                    "مرايا جانبية كهربائية قابلة للطي والتعديل",
                    "6 مكبرات صوت",
                    "ألواح خلفية فاخرة للمقاعد - السائق / الراكب",
                    "طاولة خلفية للمقاعد (سائق/راكب) + درج أسفل مقعد الراكب"
                ]
                : [
                    "Bose Audio system + Ext. Amp + FR Center speaker",
                    "Sunroof",
                    "Electric Parking Brake",
                    "Auto AC",
                    "Wireless charger",
                    "Rain sensor",
                    "Smart Key with Push Button Start",
                    "Drive mode select",
                    "Manual Tilt & Telescopic Steering",
                    "Front Cup Holder Warmer & Cooler (Single)",
                    "Power folding & Adjustable ORVV",
                    "6 Speakers",
                    "Premium Seatback panels - DR / Pass",
                    "Seat back table DR/Pass + Pass Seat under tray"
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