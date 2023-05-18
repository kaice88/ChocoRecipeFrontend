import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: null,
  email: null,
  first_name: null,
  last_name: null,
  image: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.image = "http://127.0.0.1:8000" + action.payload.image;
    },
    resetUser(state) {
      state.id = initialState.id;
      state.username = initialState.username;
      state.email = initialState.email;
      state.image = initialState.image;
      state.first_name = initialState.first_name;
      state.last_name = initialState.last_name;
    },
    updateImage(state, action) {
      state.image = "http://127.0.0.1:8000" + action.payload;
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice.reducer;
