import { createSlice } from "@reduxjs/toolkit";

export const burgerBuilderSlice = createSlice({
  name: "burger builder",
  initialState: {
    ingredients: {
      salad: {
        id: "salad",
        quantity: 0,
        value: 150,
      },
      cheese: {
        id: "cheese",
        quantity: 0,
        value: 80,
      },
      meat: {
        id: "meat",
        quantity: 0,
        value: 300,
      },
      tomato: {
        id: "tomato",
        quantity: 0,
        value: 50,
      },
      onion: {
        id: "onion",
        quantity: 0,
        value: 50,
      },
      pear: {
        id: "pear",
        quantity: 0,
        value: 100,
      },
    },
    totalPrice: 350,
  },
  reducers: {
    increment: (state, action) => {
      state.ingredients[action.payload].quantity++;
      state.totalPrice =
        state.totalPrice + state.ingredients[action.payload].value;
    },

    decrement: (state, action) => {
      state.ingredients[action.payload].quantity--;
      state.totalPrice =
        state.totalPrice - state.ingredients[action.payload].value;
    },
    reset: (state) => {
      for (let key in state.ingredients) {
        state.ingredients[key].quantity = 0;
      }
      state.totalPrice = 350;
    },
  },
});

export const { increment, decrement, reset } = burgerBuilderSlice.actions;
export default burgerBuilderSlice.reducer;
