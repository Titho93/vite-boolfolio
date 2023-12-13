<script>
export default {
    name: "Header",
    data() {
        return {}
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {}
}
</script>

<template>
  
  <header>
    <ul class="nav nav-pills">
  <li class="nav-item">
    <router-link :to="{name: 'home'}" class="btn btn-danger">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link :to="{name: 'about'}" class="btn btn-danger">About</router-link>
  </li>
  <li class="nav-item">
    <router-link :to="{name: 'projects'}" class="btn btn-danger">Projects</router-link>
  </li>
  <li class="nav-item">
    <router-link :to="{name: 'contacts'}" class="btn btn-danger">Contacts</router-link>
  </li>
</ul>
  </header>

</template>

<style lang="scss">

header {
    background-color: rgba(13, 12, 12, 0.447);
    li {
        padding: 5px;
    }
}



</style>