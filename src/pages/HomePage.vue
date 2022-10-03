<template>

  <SearchForm />

  <div>
    <button class="btn" data-bs-target="#postsCanvas" data-bs-toggle="offcanvas" v-if="account.id">
      <span class="text-danger selectable text-uppercase">
        Add a Post
      </span>
    </button>
  </div>

  <Posts v-if="posts" v-for="p in posts" :post="p" />

  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="postsCanvas"
    aria-labelledby="postsCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="postsCanvasLabel">Add your Post</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <PostForm />
    </div>
  </div>
  <button @click="changePage(previousPage)" class="btn btn-danger me-2"
    :class="{'disabled' : !previousPage}">Previous</button>
  <button @click="changePage(nextPage)" :class="`btn btn-danger ${!nextPage ? 'btn-info' : ''}`">Next</button>
</template>

<script>
import { onMounted } from 'vue'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import Adds from '../components/Adds.vue'
import { logger } from '../utils/Logger'
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import Posts from '../components/Posts.vue'
import { Account } from '../models/Account'
import PostForm from '../components/PostForm.vue'
import SearchForm from '../components/SearchForm.vue'

export default {
  setup() {

    onMounted(async () => {
      try {
        await postsService.getPosts()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, "error")
      }
    })
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      async changePage(pageUrl) {
        try {
          await postsService.getPosts(pageUrl)
        } catch (error) {
          Pop.error(error.message)
        }
      }
    };
  },
  components: { Adds, Posts, PostForm, SearchForm }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
