<template>
  <div class="homeSVA">
    <div class="homeSVAswiper">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper">
        <swiper-slide>
          <div class="swiperImgBox cover2">
            <!-- 文字 -->
            <div class="coverText coverTextPosition1">
              <p
                :style="
                  activeSlide === 0 ? 'animation:animeFade 1.5s;' : 'opacity:0'
                "
              >
                把新鲜带给各位
              </p>
              <div
                class="goLinkText"
                @click="goPath('Company')"
                :style="
                  activeSlide === 0 ? 'animation:animeFade 1.5s;' : 'opacity:0'
                "
              >
                <img src="@/assets/homePage/arrow.png" alt="" />了解盛克盟
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide class="">
          <div class="swiperImgBox cover2"></div>
        </swiper-slide> -->
        <swiper-slide class="">
          <div class="swiperImgBox cover3">
            <div class="coverText coverTextPosition3">
              <p
                class="textIndent3"
                :style="
                  activeSlide === 1
                    ? 'animation:animeFadeLeft 1.5s;'
                    : 'opacity:0'
                "
              >
                新鲜
              </p>
              <p
                :style="
                  activeSlide === 1
                    ? 'animation:animeFadeRight 1.5s;'
                    : 'opacity:0'
                "
              >
                是对水果基本的要求
              </p>
              <div
                class="goLinkText"
                @click="goPath('Product')"
                :style="
                  activeSlide === 1 ? 'animation:animeFade 1.5s;' : 'opacity:0'
                "
              >
                <img src="@/assets/homePage/arrow.png" alt="" />我们的产品
              </div>
              <hr />
              <div class="desc">
                我们相信，好吃的水果是上苍对人类遵循天地万物自然规律的奖赏
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div class="swiperImgBox cover4">
            <div class="coverText coverTextPosition4">
              <p
                class="textIndent4"
                :style="
                  activeSlide === 2
                    ? 'animation:animeFadeLeft 1.5s;'
                    : 'opacity:0'
                "
              >
                因为专业
              </p>
              <p
                :style="
                  activeSlide === 2
                    ? 'animation:animeFadeRight 1.5s;'
                    : 'opacity:0'
                "
              >
                所以新鲜
              </p>
              <div
                class="goLinkText"
                @click="goPath('CooperativePartner')"
                :style="
                  activeSlide === 2 ? 'animation:animeFade 1.5s;' : 'opacity:0'
                "
              >
                <img src="@/assets/homePage/arrow.png" alt="" />合作伙伴
              </div>
              <hr />
              <div class="desc">
                让上游因水果种植而富足
              </div>
              <div class="desc">
                让水果从业者更有尊严
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiperFooter">
          <Footer></Footer>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/homePage/copyRight.vue";
export default {
  components: {
    Footer,
  },
  data() {
    let that = this;
    return {
      activeSlide: 0,
      swiperOption: {
        slidesPerView: "auto",
        direction: "vertical",
        mousewheel: true,
        autoHeight: true,
        spaceBetween: 0,

        speed: 1000,
        observer: true,
        resizeObserver: true,
        observerParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
        on: {
          slideChangeTransitionEnd: function() {
            console.log(this.activeIndex);
            that.activeSlide = this.activeIndex;
          },
        },
      },
  
    };
  },
  created() {
    //
    if (document.body.clientWidth <= 768) {
      this.swiperOption.slidesPerView = 1;
    }
  },
  methods: {
    goPath(path) {
      this.$router.replace({ name: path });
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="less">
.homeSVA {
  width: 100%;
  height: calc(100% - 76.8px);
  // overflow: auto;
  top: 76.8px;
  background-color: #fff;
  position: absolute;
  .homeSVAswiper {
    width: 100%;
    height: 100%;
  }
  .swiper {
    width: 100%;
    height: 100%;
    transform: translate3d(0, 0, 0);
    overflow: hidden;
  }
  .swiper-wrapper {
    flex-direction: column;
    position: absolute;
    bottom: 0;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    // height: auto;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    overflow: auto;
  }

  .my-bullet {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 5px 3px;
    display: inline-block;
    background: transparent;
    cursor: pointer;

    position: relative;
    &::before {
      content: "";
      width: 5px;
      height: 5px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 50%;
      transition: all 0.5s;
    }
    &:hover {
      &::before {
        width: 8px;
        height: 8px;
      }
    }
  }
  .my-bullet-active {
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      background: #fff;
    }
    &:hover {
      &::before {
        width: 10px;
        height: 10px;
      }
    }
  }

  .swiperImgBox {
    // width: 100%;
    // height: calc(100vh - 76.8px);
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-size: cover;
  }

  .cover1 {
    background-image: url(../../assets/homePage/companyProfileCover.jpg);
  }
  .cover2 {
    background-image: url(../../assets/homePage/cover2.jpg);
  }
  .cover3 {
    background-image: url(../../assets/homePage/cover3.jpg);
  }
  .cover4 {
    background-image: url(../../assets/homePage/cover4.jpg);
  }
  .coverText {
    text-align: left;
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
    line-height: 1.5;
    white-space: normal;
    p {
      font-size: 95px;
    }
    .goLinkText {
      display: flex;
      align-items: center;
      font-size: 22px;
      color: rgba(255, 255, 255, 1);
      background: rgba(255, 255, 255, 0);
      margin: 0px 15px 0px 0px;
      border: 0px solid #dcdfe6;
      border-radius: 0px 0px 0px 0px;
      padding: 12px 0px 12px 5px;
      font-weight: normal;
      cursor: pointer;

      img {
        width: 22px;
        height: auto;
        vertical-align: bottom;
        margin-right: 8px;
      }
    }
    hr {
      height: 3px;
      background-color: #fff;
    }
    .desc {
      padding: 10px 0px 5px 0px;
      font-size: 21px;
      font-weight: normal;
    }
  }
  .coverTextPosition1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  .coverTextPosition3 {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    // white-space: pre-wrap;
  }
  .textIndent3 {
    text-indent: -0.3em;
  }
  .textIndent4 {
    text-indent: 0.5em;
  }
  .coverTextPosition4 {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);

    .desc {
      text-align: right;
    }
    .goLinkText {
      justify-content: flex-end;
      margin-right: 0;
    }
  }

  .swiperFooter {
    width: 100%;
    height: auto !important;
  }

  .swiper-pagination {
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 1200px) {
  .homeSVA {
    top: 73.6px;
    height: calc(100% - 73.6px);
    .coverText {
      p {
        font-size: 72px;
      }
      font-weight: 500;
    }
    .swiperImgBox {
      // height: calc(100vh - 73.6px);
    }
  }
}
@media (max-width: 768px) {
  .homeSVA {
    top: 55px;
    height: calc(100% - 55px);
    .coverText {
      font-weight: normal;
      p {
        font-size: 36px;
      }
      .goLinkText {
        font-size: 16px;

        img {
          width: 18px;
        }
      }
      hr {
        height: 2px;
        background-color: #fff;
      }
      .desc {
        padding: 10px 0px 5px 0px;
        font-size: 15px;
        font-weight: normal;
      }
    }
    .coverTextPosition3 {
      max-width: 80%;
    }
    .swiperImgBox {
      // height: calc(100vh - 55px);
    }
  }
}

@keyframes animeFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animeFadeLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes animeFadeRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
