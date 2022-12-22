import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dude Smith" },
  { id: "1", name: "Fred Smith" },
  { id: "2", name: "John Smith" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
