import { applyStyles } from "@popperjs/core";
import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { logger } from "../utils/Logger";
import { api, postApi } from "./AxiosService";

class PostsService {
  async getPosts(page = '') {
    // debugger
    const res = await postApi.get(page)
    logger.log('post data', res.data.posts)
    AppState.posts = res.data.posts.map(p => new Post(p))
    logger.log('appstate posts', AppState.posts)
    AppState.nextPage = res.data.newer
    AppState.previousPage = res.data.older
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

  async deletePost(id) {
    console.log(id)
    await api.delete(`/api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }

  async likePost(id) {
    console.log(id)
    const res = await api.post(`/api/posts/${id}/like`)
  }

}

export const postsService = new PostsService()