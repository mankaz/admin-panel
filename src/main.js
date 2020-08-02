import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueRouter from 'vue-router';
import router from "./router";
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);



Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VuePersianDatetimePicker);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
