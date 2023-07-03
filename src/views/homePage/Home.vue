<template>
  <!-- 首页内容部分 -->
  <div class="homeSclem">
    <br />
    <!-- 企业简介 -->
    <div class="companyProfile">
      <div class="companyProfileBox">
        <div class="companyProfileTitle">企业简介</div>
        <div class="lineLight"></div>
        <!-- 封面 -->
        <div class="companyProfileCover">
          <!-- 文字说明 -->
          <div class="companyProfileContent">
            <p>把新鲜带给各位</p>
            <!-- <p>更好吃的水果</p> -->
          </div>
        </div>
        <!-- 走马灯展示 -->
        <div class="companyProfileRunningAway">
          <swiper :options="swiperOption" ref="mySwiper" class="swiperPc">
            <swiper-slide
              v-for="(item, index) in companyProfileData"
              :key="index"
            >
              <div class="topRow">
                {{ item[0] }}<span>{{ item[2] }}</span>
              </div>
              <div class="bottomRow">{{ item[1] }}</div>
            </swiper-slide>
          </swiper>
          <swiper
            :options="swiperOptionPhone"
            ref="mySwiper"
            class="swiperPhone"
          >
            <swiper-slide
              v-for="(item, index) in companyProfileData"
              :key="index"
            >
              <div class="topRow">
                {{ item[0] }}<span>{{ item[2] }}</span>
              </div>
              <div class="bottomRow">{{ item[1] }}</div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 公司简介图文 -->
        <ul class="companyProfileImageText">
          <li>
            <img src="@/assets/homePage/companyProfileCover2.jpg" alt="" />
            <div class="content pl30">
              <div class="contentTitle">Programs with Native Communities</div>
              <div class="contentDesc">09 YEARS</div>
              <p>
                盛克盟（上海）成立于2007年，是由全球顶尖的苹果公司San
                Clemente和全球顶尖的莓类公司Hortifrut共同占股经营，目前在国内80%是批发渠道、20%是零售渠道。两家母公司都拥有不少知名品牌，如：龙头牌车厘子以及苹果、Berry
                Collection、Naturipe等。盛克盟（上海）在服务好B端批发商客户的同时，也在努力服务好C端超市等渠道的客户，争取把最新鲜的水果以最快的速度用最短的时间送到最终消费者的手上，让天下人享受新鲜美味的水果。
              </p>
            </div>
          </li>
          <li>
            <div class="content pr30">
              <div class="contentTitle">
                Partnership with Rapiman Cooperative
              </div>
              <div class="contentDesc"></div>
              <p>
                盛克盟在全球各地都有分公司，如：美国、加拿大、英国、墨西哥、智利（总部）、阿根廷、乌拉圭、秘鲁、罗马尼亚、中国上海、中国广州等。目前国内在上海以及深圳的加工分包中心也已经投入使用，将来也会在更多的省份开设加工分包中心，更好的服务客户！同时也有为水果商（国内国外公司皆可）设计包装方案然后送到超市或者一件代发（电商）等一系列服务。
              </p>
              <p></p>
            </div>
            <img src="@/assets/homePage/companyProfileCover3.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <!-- 企业优势 -->
    <div class="companyAdvantage">
      <div class="companyAdvantageBox">
        <div class="companyAdvantageTitle">做更好吃的水果</div>
        <ul class="companyAdvantageListCard">
          <li v-for="item in companyAdvantageData" :key="item.title">
            <dl>
              <dt class="cardTitle">{{ item.title }}</dt>
              <dt class="cardImgList">
                <img :src="item.img[0]" alt="" />
                <img :src="item.img[1]" alt="" />
              </dt>
              <dd class="cardDesc">{{ item.desc }}</dd>
            </dl>
          </li>
        </ul>
        <swiper
          :options="swiperOptionAdvantage"
          ref="mySwiper"
          class="swiperAdvantage"
        >
          <swiper-slide
            class="AdvantageSlide"
            v-for="item in companyAdvantageData"
            :key="item.title"
          >
            <dl>
              <dt class="cardTitle">{{ item.title }}</dt>
              <dt class="cardImgList">
                <img :src="item.img[0]" alt="" />
                <img :src="item.img[1]" alt="" />
              </dt>
              <dd class="cardDesc">{{ item.desc }}</dd>
            </dl>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- 视频介绍 -->
    <div class="companyPromotional">
      <div class="companyPromotionalBox">
        <video
          src="@/assets/homePage/San_Clemente_sinaudiojunio2020.mp4"
          playsinline="true"
          webkit-playsinline="true"
          loop
          poster="@/assets/homePage/videoCover.jpg"
          ref="promotionalVideo"
        ></video>
        <div class="playVideo" ref="playVideo" @click="playPromotionalVideo">
          <img src="@/assets/homePage/play.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
// document.addEventListener(
//   "WeixinJSBridgeReady",
//   function() {
//     document.getElementById("myVideo").play();
//   },
//   false
// );
import Footer from "@/components/homePage/copyRight.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        loop: true,
        speed: 3000,
        autoplay: {
          delay: 0, // 等5秒下一个
        },
      },
      swiperOptionPhone: {
        slidesPerView: 2,
        loop: true,
        speed: 3000,
        autoplay: {
          delay: 0, // 等5秒下一个
        },
      },
      swiperOptionAdvantage: {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
      },
      companyProfileData: [
        [`140`, "城市覆盖", "+"],
        [`21`, "年品牌信任", ""],
        [`5600`, "家全国连锁", "+"],
        [`7200万`, "会员消费一次及以上", "+"],
      ],
      companyAdvantageData: [
        {
          title: "全球基地",
          desc: "从源头保障果品品质安全",
          img: [
            require("@/assets/homePage/world_color.png"),
            require("@/assets/homePage/world_nocolor.png"),
          ],
        },
        {
          title: "科学采摘",
          desc: "成熟度管理，适时采收确保水果最佳口感风味",
          img: [
            require("@/assets/homePage/basket_color.png"),
            require("@/assets/homePage/basket_nocolor.png"),
          ],
        },
        {
          title: "冷链保鲜",
          desc:
            "从产地到配送到门店销售冷链控制、全面鲜度经营保障水果新鲜、好吃",
          img: [
            require("@/assets/homePage/cold_color.png"),
            require("@/assets/homePage/cold_nocolor.png"),
          ],
        },
        {
          title: "严格标准",
          desc: "严格执行五大运营标准体系，确保果品分级标准的落实",
          img: [
            require("@/assets/homePage/standard_color.png"),
            require("@/assets/homePage/standard_nocolor.png"),
          ],
        },
      ],
      myvideoMask: true,
    };
  },
  methods: {
    playPromotionalVideo() {
      if (this.myvideoMask) {
        this.$refs.promotionalVideo.play();
        this.$refs.playVideo.style.opacity = 0;
      } else {
        this.$refs.promotionalVideo.pause();
        this.$refs.playVideo.style.opacity = 1;
      }
      this.myvideoMask = !this.myvideoMask;
    },
  },
};
</script>

<style lang="less">
.homeSclem {
  width: 100%;
  overflow: auto;
  padding-top: 92px;
  background-color: #fff;
  // 公司简介
  .companyProfile {
    width: 100%;
    margin-bottom: 80px;
    .companyProfileBox {
      width: 100%;
      // 公司简介标题
      .companyProfileTitle {
        text-align: center;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        letter-spacing: 10px;
      }
      .lineLight {
        width: 64px;
        height: 8px;
        background-color: #00852a;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 20px;
      }
      // 公司简介封面
      .companyProfileCover {
        height: 540px;
        width: 100%;
        background-image: url(../../assets/homePage/companyProfileCover.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: inherit;
        background-size: cover;
        position: relative;
        margin-bottom: 90px;
        .companyProfileContent {
          text-align: left;
          color: rgba(255, 255, 255, 1);
          font-size: 85px;
          font-weight: 700;
          line-height: 1;
          position: absolute;
          left: 8.33%;
          top: 50%;
          transform: translateY(-50%);
          padding: 0 15px;
          p {
            margin: 16px;
            &:last-child {
              text-indent: 1em;
            }
          }
        }
      }
      // 跑马灯
      .companyProfileRunningAway {
        margin-bottom: 80px;
        text-align: center;
        overflow: hidden;
        .swiperPc {
        }
        .swiperPhone {
          display: none;
        }
        .swiper-wrapper {
          transition-timing-function: linear;
        }
        .topRow {
          font-size: 6vw;
          color: rgba(255, 159, 170, 1);
          font-weight: bold;
          height: 1.5em;
          span {
            font-size: 36px;
          }
        }
        .bottomRow {
          font-size: 20px;
          color: rgba(103, 103, 103, 1);
        }
      }
      // 公司简介图文
      .companyProfileImageText {
        max-width: 1200px;
        // background-color: pink;

        margin: 0 auto;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;
          img {
            width: 55%;
            height: auto;
            border-radius: 20px;
            vertical-align: bottom;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          .pl30 {
            padding-left: 40px;
          }
          .pr30 {
            padding-right: 40px;
          }
          .content {
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .contentTitle {
              font-size: 28px;
              font-weight: bolder;
              margin-bottom: 8px;
            }
            .contentDesc {
              font-size: 26px;
              font-weight: 500;
              margin-bottom: 30px;
            }
            p {
              font-size: 14px;
              color: #3f3f3f;
              margin-bottom: 20px;
              letter-spacing: 0.05em;
            }
          }
        }
      }
    }
  }
  // 企业优势
  .companyAdvantage {
    width: 100%;
    background-color: rgba(251, 250, 249, 1);
    padding-bottom: 80px;
    overflow: hidden;
    .companyAdvantageBox {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .companyAdvantageTitle {
        padding-top: 80px;
        padding-bottom: 60px;
        text-align: center;
        color: #000;
        font-size: 40px;
        letter-spacing: 10px;
      }
      .companyAdvantageListCard {
        display: flex;
        column-gap: 15px;

        li {
          background-color: #fff;
          padding: 30px 20px;
          width: 25%;
          box-shadow: 0 0 10px #d2d2d2;
          transition: all 0.5s;
          text-align: center;
          border-radius: 15px;
          &:hover {
            background-color: #41a460;
            dt,
            dd {
              color: #fff;
            }
            .cardImgList {
              img {
                top: -100%;
              }
            }
          }
          .cardImgList {
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: center;
            overflow: hidden;
            height: 100px;
            img {
              width: 100px;
              height: auto;
              position: relative;
              top: 0%;
              transition: all 0.5s;
            }
          }
          dl {
            display: flex;
            flex-direction: column;
            .cardTitle {
              padding-top: 15px;
              padding-bottom: 42px;
            }
            .cardDesc {
              margin-top: 32px;
              margin-bottom: 15px;
            }
            dt {
              font-size: 28px;
              font-weight: normal;
              color: #3f2016;
            }
            dd {
              font-size: 16px;
              color: #333;
              overflow: hidden;
              display: -webkit-box;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              max-height: 72px;
              margin-top: 15px;
              line-height: 24px;
              // white-space: nowrap;
            }
          }
        }
      }
      .swiperAdvantage {
        display: none;
      }
    }
  }
  // 企业宣传片
  .companyPromotional {
    width: 100%;
    padding: 80px 0;
    background-color: #fff;
    .companyPromotionalBox {
      // width: 80%;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      video {
        width: 100%;
        vertical-align: bottom;
      }
      .playVideo {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        // background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.5s;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.85)
        );
        cursor: pointer;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: auto;
        }
      }
    }
  }
}

@media (max-width: 1470px) {
}
@media (max-width: 1200px) {
  .homeSclem {
    padding-top: 82px;
    .companyProfile {
      margin-bottom: 60px;
      .companyProfileBox {
        .companyProfileCover {
          margin-bottom: 60px;
          .companyProfileContent {
            font-size: 66px;
          }
        }
        .companyProfileRunningAway {
          .topRow {
            font-size: 6vw;
          }
          .bottomRow {
            font-size: 20px;
          }
        }
        .companyProfileImageText {
          max-width: 95%;
          width: 100%;
          li {
            .pl30 {
              padding-left: 20px;
            }
            .pr30 {
              padding-right: 20px;
            }
            .content {
              .contentTitle {
                font-size: 24px;
              }
              .contentDesc {
                font-size: 16px;
                margin-bottom: 20px;
              }
              p {
                font-size: 12px;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }

    .companyAdvantage {
      padding-bottom: 60px;
      .companyAdvantageBox {
        max-width: 95%;
        width: 100%;
        .companyAdvantageTitle {
          padding-top: 60px;
          padding-bottom: 50px;
        }
        .companyAdvantageListCard {
          column-gap: 10px;
          li {
            .cardImgList {
              height: 90px;
              img {
                width: 90px;
              }
            }
            dl {
              .cardTitle {
              }
              .cardDesc {
              }
              dt {
                font-size: 24px;
              }
              dd {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .companyPromotional {
      padding: 60px 0;

      .companyPromotionalBox {
        max-width: 95%;
        width: 100%;
        video {
          width: 100%;
          vertical-align: bottom;
        }
        .playVideo {
          img {
            width: 32px;
            height: auto;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .homeSclem {
    padding-top: 55px;
    .companyProfile {
      .companyProfileBox {
        .companyProfileTitle {
          font-size: 28px;
        }
        .lineLight {
          height: 4px;
        }
        .companyProfileCover {
          margin-bottom: 60px;
          height: 360px;
          .companyProfileContent {
            font-size: 36px;
            font-weight: normal;
            left: 0%;
            padding: 0;
          }
        }
        .companyProfileRunningAway {
          .swiperPc {
            display: none;
          }
          .swiperPhone {
            display: block;
          }
          .topRow {
            font-size: 12vw;
          }
          .bottomRow {
            font-size: 15px;
          }
        }
        .companyProfileImageText {
          max-width: 100%;
          li {
            flex-direction: column;
            padding: 0 20px;
            &:last-child {
              .content {
                order: 2;
              }
              img {
                order: 1;
              }
            }
            img {
              width: 100%;
              height: auto;
            }
            .pl30 {
              padding-left: 0px;
            }
            .pr30 {
              padding-right: 0px;
            }
            .content {
              width: 100%;
              margin-top: 20px;
              .contentTitle {
                font-size: 24px;
              }
              .contentDesc {
                font-size: 16px;
                margin-bottom: 20px;
              }
              p {
                font-size: 12px;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
    .companyAdvantage {
      .companyAdvantageBox {
        max-width: 95%;
        width: 100%;
        .companyAdvantageTitle {
          padding-top: 60px;
          padding-bottom: 30px;
          font-size: 28px;
          letter-spacing: 6px;
        }
        .companyAdvantageListCard {
          display: none;
        }
        .swiperAdvantage {
          display: flex;
          column-gap: 0px;
          position: relative;
          padding: 0px;
          .AdvantageSlide {
            background-color: #fff;
            padding: 30px 20px;
            width: 220px;
            box-shadow: 0 0 10px #d2d2d2;
            transition: all 0.5s;
            text-align: center;
            border-radius: 15px;
            .cardImgList {
              display: flex;
              flex-direction: column;
              align-items: center;
              overflow: hidden;
              height: 70px;
              img {
                width: 70px;
                height: auto;
                position: relative;
                top: 0%;
                transition: all 0.5s;
              }
            }
            dl {
              display: flex;
              flex-direction: column;
              .cardTitle {
                padding-top: 15px;
                padding-bottom: 42px;
              }
              .cardDesc {
                margin-top: 32px;
                margin-bottom: 0px;
              }
              dt {
                font-size: 19px;
                font-weight: normal;
                color: #3f2016;
              }
              dd {
                font-size: 15px;
                color: #333;
                overflow: hidden;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                height: 72px;
                margin-top: 15px;
                line-height: 24px;
                // white-space: nowrap;
              }
            }
          }
          .swiper-slide-active {
            background-color: #41a460;
            dl {
              dt,
              dd {
                color: #fff;
              }
            }
            .cardImgList {
              img {
                top: -100%;
              }
            }
          }
          .my-bullet {
            border-radius: 50%;
            width: 10px;
            height: 10px;
            margin: 0 3px;
            display: inline-block;
            background: rgba(0, 0, 0, 0.2);
          }
          .my-bullet-active {
            background: #41a460;
            width: 10px;
          }
          .swiper-pagination {
            position: absolute;
            z-index: 1;
            top: calc(100% + 10px);
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .companyPromotional {
      padding: 52px 20px;

      .companyPromotionalBox {
        max-width: 95%;
        width: 100%;

        video {
          width: 100%;
          vertical-align: bottom;
        }
        .playVideo {
          img {
            width: 28px;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
