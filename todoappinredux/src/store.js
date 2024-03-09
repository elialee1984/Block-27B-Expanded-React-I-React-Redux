// configureStore is like building the library
import { configureStore, createSlice } from "@reduxjs/toolkit";

// creates a reducer
// createSlice takes in an object as an argument
// this object takes in at least three keys
// 1. name of the slice
// 2. initial state
// 3. a list of reducers (listeners)
const countReducer = createSlice({
  name: "count",
  initialState: 0,
  // these help you set the state
  reducers: {
    // these should be called actions, actually
    // what do you want the library to do for you?
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
  },
});

// this is your library
const store = configureStore({
  //the genres of books in the library
  // objects take in key:value pairs
  // key is the genre (can be called anything)
  // value is the specific reducer (like the librarian that listens to your request... analogy doesn't seem to work her that well...)

  reducer: {
    // these hold your state
    count: countReducer.reducer,
  },
});

export default store;

const increment = countReducer.actions.increment;
const decrement = countReducer.actions.decrement;

export { countReducer, increment, decrement };
