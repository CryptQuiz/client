"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Trash } from "iconsax-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function App({items,handleDeleteClick}) {
  return (
    <>
      <Swiper
  slidesPerView={"auto"}
  spaceBetween={15}
  modules={[Pagination]}
  className="mySwiper "
>
{items.map((items, index) => (
        <SwiperSlide key={index}>
      <div className="flex rounded-10 flex-col w-full h-[20vh]  items-start space-x-2 rounded-0 border border-black bg-white overflow-y-auto overflow-x-hidden">
      <div className="flex flex-row justify-between p-2  w-full items-start ">
        <span className=" flex items-start justify-start font-bold text-xs">
          {index +1}.Sponsor: {items.sponsorName}
        </span>
        <Trash onClick={()=>handleDeleteClick(index)} className="cursor-pointer" size="28" color="#FF8A65" />
      </div>
      <div className="w-[8vw] h-[65%]  flex justify-start items-start  bg-[#D2D2D2] p-2 rounded-10 border border-black">
      <div style={{ width: "20vw", height: "100%", position: "relative" }} className="flex  bg-[#D2D2D2] justify-start items-start">
        <Image
          src="/images/Logo.png"
          alt="images"
          layout="fill"
          objectFit="contain"
         
        />
      </div>
      </div>
    </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}

function Sponsors() {
  return (
    <div className="flex rounded-10 flex-col w-full h-[20vh]  items-start space-x-2 rounded-0 border border-black bg-white overflow-y-auto overflow-x-hidden">
      <div className="flex flex-row justify-between p-2  w-full items-start ">
        <span className=" flex items-start justify-start font-bold text-xs">
          1.Sponsor: TrueFeedBack
        </span>
        <Trash size="24" color="#FF8A65" />
      </div>
      <div className="w-[8vw] h-[65%]  flex justify-start items-start  bg-[#D2D2D2] p-2 rounded-10 border border-black">
      <div style={{ width: "20vw", height: "100%", position: "relative" }} className="flex  bg-[#D2D2D2] justify-start items-start">
        <Image
          src="/images/Logo.png"
          alt="images"
          layout="fill"
          objectFit="contain"
         
        />
      </div>
      </div>
    </div>
  );
}
