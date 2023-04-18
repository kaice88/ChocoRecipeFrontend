import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: null,
  username: "",
  email: "chinguyen2k1@gmail.com",
  password: "",
  image:
    "https://i.pinimg.com/564x/2f/64/99/2f6499593dcc3fc85e991ebeb432cc4a.jpg",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user_id = action.payload.user_id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.image = action.payload.image;
    },
    resetUser(state) {
      state.user_id = initialState.user_id;
      state.username = initialState.username;
      state.email = initialState.email;
      state.password = initialState.password;
      state.image = initialState.image;
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice.reducer;
