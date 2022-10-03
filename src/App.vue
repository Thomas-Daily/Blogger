

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="row">
      <div class="col-3 left">
        <ProfileDetail />
      </div>
      <!--ANCHOR CHANGING PAGES-->
      <div class="col-6">
        <router-view />
        <!--ANCHOR ADS-->
      </div>
      <div class="col-2 right">
        <Adds v-for="a in adds" :key="a.id" :add="a" />
      </div>
    </div>


  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Adds from './components/Adds.vue'
import Pop from './utils/Pop'
import { addsService } from './services/AddsService'
import Login from './components/Login.vue'
import { postsService } from './services/PostsService'
import ProfileDetail from './components/ProfileDetail.vue'

export default {
  setup() {
    onMounted(async () => {
      try {
        await addsService.getAdds()
      } catch (error) {
        Pop.error(error)
      }
    })
    return {
      appState: computed(() => AppState),
      adds: computed(() => AppState.add),
    }

  },
  components: { Navbar, Adds, Login, ProfileDetail }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.left {
  height: 100vh;
  background-color: rgb(29, 44, 91);
}

.right {
  height: 100vh;
  background-color: rgb(0, 0, 0);
  align-items: flex-end;
}
</style>
