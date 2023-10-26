"use client"
import React from "react";
import Quiz from "./Quiz";
import { useStorken } from '../../../data/storken'
const quizsArr = [
  {
    name: "True Feed Back Quiz",
  },
  {
    name: "True Back Feed  Quiz",
  },
  {
    name: "True Quiz Feed Back ",
  },
  {
    name: " Quiz True Feed Back ",
  },
  {
    name: "True Feed Back Quiz",
  },
  {
    name: "True Feed Back Quiz",
  },
  {
    name: "True Feed Back Quiz",
  },
];
const Quizs = () => {
  const [isPopUp, IsPopUp] = useStorken('isDrawing')
  return (
    <div   className="flex flex-col px-3 w-full space-y-3 h-full bg-white rounded-20 border border-black border-r-4 border-b-4 overflow-y-auto">
      <div className=" p-3">
        <span className="text-black font-bold text-14">Quizler</span>
      </div>

      {quizsArr.map((i, index) => (
        <button onClick={()=>IsPopUp.set(false)} key={index} className="gap-4">
          <Quiz items={i} />
        </button>
      ))}
    </div>
  );
};

export default Quizs;
