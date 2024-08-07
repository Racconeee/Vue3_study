import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import App from './App.vue';
import router from './router';

import { createApp } from 'vue';

createApp(App).use(router).mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

console.log('213' + import.meta.env.VITE_APP_API_URL);
