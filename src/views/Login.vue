<template>
  <div class="login">
    <!-- 登录页面左侧背景 -->
    <div class="LoginLeft">
      <div class="logo" @click="backHome">
        <!-- <img src="../assets/logo.png" /> -->
      </div>
    </div>
    <!-- 登录页面右侧表单 -->
    <div class="LoginRight">
      <div class="loginForm">
        <span class="loginTitle">
          Login to SVA Fruits Produce app
        </span>
        <div class="inputBox" style="margin-top:20px">
          <span>{{ $t("login.username") }} </span>
          <input
            type="text"
            :placeholder="$t('login.username') + '...'"
            v-model="loginInfo.username"
            @input="changeInfo"
          />
          <div class="bottomLine"></div>
        </div>
        <div class="inputBox">
          <span>{{ $t("login.password") }} </span>
          <input
            type="password"
            placeholder="*************"
            v-model="loginInfo.password"
            @input="changeInfo"
          />
          <div class="bottomLine"></div>
        </div>
        <div class="help">{{ tip }}</div>
        <el-button type="success" @click="loginCheck">{{
          $t("login.login")
        }}</el-button>
      </div>
    </div>
    <!-- 底部 -->
    <div class="copyright_container">
      <span class="copyright_right">
        SVA Fruits Produce Reports
      </span>
      © 2023 SVA Fruits Produce
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        // q8f61#7zneu75
        password: "",
      },
      tip: "",
    };
  },
  props: {
    getUserData: {
      type: Function,
    },
  },
  created() {
    if (process.env.NODE_ENV === "development") {
      this.loginInfo.username = "root";
      this.loginInfo.password = "q8f61#7zneu75";
    } else {
    }
   
  },
  methods: {
    loginCheck() {
      let that = this;
      // 检查账号密码是否为空
      if (this.loginInfo.username == "" || this.loginInfo.password == "") {
        if (this.loginInfo.username == "") {
          this.tip = this.$t("login.usernameNull");
        } else if (this.loginInfo.password == "") {
          this.tip = this.$t("login.passwordNull");
        }
      } else {
        let that = this;
        this.axios
          .post(`${process.env.VUE_APP_URL}/api/auth/login`, {
            username: that.loginInfo.username,
            password: that.loginInfo.password,
          })
          .then(
            (res) => {
              window.sessionStorage.setItem("token", res.headers.authorization);

              this.getUserData(function() {
                if (that.$route.query.lotId) {
                  that.$router.push({
                    path: "/detail",
                    query: {
                      lotId: that.$route.query.lotId,
                    },
                  });
                } else {
                  that.$router.push({ path: "/home" });
                }
              });
            },
            (error) => {
              this.tip = this.$t("login.error");
            }
          );
      }
    },

    changeInfo() {
      this.tip = "";
    },
    backHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 76.8px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    // z-index: -1;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(../assets/login/fondo_hojass1.png),
      url("../assets/login/fondo_hojass.png");
    background-position: left center, right, center;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    pointer-events: none;
    pointer-events: none;
  }
  .LoginLeft {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: calc(100% - 520px);
    height: 100%;
    position: relative;
    z-index: 1;
    background-image: url(../assets/bg1.jpg);

    .logo {
      position: absolute;
      top: 10px;
      left: 15px;
      cursor: pointer;
      img {
        max-height: 45px;
        max-width: 182px;
      }
    }
  }
  .LoginRight {
    width: 520px;
    height: 100%;
    background: #fff;
    border-radius: 2px;
    position: relative;
    padding: 72px 50px 50px;
    .loginForm {
      display: flex;
      flex-direction: column;
      .loginTitle {
        display: block;
        width: 100%;
        font-size: 39px;
        color: #333333;
        line-height: 1.2;
        text-align: left;
        font-weight: 700;
        padding-bottom: 59px;
        position: relative;
        z-index: 2;
        font-family: Poppins-Bold;
      }
      .inputBox {
        width: 100%;
        position: relative;
        border-bottom: 2px solid #dbdbdb;
        margin-bottom: 45px;

        span {
          font-size: 18px;
          color: #999999;
          font-weight: 700;
          line-height: 1.2;
          padding-left: 2px;
          font-family: Poppins-SemiBold;
        }
        input {
          display: block;
          width: 100%;
          height: 50px;
          background: transparent;
          font-size: 22px;
          color: #555555;
          line-height: 1.2;
          padding: 0 2px;
          font-family: Poppins-Regular;
        }
        .bottomLine {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          &::before {
            content: "";
            display: block;
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0%;
            height: 2px;
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s;
            background: linear-gradient(45deg, #d5007d, #e53935);
          }
        }
        input:focus + .bottomLine::before {
          width: 100%;
        }
      }
      .help {
        margin-top: -25px;
        margin-bottom: 45px;
        color: #b11820;
        font-size: 12px;
        // visibility: hidden;
      }
    }
  }
  .copyright_container {
    position: fixed;
    background-color: #002a06;
    border-color: #004c1a;
    bottom: 0;
    right: 0;
    left: 0;
    border-width: 1px 0 0;
    border-style: solid;
    z-index: 1;
    padding: 20px;
    font-size: 12px;
    color: #fff;
    .copyright_right {
      float: right;
    }
  }
}
@media (max-width: 1200px) {
  .login {
    padding-top: 73.6px;
  }
}
@media (max-width: 768px) {
  .login {
    padding-top: 55px;
  }
}
</style>
