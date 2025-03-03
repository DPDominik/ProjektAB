import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importujemy router z osobnego pliku

const app = createApp(App);
app.use(router);
app.mount('#app');
