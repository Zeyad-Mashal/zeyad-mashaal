import React from "react";
import {
  FaMobileAlt,
  FaGlobe,
  FaPaintBrush,
  FaObjectGroup,
} from "react-icons/fa";
import { MdOutlineAnimation } from "react-icons/md";

const OurServices = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10" dir="rtl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا</h2>
        <p className="text-gray-600 mb-12 text-lg">
          نقدم حلولاً برمجية متكاملة تشمل تصميم التطبيقات والمواقع، واجهات
          المستخدم، الجرافيك، والموشن جرافيك.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* تطبيقات الهاتف */}
          <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition duration-300">
            <div className="text-blue-600 text-5xl mb-4 flex justify-center">
              <FaMobileAlt />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              تطوير تطبيقات الهاتف
            </h3>
            <p className="text-gray-600">
              نصمم ونطور تطبيقات تعمل على أنظمة Android وiOS لتخدم نشاطك التجاري
              بكفاءة.
            </p>
          </div>

          {/* تصميم المواقع */}
          <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition duration-300">
            <div className="text-blue-600 text-5xl mb-4 flex justify-center">
              <FaGlobe />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              تصميم وتطوير المواقع
            </h3>
            <p className="text-gray-600">
              نبني مواقع عصرية وسريعة الاستجابة تعكس هوية شركتك وتُعزز تواجدك
              الرقمي.
            </p>
          </div>

          {/* UI/UX */}
          <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition duration-300">
            <div className="text-blue-600 text-5xl mb-4 flex justify-center">
              <FaObjectGroup />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              تصميم واجهات المستخدم (UI/UX)
            </h3>
            <p className="text-gray-600">
              نصمم تجارب مستخدم سلسة وواجهة أنيقة تضمن تفاعلًا سهلاً وفعالاً مع
              عملائك.
            </p>
          </div>

          {/* جرافيك ديزاين */}
          <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition duration-300">
            <div className="text-blue-600 text-5xl mb-4 flex justify-center">
              <FaPaintBrush />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              الجرافيك ديزاين
            </h3>
            <p className="text-gray-600">
              نصمم شعارات، منشورات، وهوية بصرية كاملة تبرز علامتك التجارية
              باحتراف.
            </p>
          </div>

          {/* موشن جرافيك */}
          <div className="bg-gray-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition duration-300">
            <div className="text-blue-600 text-5xl mb-4 flex justify-center">
              <MdOutlineAnimation />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              موشن جرافيك
            </h3>
            <p className="text-gray-600">
              نصمم فيديوهات موشن جذابة توصل فكرتك بأسلوب عصري وجذاب يعزز تواصلك
              مع العملاء.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
