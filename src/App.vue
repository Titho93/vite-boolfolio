<script>

import axios from 'axios';
import {store} from './data/store';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data(){
    return {
      title: 'Api List',
      store
    }
  },
  methods: {
    getApi(){
      axios.get(store.apiUrl + 'projects')
      .then(result => {
        console.log(result.data);
        store.projectList = result.data;
        })
    }
  },
  mounted(){
    this.getApi();
  }
}

</script>

<template>
 <div class="container">
  <h1>{{ title }}</h1>
  <ProjectCard />
 </div>
</template>

<style lang="scss">

</style>
