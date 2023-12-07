<script>

export default {
    name: 'Card',
    props:{
        id: String,
        name: String,
        date: Date,
        image: String,
        description: String
    }
}
</script>

<template>
  
  <div class="card" style="width: 18rem;">
  <img :src="image" alt="Card" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{ name }}</h5>
    <p class="card-text">{{ description }}</p>
    <p class="card-number">{{ date }}</p>
  </div>
</div>

</template>

<style lang="scss">

</style>