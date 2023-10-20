"use client"
import React, { useState } from 'react';
import Questions from './Questions';
const AddQuestion = () => {
  const [soru, setSoru] = useState('');
  const [secenekA, setSecenekA] = useState('');
  const [secenekB, setSecenekB] = useState('');
  const [secenekC, setSecenekC] = useState('');
  const [secenekD, setSecenekD] = useState('');
  // hiç bi işe yaramayan bos state, props olarak yollanmadığı için eklemek zorundaydım (geçici çözüm)
  
  const [sorular, setSorular] = useState([]);

  const handleEkleClick = () => {
    const yeniSoru = {
      soru,
      secenekA,
      secenekB,
      secenekC,
      secenekD,
    };

    setSorular([...sorular, yeniSoru]);

    setSoru('');
    setSecenekA('');
    setSecenekB('');
    setSecenekC('');
    setSecenekD('');
  };

  const handleSilClick = (index) => {
    // Tıklanan elemanı array'den kaldır
    const yeniSorular = [...sorular];
    yeniSorular.splice(index, 1);
    setSorular(yeniSorular);
  };

  return (
    <>
    <div className="flex flex-col w-auto overflow-hidden p-2 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
      <span className="font-bold text-14">Soru Ekle</span>
      <div className='flex flex-row space-x-2'>
        <input
          className='w-full border-[2px] border-black p-2 rounded-10'
          placeholder='Soruyu Giriniz...'
          value={soru}
          onChange={(e) => setSoru(e.target.value)}
        ></input>
        <button
          className='px-20 py-2 text-14 font-bold bg-[#BAFDA2] rounded-10 border border-black border-r-4 border-b-4'
          onClick={handleEkleClick}
        >
          Ekle
        </button>
      </div>
      <div className='flex flex-col space-y-3'>
        <div className='flex flex-row space-x-2 '>
          <input
            className='w-full border-[2px] border-black p-2 rounded-10'
            placeholder='A seçeneğini giriniz..'
            value={secenekA}
            onChange={(e) => setSecenekA(e.target.value)}
          ></input>
          <input
            className='w-full border-[2px] border-black p-2 rounded-10'
            placeholder='B seçeneğini giriniz..'
            value={secenekB}
            onChange={(e) => setSecenekB(e.target.value)}
          ></input>
        </div>
        <div className='flex flex-row space-x-2 '>
          <input
            className='w-full border-[2px] border-black p-2 rounded-10'
            placeholder='C seçeneğini giriniz..'
            value={secenekC}
            onChange={(e) => setSecenekC(e.target.value)}
          ></input>
          <input
            className='w-full border-[2px] border-black p-2 rounded-10'
            placeholder='D seçeneğini giriniz..'
            value={secenekD}
            onChange={(e) => setSecenekD(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
    <div>
        <Questions sorular={sorular} handleSilClick={handleSilClick} />
      </div>
    </>
  )
}

export default AddQuestion;
