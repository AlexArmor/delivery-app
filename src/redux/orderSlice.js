import { createSlice } from "@reduxjs/toolkit";

const orderInitialState = { items: [] };

const orderSlice = createSlice({
    name: 'order',
    initialState: orderInitialState,
    redusers: {
        addToOrder(state, { payload }) {
            state.items = [...state.items, payload];
        },
        deleteOrder(state, { payload }) {
            state.items = state.items.filter(order => order.id !== payload);
        },
    },
});

export const { addToOrder, deleteOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;