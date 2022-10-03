<template>
  <div class="text-center"></div>
  <div class="cover-img text-shadow" :style="{backgroundImage: `url(${account.coverImg})`}">
    <img :src="account.picture" alt="" height="120">
  </div>
  <div class="my-5 m-3">
    <h3 class="bioWords">{{ account.name }}</h3>
    <p class="bioWords">{{ account.bio }}</p>
  </div>

</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from '../components/AccountForm.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
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
