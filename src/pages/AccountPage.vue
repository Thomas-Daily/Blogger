<template>
  <div class="text-center"></div>
  <div class="cover-img text-shadow" :style="{backgroundImage: `url(${account.coverImg})`}">
    <img :src="account.picture" alt="" height="120">
    <div class="my-5">
      <h3 class="bioWords">{{ account.name }}</h3>
      <p class="bioWords">{{ account.bio }}</p>
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-2">
      <a v-if="account.github" :href="account.github" target="_blank">
        <i class="mdi mdi-deviantart selectable">GitHub</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="account.resume" :href="account.resume" target="_blank">
        <i class="mdi mdi-file-account selectable">Resume</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="account.class" target="_blank">
        <i class="mdi mdi-desktop-classic">{{account.class}}</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="account.linkedin" :href="account.linkedin" target="_blank">
        <i class="mdi mdi-linkedin selectable">Linkedin</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="account.graduated == true">
        <i class="mdi mdi-school"></i>
      </a>
    </div>
  </div>
  <div class="row my-3">
    <div class="col-12 m-autu">
      <AccountForm class="elevation-2" />
    </div>
  </div>

  <Posts v-if="posts" v-for="p in posts" :post="p" />


</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from '../components/AccountForm.vue';
import Posts from '../components/Posts.vue';
import { Account } from '../models/Account';
import { Post } from '../models/Post';
export default {

  setup() {

    // onMounted(async () => {
    //   try {
    //     await postsService.getPosts()
    //   } catch (error) {
    //     logger.error(error)
    //     Pop.toast(error.message, "error")
    //   }

    return {
      account: computed(() => AppState.account)
    };



  },

  components: { AccountForm, Posts }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.cover-img {
  background-size: cover;
}

.bioWords {
  color: white;
  text-shadow: 3rem;
  text-emphasis: 5rem;
}
</style>
