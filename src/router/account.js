export default [

  {
    path: "/",
    meta: {
      title: "roadmap",
      order: 0,
    },
    component: () => import("@/views/roadmap.vue"),
  },
  {
    path: "/home",
    meta: {
      title: "home",
      order: 0,
    },
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/api",
    meta: {
      title: "api",
      order: 0,
    },
    component: () => import("@/views/api/index.vue"),
  },
];