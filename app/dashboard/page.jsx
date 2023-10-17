import React from "react";
import AddQuiz from "./components/AddQuiz";
import Statistics from "./components/Statistics";
import Quizs from "./components/Quizs";
const page = () => {
  return (
    <div className="flex flex-row p-14 h-full space-x-8 w-full">
      <div className=" h-full min-w-[30vw] overflow-hidden flex flex-col space-y-3">
  <AddQuiz />
  <Statistics />
</div>
      <div className="flex flex-col h-full w-full">
        <Quizs />
      </div>
    </div>
  );
};

export default page;
