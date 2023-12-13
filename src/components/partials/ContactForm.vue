<script>

import axios from 'axios';
import { store } from '../../data/store';

export default {
    name: 'ContactsForm',

    data(){
        return{
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {
                name: [],
                email: [],
                message: []
            }
        }
    },
    methods:{
        sendForm(){
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post(store.apiUrl + 'send-mail', data)
            .then(response => {
                console.log(response.data);
                this.success = response.data.success;
                if(!this.success) {
                    this.errors = response.data.errors;
                }
  
              })
        }
    },
    mounted(){
    }
}
</script>

<template>

    <form v-if="!success" @submit.prevent="sendForm()">
        <div>
            <label for="">Name</label>
            <input v-model="name" type="text" name="name" id="name">
            <p class="error" v-for="error in errors.name" :key="error">{{ error }}</p>
        </div>
        <div>
            <label for="">Email</label>
            <input v-model="email" type="text" name="email" id="email">
            <p class="error" v-for="error in errors.email" :key="error">{{ error }}</p>
        </div>
        <div>
            <label for="">Message</label>
            <textarea v-model="message" name="message" id="message" cols="30" rows="10"></textarea>
            <p class="error" v-for="error in errors.message" :key="error">{{ error }}</p>
        </div>
        <div>
            <button type="submit" >Submit</button>
        </div>
    </form>
    <div v-else>Email inviata corretttamente</div>
  
</template>

<style lang="scss" scoped>

p {
    font-size: 20px;
    text-align: center;
    
}

</style>