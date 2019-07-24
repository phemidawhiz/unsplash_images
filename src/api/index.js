/**
 * backend service apis
 */
import axios from "axios";

export default {
  // get photos
  getPhotos(baseURL, client_id, search_term ) {
    return axios.get(`${baseURL}?page=1&query=${search_term}&client_id=${client_id}`);
  },
};
