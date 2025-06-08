import React, { useRef } from "react";
import {
  FaMobileAlt,
  FaGlobe,
  FaPaintBrush,
  FaObjectGroup,
} from "react-icons/fa";
import { MdOutlineAnimation } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "تطوير تطبيقات الهاتف",
    description:
      "نصمم ونطور تطبيقات تعمل على أنظمة Android وiOS لتخدم نشاطك التجاري بكفاءة.",
  },
  {
    icon: <FaGlobe />,
    title: "تصميم وتطوير المواقع",
    description:
      "نبني مواقع عصرية وسريعة الاستجابة تعكس هوية شركتك وتُعزز تواجدك الرقمي.",
  },
  {
    icon: <FaObjectGroup />,
    title: "تصميم واجهات المستخدم (UI/UX)",
    description:
      "نصمم تجارب مستخدم سلسة وواجهة أنيقة تضمن تفاعلًا سهلاً وفعالاً مع عملائك.",
  },
  {
    icon: <FaPaintBrush />,
    title: "الجرافيك ديزاين",
    description:
      "نصمم شعارات، منشورات، وهوية بصرية كاملة تبرز علامتك التجارية باحتراف.",
  },
  {
    icon: <MdOutlineAnimation />,
    title: "موشن جرافيك",
    description:
      "نصمم فيديوهات موشن جذابة توصل فكرتك بأسلوب عصري وجذاب يعزز تواصلك مع العملاء.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10" dir="rtl" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا</h2>
        <p className="text-gray-600 mb-12 text-lg">
          نقدم حلولاً برمجية متكاملة تشمل تصميم التطبيقات والمواقع، واجهات
          المستخدم، الجرافيك، والموشن جرافيك.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition duration-300"
              >
                <div className="text-blue-600 text-5xl mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
