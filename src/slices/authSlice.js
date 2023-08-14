import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pc2h1eWFzaHUyM0BnbWFpbC5jb20iLCJpZCI6IjY0Yzc5ODdkMjA1NzcwODNjNWZkOTE5NSIsImlhdCI6MTY5MDgwMzQ0MCwiZXhwIjoxNjkwODg5ODQwfQ.WHL7Izn5tpNpw5AqhFlO7lfs-VlgnzCABy33WaVvvCY") ? JSON.parse(localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pc2h1eWFzaHUyM0BnbWFpbC5jb20iLCJpZCI6IjY0Yzc5ODdkMjA1NzcwODNjNWZkOTE5NSIsImlhdCI6MTY5MDgwMzQ0MCwiZXhwIjoxNjkwODg5ODQwfQ.WHL7Izn5tpNpw5AqhFlO7lfs-VlgnzCABy33WaVvvCY")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
