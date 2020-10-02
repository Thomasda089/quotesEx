import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "@/views/Welcome";
import Admin from "@/views/Admin";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name: "Welcome",
    component: Welcome
  },
  {
    path:"/admin",
    name: "Admin",
    component: Admin
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
