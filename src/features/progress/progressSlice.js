import { createSlice } from '@reduxjs/toolkit';



let currentDate = new Date();

// currentDate.getMinutes() == 30 ? localStorage.setItem('isActiveLayer', JSON.stringify(true)) : localStorage.setItem('isActiveLayer', JSON.stringify(false))


const isActiveLayerLocal = JSON.parse(sessionStorage.getItem('isActiveLayer'));
const setSessionToActiveLayer = () => {
  sessionStorage.setItem('isActiveLayer', JSON.stringify(true))
  return true;
}
const initialState = {
  value: false,
  isActiveLayer: isActiveLayerLocal == undefined ? setSessionToActiveLayer() : isActiveLayerLocal
}






export const progressSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    activeProgress: (state, action) => {
      state.value = action.payload
    },


    activeLayer: (state, action) => {
      state.isActiveLayer = action.payload
      sessionStorage.setItem('isActiveLayer', JSON.stringify(action.payload));


    },

  },

})


export const { activeProgress, activeLayer } = progressSlice.actions

export default progressSlice