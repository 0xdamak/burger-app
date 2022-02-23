import { createSlice } from "@reduxjs/toolkit";

export const burgerBuilderSlice = createSlice({
  name: "burger builder",
  initialState: {
    ingredients: {
      salad: {
        id: "Salad",
        value: 1,
      },
      cheese: {
        id: "Cheese",
        value: 3,
      },
      meat: {
        id: "Meat",
        value: 2,
      },
      tomato: {
        id: "Tomato",
        value: 1,
      },
      onion: {
        id: "Onion",
        value: 3,
      },
    //   pear: {
    //     id: "Pear",
    //     value: 3,
    //   },
    },
  },
  reducers: {
    increment: (state, action) => {
      state.ingredients[action.payload].value++;
    },
    decrement: (state, action) => {
      state.ingredients[action.payload].value--;
    },
  },
});

export const { increment, decrement } = burgerBuilderSlice.actions;
export default burgerBuilderSlice.reducer;
