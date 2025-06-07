import React from "react";
import earth from "../../assets/earth.mp4";
const Hero = () => {
  return (
    <section
      className="relative bg-white pt-24 pb-28 px-6 md:px-16 text-black"
      dir="rtl"
    >
      {/* تراكب تموجات شفافة على اليمين */}
      <div className="absolute top-0 right-0 h-full w-1/3 pointer-events-none">
        <svg
          className="h-full w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path fill="white" fillOpacity="0.1" d="M0 0 L100 0 L100 100 Z" />
          <circle cx="80" cy="50" r="40" fill="white" fillOpacity="0.05" />
          <circle cx="60" cy="30" r="20" fill="white" fillOpacity="0.1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src={earth}
            alt="تطوير التطبيقات والمواقع"
            loop
            autoPlay
            muted
            className="max-w-full h-auto object-cover md:object-contain border-none"
          />
        </div>

        <div className="w-full md:w-1/2 text-right">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide mb-8 drop-shadow-lg">
            كل الحلول البرمجية في مكان واحد
          </h1>
          <p className="text-black text-xl max-w-lg mb-12 leading-relaxed">
            نصمم ونطور تطبيقات الهاتف والمواقع الإلكترونية باحترافية لتناسب
            احتياجاتك التجارية، من البداية حتى الإطلاق.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-700 shadow-lg hover:shadow-xl text-white text-lg font-semibold px-10 py-4 rounded-3xl transition-all duration-300"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
