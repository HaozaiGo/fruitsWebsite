import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      headerNav: true,
      leftNav: true,
      needToken: true,
      homePage: false,
      homePageNavTop: false,
      showCopyRight: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: false,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
    meta: {
      headerNav: true,
      leftNav: true,
      needToken: true,
      homePage: false,
      homePageNavTop: false,
      showCopyRight: false,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      headerNav: true,
      leftNav: true,
      needToken: true,
      homePage: false,
      homePageNavTop: false,
      showCopyRight: false,
    },
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("../views/Upload.vue"),
    meta: {
      headerNav: true,
      leftNav: true,
      needToken: true,
      homePage: false,
      homePageNavTop: false,
      showCopyRight: false,
    },
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      headerNav: true,
      leftNav: true,
      needToken: true,
      homePage: false,
      homePageNavTop: false,
      showCopyRight: false,
    },
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
    meta: {
      headerNav: true,
      leftNav: true,
      needToken: true,
      homePage: false,
      homePageNavTop: false,
      showCopyRight: false,
    },
  },
  {
    path:"/goods",
    name:"Goods",
    component: ()=>import("../views/goods/Goods.vue"),
    meta: {
      headerNav: true,
      leftNav: true,
      needToken: true,
      homePage: false,
      homePageNavTop: false,
      showCopyRight: false,
    },
  },
  {
    path: "/",
    name: "Sclem",
    component: () => import("../views/homePage/Home1.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },

  {
    path: "/company",
    name: "Company",
    component: () => import("../views/homePage/Company.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/homePage/History.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/system",
    name: "System",
    component: () => import("../views/homePage/System.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/founder",
    name: "Founder",
    component: () => import("../views/homePage/Founder.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/global",
    name: "Global",
    component: () => import("../views/homePage/Global.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/testingStandard",
    name: "TestingStandard",
    component: () => import("../views/homePage/TestingStandard.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/homePage/Product.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/cooperativePartner",
    name: "CooperativePartner",
    component: () => import("../views/homePage/CooperativePartner.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/concat",
    name: "Concat",
    component: () => import("../views/homePage/Concat.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: false,
    },
  },
  {
    path: "/newsInformation",
    name: "NewsInformation",
    component: () => import("../views/homePage/NewsInformation.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: true,
    },
  },
  {
    path: "/newsInformation/newsPage",
    name: "NewsPage",
    component: () => import("../views/homePage/NewsPage.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: true,
    },
  },
  {
    path: "/goodsInformation/newsPage",
    name: "GoodsPage",
    component: () => import("../views/goods/components/NewsPage.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: true,
    },
  },
  {
    path: "/ProfessionalTools",
    name: "ProfessionalTools",
    component: () => import("../views/homePage/ProfessionalTools.vue"),
    meta: {
      headerNav: false,
      leftNav: false,
      needToken: false,
      homePage: true,
      homePageNavTop: true,
      showCopyRight: true,
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done();
});

export default router;
