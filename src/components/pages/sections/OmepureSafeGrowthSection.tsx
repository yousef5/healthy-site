interface OmepureSafeGrowthSectionProps {
  isArabic: boolean;
}

export const OmepureSafeGrowthSection = ({
  isArabic,
}: OmepureSafeGrowthSectionProps) => {
  const benefits = {
    en: {
      title: "Safe Growth Plan",
      subtitle: "Has a Very Important Role in",
      categories: {
        baby: "BABY",
        mother: "MOTHER",
        family: "ALL FAMILY",
      },
      babyBenefits: [
        "Increase growth rate to infants when take it by pregnant woman",
        "Increase weight gain for infant (premature or mature)",
        "Increase intelligence",
        "Better communication & social skills",
        "Decrease risk of ADHD",
      ],
      supportAreas: [
        "Brain Function",
        "EYES",
        "Cognitive Development",
        "Nervous System Development",
        "Prevention of Cerebral Palsy",
      ],
      developmentBenefits: [
        "Decrease Risk of developmental delay",
        "Protect Embryonic Development Stages",
        "Increase Placental Blood Flow",
        "Optimizing Birth Weight",
        "Beneficial effects against preterm delivery",
        "Development Of Neurological",
      ],
      healthBenefits: [
        "HDL ↑",
        "Obesity ↓",
        "Triglycerides ↓",
        "Reduce production of molecules & substances linked to inflammation",
        "Keep blood platelets from clumping together",
        "Keep arteries smooth & free from damage",
        "Decrease risk of intracranial hemorrhage",
        "Bone and joint health",
      ],
    },
    ar: {
      title: "خطة النمو الآمن",
      subtitle: "لديها دور مهم جداً في",
      categories: {
        baby: "الطفل",
        mother: "الأم",
        family: "العائلة",
      },
      babyBenefits: [
        "زيادة معدل نمو الرضع عند تناوله من قبل المرأة الحامل",
        "زيادة الوزن للرضيع (المبتسر أو الناضج)",
        "زيادة الذكاء",
        "تحسين مهارات التواصل والمهارات الاجتماعية",
        "تقليل خطر اضطراب نقص الانتباه وفرط الحركة",
      ],
      supportAreas: [
        "وظائف الدماغ",
        "العيون",
        "التطور المعرفي",
        "تطور الجهاز العصبي",
        "الوقاية من الشلل الدماغي",
      ],
      developmentBenefits: [
        "تقليل خطر تأخر النمو",
        "حماية مراحل تطور الجنين",
        "زيادة تدفق الدم المشيمي",
        "تحسين وزن الولادة",
        "آثار مفيدة ضد الولادة المبكرة",
        "تطور الجهاز العصبي",
      ],
      healthBenefits: [
        "↑ HDL",
        "↓ السمنة",
        "↓ الدهون الثلاثية",
        "تقليل إنتاج الجزيئات والمواد المرتبطة بالالتهاب",
        "منع تجمع الصفائح الدموية",
        "الحفاظ على الشرايين سلسة وخالية من الضرر",
        "تقليل خطر النزيف داخل الجمجمة",
        "صحة العظام والمفاصل",
      ],
    },
  };

  const content = isArabic ? benefits.ar : benefits.en;

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            {content.title}
          </h2>
          <p className="text-2xl text-slate-700 dark:text-slate-300">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {Object.entries(content.categories).map(([key, value]) => (
            <div
              key={key}
              className="bg-gradient-to-br from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-red-950/30 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold drop-shadow-sm">{value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">
              Baby Benefits
            </h3>
            <ul className="space-y-2">
              {content.babyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-red-500 dark:text-red-400 mr-2 transform transition-transform duration-300 group-hover:scale-125">
                    •
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700/50">
              <h4 className="font-bold text-red-600 dark:text-red-400 mb-3">
                Support Areas:
              </h4>
              <ul className="space-y-2">
                {content.supportAreas.map((area, index) => (
                  <li key={index} className="flex items-center group">
                    <span className="text-emerald-500 dark:text-emerald-400 mr-2 transform transition-transform duration-300 group-hover:scale-125">
                      ✓
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-red-50/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100/50 dark:border-slate-700/50">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">
              Development Benefits
            </h3>
            <ul className="space-y-2">
              {content.developmentBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-red-500 dark:text-red-400 mr-2 transform transition-transform duration-300 group-hover:scale-125">
                    •
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">
              Health Benefits
            </h3>
            <ul className="space-y-2">
              {content.healthBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-red-500 dark:text-red-400 mr-2 transform transition-transform duration-300 group-hover:scale-125">
                    •
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
