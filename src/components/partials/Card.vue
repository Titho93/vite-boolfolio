<script>
import { store } from '../../data/store';

export default {
    name: 'Card',
    data(){
      return {
        store
      }
    }
}
</script>

<template>
  
    <div v-for="project in store.projects" :key="project.slug" class="card" style="width: 18rem;">
      <router-link :to="{ name: 'cardDetail', params: { slug: project.slug } }" class="title">{{ project.name }}</router-link>
      <!-- <img :src="image" alt="Card" class="card-img-top"> -->
      <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">{{ project.tecnologies?.name }}</p>
      <p class="card-text">{{ project.type?.name }}</p>
    </div>
</div>

</template>

<style lang="scss">

</style>