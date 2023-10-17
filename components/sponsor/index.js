import React from "react";
import Image from "next/image";

const Sponsor = () => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center space-x-4 absolute -bottom-9 -left-48 my-auto ">
        <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
            className="object-cover"
              src="/images/spon1.png" 
              alt="sponsor"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
              className="object-cover"
              src="/images/spon2.png"
              alt="sponsor"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
              className="object-cover"
              src="/images/spon3.png"
              alt="sponsor"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
              className="object-cover"
              src="/images/spon4.png"
              alt="sponsor"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
