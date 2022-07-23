import { combineReducers, configureStore } from "@reduxjs/toolkit";

import QuizSlice from "./slices/quizSlice";

const rootReducer = combineReducers({
	quiz: QuizSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
