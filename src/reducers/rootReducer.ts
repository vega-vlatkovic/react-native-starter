import { Action, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import postsReducer from "./postReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type ReduxDispatch = ThunkDispatch<RootState, any, Action>;
