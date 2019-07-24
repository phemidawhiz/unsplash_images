import api from "../../api";

const actions = {
  //Service to fetch image
  async fetchUnsplashPhotos({ rootState },  client_id, search_term ) {
    const unsplashPhotosResponse = await api.getPhotos(
      rootState.$baseURI, client_id, search_term
    );
    return unsplashPhotosResponse;
  }
};

export default {
  namespaced: true,
  actions
};
