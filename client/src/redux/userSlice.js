import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    user: [],
    userLogged: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     registerUser (state, action) {
        const registerUser = action.payload;

        const response = axios.post(
          'http://localhost:3000/api/auth/register',
          registerUser,
        );
        console.log(response.data)
        state.user.push(response.data);
    
      
    },
    loginUser(state,action) {
        const userLogin = action.payload

        const response = axios.post('http://localhost:3000/api/auth/login', userLogin)
        state.userLogged.push(response.data)
        sessionStorage.setItem('user', JSON.stringify(state.userLogged))

    }
  },
});


export const { registerUser,loginUser } = userSlice.actions;

export default userSlice.reducer;
