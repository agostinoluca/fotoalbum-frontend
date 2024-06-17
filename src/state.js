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
  evidence: false,
  loader: false,

  callApi(photos_url) {
    this.loader = true;
    axios
      .get(photos_url)
      .then((resp) => {
        this.photos = resp.data.results;
        this.loader = false;
      })
      .catch((err) => {
        console.error(err);
        this.loader = false;
      });
  },

  changePage(url) {
    let urlSearch = url;

    if (this.search_photo != "") {
      urlSearch += `&search=${this.search_photo}`;
    }

    if (this.selectedCategory != "") {
      urlSearch += `&search=&category=${this.selectedCategory}`;
    }

    if (this.evidence) {
      urlSearch += "&evidence=1";
    }

    this.callApi(urlSearch);
  },

  search() {
    let photos_url =
      this.base_api_url + this.photos_endpoint + `?search=${this.search_photo}`;

    if (this.evidence) {
      photos_url += "&evidence=1";
    }

    if (this.selectedCategory) {
      photos_url += `&category=${this.selectedCategory}`;
    }
    this.callApi(photos_url);
  },

  getCategories() {
    const categories_url = state.base_api_url + state.categories_endpoint;
    axios
      .get(categories_url)
      .then((resp) => {
        const arrayCategory = resp.data.results;
        arrayCategory.forEach((category) => {
          this.categories.push(category);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
