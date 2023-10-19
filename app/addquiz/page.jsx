
import React from 'react'
import AddQuizGruops from './components/AddQuizGruops'
import Prizes from './components/rightPage/Prizes';
import SponsorEntry from './components/rightPage/SponsorEntry';
import Sponsors from './components/rightPage/Sponsors';
import AddSponsors from './components/rightPage/AddSponsors';
const page = () => {
  return (
    <div className="flex flex-row mdh:p-14 p-8 h-full space-x-8 w-full">
    <div className=" h-full w-[48vw] flex flex-col space-y-3  overflow-y-auto">
<AddQuizGruops/>
</div>
<div className=" flex flex-col  h-full w-[52vw]  space-y-3  overflow-y-auto">
      <AddSponsors/>
        {/* sağ blok kodları */}
    </div>
  </div>
  );
};

export default page;

