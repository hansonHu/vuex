import Vue from "vue"
import VueRouter from "vue-router"
import hanson from "../components/hanson/hanson"

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:"/",
      component:hanson

    }
  ]
})
