import Module from "../models/Module";

export default interface PostState {
  posts?: Array<Module>;
  isRejected: boolean;
  isFulfilled: boolean;
  isLoading: boolean;
  error?: string;
}
