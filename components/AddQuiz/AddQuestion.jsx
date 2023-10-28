"use client"
import React, { useState } from 'react';
import Questions from './Questions';

const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');

  const [questions, setQuestions] = useState([]);

  const handleAddClick = () => {
    const newQuestion = {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
    };

    setQuestions([...questions, newQuestion]);

    setQuestion('');
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setOptionD('');
  };

  const handleDeleteClick = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  return (
    <>
      <div className="flex flex-col w-auto overflow-hidden p-2 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
        <span className="font-bold text-14">Soruyu Giriniz...</span>
        <div className='flex flex-row space-x-2'>
          <input
            className='w-full border-[2px] border-black p-2 rounded-10'
            placeholder='Enter the question...'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></input>
          <button
            className='px-20 py-2 text-14 font-bold bg-[#BAFDA2] rounded-10 border border-black border-r-4 border-b-4'
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
        <div className='flex flex-col space-y-3'>
          <div className='flex flex-row space-x-2 '>
            <input
              className='w-full border-[2px] border-black p-2 rounded-10'
              placeholder='A seçeneğini giriniz...'
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
            ></input>
            <input
              className='w-full border-[2px] border-black p-2 rounded-10'
              placeholder='B seçeneğini giriniz...'
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
            ></input>
          </div>
          <div className='flex flex-row space-x-2 '>
            <input
              className='w-full border-[2px] border-black p-2 rounded-10'
              placeholder='C seçeneğini giriniz...'
              value={optionC}
              onChange={(e) => setOptionC(e.target.value)}
            ></input>
            <input
              className='w-full border-[2px] border-black p-2 rounded-10'
              placeholder='D seçeneğini giriniz...'
              value={optionD}
              onChange={(e) => setOptionD(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div>
        <Questions questions={questions} handleDeleteClick={handleDeleteClick} />
      </div>
    </>
  );
}

export default AddQuestion;
