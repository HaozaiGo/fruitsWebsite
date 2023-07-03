import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import NProgress from "nprogress";
import echarts from "echarts";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
import moment from "moment";
import "nprogress/nprogress.css";
import "./utils/axios";

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
// Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.use(Viewer);

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 600, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

import VueI18n from "vue-i18n";
import en from "./assets/lang/en";
import zh from "./assets/lang/zh";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en",
  messages: {
    en: en, //英文语言包
    zh: zh, //中文繁体包
  },
  silentFallbackWarn: true,
  silentTranslationWarn: true,
});

// pdf
import htmlToPdf from "./utils/htmlToPdf";
Vue.use(htmlToPdf);
// common
import commonFn from "./utils/commonFn";
Vue.use(commonFn);
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper' 
import 'swiper/swiper.css' 
Vue.use(VueAwesomeSwiper) 

// scroll
// import PerfectScrollbar from "vue3-perfect-scrollbar";
// import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// Vue.use(PerfectScrollbar);
// console.log(PerfectScrollbar)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
