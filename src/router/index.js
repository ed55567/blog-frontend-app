import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Signup from "../views/Signup.vue";
import PostIndex from "../views/PostIndex";
import PostsNew from "../views/PostsNew.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: '/projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/logout", name: "logout", component: Logout
  },
  {
    path: "/post",
    name: "post-index",
    component: PostIndex
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: PostsNew
  },
  {
    path: "/signup", name: "signup", component: Signup
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
