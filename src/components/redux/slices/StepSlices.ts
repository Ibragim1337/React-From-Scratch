import { createSlice } from "@reduxjs/toolkit";

export const counterStepSlice = createSlice({
	name: 'step',
	initialState: 1,
	reducers: {
		decrement: state => Math.max(1, state - 1),
		increment: state => state + 1
	}
});

export const {increment, decrement } = counterStepSlice.actions;

export default counterStepSlice.reducer;