import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: null,
  user: null,
  title: null,
  direction: null,
  calories: null,
  like: null,
  time: null,
  last_edited: null,
  image: null,
};
const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
});
export const recipeAction = recipeSlice.actions;
export default recipeSlice.reducer;
