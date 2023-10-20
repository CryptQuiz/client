"use client"
import React, { useState } from 'react';
import Sponsors from './Sponsors';

const SponsorEntry = () => {
  const [sponsorName, setSponsorName] = useState('');
  const [sponsors, setSponsors] = useState([]);

  const handleEkleClick = () => {
    const yeniSponsor = {
      sponsorName,
    };

    setSponsors([...sponsors, yeniSponsor]);

    setSponsorName('');
  };

  const handleSilClick = (index) => {
    // Tıklanan elemanı array'den kaldır
    const yeniSponsorlar = [...sponsors];
    yeniSponsorlar.splice(index, 1);
    setSponsors(yeniSponsorlar);
  };

  return (
    <>
    <div className="flex flex-col w-auto overflow-hidden p-2 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
      <span className="font-bold text-14">Sponsor Girişi</span>
      <div className='flex flex-row space-x-2'>
        <input
          className='w-full border-[2px] border-black p-1 rounded-10'
          placeholder='Sponsorluk Adını Giriniz...'
          value={sponsorName}
          onChange={(e) => setSponsorName(e.target.value)}
        />
        <button
          onClick={handleEkleClick} // onClick içinde bir fonksiyon çağırılmalı
          className='px-20 py-2 text-14 font-bold bg-[#BAFDA2] rounded-10 border border-black border-r-4 border-b-4'
        >
          Ekle
        </button>
      </div>

      <div className='flex flex-row space-x-2'>
        <textarea
          style={{ borderRadius: "10px", resize: "none", padding: "4px" }}
          className='border-black border'
          placeholder='Sponsorluk bedeli giriniz...'
          cols="50"
          rows="6"
        ></textarea>
        <button
          className='px-20 py-2 text-14 font-bold bg-[#C5A1FF] rounded-10 border border-black border-r-4 border-b-4'
        >
          Logo
        </button>
      </div>

{/* {sponsors.map((sponsor,index)=>(<div key={index} className='w-[10vw] h-[10vh] bg-red-600'>
          {sponsor.sponsorName}
          <button onClick={() => handleSilClick(index)}>Sil</button>
        </div>))} */}
     
    </div>
      <Sponsors items={sponsors} handleSilClick={handleSilClick}/>
      </>

  );
};

export default SponsorEntry;
