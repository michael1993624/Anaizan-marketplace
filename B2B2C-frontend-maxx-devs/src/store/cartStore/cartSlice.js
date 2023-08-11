import { createSlice } from "@reduxjs/toolkit";

const myCart = createSlice({
    name: "cart",
    initialState: {
        cartItem: sessionStorage.getItem("cartItem") ? [...JSON.parse(sessionStorage.getItem("cartItem"))] : []
    },
    reducers: {
        addToCart: (state, action) => {
            
            const item = state.cartItem.find (
                (item) => item.id === action.payload.id
            );
            
            if (item) {
                item.quantity++;
            } else {
                state.cartItem.push ({...action.payload, quantity: 1});
            }
            sessionStorage.removeItem("cartItem")
            sessionStorage.setItem ("cartItem", JSON.stringify(state.cartItem))
        },
        incrementQty: (state, action) => {
            const item = state.cartItem.find(
                (item) => item.id === action.payload.id
            )
            item.quantity++;

            sessionStorage.setItem ("cartItem", JSON.stringify(state.cartItem))
        },
        decrementQty: (state, action) => {

            const item = state.cartItem.find(
                (item) => item.id === action.payload.id
            )

            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }

            sessionStorage.setItem ("cartItem", JSON.stringify(state.cartItem))
        },
        removeItem: (state, action) => {
            const removeItem = state.cartItem.filter(
                (item) => item.id != action.payload
            )
            state.cartItem = removeItem;
            
            sessionStorage.removeItem("cartItem")
            sessionStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        saveItem: (state, action) => {
            const item = state.cartItem.find(
                (item) => item.id === action.payload.id
            )
            console.log (action.payload.color)
           

            sessionStorage.removeItem("cartItem")
            sessionStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        }
    },
});


export const {
    addToCart,
    incrementQty,
    decrementQty,
    removeItem,
    saveItem
} = myCart.actions;

export const cartReducer = myCart.reducer;