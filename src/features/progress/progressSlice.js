import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
  }



  export const progressSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
      activeProgress: (state,action) => {
          state.value =action.payload
      },
     
    },
  })


  export const { activeProgress } = progressSlice.actions

  export default progressSlice