import { createRouter, createWebHistory } from "vue-router";
import vBlockNews from "@/components/v-block-news.vue";
import vSimpleNews from "@/components/v-simple-news.vue";
import vDetailNews from "@/components/v-detail-news.vue";

const routes = [
  {
    path: '/',
    redirect: { name: 'blockNews' }
  },
  {
    path: "/vue-router/",
    name: "blockNews",
    component: vBlockNews,
  },
  {
    path: "/vue-router/simple-news",
    name: "simpleNews",
    component: vSimpleNews,
    props: true,
  },
  {
    path: "/vue-router/news",
    name: "news",
    component: vDetailNews,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
