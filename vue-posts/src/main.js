import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import objPlugins from './plugins/obj';
import func from './plugins/func';
import person from './plugins/person';
// import globalComponents from './plugins/global-components';

import { createApp } from 'vue';

const app = createApp(App);
console.log('Vue instance Create');
app.use(router);

//플로그인 등록
app.use(objPlugins, { name: 'LEE' });
app.use(func);
app.use(person, { name: 'boy' });
//글로벌 컴포넌트 등록
// app.use(globalComponents);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

console.log('213' + import.meta.env.VITE_APP_API_URL);
