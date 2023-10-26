import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Trash } from 'iconsax-react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App({ sorular, handleSilClick }) {
  return (
    <>
  <Swiper
  slidesPerView={"auto"}
  spaceBetween={15}
  modules={[Pagination]}
  className="mySwiper "
>
{sorular.map((items, index) => (
        <SwiperSlide key={index}>
           <div className="flex flex-col w-full h-[20vh]  items-start space-x-2 rounded-10 border border-black bg-white ">
    <div className="flex flex-row justify-between p-2  w-full items-start ">
        <span className=" flex items-start justify-start font-bold text-xs">{index +1}.Soru:{items.soru}</span>
        <Trash onClick={() => handleSilClick(index)} size="28" color="#FF8A65" className="cursor-pointer"/>
        </div>
        <div className="flex flex-col items-start  w-full h-full space-y-2">
        <span className="font-normal  text-xs">A) {items.secenekA}</span>
        <span className="font-normal  text-xs">B) {items.secenekB}</span>
        <span className="font-normal  text-xs">C) {items.secenekC}</span>
        <span className="font-normal  text-xs">D) {items.secenekD}</span>
        </div>
        </div>
        </SwiperSlide>
      ))}
      </Swiper>
    
    </>
  );
}

 function Questions(){
  return(
    <div className="flex flex-col w-full h-[20vh]  items-start space-x-2 rounded-0 border border-black bg-white ">
    <div className="flex flex-row justify-between p-2  w-full items-start ">
        <span className=" flex items-start justify-start font-bold text-xs">12.Soru: Blockchain teknolojisinin temel özelliği nedir?</span>
        <Trash size="24" color="#FF8A65"/>
        </div>
        <div className="flex flex-col items-start  w-full h-full space-y-2">
        <span className="font-normal  text-xs">A) Merkezi bir otorite tarafından kontrol edilir.</span>
        <span className="font-normal  text-xs">B) Tüm veriler açıkça görülebilir ve değiştirilebilir.</span>
        <span className="font-normal  text-xs">C) İşlem hızını artırır.</span>
        <span className="font-normal  text-xs">D) İşlemlerin gizliliğini korur ve değişmez bir kayıt tutar</span>
        </div>
        </div>
  )
}