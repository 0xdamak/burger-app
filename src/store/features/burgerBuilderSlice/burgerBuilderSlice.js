import { createSlice } from "@reduxjs/toolkit";

export const burgerBuilderSlice = createSlice({
  name: "burger builder",
  initialState: {
    ingredients: {
      salad: {
        id: "Salad",
        number: 0,
        value: 0.8,
      },
      cheese: {
        id: "Cheese",
        number: 0,
        value: 0.5,
      },
      meat: {
        id: "Meat",
        number: 0,
        value: 1.2,
      },
      tomato: {
        id: "Tomato",
        number: 0,
        value: 0.2,
      },
      onion: {
        id: "Onion",
        number: 0,
        value: 0.2,
      },
      pear: {
        id: "Pear",
        number: 0,
        value: 0.6,
      },
    },
    totalPrice: 1,
  },
  reducers: {
    increment: (state, action) => {
      state.ingredients[action.payload].number++;
      state.totalPrice =
        state.totalPrice + state.ingredients[action.payload].value;
    },

    decrement: (state, action) => {
      state.ingredients[action.payload].number--;
      state.totalPrice =
        state.totalPrice - state.ingredients[action.payload].value;
    },
    reset: (state) => {
      for (let key in state.ingredients) {
        state.ingredients[key].number = 0;
      }
      state.totalPrice = 1;
    },
  },
});

export const { increment, decrement, reset } = burgerBuilderSlice.actions;
export default burgerBuilderSlice.reducer;
