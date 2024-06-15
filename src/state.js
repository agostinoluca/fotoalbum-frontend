import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
  base_api_url: "http://127.0.0.1:8000",
  photos_endpoint: "/api/photos",
  search_photo: "",
  photos: null,

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
    const photos_url =
      this.base_api_url + this.photos_endpoint + `?search=${this.search_photo}`;

    // console.log(photos_url);
    this.callApi(photos_url);
  },
});
