import VueRouter from 'vue-router';

import UploadIPS from "./components/pages/UploadIPS";
import SearchIPS from "./components/pages/SearchIPS.vue";
import PublicNavigation from "./components/PublicNavigation";
import VHL from './components/pages/VHL.vue';


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
 
    {
      path: '*',
      component: PublicNavigation,
      children: [
        {
          path: '/ips',
          redirect: '/ips/viewer'
        },
        {
          path: '/ips/viewer',
          component: UploadIPS,
        },
        {
          path: '/ips/find-ips',
          component: SearchIPS,
        },
        {
          path: 'vhl',
          component: VHL,
        },
        {
          path: '*',
          redirect: '/ips/viewer',
        }
      ]
    },
  ]
});

export default router;
