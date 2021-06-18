import axios from "axios";
import Config from "react-native-config";
import Module from "../models/Module";

interface PostService {
  fetchPosts(): Promise<Array<Module>>;
}

class PostAxiosService implements PostService {
  async fetchPosts(): Promise<Array<Module>> {
    try {
      const res = await axios
        .get(`${Config.API_URL}/posts/`);
      const data = res.data;
      return data as Array<Module>;
    } catch (error) {
      return await Promise.reject(error);
    }
  }
}

export default new PostAxiosService() as PostService;
