import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const plansData = [
  {
    title: "باقات المتاجر الإلكترونية",
    items: [
      {
        name: "تصميم متجر",
        price: "2800 ريال",
        features: [
          "تصميم احترافي",
          "متوافق مع الجوال",
          "ربط بوابات الدفع",
          "لوحة تحكم سهلة",
          "دعم فني لمدة شهر",
        ],
      },
      {
        name: "متجر بورتفوليو",
        price: "1800 ريال",
        features: [
          "عرض أعمالك بشكل احترافي",
          "تصميم بسيط وجذاب",
          "صفحة تواصل",
          "تحسين محركات البحث",
        ],
      },
      {
        name: "فكرة جديدة",
        price: "تواصل معنا",
        features: [
          "ننفذ فكرتك من الصفر",
          "تصميم مخصص بالكامل",
          "تحليل احتياجاتك",
        ],
        contact: true,
      },
    ],
  },
  {
    title: "باقات التطبيقات",
    items: [
      {
        name: "تطبيق متجر",
        price: "3200 ريال",
        features: [
          "تطبيق أندرويد و iOS",
          "واجهة مستخدم حديثة",
          "دعم للإشعارات والتنبيهات",
          "لوحة تحكم لإدارة المحتوى",
        ],
      },
      {
        name: "تطبيق بورتفوليو",
        price: "2200 ريال",
        features: [
          "عرض أعمالك وتواصلك مع العملاء",
          "أداء سريع وخفيف",
          "تصميم أنيق",
        ],
      },
      {
        name: "فكرة تطبيق جديدة",
        price: "تواصل معنا",
        features: [
          "تطبيق حسب الطلب",
          "بناء مخصص للفكرة",
          "استشارة تقنية مجانية",
        ],
        contact: true,
      },
    ],
  },
  {
    title: "باقات تطبيق + موقع",
    items: [
      {
        name: "متجر + تطبيق",
        price: "5500 ريال",
        features: [
          "موقع متجر + تطبيق مرتبط",
          "نظام متكامل بين الموقع والتطبيق",
          "تصميم احترافي موحّد",
          "بوابات دفع مشتركة",
        ],
      },
      {
        name: "بورتفوليو شامل",
        price: "3500 ريال",
        features: [
          "تطبيق + موقع بورتفوليو",
          "عرض احترافي للأعمال",
          "سهولة التحديث",
        ],
      },
      {
        name: "فكرة جديدة متكاملة",
        price: "تواصل معنا",
        features: [
          "موقع + تطبيق مخصص للفكرة",
          "خطة تطوير شاملة",
          "تحليل احترافي",
        ],
        contact: true,
      },
    ],
  },
];

const PlanCard = ({ plan, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition"
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {plan.name}
        </h3>
        <p className="text-blue-600 text-lg font-bold mb-4">{plan.price}</p>
        <ul className="text-gray-600 mb-6 space-y-2 text-sm">
          {plan.features.map((feature, i) => (
            <li key={i}>• {feature}</li>
          ))}
        </ul>
      </div>
      {plan.contact && (
        <a
          href="#contact"
          className="mt-auto inline-block bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          تواصل معنا
        </a>
      )}
    </motion.div>
  );
};

const Plans = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {plansData.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {section.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {section.items.map((plan, i) => (
                <PlanCard key={i} plan={plan} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
