import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const allCartItem = (state) => state.cart.cartItems;

export const totalQuantity = createSelector(
    allCartItem,
    () => {
        console.log("thay doi cart ve so luong")
    }

)