import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../popUp/popUpSlice";
// import basketReducer from "../basket/basketSlice";
// import lengthReducer from "../productLength/lengthSlice";
export const store = configureStore({
  reducer: {
    popUp: uiReducer,
    // basket: basketReducer,
    // length: lengthReducer,
  },
});