<template>
  <div class="text-center"></div>
  <div class="cover-img text-shadow" :style="{backgroundImage: `url(${profile.coverImg})`}">
    <img :src="profile.picture" alt="" height="120">
    <div class="my-5">
      <h3 class="bioWords">{{ profile.name }}</h3>
      <p class="bioWords">{{ profile.bio }}</p>
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-2">
      <a v-if="profile.github" :href="profile.github" target="_blank">
        <i class="mdi mdi-deviantart selectable">GitHub</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="profile.resume" :href="profile.resume" target="_blank">
        <i class="mdi mdi-file-account selectable">Resume</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="profile.class" target="_blank">
        <i class="mdi mdi-desktop-classic">{{profile.class}}</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">
        <i class="mdi mdi-linkedin selectable">Linkedin</i>
      </a>
    </div>
    <div class="col-2">
      <a v-if="profile.graduated == true">
        <i class="mdi mdi-school"></i>
      </a>
    </div>
  </div>

</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from '../components/AccountForm.vue';
import Posts from '../components/Posts.vue';

export default {

  setup() {
    return {
      profile: computed(() => AppState.profile)
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
