import { createApp } from 'vue';
import './tailwind.css';
import App from './App.vue';
import store from './state/store.ts';
import VueAxios from './plugins/axios';
import router from './plugins/router';
import 'virtual:svg-icons-register';
import VueToast from 'vue-toast-notification';
import { VueCookieNext } from 'vue-cookie-next';
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueToast);
app.use(VueAxios);
app.use(VueCookieNext);
app.provide('vueToast', app.config.globalProperties.$toast);
app.mount('#app');

window.app = app
