import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";

const loadState = () => {
    const serializedState = localStorage.getItem('auth');
    return serializedState ? JSON.parse(serializedState) : undefined;
}
const saveState = (state) => {
    const serializedState = JSON.stringify(state.auth);
    localStorage.setItem('auth', serializedState);
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: { auth: loadState() }, 
});
// Subscribe to store updates to save auth state to localStorage
store.subscribe(() => saveState(store.getState()));
export default store;