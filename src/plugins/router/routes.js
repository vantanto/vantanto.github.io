const routes = [
  {
    path: '',
    component: () => import('@/views/layouts/AppMain.vue'),
    redirect: { name: 'index' },
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/IndexView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/views/Portfolio.vue'),
      },
      {
        path: '/resume',
        name: 'resume',
        component: () => import('@/views/ResumeView.vue'),
      },
    ],
  },
]

export default routes
