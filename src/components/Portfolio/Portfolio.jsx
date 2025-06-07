import React, { useState } from "react";
import image1 from "../../assets/mira4k.png";
import image2 from "../../assets/mockup.png";
import image3 from "../../assets/mymind-responsive.png";
import image4 from "../../assets/pokedex-responsive.png";
const projects = [
  {
    title: "متجر إلكتروني احترافي",
    description: "منصة بيع منتجات كاملة مع بوابة دفع.",
    image: image1,
    url: "https://your-store-link.com",
    category: "موقع",
  },
  {
    title: "تطبيق خدمات",
    description: "تطبيق حجز خدمات مع إشعارات ولوحة تحكم.",
    image: image2,
    url: "https://your-app-link.com",
    category: "تطبيق",
  },
  {
    title: "موقع بورتفوليو شخصي",
    description: "عرض الأعمال والسيرة الذاتية بشكل أنيق.",
    image: image3,
    url: "https://your-portfolio-link.com",
    category: "موقع",
  },
  {
    title: "تطبيق إدارة مهام",
    description: "تطبيق لإدارة وتنظيم المهام والمشاريع.",
    image: image4,
    url: "https://your-task-app.com",
    category: "تطبيق",
  },
];

const categories = ["الكل", "موقع", "تطبيق"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects =
    activeCategory === "الكل"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-white py-16 px-6 md:px-12" dir="rtl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">أعمالنا</h2>
        <p className="text-gray-600 text-lg mb-8">
          إليك بعض المشاريع التي عملنا عليها باحترافية
        </p>

        {/* الفلاتر */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition duration-300 text-sm font-medium ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* المشاريع */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-right">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  عرض المشروع
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* في حال لا يوجد نتائج */}
        {filteredProjects.length === 0 && (
          <p className="text-gray-500 mt-10">لا توجد مشاريع تحت هذا التصنيف.</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
