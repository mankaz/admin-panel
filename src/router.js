import VueRouter from "vue-router";
let routes = [
  {
    path : '/',
    component : require('./components/layout/Content.vue').default
  },
  {
    path: '/about',
    component: require('./components/pages/About.vue').default
  },
  {
    path: '/AddText',
    component: require('./components/pages/AddText.vue').default
  },
  {
    path: '/menuBuilderView',
    component: require('./components/pages/menuBuilderView.vue').default
  }

]
export default new VueRouter({
  linkActiveClass: ['is-active'],

  mode: 'history',
  routes
})
