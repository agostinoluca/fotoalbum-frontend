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
    <header class="bg-primary bg-opacity-25 position-fixed z-3 w-100 shadow">


        <div class="logo img-fluid px-3">
            <img width="200" src="../assets/img/logo.png" alt="Logo FotoAlbum">
        </div>
        <!-- /logo-->
    </header>



    <div class="bg_primary">

        <div class="jumbotron p-5 min-vh-100 shadow">
            <div class="container-fluid py-5">
                <div class="row pt-5">
                    <div class="col-8">
                        <h1 class="py-5 display-5 text-uppercase fw-bold text_light">
                            Welcome to a digital canvas where ideas come to life
                        </h1>
                        <div class="d-flex align-items-center gap-3 py-5">
                            <h4 class="text_light">Look at my featured photos</h4>
                            <a class="text_lightblue on_hover_pulse_light" href="#featured_photos"><i
                                    class="fa fa-chevron-circle-down fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-4">
                    </div>
                </div>
            </div>
        </div>


        <nav class="bg_primary pt-5">
            <div class="container">
                <div class="row text-center">
                    <div class="col">
                        <div class="w-75 m-auto">
                            <select class="form-select form-select-sm" v-model="state.selectedCategory">
                                <option value="">Filter by category</option>
                                <option v-for="category in state.categories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="w-75 m-auto">
                            <select class="form-select form-select-sm" name="" id="">
                                <option selected>Filter by Tags</option>
                                <option value="">New Delhi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


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


</template>


<style scoped></style>
