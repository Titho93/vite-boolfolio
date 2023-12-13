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
  
    <div v-for="project in store.projects" :key="project.slug"  style="width: 18rem;">
      <router-link :to="{ name: 'cardDetail', params: { slug: project.slug } }" class="title">{{ project.name }}</router-link>
      <!-- <img :src="image" alt="Card" class="card-img-top"> -->
      <div class="card-body">
      <p class="card-text">{{ project.type?.name }}</p>
    </div>
</div>

</template>

<style lang="scss">

a {
  color: yellow;
}

</style>