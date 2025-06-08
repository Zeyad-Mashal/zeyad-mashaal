import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaClipboardList,
  FaCommentDots,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "",
    message: "",
  });

  const plans = [
    "تصميم متجر - 2500 ريال",
    "متجر بورتفوليو - 1800 ريال",
    "فكرة متجر جديدة",
    "تطبيق أعمال - 2500 ريال",
    "تطبيق بورتفوليو - 2000 ريال",
    "فكرة تطبيق جديدة",
    "متجر + تطبيق - 5000 ريال",
    "بورتفوليو شامل - 4000 ريال",
    "فكرة جديدة متكاملة",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("تم إرسال الرسالة بنجاح!");
  };

  return (
    <section
      className="relative bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-12"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 md:p-14">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          تواصل معنا
        </h2>

        {/* نلف الفورم داخل motion.div */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* الاسم */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaUser className="text-blue-600 ml-3 text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="الاسم الكامل"
              className="flex-grow outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* رقم الجوال */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaPhone className="text-blue-600 ml-3 text-xl" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="رقم الجوال"
              className="flex-grow outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* البريد الإلكتروني */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaEnvelope className="text-blue-600 ml-3 text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="البريد الإلكتروني"
              className="flex-grow outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* اختيار الباقة */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaClipboardList className="text-blue-600 ml-3 text-xl" />
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              required
              className="flex-grow outline-none bg-white text-gray-700 cursor-pointer"
            >
              <option value="" disabled>
                اختر نوع الباقة
              </option>
              {plans.map((plan, index) => (
                <option key={index} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>

          {/* الرسالة */}
          <div className="flex items-start border border-gray-300 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <FaCommentDots className="text-blue-600 ml-3 mt-2 text-xl" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="رسالتك"
              className="flex-grow resize-none outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* زر الإرسال */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 font-semibold"
            >
              إرسال الرسالة
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
