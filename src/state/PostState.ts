import PostModel from "../models/PostModel";

export default interface PostState {
  posts?: Array<PostModel>;
  isRejected: boolean;
  isFulfilled: boolean;
  isLoading: boolean;
  error?: string;
}
