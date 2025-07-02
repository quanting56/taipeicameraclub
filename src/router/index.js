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
    children: [
      {
        path: ":id",
        name: "activity_post",
        component: () =>
          import("../views/ActivityPostView.vue"),
        // children: [
        //   {
        //     path: "posts",
        //     name: "posts",
        //     component: () =>
        //       import(
        //         "../components/RoutePracticeDynamicRouteMatchingPost.vue"
        //       ),
        //   },
        // ],
      },
    ],
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
  scrollBehavior(to, from, savePosition) {
    // 判斷是否為/activity與/activity/:id之間的跳轉
    const isActivityPost = (route) => 
      route.name === "activity" ||
      route.name === "activity_post";

    if (isActivityPost(to) && isActivityPost(from)) {
      return false;
    }

    // 其他情況：總是捲動到頁面最上方
    return { top: 0 };
  }
});

export default router;
