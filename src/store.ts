import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import counterReducer from "./redux/slices/counterSlice"
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    counterReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch = useDispatch.withTypes<AppDispatch>()
export const useTypedSelector = useSelector.withTypes<RootState>()

export default store;
=======
import counterReducer from './components/redux/slices/CounterSlices';
import  counterStepSlice  from "./components/redux/slices/StepSlices";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
	reducer: {
		counterReducer,
		counterStepSlice
	}
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
export const useTypedSelector = useSelector.withTypes<RootState>();
>>>>>>> 158e0bea8af56c2fe6de4c21ed8d70b5ffe6980e
