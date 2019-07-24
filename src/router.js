import Vue from "vue";
import Router from "vue-router";
import Images from "./views/images.vue";


Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Images",
      component: Images
    },
    
  ]
});
