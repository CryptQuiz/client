import React from 'react';

const QueOption = () => {
  const optionArr = [
    {
      op: "A",
      option: "Merkezi bir otorite tarafından kontrol edilir.",
      color: "bg-neu-red3",
    },
    {
      op: "B",
      option: "Tüm veriler açıkça görülebilir ve değiştirilebilir.",
      color: "bg-neu-pink3",
    },
    {
      op: "C",
      option: "İşlemlerin hızını arttırır.",
      color: "bg-neu-purple3",
    },
    {
      op: "D",
      option: "İşlemlerin gizliliğini korur ve değişmez bir kayıt tutar.",
      color: "bg-neu-blue3",
    },
  ];  

  return (
    <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0 w-full font-bold font-public pb-4 lg:pb-0">
      {optionArr.map((i, index) => (
        <div key={index} className=" flex-row w-[81vw] lg:w-[48%] pb-0 lg:pb-10">
          <div className={`h-[10vh] lg:h-[8vh]  flex basis-1/2 ${i.color} items-center rounded-20 border border-black border-r-4 border-b-4 space-x-5`}>
            <div className="text-40 pl-4">{i.op}</div>
            <div>{i.option}</div>
          </div>  
        </div>
      ))} 
    </div>
  );
};

export default QueOption;
