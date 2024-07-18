import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{

        // add to cart 
        addItemToCart(state, action){
            const existingItem = state.cartItems.find(item => item.id == action.payload.id);
            if(existingItem){
                existingItem.quantity +=1;
            }else{
                state.cartItems.push({ ...action.payload, quantity: 1});
            }
        },

        //remove from cart
        removeItemFromCart(state, action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        //clear cart
        clearCart(state){
            state.cartItems = []
        },

        //increase item quantity
        increaseItemQuantity(state, action){
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if(itemToIncrease){
                itemToIncrease.quantity += 1;
            }
        },

        //decrese item quantu qty
        decreaseItemQuantity(state, action){
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if(itemToDecrease && itemToDecrease.quantity > 1){
                itemToDecrease.quantity -= 1;
            }
        },
    }
   
});

 // initialize an empty array named cartItems outside CartSlice.
    const initialState = {
        cartItems: [],
    }

    export const {
        addItemToCart,
        removeItemFromCart,
        clearCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      } = CartSlice.actions;
      export default CartSlice.reducer;
