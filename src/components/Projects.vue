<script>

import axios from 'axios';
import { store } from '../data/store';
import Card from './partials/Card.vue';
import Loader from './partials/Loader.vue';
import Navigator from './partials/Navigator.vue';

export default {
    name: 'Projects',
    components: {
        Card,
        Loader,
        Navigator
    },
    data(){
        return{
            store,
            isLoaded: false,
        }
    },
    methods:{
        getApi(endpoint){
            this.isLoaded = true;
            axios.get(endpoint)
                .then(results =>{
                    console.log(endpoint);
                store.projects = results.data;
            })
        }
    },
    mounted(){
        this.getApi(store.apiUrl + 'projects');
        console.log(store.projects);
    }
}
</script>

<template>

        <h1>Projects</h1>
        <Loader v-if="!isLoaded" />

        <div v-else class="card-cont">
            <Card />
            <Navigator 
            @callApi="getApi"/>
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