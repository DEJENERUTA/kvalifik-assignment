import { createSlice } from "@reduxjs/toolkit";

export const storiesSlice = createSlice({
	name: "stories",
	initialState: [],

	reducers: {
		addStories: (state, action) => {
			state.push(...action.payload);
		},
	},
});

export const { addStories } = storiesSlice.actions;

export default storiesSlice.reducer;
