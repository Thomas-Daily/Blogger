<template>
  <form class="card account-form" @submit.prevent="handleSubmit">
    <div class="card-body text-start">
      <div>
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model="editable.name" required name="name">
      </div>
      <div>
        <label for="picture">Picture:</label>
        <input type="url" class="form-control" v-model="editable.picture" required name="picture" placeholder="picture">
      </div>
      <div>
        <label for="coverImg">Cover Image:</label>
        <input type="url" class="form-control" v-model="editable.coverImg" name="coverImg">
      </div>
      <div>
        <label for="bio">Bio:</label>
        <textarea type="text" class="form-control" v-model="editable.bio" name="bio" rows="8"
          style="resize:none"></textarea>
      </div>
      <div>
        <label for="coverImg">GitHub:</label>
        <input type="url" class="form-control" v-model="editable.github" name="Deviantions">
      </div>
      <div>
        <label for="coverImg">Resume:</label>
        <input type="url" class="form-control" v-model="editable.resume" name="resume">
      </div>
      <div>
        <label for="coverImg">Class:</label>
        <input type="text" class="form-control" v-model="editable.class" name="class">
      </div>
      <div>
        <label for="coverImg">Linkedin:</label>
        <input type="url" class="form-control" v-model="editable.linkedin" name="linkedin">
      </div>
      <div class="mt-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="editable.graduated"
          name="graduated">
        <label class="form-check-label" for="flexCheckChecked">
          --> Graduated
        </label>
      </div>
    </div>
    <div>
      <button type="submit" class="btn btn-primary w-100 mt-2">Save</button>
    </div>
    <!--
      this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
  -->

  </form>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';
import Pop from '../utils/Pop';

export default {

  setup() {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...AppState.account }
    })

    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          Pop.error(error, '[EditAccount]')
        }
      }
    }


  },
}
</script>

<style>
.checkbox {
  width: 2rem;
  height: 2rem;
}
</style>