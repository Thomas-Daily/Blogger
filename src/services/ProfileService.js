import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {

  async getProfile(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    logger.log('getting profile', res.data)
    AppState.activeProfile = new Profile(res.data)
  }

  async getPost(profileId) {
    const res = await api.get(`api/profiles/${profileId}/posts`)
    logger.log('getting posts', res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    logger.log('appstate posts', AppState.posts)
    AppState.nextPage = res.data.newer
    AppState.previousPage = res.data.older
  }
}

export const profileService = new ProfileService()