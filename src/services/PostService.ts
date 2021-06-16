import PostModel from "../models/PostModel";
import axios from "axios";
import Config from "react-native-config";

interface PostService {
  fetchPosts(): Promise<Array<PostModel>>;
}

class PostAxiosService implements PostService {
  fetchPosts(): Promise<Array<PostModel>> {
    return axios
      .get(`${Config.API_URL}/posts/`)
      .then((res) => res.data)
      .then((data) => data as Array<PostModel>)
      .catch((error) => Promise.reject(error));
  }
}

export default new PostAxiosService() as PostService;
