// src/components/SpeciesPage.jsx
import React from "react";

const SpeciesPage = () => {
  return (
    <div className="min-h-screen bg-green-50 px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 text-center mb-10">
        สายพันธุ์ปลาน้ำจืดในประเทศไทย
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ตัวอย่างรายการปลา */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish1.jpg" alt="ปลากระสูบ" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">ปลากระสูบ</h2>
          <p className="text-gray-600">ปลาน้ำจืดขนาดกลาง พบมากในแม่น้ำสายต่างๆ ของประเทศไทย</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish2.jpg" alt="ปลาตะเพียน" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">ปลาตะเพียน</h2>
          <p className="text-gray-600">ปลาสวยงามที่นิยมเลี้ยงและพบได้ทั่วไปในแม่น้ำ</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish3.jpg" alt="ปลาบึก" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">ปลาบึก</h2>
          <p className="text-gray-600">ปลาขนาดใหญ่ของแม่น้ำโขง มีความสำคัญทางเศรษฐกิจและอนุรักษ์</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish4.jpg" alt="ปลากระเบนราหูน้ำจืด" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">ปลากระเบนราหูน้ำจืด</h2>
          <p className="text-gray-600">ปลากระเบนน้ำจืดขนาดใหญ่ พบในแม่น้ำสายหลักของไทย</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish5.jpg" alt="ปลากระโห้" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระโห้ </h2>
          <p className="text-gray-600">ปลาขนาดใหญ่ที่พบในแม่น้ำเจ้าพระยาและแม่กลอง มีความสำคัญทางเศรษฐกิจ</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish6.jpg" alt="ปลาช่อน" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลาช่อน </h2>
          <p className="text-gray-600">ปลานักล่าที่พบได้ทั่วไปในแหล่งน้ำนิ่งและน้ำไหลช้า</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish7.jpg" alt="ปลาดุกด้าน" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลาดุกด้าน  </h2>
          <p className="text-gray-600">ปลาหนังที่นิยมเลี้ยงเพื่อการบริโภค โตเร็วและเลี้ยงง่าย</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish8.jpg" alt="ปลาสร้อยขาว" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลาสร้อยขาว  </h2>
          <p className="text-gray-600">ปลาขนาดเล็กที่พบในแม่น้ำและอ่างเก็บน้ำ มักใช้ทำปลาร้า</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish9.jpg" alt="ปลานิล" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลานิล  </h2>
          <p className="text-gray-600">ปลาที่นำเข้ามาเลี้ยงและแพร่หลายทั่วประเทศ เนื้ออร่อยและเลี้ยงง่าย</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish10.jpg" alt="ปลากราย" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากราย </h2>
          <p className="text-gray-600">ปลาที่มีเนื้อเหนียว นิยมนำมาทำลูกชิ้นปลา</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish11.jpg" alt="ปลากระทิง" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระทิง  </h2>
          <p className="text-gray-600">ปลาที่มีรูปร่างยาวเรียว พบในแม่น้ำสายหลัก</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish12.jpg" alt="ปลากระแห" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระแห </h2>
          <p className="text-gray-600">ปลาที่พบในแม่น้ำและลำคลอง กินพืชเป็นอาหาร</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish13.jpg" alt="ปลากระมัง" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระมัง  </h2>
          <p className="text-gray-600">ปลาที่พบในแหล่งน้ำจืด กินพืชและสัตว์น้ำขนาดเล็ก</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish14.jpg" alt="ปลากระสูบขีด" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระสูบขีด </h2>
          <p className="text-gray-600">ปลานักล่าที่มีแถบสีดำตามลำตัว</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish15.jpg" alt="ปลากระสูบจุด" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระสูบจุด  </h2>
          <p className="text-gray-600">ปลานักล่าที่มีจุดดำบนลำตัว</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish16.jpg" alt="ปลากระสูบสาละวิน" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระสูบสาละวิน  </h2>
          <p className="text-gray-600">ปลากระสูบที่พบในแม่น้ำสาละวิน มีความสำคัญทางเศรษฐกิจและอนุรักษ์</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish17.jpg" alt="ปลากระเบนลายเสือ" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระเบนลายเสือ </h2>
          <p className="text-gray-600"> ปลากระเบนน้ำจืดที่มีลายคล้ายเสือ</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish18.jpg" alt="ปลากระเบนลาว" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระเบนลาว  </h2>
          <p className="text-gray-600">ปลากระเบนน้ำจืดที่พบในแม่น้ำโขง</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish19.jpg" alt="ปลากระมังครีบสูง" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระมังครีบสูง  </h2>
          <p className="text-gray-600">ปลาที่มีครีบหลังสูงเด่น</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish20.jpg" alt="ปลากระสง" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากระสง </h2>
          <p className="text-gray-600">ปลาที่พบในแม่น้ำและอ่างเก็บน้ำ</p>
        </div>


        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish21.jpg" alt="ปลากรายอินเดีย" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากรายอินเดีย </h2>
          <p className="text-gray-600">ปลากรายสายพันธุ์ที่พบในอินเดีย</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish22.jpg" alt="ปลากริมมุก" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากริมมุก </h2>
          <p className="text-gray-600">ปลาขนาดเล็กที่มีสีสันสวยงาม</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish23.jpg" alt="ปลากะพงข้างปาน" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากะพงข้างปาน  </h2>
          <p className="text-gray-600">ปลาที่มีจุดหรือแถบสีเข้มข้างลำตัว</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish24.jpg" alt="ปลากะพงขาว" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากะพงขาว </h2>
          <p className="text-gray-600">ปลายอดนิยมในการทำอาหาร เนื้อขาวและรสชาติดี</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish25.jpg" alt="ปลากะพงลาย" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากะพงลาย  </h2>
          <p className="text-gray-600">ปลาที่มีลายตามลำตัว</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish26.jpg" alt="ปลากะแมะ" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากะแมะ </h2>
          <p className="text-gray-600">ปลาที่พบในแหล่งน้ำจืดของไทย</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish27.jpg" alt="ปลากะพงขาว" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากะพงขาว </h2>
          <p className="text-gray-600">ปลายอดนิยมในการทำอาหาร รสชาติดี เนื้อแน่น พบได้ทั้งในธรรมชาติและฟาร์มเลี้ยง</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish28.jpg" alt="ปลากะพงข้างปาน" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากะพงข้างปาน </h2>
          <p className="text-gray-600">ปลาที่มีลักษณะเด่นคือจุดหรือปานสีเข้มข้างลำตัว นิยมเลี้ยงและบริโภค</p>
        </div>


        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/images/fish29.jpg" alt="ปลากรายอินเดีย" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-green-600 mb-2">	ปลากรายอินเดีย </h2>
          <p className="text-gray-600">ปลาน้ำจืดที่มีรูปร่างเรียวยาว พบในอินเดียและเอเชียใต้ นิยมรับประทานเช่นเดียวกับปลากรายไทย</p>
        </div>

      
      </div>
    </div>
  );
};

export default SpeciesPage;