<script>
import PhotoCard from './PhotoCard.vue';
import ContactForm from './ContactForm.vue';

export default {
    name: 'AppMain',
    components: {
        PhotoCard,
        ContactForm,
    }
}
</script>

<template>
    <main>
        <PhotoCard></PhotoCard>
        <ContactForm></ContactForm>
    </main>
</template>


<style scoped></style>