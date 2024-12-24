import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AreaMaps from '../components/AreaMaps.vue';
import EventPresentations from '../components/EventPresentations.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/presentations', name: 'EventPresentations', component: EventPresentations },
  { path: '/maps', name: 'AreaMaps', component: AreaMaps },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;