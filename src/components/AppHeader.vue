<script>
import { state } from '../state';
export default {
    name: 'AppHeader',
    data() {
        return {
            state,
        }
    },
}
</script>

<template>
    <header class="bg-primary bg-opacity-50 position-fixed z-3 w-100 shadow p-1 px-3">

        <div class="d-flex justify-content-between align-items-center">
            <div class="logo img-fluid">
                <img width="300" src="../assets/img/logo.png" alt="Logo FotoAlbum">
            </div>
            <!-- /logo-->

            <div class="px-1">
                <button class="btn_custom btn_custom_sm">
                    <a href="#contact_form">Contact me <i class="fa fa-pencil"></i></a>
                </button>
            </div>
        </div>
    </header>



    <div class="bg_primary">

        <div class="jumbotron p-5 min-vh-100 shadow">
            <div class="container-fluid py-5">
                <div class="row pt-5">
                    <div class="col-8">
                        <h1 class="py-5 display-5 text-uppercase fw-bold text_light text_sm">
                            Welcome to a digital canvas where ideas come to life
                        </h1>
                        <div class="d-flex align-items-center gap-3 py-5">
                            <h4 class="text_light">Look at my featured photos</h4>
                            <a class="text_lightblue on_hover_pulse_light" href="#featured_photos"><i
                                    class="fa fa-chevron-circle-down fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="featured_photos" class="text-center pt-5 pb-3 text-uppercase fs-3 text_light">
            <span>Explore my stunning photo collection and find your favorite shots!</span>
        </div>
        <div v-show="state.photos">
            <div id="group_filter" class="bg_primary pt-3">
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div class="col m-auto">
                            <select class="form-select form-select-sm mb-2" v-model="state.selectedCategory">
                                <option value="">Filter by category</option>
                                <option v-for="category in state.categories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div class="d-flex justify-content-center gap-1 py-2">
                            <input class="form-check-input" type="checkbox" v-model="state.evidence" value="1">
                            <label class="form-check-label text_light" for="evidence">Only highlight photos</label>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container py-3">
                <form @submit.prevent="state.search()">
                    <div class="input-group">
                        <input type="search" class="form-control" placeholder="search..." v-model="state.search_photo">
                        <button class="btn btn-outline-light" type="submit">
                            <i class="fas fa-search fa-lg fa-fw"></i>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>


</template>


<style scoped>
@media screen and (max-width: 480px) {
    .btn_custom_sm {

        background-color: var(--fotoalbum-primary);
        color: var(--fotoalbum-light);
        padding: 0.25rem 0.5rem;
        border-radius: 0.75rem;
        border: none;
        font-size: 0.75rem;
        cursor: pointer;
        text-wrap: nowrap;

        &:hover {
            color: var(--fotoalbum-light);
            box-shadow: 0 0 0.25rem var(--fotoalbum-light);
        }
    }

    .text_sm {
        font-size: 1.5rem;
    }
}
</style>
