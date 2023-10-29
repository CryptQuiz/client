import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: {
    name: "",
date:"",
    truechoice:0,
    questions: [
      {
        question: "",
        choices: [
          {
            key: "",
            value: "",
          },
       
        ],

        
      },
    ],
    rewards: [
      {
        rank: "",
        reward: "",
      },
    ],
    sponsors: [
      {
        name: "",
        photo: "",
        reward: "",
      },
    ],
  },
// name:false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizDataByKey: (state, action) => {
      const { key, value } = action.payload;
      console.log(key,value);
      state.quiz[key] = value;
    },
  },
});

export const { setQuizDataByKey } = quizSlice.actions;
export default quizSlice.reducer;
