import Vue from "vue"; 
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: '',
          name: "index",
          component: () => import (/* webpackChunkName: "homeIndex" */ "./components/home/HomeBody.vue")
        },
        {
          path: '/signon',
          name: "signon",
          component: () => import(/* webpackChunkName: "signon" */ "./views/Signon.vue")
        },
        {
          path: 'account/activate/:id/:token',
          name: "activate",
          component: () => import (/* webpackChunkName: "activate" */ "./views/Activate.vue")
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
      ]
    },
    {
      path: '/blog',
      component: () => import (/* webpackChunkName: "blog" */ "./views/blog.vue")
    },
    {
      path: "/dashboard",
      component: () => import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue"),
      beforeEnter: (to, from, next) => {
        var token = localStorage.getItem("token");
        if (!token) {
          toastr.warning("Please login to continue");
          next('/signon');
        } else {
          next();
        }
      },
      children: [
        {
          path: '', 
          component: () => import (/* webpackChunkName: "dashboardIndex" */ "./components/dashboard/index.vue")
        },
        {
          path: '/Adminblog',
          component: () => import (/* webpackChunkName: "dashboardBlog" */ "./components/dashboard/blog.vue")
        }
      ]
    }
  ]
});
