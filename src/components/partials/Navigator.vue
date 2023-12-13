<script>
  export default {
    name: 'Navigator',
    data() {
      return {}
    },
    components:{},
    methods: {
      callApi(linkUrl){
        this.$emit('callApi',linkUrl);
      }
    },
    mounted() {},
    computed: {}
  }
</script>

<template>
    
</template>


<style lang="scss" scoped>
.nav-wrapper{
  margin-top:20px;
  text-align: center;
  button{
    padding:3px 7px;
    margin: 2px;
  }
}
</style>