import { createSlice } from '@reduxjs/toolkit';


const StudentSlice=createSlice({
    name:"stuUser",
    initialState: {
        studentUser: "",
        stuId:"",
        stuAuth: false,
      },
      reducers: {
        login: (state, action) => {
          state.studentUser = action.payload.name;
          state.stuId  = action.payload.idd;
          state.stuAuth = true;
        },
        logout: (state) => {
          state.studentUser = "";
          state.stuId="",
          state.stuAuth = false;
        },
      },
})

export const {login,logout}=StudentSlice.actions;
export const selectUser=(state)=> state.stuUser.studentUser;
export const selectStuid=(state)=> state.stuUser.stuId;

export default StudentSlice.reducer;