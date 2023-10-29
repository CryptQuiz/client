import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Trash } from "iconsax-react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

function SwiperComponent({ items, handleDeleteClick }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={15}
      modules={[Pagination]}
      className="mySwiper "
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col w-full items-start space-x-2 rounded-10 border border-black bg-white ">
            <div className="flex flex-row justify-between p-2 w-full items-start">
              <span className="flex items-start justify-start font-bold text-xs">
                {index + 1}. Soru:{" "}
                {item.question || `Sponsor: ${item.sponsorName}`}
              </span>
              <Trash
                onClick={() => handleDeleteClick(index)}
                size="28"
                color="#FF8A65"
                className="cursor-pointer"
              />
            </div>
            {item.sponsorName ? (
              <div className="w-[8vw] h-[65%] flex justify-start items-start bg-[#D2D2D2] p-2 rounded-10 border border-black">
                <div
                  style={{
                    width: "20vw",
                    height: "100%",
                    position: "relative",
                  }}
                  className="flex bg-[#D2D2D2] justify-start items-start"
                >
                  <img
                    src={item.photo}
                    alt="sponsor logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-start w-full h-full space-y-2">
                <span className="font-normal text-xs">A) {item.optionA}</span>
                <span className="font-normal text-xs">B) {item.optionB}</span>
                <span className="font-normal text-xs">C) {item.optionC}</span>
                <span className="font-normal text-xs">D) {item.optionD}</span>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
