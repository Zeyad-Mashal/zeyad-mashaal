import React from "react";
import { motion } from "framer-motion";
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

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-between gap-16">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            src={earth}
            loop
            autoPlay
            muted
            playsInline
            preload="auto"
            className="max-w-full h-auto object-cover md:object-contain border-none"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-blue-950 text-4xl md:text-6xl font-bold leading-snug tracking-wide mb-6 font-[Cairo]">
            كل الحلول البرمجية في مكان واحد
          </h1>

          <div className="text-gray-700 text-lg max-w-lg mb-10 space-y-4 mx-auto md:mx-0 leading-relaxed">
            <p>
              نصمم ونطور تطبيقات الهاتف والمواقع الإلكترونية باحترافية لتناسب
              احتياجاتك التجارية، من البداية حتى الإطلاق.
            </p>
            <p>
              شركة برمجيات متخصصة تقدم حلول تقنية مبتكرة تساعدك على النمو وتحقيق
              أهدافك بسرعة وفعالية.
            </p>
          </div>

          <motion.a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 active:bg-blue-700 shadow-lg hover:shadow-xl text-white text-lg font-semibold px-7 py-3 rounded-3xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            تواصل معنا الآن
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
