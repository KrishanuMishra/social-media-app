import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  text: null,
  image:null,
  loading: false,
  error: false
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postStart: (state) => {
      state.userId = null;
      state.text = null;
      state.image = null;
    },
    postSuccess: (state,action) =>{
        state.userId = action.payload;
        state.text = action.payload;
        state.image = action.payload;
    },
    postFailure: (state,action)=>{
        state.text = action.payload;
        state.image = action.payload;
    }
  },
});

export const {
} = postSlice.actions;

export default postSlice.reducer;
