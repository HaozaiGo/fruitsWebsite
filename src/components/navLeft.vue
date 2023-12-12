<template>
  <div class="navLeft" :style="{
    left: $store.state.showMenu === true ? '-181px' : '0px',
  }">
    <div class="userInfo">
      <div class="portrait">
        <img src="../assets/navLeft/user-circle.png" alt="" />
      </div>
      <div class="userName">{{ userInfo.name }}</div>
      <div class="setting">
        Settings <img src="../assets/navLeft/arrow-sort.png" alt="" />
      </div>
    </div>
    <ul class="menuList">
      <template v-for="(item, index) in getMenuList">
        <li :key="index" @click="goPath(index)" :class="selectLi == index && !item.children ? 'activeli' : ''"
          v-if="item.admin === 'all' || userInfo.role === item.admin">
          <div class="icon">
            <img :src="item.imgSrc" alt="" />
          </div>
          <span class="menu_name">{{ item.name }} </span>
          <div class="arrow" :style="{
            transform:
              activeChildren === true && selectLi === index
                ? 'translateY(-50%) rotate(-135deg)'
                : 'translateY(-50%) rotate(-45deg)',
          }" v-if="item.children"></div>
        </li>
        <div class="childrenMenuListFather" ref="childrenMenuListFather" :key="item.name">
          <ul class="childrenMenuList" ref="childrenMenuList" v-show="(item.admin === 'all' || userInfo.role === item.admin) &&
            item.children
            ">
            <template v-for="(item1, index1) in item.children">
              <li :key="index1" :class="currentChildren == index1 ? 'activeli1' : ''"
                @click="goPathChildren(item1.params, index1)">
                <div class="icon">
                  <img :src="item1.imgSrc" alt="" />
                </div>
                <span>{{ item1.name }}</span>
              </li>
            </template>
          </ul>
        </div>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["userInfo"],
  data() {
    return {
      selectLi: this.$store.state.leftNavSelect,
      activeChildren: false,
      currentTable: this.$store.state.childrenTableSelect,
      currentNews: this.$store.state.childrenNewsSelect,
      currentChildren: 0,
      currentGoods: 0
    };
  },
  computed: {
    getMenuList() {
      return [
        {
          imgSrc: require("../assets/navLeft/home_fill_light.png"),
          name: this.$t("navLeft.home"),
          admin: "all",
        },
        {
          imgSrc: require("../assets/navLeft/fruit.png"),
          name: this.$t("navLeft.lot"),
          admin: "all",
        },
        {
          imgSrc: require("../assets/navLeft/chart-area.png"),
          name: this.$t("navLeft.dashboard"),
          admin: "all",
          children: [
            {
              imgSrc: require("../assets/navLeft/table.png"),
              name: "COST STRUCTURE",
              admin: "all",
              params: "PowerBi",
            },{
              imgSrc: require("../assets/navLeft/table.png"),
              name: "SALES",
              admin: "all",
              params: "PowerBi1",
            },
            {
              imgSrc: require("../assets/navLeft/table.png"),
              name: "MARKET TREND",
              admin: "all",
              params: "PowerBi2",
            },
            {
              imgSrc: require("../assets/navLeft/table.png"),
              name: "FINANCIAL STATEMENTS",
              admin: "all",
              params: "PowerBi3",
            },
            {
              imgSrc: require("../assets/navLeft/table.png"),
              name: "ESTIMATE/FINAL",
              admin: "all",
              params: "PowerBi4",
            },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "Cherry World",
            //   admin: "all",
            //   params: "CherryWorld",
            // },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "Actual Selling",
            //   admin: "all",
            //   params: "ActualSelling",
            // },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "Comparatives",
            //   admin: "all",
            //   params: "Comparatives",
            // },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "M. Prices (BRAND)",
            //   admin: "all",
            //   params: "BRAND",
            // },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "M. Prices (VARIETY)",
            //   admin: "all",
            //   params: "VARIETY",
            // },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "M. Prices (CITY)",
            //   admin: "all",
            //   params: "CITY",
            // },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "FOB RETURN",
            //   admin: "all",
            //   params: "FOBRETURN",
            // },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "QC Summary",
            //   admin: "all",
            //   params: "QCSummary",
            // },
            // {
            //   imgSrc: require("../assets/navLeft/table.png"),
            //   name: "BUDGET/REAL",
            //   admin: "all",
            //   params: "BUDGETREAL",
            // },
          ],
        },
        {
          imgSrc: require("../assets/navLeft/upload.png"),
          name: this.$t("navLeft.upload"),
          admin: "QC",
          // admin: "ADMIN",

        },
        {
          imgSrc: require("../assets/navLeft/user-register.png"),
          name: this.$t("navLeft.register"),
          admin: "ADMIN",
        },
        {
          imgSrc: require("../assets/navLeft/24gl-newspaper2.png"),
          name: this.$t("navLeft.news"),
          admin: "ADMIN",
          children: [
            {
              imgSrc: require("../assets/navLeft/managing.png"),
              name: this.$t("navLeft.AddNews"),
              admin: "all",
              params: "AddNews",
            },
            {
              imgSrc: require("../assets/navLeft/addNews.png"),
              name: this.$t("navLeft.Manage"),
              admin: "all",
              params: "Managing",
            },
          ],
        },
        {
          imgSrc: require("../assets/navLeft/goods.png"),
          name: this.$t("navLeft.goods"),
          admin: "ADMIN",
          children: [
            {
              imgSrc: require("../assets/navLeft/managing.png"),
              name: this.$t("navLeft.AddGoods"),
              admin: "all",
              params: "AddGoods",
            },
            {
              imgSrc: require("../assets/navLeft/addNews.png"),
              name: this.$t("navLeft.Manage"),
              admin: "all",
              params: "GoodsManaging",
            },
          ],
        },
      ];
    },
  },
  mounted() {
    if (this.$route.name === "Home") {
      this.selectLi = 0;
    } else if (this.$route.name === "Detail") {
      this.selectLi = 1;
    } else if (this.$route.name === "Dashboard") {
      this.selectLi = 2;
      for (
        let i = 0;
        i < this.getMenuList[this.selectLi].children.length;
        i++
      ) {
        if (
          this.$route.query.table ===
          this.getMenuList[this.selectLi].children[i].params
        ) {
          this.currentTable = i;
          this.currentChildren = i;
          break;
        }
      }
    } else if (this.$route.name === "Upload") {
      this.selectLi = 3;
    } else if (this.$route.name === "Register") {
      this.selectLi = 4;
    } else if (this.$route.name === "News") {
      this.selectLi = 5;

      for (
        let i = 0;
        i < this.getMenuList[this.selectLi].children.length;
        i++
      ) {
        if (
          this.$route.query.type ===
          this.getMenuList[this.selectLi].children[i].params
        ) {
          this.currentNews = i;
          this.currentChildren = i;
          break;
        }
      }
    }
  },
  methods: {
    goPath(index) {
      // console.log(index);
      // 判断子集
      if (this.getMenuList[index].children) {
        if (this.selectLi === index) {
          this.activeChildren = !this.activeChildren;
        } else {
          this.activeChildren = true;
        }
        if (this.activeChildren === true) {
          this.$refs.childrenMenuListFather[index].style.height =
            this.$refs.childrenMenuList[index].offsetHeight + "px";
          for (let i = 0; i < this.getMenuList.length; i++) {
            if (i === index) continue;
            this.$refs.childrenMenuListFather[i].style.height = "0px";
          }
        } else {
          this.$refs.childrenMenuListFather[index].style.height = "0px";
        }
      } else {
        this.activeChildren = false;
        for (let i = 0; i < this.getMenuList.length; i++) {
          this.$refs.childrenMenuListFather[i].style.height = "0px";
        }
      }
      this.selectLi = index;
      //
      this.$store.commit("setLeftNavSelect", index);
      if (index === 0) {
        this.$router.push({ path: "/home" });
      } else if (index === 1) {
        if (!window.sessionStorage.getItem("containerDetail")) {
          this.selectLi = 0;
          this.$router.push({ path: "/home" });
          this.$store.commit("setLeftNavSelect", index);
        } else {
          this.$router.push({
            path: "/detail",
            query: {
              lotId: JSON.parse(
                window.sessionStorage.getItem("containerDetail")
              ).containerId,
            },
          });
        }
      } else if (index === 2) {
        this.currentChildren = this.currentTable;
        this.$router.push({
          path: "/dashboard",
          query: {
            table: this.getMenuList[index].children[this.currentTable].params,
          },
        });
      } else if (index === 3) {
        this.$router.push({ path: "/upload" });
      } else if (index === 4) {
        this.$router.push({ path: "/register" });
      } else if (index === 5) {
        this.currentChildren = this.currentNews;
        this.$router.push({
          path: "/news",
          query: {
            type: this.getMenuList[index].children[this.currentNews].params,
          },
        });
      } else if (index === 6) {
        this.$router.push({
          path: '/goods',
          query: {
            type: this.getMenuList[index].children[this.currentGoods].params
          }
        })
      }
    },
    goPathChildren(myparams, index) {

      console.log(myparams);
      this.currentChildren = index;
      if (this.selectLi === 2) {
        this.currentTable = index;
        this.$store.commit("setChildrenTableSelect", index);
        this.$router.push({
          path: `/dashboard`,
          query: { table: myparams },
        });
      } else if (this.selectLi === 5) {
        this.currentNews = index;
        this.$store.commit("setChildrenNewsSelect", index);
        this.$router.push({
          path: `/news`,
          query: { type: myparams },
        });
      } else if (this.selectLi === 6) {
        this.currentGoods = index;
        this.$router.push({
          path: `/goods`,
          query: { type: myparams },
        })
      }
    },
  },
  watch: {
    "$store.state.leftNavSelect": {
      handler: function (newVal, oldVal) {
        this.selectLi = newVal;
      },
    },
    "$store.state.childrenTableSelect": {
      handler: function (newVal, oldVal) {
        this.currentTable = newVal;
      },
    },
    "$store.state.childrenNewsSelect": {
      handler: function (newVal, oldVal) {
        this.currentNews = newVal;
      },
    },
  },
};
</script>

<style lang="less">
.navLeft {
  width: 181px;
  height: calc(100% - 57px);
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  float: left;
  position: absolute;
  transition: all 0.5s;
  background-image: url(../assets/footer.png);
  background-position: left center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .userInfo {
    width: 100%;
    padding: 19px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .portrait {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 50%;
        height: auto;
      }
    }

    .userName {
      margin: 6px 0 3px;
      font-weight: 650;
      color: #fff;
      font-family: Poppins-Bold;
    }

    .setting {
      font-size: 12px;
      color: #edecec;
      font-family: Poppins-Regular;

      img {
        width: 12px;
        height: auto;
        vertical-align: middle;
      }
    }
  }

  .menuList {
    color: #6a6c6f;
    font-size: 14px;
    font-weight: 700;

    &>li {
      border-width: 1px 0px;
      border-style: solid;
      border-color: #e7e7e7;
      padding: 16px 18px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      transition: all 0.3s;
      color: #fff;
      margin-top: -1px;

      span {
        font-family: Poppins-Bold;
      }

      // &:last-child {
      //   border-width: 1px 0;
      // }
      .icon {
        height: 16px;
        width: 20px;

        img {
          height: 100%;
          width: auto;
          vertical-align: top;
        }
      }

      .arrow {
        position: absolute;
        width: 6px;
        height: 6px;
        border-left: 1px solid #fff;
        border-top: 1px solid #fff;
        background-color: transparent;
        right: 10px;
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
        opacity: 1;
        transition: all 0.3s;
      }
    }

    .childrenMenuListFather {
      height: 0px;
      overflow: hidden;
      transition: all 0.5s;

      .childrenMenuList {
        color: #6a6c6f;
        font-size: 12px;
        font-weight: 700;

        &>li {
          border-width: 0px 0px;
          border-style: solid;
          border-color: #e7e7e7;
          padding: 10px 0px 10px 28px;
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          transition: all 0.3s;
          color: #fff;

          // margin-top: -1px;
          .icon {
            height: 12px;
            width: 20px;

            img {
              height: 100%;
              width: auto;
              vertical-align: top;
            }
          }

          span {
            font-family: Poppins-Bold;
          }
        }
      }
    }

    .activeli {
      background-color: #002a06;
    }

    .activeli1 {
      background-color: #002a068f;
    }
  }
}
</style>
