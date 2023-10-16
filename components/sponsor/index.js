import React from "react";
import Image from "next/image";

const Sponsor = () => {
  return (
    <div className="relative">
      <div className="flex justify-center space-x-4 mt-28">
        <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/spon1.png"
              alt="sponsor"
              width={52}
              height={34}
            />
          </div>
        </div>
        <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/spon2.png"
              alt="sponsor"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/spon3.png"
              alt="sponsor"
              width={46}
              height={38}
            />
          </div>
        </div>
        <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4 bg-white">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/spon4.png"
              alt="sponsor"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
