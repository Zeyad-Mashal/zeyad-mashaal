import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "خدماتنا", href: "#services" },
    { name: "مشاريعنا", href: "#portfolio" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav
      className="bg-[#0D1B2A] text-white fixed w-full z-50 shadow-lg"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* شعار الشركة */}
        <div className="text-2xl font-bold tracking-widest cursor-pointer select-none">
          <span className="text-blue-500">Code</span>Lab
        </div>

        {/* روابط الناف بار Desktop */}
        <ul className="hidden md:flex space-x-8 space-x-reverse text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* زرار التواصل على الديسكتوب */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-5 py-2 rounded-lg font-semibold shadow"
        >
          تواصل معنا
        </a>

        {/* زر القائمة للهاتف */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* قائمة الهاتف */}
      {isOpen && (
        <div className="md:hidden bg-[#112D4E] px-6 py-6 space-y-6 text-right font-semibold text-lg">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className=" block hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-600 hover:bg-blue-700 text-center rounded-lg py-3 mt-4 shadow"
          >
            تواصل معنا
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarMenu;
