import Vue from "vue";
import Vuex from "vuex";
import VueAxios from "vue-axios";
import axios from "axios";
import VueSession from "vue-session";
import images from "./store/modules/images";

Vue.use(VueSession);
Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    images
  },

  state: {
    $baseURI: process.env.VUE_APP_BASE_URI,
    $cliend_id: process.env.VUE_APP_ACCESS_KEY
  },
  
  actions: {
    
  },

  mutations: {
    
  },
  getters: {
    
  }
});
