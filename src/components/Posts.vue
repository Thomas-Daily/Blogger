<template>
  <div class="card row justify-content-center m-2 mt-4 elevation-3">
    <div class="col-12">
      <div class="row justify-content-space m-2">
        <div class="col-2">
          <img :src="post.userPic" alt="IDK" class="userPic">
        </div>
        <div class="col-6">
          <h4>{{post.userName}}</h4>
        </div>

      </div>
    </div>
    <div class="col-10">
      <!-- <img :src="post.creator?.picture" alt=""> -->
      <img v-if="post.imgURL" class="img-fluid" :src="post.imgURL" alt="post pic">
      <h5>{{post.body}}</h5>
    </div>
  </div>

</template>


<script>

import { Post } from '../models/Post'
import { Poster } from '../models/Poster'

export default {
  props: {
    post: { type: Post, required: true },
    poster: { type: Poster, required: true }
  }
}
</script>

<style>
.userPic {
  max-width: 4rem;
  max-height: 4rem;
}
</style>