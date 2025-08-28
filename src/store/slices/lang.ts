import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  current: string;
}

const initialState: LanguageState = {
  current: localStorage.getItem("lang") || "en",
};

const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export default languageSlice.reducer;
