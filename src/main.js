import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

const eventsHub = new Vue();

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

// All configurations as strings

Vue.prototype.$baseURI = process.env.VUE_APP_BASE_URI;
Vue.prototype.$cliend_id = process.env.VUE_APP_ACCESS_KEY;

new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount("#app");
