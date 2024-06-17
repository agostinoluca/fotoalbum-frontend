<script>
import { state } from '../state';

export default {
    name: 'FilterGroup',
    data() {
        return {
            state,
        }
    },
}
</script>


<template>
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
</template>