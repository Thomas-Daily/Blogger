import { applyStyles } from "@popperjs/core";
import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class PostsService {
  async getPosts(pageUrl = '') {
    const res = await api.get('api/posts', pageUrl)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }

  async createPost(formData) {
    const res = await api.post('api/posts', formData)
    AppState.posts.push(new Post(res.data))
    logger.log(formData)
  }

  async getPostsByTerm(term) {
    const res = await api.get('/search/posts', {
      params: {
        query: term,
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.term = term
  }
}

export const postsService = new PostsService()