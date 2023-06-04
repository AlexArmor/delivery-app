import { createSlice } from "@reduxjs/toolkit";

const orderInitialState = { items: [] };

const orderSlice = createSlice({
    name: 'order',
    initialState: orderInitialState,
    reducers: {
        addToOrder(state, { payload }) {
            let isInArray = false;
            state.items.forEach((el) => {
                if (payload.id === el.id) isInArray = true;
            });
            if (!isInArray) state.items = [...state.items, payload];
        },
        deleteOrder(state, { payload }) {
            state.items = state.items.filter(order => order.id !== payload);
        },
        increaseQuantity(state, { payload }) {
            state.items.forEach(order =>
                order.id === payload
                    ? order.quantity++
                    : order.quantity);
        },
        decreaseQuantity(state, { payload }) {
            state.items.forEach(order =>
                (order.id === payload && order.quantity !== 1)
                    ? order.quantity--
                    : order.quantity);
        },
        resetOrder(state) {
            state.items = [];
        },
    },
});

export const { addToOrder, deleteOrder, increaseQuantity, decreaseQuantity, resetOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;