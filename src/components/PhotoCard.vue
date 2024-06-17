<script>
import { state } from '../state';
import AppLoader from './AppLoader.vue';

export default {
    name: 'PhotoCard',
    components: {
        AppLoader,
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div v-if="state.loader">
        <AppLoader></AppLoader>
    </div>
    <div v-else>
        <section class="photos bg_primary pb-3" v-if="state.photos">
            <div class="container photo_section">
                <div v-if="state.photos.data && state.photos.data.length"
                    class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    <div class="col" v-for="photo in state.photos.data">
                        <div class="card h-100">
                            <template v-if="photo.image && photo.evidence">
                                <img class="rounded-top-2"
                                    :src="photo.image.startsWith('upload') ? state.base_api_url + '/storage/' + photo.image : photo.image"
                                    :alt="'Photo of ' + photo.title">
                                <span class="bg_gold position-absolute end-0 mt-2 mx-1 px-2 rounded-3">TOP</span>
                            </template>
                            <template v-else-if="photo.image">
                                <img class="rounded-top-2"
                                    :src="photo.image.startsWith('upload') ? state.base_api_url + '/storage/' + photo.image : photo.image"
                                    :alt="'Photo of ' + photo.title">
                            </template>


                            <div class="card-body text-center">
                                <span class="fs-5 text-uppercase">
                                    {{ photo.title }}
                                </span>
                            </div>

                            <div class="card-footer text-center">
                                <!-- Modal trigger button -->
                                <button type="button" class="btn btn-transparent text-info" data-bs-toggle="modal"
                                    :data-bs-target="`#photo-${photo.id}`">
                                    Learn more <i class="fa-solid fa-magnifying-glass"></i>
                                </button>

                                <!-- Modal Body -->
                                <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
                                <div class="modal fade" :id="`photo-${photo.id}`" tabindex="-1"
                                    data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
                                    :aria-labelledby="`modalTitle-${photo.id}`" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
                                        role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title text-uppercase" :id="`modalTitle-${photo.id}`">
                                                    {{ photo.title }}
                                                </h5>
                                            </div>
                                            <template v-if="photo.image">
                                                <img class="m-auto"
                                                    :src="photo.image.startsWith('upload') ? state.base_api_url + '/storage/' + photo.image : photo.image"
                                                    :alt="'Photo of ' + photo.title">
                                            </template>

                                            <div class="modal-body">
                                                <div class=" px-5 lead">
                                                    {{ photo.description }}
                                                </div>
                                                <div v-for="tag in photo.tags" class="badge bg_primary fs-6 mt-3 mx-1">
                                                    {{ tag.name }}
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn_custom" data-bs-dismiss="modal">
                                                    <i class="fa-solid fa-angles-left"></i> Back
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="container text-center d-flex justify-content-center align-items-center gap-3 py-5">
                    <div class="py-5">
                        <img width="200px" src="../assets/img/not_available.png" alt="">
                    </div>
                    <div class="fw-bold fs-4">
                        No photos found with your filters. Try a new search!
                    </div>
                </div>
            </div>

            <div class="container d-flex justify-content-between align-items-center px-4">
                <nav aria-label="Page navigation" class="mt-4">
                    <ul class="pagination">
                        <li class="page-item" :class="{ 'disabled': !link.url, 'active': link.active }"
                            v-for="link in state.photos.links">
                            <button class="page-link h-100" :href="link.url" @click="state.changePage(link.url)">
                                <span v-html="link.label"></span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div class="d-flex align-items-center gap-2 py-5 contact_me_sm">
                    <a class="text_lightblue on_hover_pulse_light" href="#contact_form"><i
                            class="fa fa-chevron-circle-down fa-2x"></i>
                    </a>
                    <h4 class="text_light">Contact me</h4>
                </div>
            </div>



        </section>
        <div v-else class="bg_primary text-center d-flex justify-content-center align-items-center gap-3 py-5">
            <div>
                <img width="200px" src="../assets/img/not_available.png" alt="">
            </div>
            <div class="fw-bold fs-4">
                <div class="text_danger text-uppercase py-1">500 Internal Server Error</div>
                <span>An unexpected error occurred on the server. Please try again later.</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    max-width: 800px;
    aspect-ratio: 16/9;
}

@media screen and (max-width: 480px) {

    .contact_me_sm {
        padding: 0.5rem;
    }

    .contact_me_sm h4 {
        font-size: 0.75rem;
        text-wrap: nowrap;
    }

    .contact_me_sm i {
        font-size: 1.5rem;
    }
}
</style>