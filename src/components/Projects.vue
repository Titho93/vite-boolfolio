<script>

import { store } from '../data/store';
import Card from './partials/Card.vue';

export default {
    name: 'Projects',
    components: {
        Card
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        console.log(store.projectList);
    }
}
</script>

<template>

        <h1>Projects</h1>

        <div class="card-cont">
            
            <Card v-for="card in store.projectList"
            :key="card.id"
            :name="card.name"
            :date="card.date"
            :description="card.description"
            :image="card.image"
            />
        </div>
    
  
</template>

<style lang="scss" scoped>

.card-cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 30px;
}

</style>