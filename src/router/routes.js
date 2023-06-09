
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/posts/PostsList.vue') },
      { path: '/new', component: () => import('pages/posts/AddPost.vue') },
      { path: '/post/:id', component: () => import('pages/posts/PostDetail.vue') },
      { path: '/modify/:id', component: () => import('pages/posts/ModifyPost.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
