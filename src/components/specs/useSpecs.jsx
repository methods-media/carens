import { useTranslation } from "react-i18next";

export const useSpecs = () => {
    
    const { t, i18n } = useTranslation('common');
    const isArabic = i18n?.language == 'ar'
     const featureCategories = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
             features: isArabic ? [
                 "مصابيح أمامية LED MFR",
                "عجلات فولاذية مقاس 17 بوصة",
                "مصابيح LED خلفية",
                 "واقيات طين",] : [
                 "LED MFR headlights",
                `17" Steel wheels`,
                "Rear LED lights",
                     "Mud guard",


                 ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                `مقاعد قماش`,
                `شاشة مركزية مقاس 12 بوصة`,
                `شاشة عدادات رقمية مقاس fours بوصة`,
                `6 سماعات`,
                `عجلة قيادة مكسوة بالجلد الصناعي`,
                `مقبض ناقل حركة أوتوماتيكي مكسو بالجلد الصناعي`


            ] : [
                `Cloth seat`,
                `12" Central Display`,
                `4" Digital Cluster`,
                    `6 Speakers`,
                    `Artificial Leather Steering Wheel`,
                    `Artificial leather Automatic Transmission Knob`,



            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ? [
                `نظام المكابح المانعة للانغلاق (ABS)`,
                `نظام التحكم الإلكتروني بالثبات (ESC)`,
                `نظام التحكم في المكابح أثناء النزول من المنحدرات (DBC)`,
                `نظام المساعدة على صعود المرتفعات (HAC)`,
                `نظام المساعدة على ثبات المقطورة (TSA)`,
                `وسائد هوائية أمامية`,
                `عجلة احتياطية بالحجم الكامل`




            ] : [
                    `ABS – Anti-lock Braking System`,
                    `ESC - Electronic Stability Control`,
                    `DBC - Downhill Brake Control`,
                    `HAC- Hill Start Assist Control`,
                    `TSA - Trailer Stability Assist`,
                    `Front Airbags`,
                    `Full-Size Spare Wheel`

            ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                `عجلة قيادة قابلة للامتداد`,
                `فرامل توقف إلكترونية`,
                `مرايا خارجية قابلة للتعديل كهربائياً`,
                `نظام التحكم التلقائي بالإضاءة`,
                `مثبّت سرعة مع محدد للسرعة`,
                `حساسات أمامية وخلفية للمساعدة في الركن`,
                `كاميرا رؤية خلفية`,
                `مكيف يدوي مع فتحات خلفية`,
                `مقاعد خلفية قابلة للانحناء بنسبة xx`,
                `قضبان جانبية لصندوق التحميل`



            ] : [
                    `Mechanical Differential Lock (for 4WD only)`,
                    `Telescopic Steering Wheel`,
                    `Electronic Parking Brake`,
                    `Electrically Adjustable Mirrors`,
                    `Auto Light Control`,
                    `Cruise Control with Speed Limiter`,
                    `Front and Rear Parking Sensors`,
                    `Rear View Camera`,
                    `Manual AC with Rear Vents`,
                    `xx Rear Seat Folding`,
                    `Bed Side Rails`
            ],

        },
        // {
        //     title: isArabic ? 'إكسسوارات' : 'Accessories',
        //     features: isArabic ? [
        //         `وصلة جر (بدون أسلاك)`,
        //         `التخزين الجانبي`,
        //         `درابزين مقبلات. لون الجسم`,
        //         `بطانة السرير`,
        //         `مكيف الهواء العاكس (220 فولت)`,
        //         `سبيكة 17 بوصة`,
        //         `عجلة احتياطية من السبائك بالحجم الكامل`,
        //     ] : [
        //         `Tow Hitch (W/O Wiring)`,
        //         `Side Storage`,
        //         "Fender Garnish. Body Color",
        //         `Bed Liner`,
        //         `A/C Inverter(220V)`,
        //         `Alloy 17 Inch`,
        //         `Full-size Alloy Spare Wheel`,
        //     ]
        // }

    ];
     const featureCategories1 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                `مصابيح LED أمامية بتقنية MFR`,
                `عجلات ألمنيوم مقاس 17 بوصة`,
                `مصابيح LED خلفية`,
                `واقيات طين`,
                `رف سقف منخفض`,
                `مصابيح LED أمامية للضباب`,
                `إضاءة ترحيبية`



            ]
                : [
                    `LED MFR Headlights`,
                    `17" Alloy Wheels`,
                    `Rear LED Lights`,
                    `Mud Guard`,
                    `Low-profile Roof Rack`,
                    `Front Fog Lamps (LED)`,
                    `Puddle Lamp`

                ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                `مقاعد من الجلد الصناعي`,
                `شاشة مركزية مقاس 12 بوصة`,
                `شاشة عدادات رقمية مقاس 4 بوصة`,
                `6 سماعات`,
                `عجلة قيادة مكسوة بالجلد الصناعي`,
                `مقبض ناقل حركة أوتوماتيكي مكسو بالجلد الصناعي`,
                `مقاعد خلفية قابلة للانحناء`,
                `مسند ذراع خلفي`

            ] : [
                    `Artificial Leather Seats`,
                    `12" Central Display`,
                    `4" Digital Cluster`,
                    `6 Speakers`,
                    `Artificial Leather Steering Wheel`,
                    `Artificial Leather Automatic Transmission Knob`,
                    `Sliding and Reclining Rear Seats`,
                    `Rear Armrest`




            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    `نظام المكابح المانعة للانغلاق (ABS)`,
                    `نظام التحكم الإلكتروني بالثبات (ESC)`,
                    `نظام التحكم في المكابح أثناء النزول من المنحدرات (DBC)`,
                    `نظام المساعدة على صعود المرتفعات (HAC)`,
                    `نظام المساعدة على ثبات المقطورة (TSA)`,
                    `وسائد هوائية أمامية`,
                    `عجلة احتياطية بالحجم الكامل`,
                    `وسائد هوائية جانبية وعلوية`



                ] : [
                    `ABS – Anti-lock Braking System`,
                    `ESC - Electronic Stability Control`,
                    `DBC - Downhill Brake Control`,
                    `HAC- Hill Start Assist Control`,
                    `TSA - Trailer Stability Assist`,
                    `Front Airbags`,
                    `Full-Size Spare Wheel`,
                    `Side and Curtain Airbags`

                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                `قفل تفاضلي ميكانيكي (لفئة الدفع الرباعي فقط)`,
                `عجلة قيادة قابلة للامتداد`,
                `فرامل توقف إلكترونية`,
                `مرايا خارجية قابلة للتعديل كهربائياً`,
                `نظام التحكم التلقائي بالإضاءة`,
                `مثبّت سرعة مع محدد للسرعة`,
                `حساسات أمامية وخلفية للمساعدة في الركن`,
                `كاميرا رؤية خلفية`,
                `مكيف هواء أوتوماتيكي (منطقتان)`,
                `مقاعد خلفية قابلة للانحناء بنسبة xx`,
                `قضبان جانبية لصندوق التحميل`,
                `خدمات كيا المتصلة* (غير متوفرة في سلطنة عُمان)`,
                `مفتاح ذكي`,
                `شاحن لاسلكي (واحد)`,
                `بطانة الصندوق`,
                `مقعد سائق بتحكم كهربائي`,
                `مرايا خارجية قابلة للطي كهربائياً`

            ] : [
                    `Mechanical Differential Lock (for 4WD only)`,
                    `Telescopic Steering Wheel`,
                    `Electronic Parking Brake`,
                    `Electrically Adjustable Mirrors`,
                    `Auto Light Control`,
                    `Cruise Control with Speed Limiter`,
                    `Front and Rear Parking Sensors`,
                    `Rear View Camera`,
                    `Auto AC (2-Zone)`,
                    `xx Rear Seat Folding`,
                    `Bed Side Rails`,
                    `Kia Connect* (Not available in Oman)`,
                    `Smart Key`,
                    `Wireless Charger (single)`,
                    `Bedliner`,
                    `Power Driver seat`,
                    `Electrically Foldable Mirrors`
            ]
        },
        // {
        //     title: isArabic ? 'إكسسوارات' : 'Accessories',
        //     features: isArabic ? [
        //         `وصلة جر (بدون أسلاك)`,
        //         `التخزين الجانبي`,
        //         `درابزين مقبلات. لون الجسم`,
        //         `مكيف الهواء العاكس (220 فولت)`,
        //     ] : [
        //         `Tow Hitch (W/O Wiring)`,
        //         `Side Storage`,
        //         `Fender Garnish . Body Color`,
        //         `A/C Inverter(220V)`
        //     ]
        // }

     ];
    
    
    
     const featureCategories2 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                `مصابيح LED أمامية بتقنية عالية الوضوح`,
                `عجلات ألمنيوم مقاس 18 بوصة`,
                `مصابيح LED خلفية`,
                `واقيات طين`,
                `رف سقف منخفض`,
                `مصابيح LED أمامية للضباب`,
                `إضاءة ترحيبية`
            ] : [
                    `Projection LED Headlights`,
                    `18" Alloy Wheels`,
                    `Rear LED Lights`,
                    `Mud Guard`,
                    `Low-profile Roof Rack`,
                    `Front Fog Lamps (LED)`,
                    `Puddle Lamp`,]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                `مقاعد من الجلد الصناعي بنقشة بارزة`,
                `شاشة وسطية مقاس 12 بوصة`,
                `شاشة عدادات رقمية مقاس 12 بوصة`,
                `6 سماعات`,
                `عجلة قيادة مكسوة بالجلد الصناعي`,
                `مقبض ناقل حركة أوتوماتيكي مكسو بالجلد الصناعي`,
                `مقاعد خلفية قابلة للانحناء`,
                `مسند ذراع خلفي`,
                `فتحة سقف`,
                `إضاءة محيطية (المستوى onee)`

            ] : [
                    `Embossed Artificial Leather Seats`,
                    `12" Central Display`,
                    `12" Digital Cluster`,
                    `6 Speakers`,
                    `Artificial Leather Steering Wheel`,
                    `Artificial Leather Automatic Transmission Knob`,
                    `Sliding and Reclining Rear Seats`,
                    `Rear Armrest`,
                    `Sunroof`,
                    `Mood Lamp (Level 1)`




            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    `نظام المكابح المانعة للانغلاق (ABS)`,
                    `نظام التحكم الإلكتروني بالثبات (ESC)`,
                    `نظام التحكم في المكابح أثناء النزول من المنحدرات (DBC)`,
                    `نظام المساعدة على صعود المرتفعات (HAC)`,
                    `نظام المساعدة على ثبات المقطورة (TSA)`,
                    `وسائد هوائية أمامية`,
                    `عجلة احتياطية بالحجم الكامل`,
                    `وسائد هوائية جانبية وعلوية`,
                    `مساعد تفادي الاصطدام عند الرجوع للخلف`,
                    `مساعد تفادي الاصطدام الأمامي 1.5`,
                    `مثبّت سرعة ذكي مع خاصية التوقف والانطلاق`,
                    `مساعد الحفاظ على المسار`,
                    `مساعد تفادي الاصطدام في النقطة العمياء`,
                    `مساعد تفادي الاصطدام بحركة المرور الخلفية`





                ] : [
                    `ABS - Anti-lock Braking System`,
                    `ESC - Electronic Stability Control`,
                    `DBC - Downhill Brake Control`,
                    `HAC- Hill Start Assist Control`,
                    `TSA - Trailer Stability Assist`,
                    `Front Airbags`,
                    `Full-Size Spare Wheel`,
                    `Side and Curtain Airbags`,
                    `Reverse Parking Collision-Avoidance Assist`,
                    `Forward Collision-Avoidance Assist 1.5`,
                    `Smart Cruise Control with Stop & Go`,
                    `Lane Keeping Assist`,
                    `Blind-Spot Collision-Avoidance Assist`,
                    `Rear Cross-Traffic Collision-Avoidance Assist`

                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                `قفل تفاضلي ميكانيكي (لفئة الدفع الرباعي فقط)`,
                `عجلة قيادة قابلة للامتداد`,
                `فرامل توقف إلكترونية`,
                `مرايا خارجية قابلة للتعديل كهربائياً`,
                `نظام التحكم التلقائي بالإضاءة`,
                `حساسات أمامية وخلفية وجانبية للمساعدة في الركن`,
                `شاشة الرؤية المحيطية`,
                `مكيف هواء أوتوماتيكي (منطقتان)`,
                `مقاعد خلفية قابلة للانحناء بنسبة xx`,
                `قضبان جانبية لصندوق التحميل`,
                `خدمات كيا المتصلة* (غير متوفرة في سلطنة عُمان)`,
                `مفتاح ذكي`,
                `شاحن لاسلكي (واحد)`,
                `بطانة الصندوق`,
                `مقعد سائق بتحكم كهربائي`,
                `مرايا خارجية قابلة للطي كهربائياً`,
                `شاشة مراقبة النقطة العمياء`,
                `مقعد راكب بتحكم كهربائي`,
                `جيوب تخزين خلفية للمقاعد`,
                `منافذ USB لركاب المقاعد الخلفية`

            ] : [
                    `Mechanical Differential Lock (for 4WD only)`,
                    `Telescopic Steering Wheel`,
                    `Electronic Parking Brake`,
                    `Electrically Adjustable Mirrors`,
                    `Auto Light Control`,
                    `Front, Rear and Side Parking Sensors`,
                    `Surround View Monitor`,
                    `Auto AC (2-Zone)`,
                    `xx Rear Seat Folding`,
                    `Bed Side Rails`,
                    `Kia Connect* (Not available in Oman)`,
                    `Smart Key`,
                    `Wireless Charger (single)`,
                    `Bedliner`,
                    `Power Driver seat`,
                    `Electrically Foldable Mirrors`,
                    `Blind View Monitor`,
                    `Power Passenger Seat`,
                    `Seat Back Panels with Pockets`,
                    `USB Ports for Rear Passengers`
            ]
        },
        // {
        //     title: isArabic ? 'إكسسوارات' : 'Accessories',
        //     features: isArabic ? [
        //         "وصلة جر (بدون أسلاك)",
        //         "التخزين الجانبي",
        //         "درابزين مقبلات. لون الجسم",
        //         "مكيف الهواء العاكس (220 فولت)",
        //         "ملاحة. (تحويلة twlevee بوصة)+DAB",
        //         "ملاحة. (twlevee بوصة)",

        //     ] : [
        //         "Tow Hitch (W/O Wiring)",
        //         "Side Storage",
        //         "Fender Garnish ; Body Color",
        //         "A/C Inverter(220V)",
        //         `Navigation.(Ext. 12.3")+DAB`,
        //         `Navigation.(Int. 12.3")`,

        //     ]
        // }

     ]
    
    
    
     const featureCategories3 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                `مصابيح LED أمامية بتقنية عالية الوضوح`,
                `عجلات ألمنيوم مقاس 18 بوصة`,
                `مصابيح LED خلفية`,
                `واقيات طين`,
                `قضبان سقف بتصميم الجسر`,
                `مصابيح LED أمامية للضباب`,
                `إضاءة ترحيبية`,
                `مجموعة التصميم الخارجي للطرق الوعرة`
            ] : [
                    `Projection LED Headlights`,
                    `18" Alloy wheels`,
                    `Rear LED lights`,
                    `Mud Guard`,
                    `Bridge-type Roof Rack`,
                    `Front Fog Lamps (LED)`,
                    `Puddle Lamp`,
                    `Off-road Exterior Design Pack`]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                `مقاعد من الجلد الصناعي بتطريز مبطن`,
                `شاشة مركزية مقاس 12 بوصة`,
                `شاشة عدادات رقمية مقاس 12 بوصة`,
                `نظام صوت فاخر من Harman / Kardon`,
                `عجلة قيادة مكسوة بالجلد الصناعي`,
                `نظام نقل حركة إلكتروني وطاولة مركزية`,
                `مقاعد خلفية قابلة للانحناء`,
                `مسند ذراع خلفي`,
                `فتحة سقف`,
                `إضاءة محيطية (المستوى onee)`,
                `دواسات أرضية معدنية`

            ] : [
                    `Quilted Artificial Leather Seats`,
                    `12" Central Display`,
                    `12" Digital Cluster`,
                    `Harman / Kardon Premium Sound System`,
                    `Artificial Leather Steering Wheel`,
                    `Shift By Wire & Console Table`,
                    `Sliding and Reclining Rear Seats`,
                    `Rear Armrest`,
                    `Sunroof`,
                    `Mood Lamp (Level 1)`,
                    `Metal Pedals`



            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: !isArabic ?
                [
                    `ABS - Anti-lock Braking System`,
                    `ESC - Electronic Stability Control`,
                    `DBC - Downhill Brake Control`,
                    `HAC- Hill Start Assist Control`,
                    `TSA - Trailer Stability Assist`,
                    `Front Airbags`,
                    `Full-Size Spare Wheel`,
                    `Side and Curtain Airbags`,
                    `Reverse Parking Collision-Avoidance Assist`,
                    `Forward Collision-Avoidance Assist 1.5`,
                    `Smart Cruise Control with Stop & Go`,
                    `Lane Keeping Assist`,
                    `Blind-Spot Collision-Avoidance Assist`,
                    `Rear Cross-Traffic Collision-Avoidance Assist`

                ] : [
                    `نظام المكابح المانعة للانغلاق (ABS)`,
                    `نظام التحكم الإلكتروني بالثبات (ESC)`,
                    `نظام التحكم في المكابح أثناء النزول من المنحدرات (DBC)`,
                    `نظام المساعدة على صعود المرتفعات (HAC)`,
                    `نظام المساعدة على ثبات المقطورة (TSA)`,
                    `وسائد هوائية أمامية`,
                    `عجلة احتياطية بالحجم الكامل`,
                    `وسائد هوائية جانبية وعلوية`,
                    `مساعد تفادي الاصطدام عند الرجوع للخلف`,
                    `مساعد تفادي الاصطدام الأمامي 1.5`,
                    `مثبّت سرعة ذكي مع خاصية التوقف والانطلاق`,
                    `مساعد الحفاظ على المسار`,
                    `مساعد تفادي الاصطدام في النقطة العمياء`,
                    `مساعد تفادي الاصطدام بحركة المرور الخلفية`


                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                `قفل تفاضلي ميكانيكي (لفئة الدفع الرباعي فقط)`,
                `عجلة قيادة قابلة للامتداد`,
                `فرامل توقف إلكترونية`,
                `مرايا خارجية قابلة للتعديل كهربائياً`,
                `نظام التحكم التلقائي بالإضاءة`,
                `حساسات أمامية وخلفية وجانبية للمساعدة في الركن`,
                `شاشة الرؤية المحيطية`,
                `مكيف هواء أوتوماتيكي (منطقتان)`,
                `مقاعد خلفية قابلة للانحناء بنسبة xx`,
                `قضبان جانبية لصندوق التحميل`,
                `خدمات كيا المتصلة* (غير متوفرة في سلطنة عُمان)`,
                `مفتاح ذكي`,
                `شاحن لاسلكي (مزدوج)`,
                `بطانة الصندوق`,
                `مقعد سائق مزود بخاصية الذاكرة`,
                `مرايا خارجية قابلة للطي كهربائياً`,
                `شاشة مراقبة النقطة العمياء`,
                `مقعد راكب بتحكم كهربائي`,
                `جيوب تخزين خلفية للمقاعد`,
                `منافذ USB لركاب المقاعد الخلفية`,
                `مساعد الركن الذكي عن بُعد`,
                `المفتاح الرقمي 2.0`,
                `مبدلات سرعة خلف المقود`,
                `مقاعد أمامية مزودة بتهوية وتدفئة`,
                `نظام مدمج للتحكم بمكابح المقطورة (ITBC)`,
                `عجلة قيادة مدفأة`

            ] : [
                    `Mechanical Differential Lock (for 4WD only)`,
                    `Telescopic Steering Wheel`,
                    `Electronic Parking Brake`,
                    `Electrically Adjustable Mirrors`,
                    `Auto Light Control`,
                    `Front, Rear and Side Parking Sensors`,
                    `Surround View Monitor`,
                    `Auto AC (2-zone)`,
                    `xx Rear Seat Folding`,
                    `Bed Side Rails`,
                    `Kia Connect* (not available in Oman)`,
                    `Smart Key`,
                    `Wireless Charger (dual)`,
                    `Bedliner`,
                    `Memory Driver Seat`,
                    `Electrically Foldable Mirrors`,
                    `Blind View Monitor`,
                    `Power Passenger Seat`,
                    `Seat Back Panels with Pockets`,
                    `USB Ports for Rear Passengers`,
                    `Remote Smart Parking Assist`,
                    `Digital Key 2.0`,
                    `Paddle Shifter`,
                    `Ventilated and Heated Front Seats`,
                    `Integrated Trailer Brake Control (ITBC)`,
                    `Heated Steering Wheel`
            ]
        },
        // {
        //     title: isArabic ? 'إكسسوارات' : 'Accessories',
        //     features: isArabic ? [
        //         "وصلة جر (ث / أسلاك )",
        //         "التخزين الجانبي",
        //         "درابزين مقبلات لون الجسم",
        //         "ملاحة. (تحويلة twlevee بوصة)+DAB",
        //         "ملاحة. (twlevee بوصة)",
        //         "مكيف الهواء العاكس 220 فولت"

        //     ] : [
        //         "Tow Hitch (W/ Wiring)",
        //         "Side Storage",
        //         "Fender Garnish; Body Color",
        //         `Navigation.(Ext. 12.3")+DAB`,
        //         `Navigation.(Int. 12.3")`,
        //         "A/C Inverter (220V)"

        //     ]
        // }

    ]




     const featureCategories4 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                `مصابيح LED أمامية بتقنية عالية الوضوح`,
                `إطارات مخصصة لجميع التضاريس (مع عجلات ألمنيوم مقاس 17 بوصة)`,
                `مصابيح LED خلفية`,
                `واقيات طين`,
                `قضبان سقف بتصميم الجسر`,
                `مصابيح LED أمامية للضباب`,
                `إضاءة ترحيبية`,
                `مجموعة التصميم الخارجي للطرق الوعرة`,
                `ارتفاع عن الأرض: +28 ملم`
            ] : [
                    `Projection LED Headlights`,
                    `All-terrain Tires (with 17" Alloy Wheels)`,
                    `Rear LED Lights`,
                    `Mud Guard`,
                    `Bridge-type Roof Rack`,
                    `Front Fog Lamps (LED)`,
                    `Puddle Lamp`,
                    `Off-road Exterior Design Pack`,
                    `Ground Clearance: +28mm`
            ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                `مقاعد من الجلد الصناعي بتطريز مبطن`,
                `شاشة مركزية مقاس 12 بوصة`,
                `شاشة عدادات رقمية مقاس 12 بوصة`,
                `نظام صوت فاخر من Harman / Kardon`,
                `عجلة قيادة مكسوة بالجلد الصناعي`,
                `مقبض ناقل حركة أوتوماتيكي مكسو بالجلد الصناعي`,
                `مقاعد أمامية مهوّاة ومقعد سائق بذاكرة`,
                `مقاعد خلفية قابلة للانحناء`,
                `مسند ذراع خلفي`,
                `فتحة سقف`,
                `إضاءة محيطية (المستوى twoo)`,
                `دواسات أرضية معدنية`

            ] : [

                    `Quilted Artificial Leather Seats`,
                    `12" Central Display`,
                    `12" Digital Cluster`,
                    `Harman / Kardon Premium Sound System`,
                    `Artificial Leather Steering Wheel`,
                    `Artificial Leather AT Knob`,
                    `Sliding and Reclining Rear Seats`,
                    `Rear Armrest`,
                    `Sunroof`,
                    `Mood Lamp (Level 2)`,
                    `Metal Pedals`


            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    `نظام المكابح المانعة للانغلاق (ABS)`,
                    `نظام التحكم الإلكتروني بالثبات (ESC)`,
                    `نظام التحكم في المكابح أثناء النزول من المنحدرات (DBC)`,
                    `نظام المساعدة على صعود المرتفعات (HAC)`,
                    `نظام المساعدة على ثبات المقطورة (TSA)`,
                    `وسائد هوائية أمامية`,
                    `عجلة احتياطية بالحجم الكامل`,
                    `وسائد هوائية جانبية وعلوية`,
                    `مساعد تفادي الاصطدام عند الرجوع للخلف`,
                    `مساعد تفادي الاصطدام الأمامي 1.5`,
                    `مثبّت سرعة ذكي مع خاصية التوقف والانطلاق`,
                    `مساعد الحفاظ على المسار`,
                    `مساعد تفادي الاصطدام في النقطة العمياء`,
                    `مساعد تفادي الاصطدام بحركة المرور الخلفية`
                ] : [
                    `ABS - Anti-lock Braking System`,
                    `ESC - Electronic Stability Control`,
                    `DBC - Downhill Brake Control`,
                    `HAC- Hill Start Assist Control`,
                    `TSA - Trailer Stability Assist`,
                    `Front Airbags`,
                    `Full-Size Spare Wheel`,
                    `Side and Curtain Airbags`,
                    `Reverse Parking Collision-Avoidance Assist`,
                    `Forward Collision-Avoidance Assist 1.5`,
                    `Smart Cruise Control with Stop & Go`,
                    `Lane Keeping Assist`,
                    `Blind-Spot Collision-Avoidance Assist`,
                    `Rear Cross-Traffic Collision-Avoidance Assist`


                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                `قفل تفاضلي إلكتروني`,
                `عجلة قيادة قابلة للامتداد`,
                `فرامل توقف إلكترونية`,
                `مرايا خارجية قابلة للتعديل كهربائياً`,
                `نظام التحكم التلقائي بالإضاءة`,
                `حساسات أمامية وخلفية وجانبية للمساعدة في الركن`,
                `شاشة الرؤية المحيطية`,
                `مكيف هواء أوتوماتيكي (منطقتان)`,
                `مقاعد خلفية قابلة للانحناء بنسبة xx`,
                `قضبان جانبية لصندوق التحميل`,
                `خدمات كيا المتصلة* (غير متوفرة في سلطنة عُمان)`,
                `مفتاح ذكي`,
                `شاحن لاسلكي (مزدوج)`,
                `بطانة الصندوق`,
                `مقعد سائق مزود بخاصية الذاكرة`,
                `مرايا خارجية قابلة للطي كهربائياً`,
                `شاشة مراقبة النقطة العمياء`,
                `مقعد راكب بتحكم كهربائي`,
                `جيوب تخزين خلفية للمقاعد`,
                `منافذ USB لركاب المقاعد الخلفية`,
                `مبدلات سرعة خلف المقود`,
                `مقاعد أمامية مزودة بتهوية وتدفئة`,
                `نظام مدمج للتحكم بمكابح المقطورة (ITBC)`,
                `عجلة قيادة مدفأة`,
                `وضع X-TREK`

            ] : [
                    `Electronic Differential Lock`,
                    `Telescopic Steering Wheel`,
                    `Electronic Parking Brake`,
                    `Electrically Adjustable Mirrors`,
                    `Auto Light Control`,
                    `Front, Rear and Side Parking Sensors`,
                    `Surround View Monitor`,
                    `Auto AC (2-zone)`,
                    `xx Rear Seat Folding`,
                    `Bed Side Rails`,
                    `Kia Connect* (not available in Oman)`,
                    `Smart Key`,
                    `Wireless Charger (single)`,
                    `Bedliner`,
                    `Memory Driver Seat`,
                    `Electrically Foldable Mirrors`,
                    `Blind View Monitor`,
                    `Power Passenger Seat`,
                    `Seat Back Panels with Pockets`,
                    `USB Ports for Rear Passengers`,
                    `Paddle Shifter`,
                    `Ventilated and Heated Front Seats`,
                    `Integrated Trailer Brake Control (ITBC)`,
                    `Heated Steering Wheel`,
                    `X-TREK Mode`
            ]
        },
        // {
        //     title: isArabic ? 'إكسسوارات' : 'Accessories',
        //     features: isArabic ? [
        //         "وصلة جر (ث / أسلاك )",
        //         "التخزين الجانبي",
        //         "درابزين مقبلات لون الجسم",
        //         "ملاحة. (تحويلة twlevee بوصة)+DAB",
        //         "ملاحة. (twlevee بوصة)",
        //         "مكيف الهواء العاكس 220 فولت"

        //     ] : [
        //         "Tow Hitch (W/ Wiring)",
        //         "Side Storage",
        //         "Fender Garnish; Body Color",
        //         `Navigation.(Ext. 12.3")+DAB`,
        //         `Navigation.(Int. 12.3")`,
        //         "A/C Inverter (220V)"

        //     ]
        // }

    ]
     const featureCategories5 = [
        {
            title: isArabic ? 'التصميم الخارجي' : 'EXTERIOR',
            features: isArabic ? [
                `مصابيح LED أمامية بتقنية عالية الوضوح`,
                `إطارات مخصصة لجميع التضاريس (مع عجلات ألمنيوم مقاس 17 بوصة)`,
                `مصابيح LED خلفية`,
                `واقيات طين`,
                `قضبان سقف بتصميم الجسر`,
                `مصابيح LED أمامية للضباب`,
                `إضاءة ترحيبية`,
                `مجموعة التصميم الخارجي للطرق الوعرة`,
                `ارتفاع عن الأرض: +28 ملم`
            ] : [
                    `Projection LED Headlights`,
                    `All-terrain Tires (with 17" alloy wheel)`,
                    `Rear LED Lights`,
                    `Mud Guard`,
                    `Bridge-type Roof Rack`,
                    `Front Fog Lamps (LED)`,
                    `Puddle Lamp`,
                    `Off-road Exterior Design Pack`,
                    `Ground Clearance: +28mm`
            ]
        },
        {
            title: isArabic ? 'التصميم الداخلي' : 'INTERIOR',
            features: isArabic ? [
                `مقاعد من الجلد الصناعي بتطريز مبطن`,
                `شاشة مركزية مقاس 12 بوصة`,
                `شاشة عدادات رقمية مقاس 12 بوصة`,
                `نظام صوت فاخر من Harman / Kardon`,
                `عجلة قيادة مكسوة بالجلد الصناعي`,
                `نظام نقل حركة إلكتروني وطاولة مركزية`,
                `مقاعد خلفية قابلة للانحناء`,
                `مسند ذراع خلفي`,
                `فتحة سقف`,
                `إضاءة محيطية (المستوى twoo)`,
                `دواسات أرضية معدنية`

            ] : [

                    `Quilted Artificial Leather Seats`,
                    `12" Central Display`,
                    `12" Digital Cluster`,
                    `Harman / Kardon Premium Sound System`,
                    `Artificial Leather Steering Wheel`,
                    `Shift By Wire & Console Table`,
                    `Sliding and Reclining Rear Seats`,
                    `Rear Armrest`,
                    `Sunroof`,
                    `Mood Lamp (Level 2)`,
                    `Metal Pedals`


            ]
        },
        {
            title: isArabic ? 'السلامة' : 'SAFETY',
            features: isArabic ?
                [
                    `نظام المكابح المانعة للانغلاق (ABS)`,
                    `نظام التحكم الإلكتروني بالثبات (ESC)`,
                    `نظام التحكم في المكابح أثناء النزول من المنحدرات (DBC)`,
                    `نظام المساعدة على صعود المرتفعات (HAC)`,
                    `نظام المساعدة على ثبات المقطورة (TSA)`,
                    `وسائد هوائية أمامية`,
                    `عجلة احتياطية بالحجم الكامل`,
                    `وسائد هوائية جانبية وعلوية`,
                    `مساعد تفادي الاصطدام عند الرجوع للخلف`,
                    `مساعد تفادي الاصطدام الأمامي 2.0`,
                    `مثبّت سرعة ذكي مع خاصية التوقف والانطلاق`,
                    `مساعد الحفاظ على المسار`,
                    `مساعد تفادي الاصطدام في النقطة العمياء`,
                    `مساعد تفادي الاصطدام بحركة المرور الخلفية`
                ] : [
                    `ABS - Anti lock Braking System`,
                    `ESC - Electronic Stability Control`,
                    `DBC - Downhill Brake Control`,
                    `HAC- Hill start Assist Control`,
                    `TSA - Trailer Stability Assist`,
                    `Front Airbags`,
                    `Full-Size Spare Wheel`,
                    `Side and Curtain Airbags`,
                    `Reverse Parking Collision-Avoidance Assist`,
                    `Forward Collision-Avoidance Assist 2.0`,
                    `Smart Cruise Control with Stop & Go`,
                    `Lane Keeping Assist`,
                    `Blind-Spot Collision-Avoidance Assist`,
                    `Rear Cross-Traffic Collision-Avoidance Assist`
                ]
        },
        {
            title: isArabic ? 'وسائل الراحة' : 'CONVENIENCE',
            features: isArabic ? [
                `قفل تفاضلي إلكتروني`,
                `عجلة قيادة قابلة للامتداد`,
                `فرامل توقف إلكترونية`,
                `مرايا خارجية قابلة للتعديل كهربائياً`,
                `نظام التحكم التلقائي بالإضاءة`,
                `حساسات أمامية وخلفية وجانبية للمساعدة في الركن`,
                `شاشة الرؤية المحيطية`,
                `مكيف هواء أوتوماتيكي (منطقتان)`,
                `مقاعد خلفية قابلة للانحناء بنسبة xx`,
                `قضبان جانبية لصندوق التحميل`,
                `خدمات كيا المتصلة* (غير متوفرة في سلطنة عُمان)`,
                `مفتاح ذكي`,
                `شاحن لاسلكي (مزدوج)`,
                `بطانة الصندوق`,
                `مقعد سائق مزود بخاصية الذاكرة`,
                `مرايا خارجية قابلة للطي كهربائياً`,
                `شاشة مراقبة النقطة العمياء`,
                `مقعد راكب بتحكم كهربائي`,
                `جيوب تخزين خلفية للمقاعد`,
                `منافذ USB لركاب المقاعد الخلفية`,
                `مساعد الركن الذكي عن بُعد`,
                `المفتاح الرقمي 2.0`,
                `مبدلات سرعة خلف المقود`,
                `مقاعد أمامية مزودة بتهوية وتدفئة`,
                `نظام مدمج للتحكم بمكابح المقطورة (ITBC)`,
                `عجلة قيادة مدفأة`,
                `وضع X-TREK`

            ] : [
                    `Electronic Differential Lock`,
                    `Telescopic Steering Wheel`,
                    `Electronic Parking Brake`,
                    `Electrically Adjustable Mirrors`,
                    `Auto Light Control`,
                    `Front, Rear and Side Parking Sensors`,
                    `Surround View Monitor`,
                    `Auto AC (2-zone)`,
                    `xx Rear Seat Folding`,
                    `Bed Side Rails`,
                    `Kia Connect* (not available in Oman)`,
                    `Smart Key`,
                    `Wireless Charger (dual)`,
                    `Bedliner`,
                    `Memory Driver Seat`,
                    `Electrically Foldable Mirrors`,
                    `Blind View Monitor`,
                    `Power Passenger Seat`,
                    `Seat Back Panels with Pockets`,
                    `USB ports for Rear Passengers`,
                    `Remote Smart Parking Assist`,
                    `Digital Key 2.0`,
                    `Paddle Shifter`,
                    `Ventilated and Heated Front Seats`,
                    `Integrated Trailer Brake Control (ITBC)`,
                    `Heated Steering Wheel`,
                    `X-TREK Mode`
            ]
        },
      

    ]
    return {
        featureCategories,
        featureCategories1,
        featureCategories2,
        featureCategories3,
        featureCategories4,
        featureCategories5,
    }
}