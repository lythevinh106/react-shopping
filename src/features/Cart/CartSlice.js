import { createSelector, createSlice } from '@reduxjs/toolkit'
import Item from 'antd/es/list/Item';
import { useSelector } from 'react-redux';



const initialState = JSON.parse(localStorage.getItem('cart'));





export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },

        addToCart: (state, action) => {

            const newItem = action.payload;

            const index = state.cartItems.findIndex((item) => {

                return item.id === newItem.id
            })

            if (index >= 0) {
                state.cartItems[index].quantity += newItem.quantity


            }
            else {

                state.cartItems.push({
                    id: newItem.id,
                    product: newItem.product,
                    quantity: newItem.quantity
                })

            }
            localStorage.setItem('cart', JSON.stringify(state));

        },

        ToggleCart: (state, action) => {

            state.showMiniCart = action.payload
            localStorage.setItem('cart', JSON.stringify(state));
        },
        RemoveAll: (state) => {


            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state));


        },

        removeItem: (state, action) => {

            const idRemove = action.payload;

            const index = state.cartItems.findIndex((item) => {

                return item.id === idRemove;
            })

            if (index >= 0) {
                state.cartItems.splice(index, 1);
            }

            localStorage.setItem('cart', JSON.stringify(state));


        },


        setQuantity: (state, action) => {

            const item = action.payload;



            const index = state.cartItems.findIndex((item) => {

                return item.id === item.id;
            })

            if (index >= 0) {
                state.cartItems[index].quantity = item.number
            }

            localStorage.setItem('cart', JSON.stringify(state));


        },



    },
})


export const { addToCart, ToggleCart, RemoveAll, removeItem, setQuantity } = cartSlice.actions

export default cartSlice




