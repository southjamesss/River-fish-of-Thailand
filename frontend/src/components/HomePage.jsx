import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ✅ รายการภาพและชื่อปลา
const imageList = [
  { src: "/images/fish1.jpg", name: "ปลากระสูบ" },
  { src: "/images/fish2.jpg", name: "ปลาตะเพียน" },
  { src: "/images/fish3.jpg", name: "ปลาบึก" },
  { src: "/images/fish4.jpg", name: "ปลากระเบนราหูน้ำจืด" },
  { src: "/images/fish5.jpg", name: "ปลากระโห้" },
  { src: "/images/fish6.jpg", name: "ปลาช่อน" },
  { src: "/images/fish7.jpg", name: "ปลาดุกด้าน" },
  { src: "/images/fish8.jpg", name: "ปลาสร้อยขาว" },
  { src: "/images/fish9.jpg", name: "ปลานิล" },
  { src: "/images/fish10.jpg", name: "ปลากราย" },
  { src: "/images/fish11.jpg", name: "ปลากระทิง" },
  { src: "/images/fish12.jpg", name: "ปลากระแห" },
  { src: "/images/fish13.jpg", name: "ปลากระมัง" },
  { src: "/images/fish14.jpg", name: "ปลากระสูบขีด" },
  { src: "/images/fish15.jpg", name: "ปลากระสูบจุด" },
  { src: "/images/fish16.jpg", name: "ปลากระสูบสาละวิน" },
  { src: "/images/fish17.jpg", name: "ปลากระเบนลายเสือ" },
  { src: "/images/fish18.jpg", name: "ปลากระเบนลาว" },
  { src: "/images/fish19.jpg", name: "ปลากระมังครีบสูง" },
  { src: "/images/fish20.jpg", name: "ปลากระสง" },
  { src: "/images/fish21.jpg", name: "ปลากรายอินเดีย" },
  { src: "/images/fish22.jpg", name: "ปลากริมมุก" },
  { src: "/images/fish23.jpg", name: "ปลากะพงข้างปาน" },
  { src: "/images/fish24.jpg", name: "ปลากะพงขาว" },
  { src: "/images/fish25.jpg", name: "ปลากะพงลาย" },
  { src: "/images/fish26.jpg", name: "ปลากะแมะ" },
  { src: "/images/fish27.jpg", name: "ปลากะพงขาว" },
  { src: "/images/fish28.jpg", name: "ปลากะพงข้างปาน" },
  { src: "/images/fish29.jpg", name: "ปลากรายอินเดีย" },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
  
      setTimeout(() => {
        setIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % imageList.length;
          console.log("เปลี่ยนภาพเป็น index:", nextIndex);
          return nextIndex;
        });
        setFade(true);
      }, 300);
    }, 3000);
  
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center transition duration-500 ease-in-out">
      <img
        key={index}
        src={imageList[index].src}
        alt={imageList[index].name}
        className={`w-full max-w-lg rounded-xl drop-shadow-lg mx-auto transform transition-all duration-700 ease-in-out
          ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      />
      <p className="mt-4 text-lg text-green-700 font-semibold transition-opacity duration-700 ease-in-out">
        {imageList[index].name}
      </p>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-green-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-12 py-6 bg-white bg-opacity-50 backdrop-blur-md fixed top-0 shadow-md z-10">
        <h1 className="text-2xl font-extrabold text-gray-800">THAI FRESHWATER FISH</h1>
        <ul className="flex flex-wrap items-center gap-4 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-green-600 cursor-pointer">Home</Link></li>
          <li><Link to="/species" className="hover:text-green-600 cursor-pointer">Species</Link></li>
          <li><Link to="/conservation" className="hover:text-green-600 cursor-pointer">Conservation</Link></li>
          <li><Link to="/about" className="hover:text-green-600 cursor-pointer">About</Link></li>
          <li className="ml-auto">
            <Link to="/about">
              <button className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-green-700 transition">
                Learn More
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow mt-24 px-6 md:px-16">
        {/* Left */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-green-700 leading-tight">
            ปลาน้ำจืด <span className="text-green-500">ในประเทศไทย</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
            ประเทศไทยมีปลาน้ำจืดมากกว่า 500 สายพันธุ์ เช่น ปลากระสูบ ปลาตะเพียน และปลาบึก
            ซึ่งมีความสำคัญต่อระบบนิเวศและวิถีชีวิตของคนไทย
          </p>
          <Link to="/species">
            <button className="bg-green-600 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition">
              สำรวจสายพันธุ์
            </button>
          </Link>
        </div>

        {/* Right */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

// ✅ Pages ย่อย
export const Species = () => (
  <div className="min-h-screen flex items-center justify-center bg-green-50">
    <h1 className="text-4xl font-bold text-green-700">หน้าสายพันธุ์ปลา (Species Page)</h1>
  </div>
);

export const Conservation = () => (
  <div className="min-h-screen flex items-center justify-center bg-green-50">
    <h1 className="text-4xl font-bold text-green-700">หน้าการอนุรักษ์ (Conservation Page)</h1>
  </div>
);

export const About = () => (
  <div className="min-h-screen flex items-center justify-center bg-green-50">
    <h1 className="text-4xl font-bold text-green-700">เกี่ยวกับเรา (About Page)</h1>
  </div>
);

export default HomePage;