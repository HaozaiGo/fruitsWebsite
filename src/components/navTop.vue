<template>
  <div class="navTop">
    <div class="leftNavTop">
      <div class="logo" @click="backHome">
        <img src="../assets/logo2.png" draggable="false" />
      </div>
      <div
        class="menuList"
        @click="changeShowMenu((showMenu = !showMenu))"
        :style="
          showMenu === true
            ? 'backgroundColor:#f1f4f6'
            : 'backgroundColor:#f7f9fa'
        "
      >
        <img
          :style="
            showMenu === true
              ? 'transform:rotate(90deg)'
              : 'transform:rotate(0deg)'
          "
          src="../assets/navTop/menu.png"
          draggable="false"
        />
      </div>
      <div class="language">
        <span style="">{{ selectLanguage }}</span>
        <ul class="selectLanguage">
          <li
            v-for="(item, index) in languageList"
            :key="index"
            :class="index === select ? 'activeLanguage' : ''"
            @click="changeLanguage(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="rightNavTop">
      <!-- <div class="menuList2">
        <img src="../assets/navTop/menu-1.png" draggable="false" />
      </div> -->
      <div class="share" @click="edit">
        <img src="../assets/navTop/share.png" draggable="false" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: this.$store.state.showMenu,
      showLanguage: false,
      language: localStorage.getItem("lang") || "en",
      selectLanguage: "English",
      languageList: ["English", "简体中文"],
      select: 0,
    };
  },
  created() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }
    this.getLanguage();
  },
  methods: {
    changeShowMenu(val) {
      this.$store.commit("setShowMenu", val);
      this.showMenu = this.$store.state.showMenu;
    },
    edit() {
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("containerDetail");
      window.sessionStorage.removeItem("userInfo");
      this.$router.push({ path: "/login" });
      // 初始化
      this.$store.commit("setLeftNavSelect", 0);
      this.$store.commit("setShowMenu", false);
    },
    getLanguage() {
      if (this.language == "en") {
        this.selectLanguage = "English";
        this.select = 0;
      } else if (this.language == "zh") {
        this.selectLanguage = "简体中文";
        this.select = 1;
      }
      localStorage.setItem("lang", this.language);
    },
    changeLanguage(index) {
      if (index == 0) {
        this.language = "en";
      } else if (index == 1) {
        this.language = "zh";
      }
      this.getLanguage();
      this.$i18n.locale = this.language;
    },
    backHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="less">
.navTop {
  width: 100%;
  height: 57px;
  border-width: 0px 0 1px;
  border-style: solid;
  border-color: #e7e7e7;
  display: flex;
  justify-content: space-between;
  .leftNavTop {
    display: flex;
    .logo {
      width: 181px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f7f9fa;
      border-width: 0px 1px 0px;
      border-style: solid;
      border-color: #e7e7e7;
      cursor: pointer;
      img {
        width: auto;
        height: 60%;
      }
    }
    .menuList {
      width: 66.6px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f7f9fa;
      border-width: 0px 1px 0px 0px;
      border-style: solid;
      border-color: #e7e7e7;
      transition: all 0.5s;
      cursor: pointer;
      img {
        width: auto;
        height: 35%;
        transition: all 0.5s;
      }
    }
    .language {
      width: 66.6px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      cursor: pointer;
      position: relative;
      z-index: 99;

      &:hover {
        .selectLanguage {
          display: block;
        }
      }
      span {
        color: #878787;
        border-bottom: 1px dashed #1589c9;
        font-family: Poppins-Regular;
      }
      .selectLanguage {
        position: absolute;
        width: 120px;
        // height: 50px;
        background-color: #fff;
        top: calc(100% + 6px);
        z-index: 2;
        border-radius: 5px;
        display: none;
        &::before {
          width: 12px;
          height: 12px;
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          background: #fff;
          top: -6px;
        }
        &::after {
          width: 100%;
          height: 6px;
          background-color: transparent;
          content: "";
          position: absolute;
          left: 0;
          top: -6px;
        }
        li {
          text-align: center;
          padding: 10px;
          position: relative;
          transition: all 0.5s;
          font-family: Poppins-Regular;
        }
        .activeLanguage {
          background-color: #891735;
          color: #fff;
        }
      }
    }
  }
  .rightNavTop {
    display: flex;
    .menuList2,
    .share {
      width: 66.6px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: auto;
        height: 35%;
      }
    }
  }
}
</style>
