import { PostsAction } from "../actions/postActions";
import {
	FETCH_POST_FULLFILED,
	FETCH_POST_PENDING,
	FETCH_POST_REJECTED,
} from "../constants/postConstants";
import PostState from "../state/PostState";

const initialState: PostState = {
	isFulfilled: false,
	isLoading: false,
	isRejected: false,
	error: undefined,
	posts: undefined,
};

const postsReducer = (state = initialState, action: PostsAction): PostState => {
	switch (action.type) {
		case FETCH_POST_PENDING:
			return { ...state, isLoading: true, error: undefined };
		case FETCH_POST_FULLFILED:
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				posts: [...action.payload],
			};
		case FETCH_POST_REJECTED:
			return {
				...state,
				isLoading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default postsReducer;
