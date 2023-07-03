<template>
  <div class="HomePageNavTop">
    <div class="navTop_homePage">
      <div class="navTopLeft">
        <img class="logo1" src="../../assets/logo2.png" alt="" />
      </div>
      <div class="navTopRight">
        <ul class="navSelect">
          <li
            v-for="(value, index) in navList"
            :key="index"
            :class="index === selectNav ? 'select' : ''"
            @click.stop="clickNav(index)"
          >
            {{ value.title }}
            <span class="caret" v-if="value.children"></span>
            <!-- 下拉菜单 -->
            <template v-if="value.children">
              <ul class="menuList" :id="'menuList' + index" ref="menuList">
                <li
                  v-for="(value2, index2) in value.children"
                  :key="index2"
                  @click="goChildrenPath(value2.goPathName, index)"
                >
                  {{ value2.title }}
                </li>
              </ul>
            </template>
          </li>
        </ul>
        <!-- 手机端 -->
        <div class="muenBtn" @click="showBarNav = !showBarNav">
          <img src="../../assets/homePage/menu.png" alt="" />
        </div>
        <div class="navbarNavDropdown" v-if="showBarNav">
          <ul class="navbar-nav">
            <li
              v-for="(value, index) in navList"
              :key="index"
              :class="index === selectNav ? 'select' : ''"
              @click.stop="clickNavPhone(index)"
            >
              {{ value.title }}
              <span class="caret" v-if="value.children"></span>
              <!-- 下拉菜单 -->
              <template v-if="value.children">
                <ul
                  class="menuList_phone"
                  :id="'menuList_phone' + index"
                  ref="menuList_phone"
                >
                  <li
                    v-for="(value2, index2) in value.children"
                    :key="index2"
                    @click="goChildrenPath(value2.goPathName)"
                  >
                    {{ value2.title }}
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </div>
        <!-- 语言切换 -->
        <div class="languageChange" @click="changeLanguage">
          EN / 中文
        </div>
        <!-- 后台登录 -->
        <!-- <div class="backendPath" @click="goBackend()">
          <img src="../../assets/homePage/backend.png" alt="" />
        </div> -->
      </div>
    </div>
    <!-- <div class="phoneNav"> -->
    <!-- <div class="languageChange_phone" @click="changeLanguage">
        ENG / CN / ES
      </div> -->
    <!-- <div class="backendPath_phone" @click="goBackend()">
        <img src="../../assets/homePage/backend.png" alt="" />
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectNav: 0,
      showBarNav: false,
      language: localStorage.getItem("lang") || "en",
    };
  },
  watch: {
    $route(to, from) {
      for (let i = 0; i < this.navList.length; i++) {
        if (to.name === this.navList[i].goPathName) {
          this.selectNav = i;
        }
      }
    },
  },
  computed: {
    navList() {
      return [
        {
          title: "首页",
          goPathName: "Sclem",
          // children: [
          //   { title: "公司简介", goPathName: "Sclem" },
          //   {
          //     title: "发展历程",
          //     goPathName: "History",
          //   },
          //   {
          //     title: "国标体系",
          //     goPathName: "System",
          //   },
          //   {
          //     title: "创始人介绍",
          //     goPathName: "Founder",
          //   },
          // ],
        },
        {
          title: "简介",
          goPathName: "Company",
        },
        {
          title: "新闻资讯",
          goPathName: "NewsInformation",
        },
        {
          title: "服务",
          goPathName: "TestingStandard",

          // children: [
          //   {
          //     title: "盛克盟检测标准",
          //     goPathName: "TestingStandard",
          //   },
          // ],
        },
        {
          title: "产品",
          goPathName: "Product",
        },

        {
          title: "合作伙伴",
          goPathName: "CooperativePartner",
        },
        {
          title: "联系方式",
          goPathName: "Concat",
        },
        {
          title: "盛克盟Global",
          goPathName: "Login",
        },
        // {
        //   title: "新闻资讯",
        //   goPathName: "NewsInformation",
        // },

        // {
        //   title: "LANGUAGE",
        //   children: [
        //     { title: "English" },
        //     {
        //       title: "简体中文",
        //     },
        //   ],
        // },
      ];
    },
  },
  created() {
    // 获取当前路由

    for (let i = 0; i < this.navList.length; i++) {
      if (this.navList[i].goPathName === this.$route.name) {
        this.selectNav = i;
        break;
      }
      if (this.navList[i].children) {
        for (let j = 0; j < this.navList[i].children.length; j++) {
          if (this.navList[i].children[j].goPathName === this.$route.name) {
            this.selectNav = i;
            break;
          }
        }
      }
    }

    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }
    let that = this;
    window.addEventListener("click", function() {
      that.hideMenuList();
    });
  },
  methods: {
    clickNav(index) {
      //

      if (this.navList[index].children) {
        let menuId = "menuList" + index;
      } else {
        if (
          this.selectNav === index &&
          this.$route.name === this.navList[index].goPathName
        )
          return;
        this.$router.replace({ name: this.navList[index].goPathName });
      }
      this.selectNav = index;
      window.scrollTo(0, 0);
    },
    clickNavPhone(index) {
      if (this.navList[index].children) {
        let menuId = "menuList_phone" + index;
        if (document.getElementById(menuId).style.display === "block") {
          document.getElementById(menuId).style.display = "none";
          return;
        }
        this.hideMenuList();
        // 如果有子导航
        document.getElementById(menuId).style.display = "block";
      } else {
        if (this.selectNav === index) return;
        this.$router.replace({ name: this.navList[index].goPathName });
      }
      this.selectNav = index;
      window.scrollTo(0, 0);
    },
    goChildrenPath(path, index) {
      this.selectNav = index;
      this.$router.replace({ name: path });
      window.scrollTo(0, 0);
    },
    hideMenuList() {
      // if (this.$refs.menuList) {
      //   for (let i = 0; i < this.$refs.menuList.length; i++) {
      //     this.$refs.menuList[i].style.display = "none";
      //   }
      // }
      // if (this.$refs.menuList_phone) {
      //   for (let i = 0; i < this.$refs.menuList_phone.length; i++) {
      //     this.$refs.menuList_phone[i].style.display = "none";
      //   }
      // }
    },
    goBackend() {
      // this.$router.push({ path: "/home" });
      window.open("/home");
    },
    changeLanguage() {
      if (this.language === "en") {
        this.language = "zh";
      } else if (this.language === "zh") {
        this.language = "en";
      }
      localStorage.setItem("lang", this.language);
      this.$i18n.locale = this.language;
    },
  },
};
</script>

<style lang="less">
.HomePageNavTop {
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  .navTop_homePage {
    height: 76.8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.1);
    padding: 0 60px;
    overflow: hidden;
    .navTopLeft {
      height: 100%;
      display: flex;
      align-items: center;
      // padding-left: 15px;
      .logo1 {
        transition: all 0.5s;
        height: 80%;
        width: auto;
      }
    }
    .navTopRight {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .navSelect {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        & > li {
          height: 100%;
          padding: 0 24px;
          font-size: 17px;
          color: #00852a;
          font-family: "Montserrat", sans-serif;
          // text-transform: uppercase;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          &:hover {
            color: #ff9faa;
            .menuList {
              display: block;
              transform: scaleY(1);
            }
            .caret {
              transform: rotate(180deg);
            }
          }
          .caret {
            display: inline-block;
            margin-left: 8px;
            vertical-align: 0.255em;
            content: "";
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-bottom: 0;
            border-left: 0.3em solid transparent;
            transition: all 0.3s;
          }
          .menuList {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #fff;
            min-width: 100%;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            color: #00852a;
            z-index: 1;
            font-size: 15px;
            padding: 8px 0;
            transform: scaleY(0);
            transform-origin: center top;
            transition: all 0.3s, transform 0.1s;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            li {
              padding: 5px 15px;
              white-space: nowrap;
              text-align: center;
              transition: all 0.3s;
              &:hover {
                color: #ff9faa;
                background-color: rgba(235, 246, 238, 1);
              }
            }
          }
        }
        .select {
          // background-color: #ff9faa;
          color: #ff9faa;
          &:hover {
            color: #ff9faa;
          }
        }
      }
      .muenBtn {
        display: none;
      }
      .navbarNavDropdown {
        display: none;
      }
      .languageChange {
        color: #666;
        padding: 0 15px;
        font-size: 12px;
        cursor: pointer;
        white-space: nowrap;
      }
      .backendPath {
        background-color: #891735;
        height: 100%;
        width: 125px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: auto;
          height: 40%;
        }
      }
    }
  }
  .phoneNav {
    display: none;
  }
}
// 媒体查询
@media (max-width: 1470px) {
}
@media (max-width: 1200px) {
  .HomePageNavTop {
    .navTop_homePage {
      height: 73.6px;
      .navTopRight {
        .navSelect {
          & > li {
            font-size: 15px;
            .menuList {
              li {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
  // .HomePageNavTop {
  //   .navTop_homePage {
  //     height: 82px;
  //     .navTopRight {
  //       .navSelect {
  //         display: none;
  //       }
  //       .muenBtn {
  //         display: block;
  //         padding: 0.25rem 0.75rem;
  //         line-height: 1;
  //         background-color: transparent;
  //         border: 1px solid rgba(0, 0, 0, 0.1);
  //         border-radius: 5px;
  //         margin-right: 15px;
  //         position: relative;
  //         cursor: pointer;
  //         img {
  //           width: 30px;
  //           height: auto;
  //         }
  //       }
  //       .navbarNavDropdown {
  //         position: absolute;
  //         width: calc(100% - 230px);
  //         left: 10px;
  //         z-index: 100;
  //         top: 60px;
  //         background: #fff;
  //         border: 1px solid rgba(0, 0, 0, 0.15);
  //         right: 0;
  //         display: block;
  //         .navbar-nav {
  //           & > li {
  //             padding: 14px 15px;
  //             font-size: 12px;
  //             text-transform: uppercase;
  //             color: #666;
  //             text-align: center;
  //             cursor: pointer;
  //             .menuList_phone {
  //               display: none;
  //               padding: 8px 0;
  //               li {
  //                 padding: 5px 15px;
  //               }
  //             }
  //           }
  //           .select {
  //             background-color: #891735;
  //             color: #fff;
  //           }
  //           .caret {
  //             display: inline-block;
  //             margin-left: 0.255em;
  //             vertical-align: 0.255em;
  //             content: "";
  //             border-top: 0.3em solid;
  //             border-right: 0.3em solid transparent;
  //             border-bottom: 0;
  //             border-left: 0.3em solid transparent;
  //           }
  //         }
  //       }
  //       .backendPath {
  //         width: 95px;
  //       }
  //     }
  //   }
  // }
}
@media (max-width: 768px) {
  .HomePageNavTop {
    .navTop_homePage {
      height: 55px;
      padding: 0 15px;
      .navTopLeft {
        .logo1 {
          height: 70%;
        }
      }
      .navTopRight {
        .navSelect {
          display: none;
        }
        .languageChange {
          display: none;
        }
        .muenBtn {
          display: block;
          // padding: 0.25rem 0.75rem;
          line-height: 1;
          background-color: transparent;
          // border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          // margin-right: 15px;
          position: relative;
          cursor: pointer;
          img {
            width: 30px;
            height: auto;
            vertical-align: bottom;
          }
        }
        .navbarNavDropdown {
          width: calc(100% - 25px);
          position: absolute;
          left: 10px;
          z-index: 100;
          top: 60px;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.15);
          right: 0;
          display: block;
          .navbar-nav {
            & > li {
              padding: 14px 15px;
              font-size: 12px;
              // text-transform: uppercase;
              color: #666;
              text-align: center;
              cursor: pointer;
              .menuList_phone {
                display: none;
                padding: 8px 0 0;
                li {
                  padding: 5px 15px;
                }
              }
            }
            .select {
              background-color: #00852a;
              color: #fff;
            }
            .caret {
              display: inline-block;
              margin-left: 0.255em;
              vertical-align: 0.255em;
              content: "";
              border-top: 0.3em solid;
              border-right: 0.3em solid transparent;
              border-bottom: 0;
              border-left: 0.3em solid transparent;
            }
          }
        }
        .backendPath {
          display: none;
        }
      }
    }
  }
}
</style>
