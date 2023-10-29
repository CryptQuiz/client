import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full py-12 px-10 space-y-10">
      <h1 className="text-base lg:text-32 font-bold text-center">
        Truefeedback Quiz Yarışması Sonuçları
      </h1>

      <div className="flex flex-col lg:flex-row h-5/6">
        {/* liderlik */}
        <div className="flex flex-col lg:flex-row w-3/5 items-center space-x-12">
          <div className="flex flex-col w-1/3 space-y-5 mt-auto">
            {/* profil resmi */}
            <div className="w-11/12 relative pt-[91%]">
              <Image
                src="/images/icardi.jpg"
                alt="profile"
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover rounded-full border-8 border-neu-brown"
              />
            </div>
            {/* kullanıcı adı */}
            <h1 className="text-2xl text-black font-bold text-center">
              IcardiBey
            </h1>
            {/* sıralama */}
            <div className="h-auto bg-neu-brown text-5xl text-center py-6 font-bold rounded-20 border border-black border-r-8 border-b-8">
              3
            </div>
            {/* puan */}
            <div className="bg-white text-center font-bold text-2xl py-4  rounded-20 border  border-black border-r-8 border-b-8">
              1235 puan
            </div>
          </div>
          <div className="flex flex-col w-1/3 space-y-5 mt-auto">
            {/* profil resmi */}
            <div className="w-11/12 relative pt-[91%]">
              <Image
                src="/images/icardi.jpg"
                alt="profile"
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover rounded-full border-8 border-neu-brown"
              />
            </div>
            {/* kullanıcı adı */}
            <h1 className="text-2xl text-black font-bold text-center">
              IcardiBey
            </h1>
            {/* sıralama */}
            <div className="h-auto bg-neu-yellow3 text-5xl text-center py-14 font-bold rounded-20 border border-black border-r-8 border-b-8">
              1
            </div>
            {/* puan */}
            <div className="bg-white text-center font-bold text-2xl py-4  rounded-20 border  border-black border-r-8 border-b-8">
              1235 puan
            </div>
          </div>
          <div className="flex flex-col w-1/3 space-y-5 mt-auto">
            {/* profil resmi */}
            <div className="w-11/12 relative pt-[91%]">
              <Image
                src="/images/icardi.jpg"
                alt="profile"
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover rounded-full border-8 border-neu-brown"
              />
            </div>
            {/* kullanıcı adı */}
            <h1 className="text-2xl text-center font-bold">IcardiBey</h1>
            {/* sıralama */}
            <div className="h-max bg-neu-gray text-5xl text-center py-10 font-bold rounded-20 border border-black border-r-8 border-b-8">
              2
            </div>
            {/* puan */}
            <div className="bg-white text-center font-bold text-2xl py-4 rounded-20 border  border-black border-r-8 border-b-8">
              1235 puan
            </div>
          </div>
        </div>
        {/* Leader Boards */}
        <div className="w-2/5"></div>
      </div>
    </div>
  );
}
