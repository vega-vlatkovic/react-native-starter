import axios from "axios";
import Config from "react-native-config";
import PostModel from "../models/PostModel";

interface PostService {
  fetchPosts(): Promise<Array<PostModel>>;
}

class PostAxiosService implements PostService {
  async fetchPosts(): Promise<Array<PostModel>> {
    try {
      const res = await axios
        .get(`${Config.API_URL}/posts/`);
      const data = res.data;
      return data as Array<PostModel>;
    } catch (error) {
      return await Promise.reject(error);
    }
  }
}

export default new PostAxiosService() as PostService;
