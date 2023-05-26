import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/decision/:id',
        component: () => import('pages/decision/index.vue'),
      },
      {
        path: '/settings',
        component: () => import('pages/settings/index.vue'),
      },
      {
        path: '/bookmarks',
        component: () => import('pages/bookmarks/index.vue'),
      },
      {
        path: '/about',
        component: () => import('pages/about/index.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
