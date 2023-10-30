"use client";
import React from "react";
import QuestionsSwiper from "./QuestionsSwiper";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../app/redux/createQuiz/quizSlice";
const Questions = ({ handleDeleteClick }) => {
  const quizData = useSelector((state) => state.createQuiz.quiz);

  return (
    <div className="flex flex-col w-auto overflow-hidden p-3 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
      <div className="flex flex-row justify-between">
        <span className="font-bold text-14">Sorular</span>
        <div className="flex flex-row">
          <span className="font-medium"> Toplam soru sayısı:</span>{" "}
          <span className="font-bold">{quizData.questions.length}</span>
        </div>
      </div>
      <div className="w-full h-[20vh] ">
        <QuestionsSwiper handleDeleteClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default Questions;
