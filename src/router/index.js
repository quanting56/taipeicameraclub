import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("../views/ActivityView.vue"),
    // children: [
    //   {
    //     path: "route_practice", // 這裡開頭不能加'/'，否則會被帶回根目錄
    //     name: "route_practice",
    //     component: () => import("../components/RoutePractice.vue"),
    //     children: [
    //       {
    //         path: "users/:userId",
    //         name: "users",
    //         component: () =>
    //           import("../components/RoutePracticeDynamicRouteMatching.vue"),
    //         children: [
    //           {
    //             path: "posts",
    //             name: "posts",
    //             component: () =>
    //               import(
    //                 "../components/RoutePracticeDynamicRouteMatchingPost.vue"
    //               ),
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },
  {
    path: "/management_team",
    name: "management_team",
    component: () => import("../views/ManagementTeamView.vue"),
  },
  {
    path: "/join_us",
    name: "join_us",
    component: () => import("../views/JoinUsView.vue"),
  },
  {
    path: "/some_questions",
    name: "some_questions",
    component: () => import("../views/SomeQuestionsView.vue"),
  },
  {
    path: "/tcc_terms",
    name: "tcc_terms",
    component: () => import("../views/TccTermsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
