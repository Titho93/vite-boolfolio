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
        <h1>Detail</h1>
        <div class="card-body">
            <h5 class="card-title"><strong>Project Name:</strong> {{ project.name }}</h5>
            <div class="image">FOTO</div>
            <p class="card-text"><strong>Type:</strong> {{ project.type?.name ?? ' - ' }} </p>
            <p class="card-text"><strong>Tecnology:</strong> {{ tecnologiesList }} </p>
            <p class="card-text"><strong>Date:</strong> {{ project.date }}</p>
            <p class="card-text"><strong>Description:</strong> {{ project.description }}</p>
        </div>

    </div>


</template>

<style lang="scss" scoped>

.card-body{
    color: yellow;
    .image {
        padding: 10px;
    }
    strong {
        color: white;
    }
}

</style>