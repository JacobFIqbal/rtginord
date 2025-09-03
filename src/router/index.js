import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AreaMaps from '../components/AreaMaps.vue';
import Program from '../components/ProgramItems.vue';
/* eslint-disable */
const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/maps', name: 'AreaMaps', component: AreaMaps },
  { path: '/program', name: 'ProgramItems', component: Program }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;