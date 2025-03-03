import { createRouter, createWebHistory } from 'vue-router'; 
import Home from '@/views/Home.vue';   // Zmieniona ścieżka
import Projects from '@/views/Projects.vue';  // Zmieniona ścieżka

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
