import { createSlice } from '@reduxjs/toolkit';


const AdminSlice=createSlice({
    name:"AdminUser",
    initialState: {
        studentUser: "",
        stuId:"",
        stuCom:"",
        comId:"",
        res:""
      },
      reducers: {
        getData: (state, action) => {
          state.studentUser = action.payload.name;
          state.stuId  = action.payload.Sid;
          state.stuCom  = action.payload.com;
          state.comId  = action.payload.comId;
          state.res  = action.payload.response;
        }
      },
})

export const {getData}=AdminSlice.actions;
export const getStuUser=(state)=> state.AdminUser.studentUser;
export const getStuid=(state)=> state.AdminUser.stuId;
export const getStuCom=(state)=> state.AdminUser.stuCom;
export const getComId=(state)=> state.AdminUser.comId;
export const getRes=(state)=> state.AdminUser.res;

export default AdminSlice.reducer;