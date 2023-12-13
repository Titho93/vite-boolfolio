<script>
import axios from "axios";
import { store } from "../../data/store";
import Loader from '../partials/Loader.vue';

export default {

    name: 'CardDetail',
    components: {
        Loader
    },

    data(){
        return{
            isLoaded: false,
            slug: '',
            project:{}
        }
    },

    methods: {
        getProject(slug){
            axios.get(store.apiUrl + 'projects/get-project/' + slug )
            .then(res => {
                this.isLoaded = true;
                console.log(res.data);
                this.project = res.data;

            })
        }
    },

    mounted(){
        this.getProject(this.$route.params.slug);
    },
    computed: {
        tecnologiesList(){
            return this.project.tecnologies?.map(tecnology => tecnology.name).join(',') || 'No Tecnology';  
        }
    }

}

</script>

<template>

    <Loader v-if="!isLoaded"/>

    <div v-else>
        <h1>{{ project.name }}</h1>
        <p>Type: {{ project.type?.name ?? ' - ' }} </p>
        <p>Tecnology: {{ tecnologiesList }} </p>
        <div>FOTO</div>
        <p>{{ project.date }}</p>
        <p> {{ project.description }}</p>

    </div>


</template>

<style lang="scss" scoped>

p {
    font-size: 40px;
    text-align: center;
    
}

</style>