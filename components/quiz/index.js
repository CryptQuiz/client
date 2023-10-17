import React from "react";
import Image from "next/image";


const Quiz = () => {
  return (
    <div className="bg-neu-yellow min-h-screen flex justify-center items-center">
      <div className="container w-4/5 bg-neu-white rounded-40 overflow-hidden border border-black border-r-8 border-b-8 h-5/6">
        <div>
        <div className="h-4 bg-red-500 w-full rounded-t-40"></div>
        </div>
        <div className="mt-3 mb-12 flex justify-between">
          <div className="flex-none">
            <Image
              src="/images/sol.png"
              alt="images"
              height={762}
              width={100}
            />
          </div>





          <div className="flex-none">
            <Image
              src="/images/sag.png"
              alt="images"
              height={762}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
