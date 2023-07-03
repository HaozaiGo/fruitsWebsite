<template>
  <div id="webapp">
    <!-- 顶部导航 -->
    <NavTop v-if="$route.meta.headerNav" />
    <HomePageNavTop v-if="$route.meta.homePageNavTop" />
    <!-- 左侧用户信息 -->
    <NavLeft :userInfo="userInfo" v-if="$route.meta.leftNav" />
    <router-view
      :getNetWeightsAvg="getNetWeightsAvg"
      :getMainDefects="getMainDefects"
      :getUserData="getUserData"
    ></router-view>
    <!-- Lot Detail -->
    <LotDetail
      ref="lotDetail"
      v-if="$store.state.showLotDetail"
      :getNetWeightsAvg="getNetWeightsAvg"
      :getMainDefects="getMainDefects"
      :getTotalDefects="getTotalDefects"
    />
    <CopyRight v-if="$route.meta.showCopyRight" />
  </div>
</template>

<script>
import NavTop from "@/components/navTop.vue";
import NavLeft from "@/components/navLeft.vue";
import LotDetail from "@/components/lotDetail.vue";
import HomePageNavTop from "@/components/homePage/homePageNavTop.vue";
import CopyRight from "@/components/homePage/copyRight.vue";
export default {
  name: "App",
  components: {
    NavTop,
    NavLeft,
    LotDetail,
    HomePageNavTop,
    CopyRight,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    getUserData(callback) {
      // 如果不需要登录
      if (this.$route.meta.homePage) return;
      // 如果需要登录
      if (
        this.$route.meta.needToken &&
        !window.sessionStorage.getItem("token")
      ) {
        // 去往登录页面

        this.$router.push({
          path: "/login",
          query: {
            lotId: this.$route.query.lotId,
          },
        });
      } else {
        this.axios
          .get(`${process.env.VUE_APP_URL}/api/auth/currentUser`, {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          })
          .then(
            (res) => {
              // 将用户信息保存在sessionStroage中
              this.userInfo = res.data.data;
              window.sessionStorage.setItem(
                "userInfo",
                JSON.stringify(this.userInfo)
              );
              this.$store.commit("setUserInfo", this.userInfo);
              if (callback) {
                callback();
              }
            },
            (error) => {
              this.$message({
                showClose: true,
                message: "登录超时，请重新登录",
                type: "success",
              });
              this.$router.push({ path: "/login" });
            }
          );
      }
    },
    getNetWeightsAvg() {
      let containerDetail = window.sessionStorage.getItem("containerDetail");
      containerDetail = JSON.parse(containerDetail);
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/container/${containerDetail.containerId}/stats/avg`,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.$store.commit("setNetWeightAvg", res.data.data);
        });
    },
    getMainDefects() {
      let containerDetail = window.sessionStorage.getItem("containerDetail");
      containerDetail = JSON.parse(containerDetail);
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/container/${containerDetail.containerId}/mainDefects`,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          let mainDefect = res.data.data;
          let result = [];
          mainDefect.forEach((ele) => {
            if (ele != "No Major Issues") {
              result.push(ele);
            }
          });
          this.$store.commit("setMainDefects", result.join("，"));
        });
    },
    getTotalDefects() {
      let containerDetail = window.sessionStorage.getItem("containerDetail");
      containerDetail = JSON.parse(containerDetail);
      // 获取托盘数
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/container/count/fruitBox?containerId=${containerDetail.containerId}`,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          let totalNum = res.data.data;
          this.axios
            .get(
              `${process.env.VUE_APP_URL}/api/container/${containerDetail.containerId}/fruitBoxes?page=1&size=${totalNum}`,
              {
                headers: {
                  Authorization: window.sessionStorage.getItem("token"),
                },
              }
            )
            .then((res) => {
              let sumOfTotalDefectsData = res.data.data.fruitBoxes;
              let sumOfTotalDefectsList = [];
              for (let i = 0; i < sumOfTotalDefectsData.length; i++) {
                sumOfTotalDefectsList.push(
                  sumOfTotalDefectsData[i].sumOfTotalDefects
                );
              }
              this.$store.commit(
                "setSumOfTotalDefectsList",
                sumOfTotalDefectsList
              );
              this.$refs.lotDetail.init();
            });
        });
    },
  },
  created() {
    if (this.$route.name === "Home") {
      this.getUserData();
    }
  },
  watch: {
    $route: {
      handler(val, oldval) {
        if (val.name === "Login") return;

        this.getUserData();
      },
    },
  },
};
</script>

<style lang="less">
@font-face {
  font-family: Poppins-Regular;
  src: url("../public/static/Poppins-Regular.ttf");
}

// @font-face {
//   font-family: Poppins-Medium;
//   src: url('./assets/font/Poppins-Medium.ttf');
// }

@font-face {
  font-family: Poppins-Bold;
  src: url("../public/static/Poppins-Bold.ttf");
}

@font-face {
  font-family: Poppins-SemiBold;
  src: url("../public/static/Poppins-SemiBold.ttf");
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "ProximaNovaRegular";
}
html,
body,
#webapp {
  width: 100%;
  height: 100%;
  user-select: none;
  // overflow-x: hidden;
}
body::-webkit-scrollbar {
  // display: none;
}
// body {
//   overflow: hidden;
// }
ul {
  list-style: none;
}
input {
  outline: none;
  border: none;
}
input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #ccc;
}
</style>
