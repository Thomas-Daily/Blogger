<template>
  <div class="card row justify-content-center m-2 mt-4 elevation-3">
    <div class="col-12">
      <div class="row justify-content-space m-2">
        <div class="col-2">
          <router-link class="navbar-brand d-flex" :to="{ name: 'Profile', params: {id: post.creator?.id} }">
            <img :src="post.userPic" alt="IDK" class="userPic">
          </router-link>
        </div>
        <div class="col-6 d-flex justify-content-between">
          <h4>{{post.userName}}</h4>
          <button v-if="account.id == post.creator.id" class="btn btn-danger mdi mdi-close"
            @click="deletePost(post.id)"></button>
          <button class="btn btn-succes mdi mdi-star" @click="likePost(post.id)"></button>
        </div>

      </div>
    </div>
    <div class="col-10">
      <!-- <img :src="post.creator?.picture" alt=""> -->
      <img v-if="post.imgURL" class="img-fluid" :src="post.imgURL" alt="post pic">
      <h5>{{post.body}}</h5>
      <h6> {{new Date(post.createdAt).toLocaleDateString()}}</h6>
      <h3>Likes: {{post.likes}}</h3>
    </div>
  </div>

</template>


<script>


import { computed } from 'vue';
import { AppState } from '../AppState';
import { Post } from '../models/Post'
import { postsService } from '../services/PostsService';
import Pop from '../utils/Pop';

export default {
  props: {
    post: { type: Post, required: true },
  },

  setup() {
    return {
      async deletePost(id) {
        try {
          await postsService.deletePost(id)
        } catch (error) {
          Pop.error('error', error)
        }
      },

      async likePost(id) {
        try {
          await postsService.likePost(id)
        } catch (error) {
          Pop.error(error)
        }
      },

      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>
.userPic {
  max-width: 4rem;
  max-height: 4rem;
}
</style>