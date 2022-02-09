import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: () => import('@/views/Index.vue'), meta: { title: 'Marketplace' } },
  {
    path: '/item/:mint',
    meta: { title: 'NFT' },
    component: () => import('@/views/nft/Show.vue'),
  },
  {
    path: '/collections',
    meta: { title: 'Collections' },
    component: () => import('@/views/collections/Index.vue'),
  },
  {
    path: '/collections/:slug',
    meta: { title: 'Collections' },
    component: () => import('@/views/collections/Name.vue'),
  },
  {
    path: '/mint/:slug',
    name: 'mint',
    meta: { title: 'Minting' },
    component: () => import('@/views/mint/Show.vue'),
  },
  {
    path: '/user/:id',
    meta: { title: 'Account' },
    component: () => import('@/views/user/Index.vue'),
  },
  {
    path: '/privacy-policy',
    meta: { title: 'Privacy Policy' },
    component: () => import('@/views/Privacy.vue'),
  },
  {
    meta: { title: 'Page not found' },
    path: '/:path(.*)', component: NotFound
  },
];
