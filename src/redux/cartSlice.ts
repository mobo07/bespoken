import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
import { CartState, CartProduct } from "../data/types";

const initialState: CartState = {
    products: [],
    amount: 0,
    cartQuantity: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartProduct>) => {
            state.cartQuantity += 1;
            state.products.push(action.payload);
            state.amount += action.payload.totalPrice;
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            for(let i=0; i < state.products.length; i++) {
                if(state.products[i].cartId === action.payload) {
                    state.amount -= state.products[i].totalPrice;
                    state.cartQuantity -= 1;
                    state.products.splice(i, 1);
                }
            }
        },
        editProduct: (state, action: PayloadAction<{id: string, prop: "selectedSize"|"selectedColor", val: string}>) => {
            for(let product of state.products) {
                if(product.cartId === action.payload.id) {
                        product[action.payload.prop] = action.payload.val;
                }
            }
        },
        changeQuantity: (state, action: PayloadAction<{id: string, op: "increase"|"decrease"}>) => {
            for(let product of state.products) {
                if(action.payload.id === product.cartId) {
                    if(action.payload.op === "decrease") {
                        if(product.quantity === 1) return;
                        product.quantity -= 1;
                        product.totalPrice -= +product.price;
                        state.amount -= +product.price;
                    } 
                    else {
                        product.quantity += 1;
                        product.totalPrice = +product.price*product.quantity;
                        state.amount += +product.price;
                    }
                }
            }
        },
    }
});

export const { addProduct, removeProduct, editProduct, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;