import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* القسم الأول: شعار أو اسم الشركة */}
        <div>
          <h2 className="text-xl font-bold mb-4">شركة الحلول البرمجية</h2>
          <p className="text-gray-400 text-sm">
            نقدم خدمات تصميم وتطوير المواقع والتطبيقات باحترافية لتناسب كافة
            الأعمال التجارية.
          </p>
        </div>

        {/* القسم الثاني: روابط سريعة */}
        <div>
          <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                خدماتنا
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:text-white transition">
                الباقات
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

        {/* القسم الثالث: معلومات التواصل */}
        <div>
          <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📞 0555555555</li>
            <li>📧 info@company.com</li>
            <li>📍 الرياض - المملكة العربية السعودية</li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} جميع الحقوق محفوظة | شركة الحلول البرمجية
      </div>
    </footer>
  );
};

export default Footer;
