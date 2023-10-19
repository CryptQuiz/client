import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Trash } from 'iconsax-react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        {Questions()}
        </SwiperSlide>
        <SwiperSlide>
        {Questions()}

        </SwiperSlide>
        <SwiperSlide>
        {Questions()}

        </SwiperSlide>
        <SwiperSlide>
        {Questions()}

        </SwiperSlide>
        <SwiperSlide>
        {Questions()}

        </SwiperSlide>
        <SwiperSlide>
        {Questions()}

        </SwiperSlide>
        <SwiperSlide>
        {Questions()}

        </SwiperSlide>
        <SwiperSlide>
        {Questions()}

        </SwiperSlide>
      </Swiper>
    </>
  );
}

 function Questions(){
  return(
    <div className="flex flex-col w-full h-[20vh]  items-start space-x-2 rounded-10 border border-black bg-white">
      <div>
          <span className="font-bold text-8">12.Soru: Blockchain teknolojisinin temel özelliği nedir?</span>
          <Trash size="32" color="#FF8A65"/>
          </div>
          <span className="font-normal text-8">A) Merkezi bir otorite tarafından kontrol edilir.</span>
          <span className="font-normal text-8">B) Tüm veriler açıkça görülebilir ve değiştirilebilir.</span>
          <span className="font-normal text-8">C) İşlem hızını artırır.</span>
          <span className="font-normal text-8">D) İşlemlerin gizliliğini korur ve değişmez bir kayıt tutar</span>
          
          </div>
  )
}