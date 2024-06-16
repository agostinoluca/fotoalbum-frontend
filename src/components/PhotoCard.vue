<script>
import { state } from '../state';

export default {
    name: 'PhotoCard',

    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <section id="featured_photos" class="photos bg_primary pb-3" v-if="state.photos">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-sm-3 g-4">
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
                            <div class="modal fade" :id="`photo-${photo.id}`" tabindex="-1" data-bs-backdrop="static"
                                data-bs-keyboard="false" role="dialog" :aria-labelledby="`modalTitle-${photo.id}`"
                                aria-hidden="true">
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

                                        <div class="modal-body px-5 lead">
                                            {{ photo.description }}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
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


            <nav aria-label="Page navigation" class="mt-4">
                <ul class="pagination">
                    <li class="page-item" :class="{ 'disabled': !link.url, 'active': link.active }"
                        v-for="link in state.photos.links">
                        <button class="page-link" :href="link.url" @click="state.changePage(link.url)">
                            <span v-html="link.label"></span>
                        </button>
                    </li>
                </ul>
            </nav>

        </div>



    </section>
</template>

<style class="scoped">
img {
    max-width: 800px;
    aspect-ratio: 16/9;
}
</style>