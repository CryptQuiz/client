import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: {
    name: "",
    date: "",
    time: "",
    truechoice: 0,
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
    previousQuestions: [], // Önceki soruları içeren dizi
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
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizDataByKey: (state, action) => {
      const { key, value } = action.payload;
      state.quiz[key] = value;
    },
    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      // Önceki soruları ekleyin
      state.quiz.previousQuestions.push(state.quiz.questions);
      state.quiz.questions.push(newQuestion);
    },
  },
});

export const { setQuizDataByKey, addQuestion } = quizSlice.actions;
export default quizSlice.reducer;