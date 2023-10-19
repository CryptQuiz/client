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
    <di v className="flex flex-wrap justify-between w-full font-bold font-public">
      {optionArr.map((i, index) => (
        <div key={index} className="flex-row w-[48%] pb-10">
          <div className={`flex ${i.color} items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2`}>
            <div className="text-40 pl-4">{i.op}</div>
            <div>{i.option}</div>
          </div>  
        </div>
      ))}
    </di>
  );
};

export default QueOption;
