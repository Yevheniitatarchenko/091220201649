import Vue from 'vue';
import VueRouter from 'vue-router';
import Feedback from '../../components/Feedback.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
