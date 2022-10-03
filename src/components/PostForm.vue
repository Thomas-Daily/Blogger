<template>
  <form @submit.prevent="handleSubmit">

    <div class="form-group">
      <label for="body">Body:</label>
      <input type="text" v-model="editable.body" placeholder="Body" required class="form-control">
    </div>
    <div class="form-group">
      <label for="model">ImgUrl:</label>
      <input type="url" v-model="editable.imgUrl" placeholder="https://youknow.com" class="form-control">
    </div>

    <div class="my-3">
      <button class="btn btn-success" type="submit">SEND IT</button>
    </div>


  </form>
</template>


<script>
import { ref } from 'vue';
import { postsService } from '../services/PostsService';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({
      listing: {}
    })
    return {
      editable,
      async handleSubmit() {
        try {
          const formData = editable.value
          await postsService.createPost(formData)
          editable.value = {
            post: {}
          }
        } catch (error) {
          Pop.error(error, '[Submitting Form]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
