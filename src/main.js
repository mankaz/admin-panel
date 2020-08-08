import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueRouter from 'vue-router';
import router from "./router";
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);
import slVueTree from 'sl-vue-tree';
import 'sl-vue-tree/dist/sl-vue-tree-dark.css';
import draggable from 'vuedraggable'
import VueStore from '@websanova/vue-store';
import elements from 'elements';
import VueNestable from 'vue-nestable'



Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(draggable);
Vue.use(VueStore);
Vue.use(elements);
Vue.use(VueNestable)
Vue.use(VuePersianDatetimePicker);

Vue.component('sl-vue-tree', slVueTree);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
