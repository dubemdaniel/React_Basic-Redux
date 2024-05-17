import { legacy_createStore as createStore } from "redux";
import { createSlice , configureStore} from "@reduxjs/toolkit";

interface IState {
  counter: number;
  showCounter?: boolean;
}

const initialState: IState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter', 
  initialState,
  reducers: {
    increment(state) { 
      state.counter++;
    },
    decrement(state) { 
      state.counter--
    },
    toggle(state) { 
      state.showCounter = !state.showCounter;
    }
  }
})

// const counterReducer = (state = initialState, action: any): IState => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };

//     case "DECREMENT":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };

//     case "TOGGLE":
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);


const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions

export default store;
