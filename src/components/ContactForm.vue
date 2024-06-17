<script>
import axios from "axios";
import { errorMessages } from 'vue/compiler-sfc';

export default {
    name: 'ContactForm',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            success: false,
            errors: false,
            loadingSent: false,
        }
    },
    methods: {
        sendMessage() {

            this.loadingSent = true;
            const formData = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post('http://127.0.0.1:8000/api/contacts', formData)
                .then(response => {

                    this.loadingSent = false;

                    if (response.data.success) {
                        this.success = 'Message sent successfully! We will get back to you as soon as possible!';
                        this.name = '';
                        this.email = '';
                        this.message = '';
                        this.errors = false;
                    } else {
                        this.errors = response.data.errors;
                        this.success = false;
                    }


                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
}
</script>


<template>
    <div id="contact_form" class="bg_primary text_light pb-5">
        <div class="container py-4">

            <div class="alert alert-success text-center" role="alert" v-if="success">
                {{ success }}
            </div>

            <div class="alert alert-danger text-center" role="alert" v-if="errors">
                <strong>Message not sent!</strong>
                <ul class="list-unstyled pt-2">
                    <li v-for="error in errors">
                        {{ error[0] }}
                    </li>
                </ul>
            </div>

            <div class="text-center text_dark bg_lightblue rounded-3 p-2 my-3 fw-bold fs-5">
                Have questions? Fill out the form, and i'll get back to you as soon as possible!
            </div>
            <form @submit.prevent="sendMessage()">


                <div class="py-3">
                    <input type="text" class="form-control" name="name" id="name" aria-describedby="nameHelper"
                        placeholder="Name Surname" v-model="name" />
                    <small id="nameHelper" class="form-text text-muted">type your full name</small>
                </div>


                <div class="pb-3">
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelper"
                        placeholder="example@mail.com" v-model="email" />
                    <small id="emailHelper" class="form-text text-muted">type your email address</small>
                </div>

                <div class="pb-4">
                    <label for="message" class="form-label">Your message</label>
                    <textarea class="form-control" name="message" id="message" rows="5" v-model="message"></textarea>
                </div>


                <button type="submit" class="btn_custom bg_lightblue text_dark" :disabled="loadingSent">
                    {{ loadingSent ? 'Sending...' : 'Send' }}
                </button>

            </form>
        </div>
    </div>
</template>