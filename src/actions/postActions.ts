import {
	FETCH_POST_PENDING,
	FETCH_POST_FULLFILED,
	FETCH_POST_REJECTED,
} from "../constants/postConstants";
import PostModel from "../models/PostModel";
import { RootState } from "../reducers/rootReducer";
import PostService from "../services/PostService";

export type PostsAction =
	| { type: FETCH_POST_PENDING }
	| { type: FETCH_POST_FULLFILED; payload: Array<PostModel> }
	| { type: FETCH_POST_REJECTED; error: string };

type GetState = () => RootState;
type PromiseAction = Promise<PostsAction>;
type Dispatch = (action: PostsAction | ThunkAction | PromiseAction) => void;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => Promise<void>;

/**
 * Get posts.
 */
export const getPosts = (): ThunkAction => {
	return async (dispatch, _getState) => {
		dispatch({ type: FETCH_POST_PENDING });
		try {
			const posts = await PostService.fetchPosts();
			dispatch({
				type: FETCH_POST_FULLFILED,
				payload: posts,
			});
		} catch (error) {
			dispatch({
				type: FETCH_POST_REJECTED,
				error: error,
			});
		}
	};
};
