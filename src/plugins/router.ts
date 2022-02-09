import { routes } from '@/routes.ts';
import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';
import Phantom from '@/utils/phantom';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Naked NFTs | ${to.meta.title}`;
  const {
    config: {
      globalProperties: { $store, $cookie },
    },
  } = app;

  Phantom.autoConnect(!!Number($cookie.getCookie('nakedNfts.autoConnect'))).then((key) => {
    if (key) {
      $store.dispatch('saveUser', key);
    }
  });

  next();
});

export default router;
