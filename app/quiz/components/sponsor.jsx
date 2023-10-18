import React from "react";
import Image from "next/image";

const Sponsor = () => {
  const sponsorArr=[
    {
      img:"/images/spon1.png",
    },
    {
      img:"/images/spon2.png",
    },
    {
      img:"/images/spon3.png",
    },
    {
      img:"/images/spon4.png",
    },
      ]
  return (
    <div className="relative">
      <div className="flex space-x-4 absolute">
        {sponsorArr.map((i,index)=>(
        <div key={index} className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
            className="object-cover"
              src={i.img} 
              alt="sponsor"
              width={50}
              height={50}
            />
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
