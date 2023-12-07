<script>

import axios from 'axios';
import {store} from './data/store';
import Projects from './components/Projects.vue';


export default {
  name: 'App',
  components: {
    Projects
  },
  data(){
    return {
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
  <RouterView />
 </div>
</template>

<style lang="scss">

</style>
