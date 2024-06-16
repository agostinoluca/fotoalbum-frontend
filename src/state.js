import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
  base_api_url: "http://127.0.0.1:8000",
  photos_endpoint: "/api/photos",
  categories_endpoint: "/api/categories",
  search_photo: "",
  photos: null,
  categories: [],
  selectedCategory: "",

  callApi(photos_url) {
    axios
      .get(photos_url)
      .then((resp) => {
        // console.log(resp);
        this.photos = resp.data.results;
      })
      .catch((err) => {
        console.error(err);
      });
  },

  changePage(url) {
    this.callApi(url);
  },

  search() {
    let photos_url =
      this.base_api_url + this.photos_endpoint + `?search=${this.search_photo}`;

    if (this.selectedCategory) {
      photos_url += `&category=${this.selectedCategory}`;
    }

    this.callApi(photos_url);
  },

  getCategories() {
    const categories_url = state.base_api_url + state.categories_endpoint;
    // console.log(categories_url);
    axios
      .get(categories_url)
      .then((resp) => {
        // console.log(resp);
        const arrayCategory = resp.data.results;
        arrayCategory.forEach((category) => {
          this.categories.push(category);
        });
        // console.log(this.categories);
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
