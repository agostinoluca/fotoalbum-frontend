<script>
import { state } from './state';
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  mounted() {
    const photos_url = state.base_api_url + state.photos_endpoint;
    const categories_url = state.base_api_url + state.categories_endpoint;
    // console.log(photos_url);
    state.callApi(photos_url);
    state.getCategories(categories_url);
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style></style>
