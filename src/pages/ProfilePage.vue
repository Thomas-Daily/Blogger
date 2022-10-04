<template>
  <div class="text-center"></div>
  <div class="cover-img text-shadow" :style="{backgroundImage: `url(${profile?.coverImg})`}">
    <img :src="profile?.picture" alt="" height="120">
    <div class="my-5">
      <h3 class="bioWords">{{ profile.name }}</h3>
      <p class="bioWords">{{ profile.bio }}</p>
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-2">
      <a v-if="profile.github" :href="profile?.github" target="_blank">
        <i class="mdi mdi-deviantart selectable">GitHub</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="profile.resume" :href="profile?.resume" target="_blank">
        <i class="mdi mdi-file-account selectable">Resume</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="profile?.class" target="_blank">
        <i class="mdi mdi-desktop-classic">{{profile?.class}}</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="profile?.linkedin" :href="profile?.linkedin" target="_blank">
        <i class="mdi mdi-linkedin selectable">Linkedin</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="profile?.graduated == true">
        <i class="mdi mdi-school"></i>
      </a>
    </div>
  </div>

  <Posts v-for="p in posts" :post="p" />
  <button @click="changePage(older)" class="btn btn-danger me-2">Previous</button>
  <button @click="changePage(newer)" :class="`btn btn-danger ${!newer ? 'btn-info' : ''}`">Next</button>

</template>

<script>

import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import AccountForm from '../components/AccountForm.vue';
import Posts from '../components/Posts.vue';
import ProfileDetailVue from '../components/ProfileDetail.vue';
import { profileService } from '../services/ProfileService';
import { Profile } from '../models/Profile'
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { postsService } from '../services/PostsService';


export default {

  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        await profileService.getProfile(route.params.id)
        await profileService.getPost(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, "error")
      }
    })


    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      older: computed(() => AppState.nextPage),
      newer: computed(() => AppState.previousPage),
      async changePage(page) {
        try {
          await postsService.getPosts(page)
        } catch (error) {
          Pop.error(error.message)
        }
      },
      route


    };

    // when the page loads (onMounted) go and get this profile
    // get the profile by id in the url (route id)
    // after getting the profile... save it as the active profile
  },

  components: { AccountForm, Posts, Profile }
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
