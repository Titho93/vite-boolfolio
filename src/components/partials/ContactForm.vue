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
    <h1>Contacts</h1>

    <form v-if="!success" @submit.prevent="sendForm()">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="name" type="text" class="form-control" id="name" name="name" placeholder="Write your name">
            <p class="error" v-for="error in errors.name" :key="error">{{ error }}</p>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" id="email" name="email" placeholder="Write your Email">
            <p class="error" v-for="error in errors.name" :key="error">{{ error }}</p>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea v-model="message" class="form-control" id="message" name="message" rows="3" placeholder="Text"></textarea>
            <p class="error" v-for="error in errors.name" :key="error">{{ error }}</p>
        </div>
        <input class="btn btn-outline-warning" type="submit" value="Submit">

    </form>
    <div v-else>Email inviata corretttamente</div>
  
</template>

<style lang="scss" scoped>

form {
    text-align: center;
    padding: 20px;
}

p {
    font-size: 20px;
    text-align: center;
    color: red;
}

</style>