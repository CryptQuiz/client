import React from 'react'
import Question from '@/components/question';
import QueOption from "@/components/option";
import Sponsor from "@/components/sponsor";
import SponsorName from "@/components/sponsorName";

const QuizPage = () => {
  return (
    <div>
          <div className="flex-grow px-28 space-y-10">
            {/* Sponsor Namesi */}
            <SponsorName/>
            {/* quiz soru */}
            <Question/>
            {/* Şıklar */}
            <QueOption/>
            
          </div>

    
        </div>

  )
}

export default QuizPage
