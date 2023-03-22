export default [
  {
    path: "/index",
    name: "Index",
    meta: { title: "index" },
    component: () => import("../Views/Index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "China-CEEC Home" },
        component: () => import("../Views/Index/Home.vue"),
      },
      {
        path: "/blog",
        name: "Blog",
        meta: { title: "China-CEEC Blog" },
        component: () => import("../Views/Index/Blog.vue"),
      },
      {
        path: "/community",
        name: "Community",
        meta: { title: "China-CEEC Community" },
        component: () => import("../Views/Index/Community.vue"),
      },
      {
        path: "/events",
        name: "Events",
        meta: { title: "China-CEEC Events" },
        component: () => import("../Views/Index/Events.vue"),
      },
      {
        path: "/study",
        name: "Study",
        meta: { title: "China-CEEC Study" },
        component: () => import("../Views/Index/Study.vue"),
      },
      {
        path: "/about",
        name: "About",
        meta: { title: "China-CEEC About" },
        component: () => import("../Views/Index/About.vue"),
      },
      {
        path: "/index",
        redirect: "/home",
      },
    ]
  },
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/:err(.*)*",
    name: "NotFound",
    meta: { title: "Not Found" },
    component: () => import("../Views/NotFound.vue"),
  },
];
