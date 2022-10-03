<template>
  <div class="row">
    <div class="col-12">
      <img class="add" :src="add.tall" alt="Ad">
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState';
import { Add } from '../models/Add';


export default {
  props: {
    add: {
      type: Add,
      required: true
    }
  },
  setup() {
    return {

      //square: computed(() => `url(${props.ad.square})`)
    }
  }
}
</script>

<style>
.add {
  width: 100%;
  height: 100%;
  padding-top: 3rem;
}
</style>