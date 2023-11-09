<template>
  <div class="product">
    <div class="productBG">
      <div class="productBGBox">
        <div class="productBGCover">
          <div class="productBGContent">
            <h5 style="font-family: 'CL';font-size: 40px;text-align: center;line-height: 65px;">{{
              $t('homePage.product.title') }}</h5>
            <h1 style="font-family: 'CL';font-size: 66px;text-align: center;"> {{ $t('homePage.product.title1') }}</h1>
            <!-- <h5 style="font-family: 'Montserrat',sans-serif;font-size: 50px;"> {{ $t('homePage.product.title') }},</h5>
            <p style="font-family: 'Montserrat',sans-serif;font-size: 70px;">{{ $t('homePage.product.title1') }}</p> -->
          </div>
        </div>
      </div>
      <!-- 美味 -->
      <!-- <div class="introductionFruitSystem">
        <div class="introductionFruitSystemBox">
          <div class="introductionFruitSystemContent">
            <div class="imgBox">
              <img src="@/assets/product/1.svg" alt="" />
            </div>
            <div class="introductionFruitSystemContentList">
              <div class="lineLight"></div>
              <p>
                好吃，是一种令人愉悦的享受
              </p>
              <p>
                好吃，是检验水果的重要标准
              </p>
              <p>好吃的水果，才是营养、安全、生态的</p>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 水果视频 -->
      <!-- <div class="productMedia">
        <div class="productMediaBox">
          <div class="productMediaTitle">盛克盟猎果之旅</div>
          <div class="productMediaDesc">来自大自然的诚意作品</div>
          <div class="productSwiper">
            <div class="productSwiperBox">
              <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                  <div class="swiperSlideBox">
                    <div class="left_side">
                      <div class="productSwiperTitle">
                        招牌红芭蕾草莓——鲜甜味蕾跳起来
                      </div>
                      <div class="lineLight"></div>
                      <p>
                        2007年，生而更优的草莓品种“红颜”进入中国，仅仅三年之后，百果园开创长途冷链运输先河，率先将红颜草莓由北方成功运输和售卖到了广东市场，让岭南人也能吃到色香味俱佳的冬草莓。
                      </p>
                      <p>
                        吃得了苦寒，才能得到真甜，红芭蕾草莓不仅仅是来自大自然的鲜甜美味，也是承载他的“呵护者”好吃梦想的诚意作品。
                      </p>
                    </div>
                    <div class="right_side">
                      <video
                        src="@/assets/homePage/San_Clemente_sinaudiojunio2020.mp4"
                        poster="@/assets/homePage/videoCover.jpg"
                        controls
                      ></video>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="swiperSlideBox">
                    <div class="left_side">
                      <div class="productSwiperTitle">
                        招牌红芭蕾草莓——鲜甜味蕾跳起来
                      </div>
                      <div class="lineLight"></div>
                      <p>
                        2007年，生而更优的草莓品种“红颜”进入中国，仅仅三年之后，百果园开创长途冷链运输先河，率先将红颜草莓由北方成功运输和售卖到了广东市场，让岭南人也能吃到色香味俱佳的冬草莓。
                      </p>
                      <p>
                        吃得了苦寒，才能得到真甜，红芭蕾草莓不仅仅是来自大自然的鲜甜美味，也是承载他的“呵护者”好吃梦想的诚意作品。
                      </p>
                    </div>
                    <div class="right_side">
                      <video
                        src="@/assets/homePage/San_Clemente_sinaudiojunio2020.mp4"
                        poster="@/assets/homePage/videoCover.jpg"
                        controls
                      ></video>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-button-next">
              <img src="@/assets/system/arrow-down.png" alt="" />
            </div>
            <div class="swiper-button-prev">
              <img src="@/assets/system/arrow-down.png" alt="" />
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>
      </div> -->
      <!-- 招牌水果 -->
      <div class="signatureFruit">
        <div class="signatureFruitBox">

          <div class="signatureFruitTitle">{{ $t('homePage.product.title') }}</div>
          <div class="signatureFruitDesc">{{ $t('homePage.product.title2') }}</div>
          <div class="signatureFruitList">
            <ul class="signatureFruitUl">
              <li class="signatureFruitLi">
                <div class="image">
                  <img src="@/assets/product/product1.jpg" alt="" />
                </div>
                <div class="text">
                  <div class="signatureFruitName">{{ $t('homePage.product.production') }}</div>
                  <div class="lineLight"></div>
                  <ul>
                    <li>{{ $t('homePage.product.pro1') }}：{{ $t('homePage.product.pro1_1') }}</li>
                    <li>{{ $t('homePage.product.pro2') }}：{{ $t('homePage.product.pro2_1') }}</li>
                    <li>{{ $t('homePage.product.pro3') }}：{{ $t('homePage.product.pro3_1') }}</li>
                    <li>{{ $t('homePage.product.pro4') }}：{{ $t('homePage.product.pro4_1') }}</li>
                  </ul>
                </div>
              </li>
              <li class="signatureFruitLi">
                <div class="image">
                  <img src="@/assets/product/product2.jpg" alt="" />
                </div>
                <div class="text">
                  <div class="signatureFruitName" style=" line-height: 1.2;margin-bottom: 15px;">{{ $t('homePage.product.title3') }}</div>
                  <div class="lineLight"></div>
                  <ul>
                    <li>{{ $t('homePage.product.prod') }}：{{ $t('homePage.product.prod1_1') }}</li>
                    <li>{{ $t('homePage.product.prod2') }}：{{ $t('homePage.product.prod2_1') }}</li>
                    <li>{{ $t('homePage.product.prod3') }}：{{ $t('homePage.product.prod3_1') }}</li>
                    <li>{{ $t('homePage.product.prod4') }}：{{ $t('homePage.product.prod4_1') }}</li>
                  </ul>
                </div>
              </li>
              <!-- <li class="signatureFruitLi">
                <div class="image">
                  <img src="@/assets/product/product1.jpg" alt="" />
                </div>
                <div class="text">
                  <div class="signatureFruitName">牛顿苹果</div>
                  <div class="lineLight"></div>
                  <ul>
                    <li>产地：南非西开普省</li>
                    <li>品种：红富士</li>
                    <li>特点：个小脆甜多汁，产自阳光南非，老树果风味好</li>
                    <li>上市周期：6月～10月</li>
                  </ul>
                </div>
              </li>

              <li class="signatureFruitLi">
                <div class="image">
                  <img src="@/assets/product/product1.jpg" alt="" />
                </div>
                <div class="text">
                  <div class="signatureFruitName">牛顿苹果</div>
                  <div class="lineLight"></div>
                  <ul>
                    <li>产地：南非西开普省</li>
                    <li>品种：红富士</li>
                    <li>特点：个小脆甜多汁，产自阳光南非，老树果风味好</li>
                    <li>上市周期：6月～10月</li>
                  </ul>
                </div>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/homePage/copyRight.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        navigation: {
          prevEl: ".swiper-button-next",
          nextEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
      },
    };
  },
};
</script>

<style lang="less">
.product {
  width: 100%;
  padding-top: 76.8px;

  .productBG {
    width: 100%;
    margin-bottom: 80px;

    .productBGBox {
      width: 100%;

      .productBGCover {
        height: 540px;
        width: 100%;
        background-image: url(../../assets/product/productBg.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: inherit;
        background-size: cover;
        position: relative;
        margin-bottom: 90px;

        .productBGContent {
          text-align: left;
          color: rgba(255, 255, 255, 1);
          font-size: 85px;
          font-weight: normal;
          line-height: 1;
          position: absolute;
          // left: 8.33%;
          width: 100%;
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
    }
  }

  .introductionFruitSystem,
  .fruitSystemIntrouduct {
    width: 100%;
    margin-bottom: 105px;

    .introductionFruitSystemBox {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;

      .introductionFruitSystemTitle {
        text-align: center;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        letter-spacing: 10px;
        margin-bottom: 80px;
      }

      .introductionFruitSystemContent {
        width: 100%;
        display: flex;

        .imgBox {
          width: 50%;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 85%;
            height: auto;
          }
        }

        .introductionFruitSystemContentList {
          padding: 0 32px;
          display: flex;
          flex-direction: column;
          //   align-items: center;
          justify-content: center;
          width: 50%;

          .lineLight {
            width: 53px;
            height: 2px;
            background-color: #00852a;
            margin-bottom: 44px;
          }

          p {
            // margin-bottom: 38px;
            text-align: left;
            color: rgba(63, 32, 22, 1);
            font-size: 18px;
            line-height: 1.8;
          }
        }
      }
    }
  }

  .productMedia {
    width: 100%;
    background-color: rgba(251, 250, 249, 1);

    .productMediaBox {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 0 120px;
      position: relative;

      .productMediaTitle {
        text-align: center;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        letter-spacing: 10px;
        margin-bottom: 10px;
      }

      .productMediaDesc {
        text-align: center;
        color: rgba(64, 33, 23, 1);
        font-size: 22px;
        margin-bottom: 50px;
      }

      .productSwiper {
        width: 100%;
        position: relative;

        .productSwiperBox {
          width: calc(100% - 108px);
          overflow: hidden;
          margin: 0 auto;

          .swiperSlideBox {
            width: 100%;
            display: flex;

            .left_side {
              width: 40%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 0 25px;

              .productSwiperTitle {
                text-align: left;
                font-size: 26px;
              }

              .lineLight {
                width: 64px;
                height: 2px;
                background-color: #00852a;
                margin-top: 10px;
                margin-bottom: 20px;
              }

              p {
                text-align: left;
                color: rgba(103, 103, 103, 1);
                font-size: 16px;
                line-height: 1.8;
                margin-bottom: 8px;
              }
            }

            .right_side {
              width: 60%;
              padding: 0 25px;

              video {
                width: 100%;
                vertical-align: bottom;
              }
            }
          }
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 54px;
          height: 54px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          position: absolute;
          z-index: 1;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;

          img {
            width: 50%;
            height: auto;
            position: absolute;
            left: 50%;
            top: 50%;

            vertical-align: bottom;
          }
        }

        .swiper-button-next {
          left: 0%;

          img {
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }

        .swiper-button-prev {
          right: 0%;

          img {
            transform: translate(-50%, -50%) rotate(-90deg);
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
          top: calc(100% + 30px);
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  .signatureFruit {
    width: 100%;
    margin-bottom: 80px;
    margin-top: 80px;

    .signatureFruitBox {
      width: 100%;

      // 公司简介标题
      .signatureFruitTitle {
        text-align: center;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        font-weight: 700;
        font-family: 'CL';
      }

      .signatureFruitDesc {
        text-align: center;
        color: rgba(64, 33, 23, 1);
        font-size: 22px;
        padding: 5px 0;
        margin-bottom: 40px;
        font-family: 'CL';
      }

      .signatureFruitList {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;

        .signatureFruitUl {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          .signatureFruitLi {
            width: calc(25% - 48px);
            margin: 24px;
            position: relative;
            border-radius: 10px;
            overflow: hidden;

            &:hover {
              .text {
                opacity: 1;
                transform: rotateY(0deg);
              }

              .image {
                transform: rotateY(180deg);
              }
            }

            .text {
              position: absolute;
              left: 0;
              top: 0%;
              padding: 12px 42px;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              background-color: #41a460;
              opacity: 0;
              transition: all 0.5s;
              transform: rotateY(180deg);
              border-radius: 10px;

              .signatureFruitName {
                color: rgba(255, 255, 255, 1);
                font-size: 20px;
                line-height: 3.2;
                text-align: left;
                font-weight: bold;
              }

              .lineLight {
                width: 64px;
                height: 1px;
                background-color: #fff;

                margin-bottom: 20px;
              }

              ul {
                li {
                  color: rgba(255, 255, 255, 1);
                  font-size: 14px;
                  line-height: 1.8;
                  text-align: left;
                }
              }
            }

            .image {
              position: relative;
              transition: all 0.5s;
              //   padding: 12px;
              border-radius: 10px;

              img {
                width: 100%;
                height: auto;
                vertical-align: bottom;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .product {
    padding-top: 73.6px;

    .productBG {
      width: 100%;
      margin-bottom: 60px;

      .productBGBox {
        width: 100%;

        .productBGCover {
          .productBGContent {
            font-size: 66px;
          }
        }
      }
    }

    .introductionFruitSystem {
      margin-bottom: 60px;

      .introductionFruitSystemBox {
        width: 100%;
        max-width: 95%;
      }
    }

    .productMedia {
      width: 100%;
      background-color: rgba(251, 250, 249, 1);

      .productMediaBox {
        width: 100%;
        max-width: 95%;
        margin: 0 auto;
        padding: 80px 0 120px;
        position: relative;

        .productMediaTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 40px;
          letter-spacing: 10px;
          margin-bottom: 10px;
        }

        .productMediaDesc {
          text-align: center;
          color: rgba(64, 33, 23, 1);
          font-size: 22px;
          margin-bottom: 50px;
        }

        .productSwiper {
          width: 100%;
          position: relative;

          .productSwiperBox {
            width: 100%;
            overflow: hidden;
            margin: 0 auto;

            .swiperSlideBox {
              width: 100%;
              display: flex;

              .left_side {
                width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 25px;

                .productSwiperTitle {
                  text-align: left;
                  font-size: 22px;
                }

                .lineLight {
                  width: 64px;
                  height: 2px;
                  background-color: #00852a;
                  margin-top: 10px;
                  margin-bottom: 20px;
                }

                p {
                  text-align: left;
                  color: rgba(103, 103, 103, 1);
                  font-size: 14px;
                  line-height: 1.8;
                  margin-bottom: 8px;
                }
              }

              .right_side {
                width: 60%;
                padding: 0 25px;

                video {
                  width: 100%;
                  vertical-align: bottom;
                }
              }
            }
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 54px;
            height: 54px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            display: none;

            img {
              width: 50%;
              height: auto;
              position: absolute;
              left: 50%;
              top: 50%;

              vertical-align: bottom;
            }
          }

          .swiper-button-next {
            left: 0%;

            img {
              transform: translate(-50%, -50%) rotate(90deg);
            }
          }

          .swiper-button-prev {
            right: 0%;

            img {
              transform: translate(-50%, -50%) rotate(-90deg);
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
            top: calc(100% + 30px);
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }

    .signatureFruit {
      width: 100%;
      margin-bottom: 60px;
      margin-top: 60px;

      .signatureFruitBox {
        width: 100%;

        // 公司简介标题
        .signatureFruitTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 40px;
          letter-spacing: 10px;
        }

        .signatureFruitDesc {
          text-align: center;
          color: rgba(64, 33, 23, 1);
          font-size: 22px;
          padding: 5px 0;
          margin-bottom: 40px;
        }

        .signatureFruitList {
          width: 100%;
          max-width: 95%;
          margin: 0 auto;

          .signatureFruitUl {
            .signatureFruitLi {
              width: calc(25% - 24px);
              margin: 12px;

              .text {
                .signatureFruitName {
                  font-size: 16px;
                }

                .lineLight {
                  height: 1px;
                }

                ul {
                  li {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .product {
    padding-top: 55px;

    .productBG {
      width: 100%;
      margin-bottom: 60px;

      .productBGBox {
        width: 100%;

        .productBGCover {
          margin-bottom: 60px;
          height: 360px;

          .productBGContent {
            font-size: 36px;
            font-weight: normal;
            left: 0%;
            padding: 0;
          }
        }
      }
    }

    .introductionFruitSystem,
    .fruitSystemIntrouduct {
      margin-bottom: 60px;

      .introductionFruitSystemBox {
        width: 100%;
        max-width: 100%;

        .introductionFruitSystemTitle {
          font-size: 28px;
          letter-spacing: 6px;
        }

        .introductionFruitSystemContent {
          display: flex;
          flex-direction: column;

          .imgBox {
            width: 100%;
            margin-bottom: 40px;

            img {}
          }

          .introductionFruitSystemContentList {
            width: 100%;

            .lineLight {}

            p {
              font-size: 16px;
            }
          }
        }
      }
    }

    .productMedia {
      width: 100%;
      background-color: rgba(251, 250, 249, 1);

      .productMediaBox {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 60px 0 100px;

        .productMediaTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 28px;
          letter-spacing: 6px;
          margin-bottom: 10px;
        }

        .productMediaDesc {
          text-align: center;
          color: rgba(64, 33, 23, 1);
          font-size: 18px;
          margin-bottom: 50px;
        }

        .productSwiper {
          width: 100%;
          position: relative;
          padding: 0 20px;

          .productSwiperBox {
            width: 100%;
            overflow: hidden;
            margin: 0 auto;

            .swiperSlideBox {
              width: 100%;
              display: flex;
              flex-direction: column;

              .left_side {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0;

                .productSwiperTitle {
                  text-align: left;
                  font-size: 19px;
                }

                .lineLight {
                  width: 48px;
                  height: 1.5px;
                  background-color: #00852a;
                  margin-top: 20px;
                  margin-bottom: 20px;
                }

                p {
                  text-align: left;
                  color: rgba(103, 103, 103, 1);
                  font-size: 14px;
                  line-height: 1.8;
                  margin-bottom: 8px;
                }
              }

              .right_side {
                width: 100%;
                padding: 0;
                margin-top: 20px;

                video {
                  width: 100%;
                  vertical-align: bottom;
                }
              }
            }
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 54px;
            height: 54px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;

            img {
              width: 50%;
              height: auto;
              position: absolute;
              left: 50%;
              top: 50%;

              vertical-align: bottom;
            }
          }

          .swiper-button-next {
            left: 0%;

            img {
              transform: translate(-50%, -50%) rotate(90deg);
            }
          }

          .swiper-button-prev {
            right: 0%;

            img {
              transform: translate(-50%, -50%) rotate(-90deg);
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
            top: calc(100% + 30px);
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }

    .signatureFruit {
      width: 100%;
      margin-bottom: 80px;
      margin-top: 60px;

      .signatureFruitBox {
        width: 100%;

        // 公司简介标题
        .signatureFruitTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 28px;
          letter-spacing: 6px;
        }

        .signatureFruitDesc {
          text-align: center;
          color: rgba(64, 33, 23, 1);
          font-size: 18px;
          padding: 5px 0;
          margin-bottom: 30px;
        }

        .signatureFruitList {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;

          .signatureFruitUl {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            .signatureFruitLi {
              width: calc(100% - 40px);
              margin: 20px;
              position: relative;
              border-radius: 10px;
              overflow: hidden;
              margin-bottom: 40px;

              &:hover {
                .text {
                  opacity: 1;
                  transform: rotateY(0deg);
                }

                .image {
                  transform: rotateY(180deg);
                }
              }

              .text {
                position: absolute;
                left: 0;
                top: 0%;
                padding: 10px 32px;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: #41a460;
                opacity: 0;
                transition: all 0.5s;
                transform: rotateY(180deg);

                .signatureFruitName {
                  color: rgba(255, 255, 255, 1);
                  font-size: 24px;
                  line-height: 1.5;
                  text-align: left;
                  font-weight: bold;
                }

                .lineLight {
                  width: 64px;
                  height: 2px;
                  background-color: #fff;
                  margin-top: 10px;
                  margin-bottom: 20px;
                }

                ul {
                  li {
                    color: rgba(255, 255, 255, 1);
                    font-size: 15px;
                    line-height: 1.8;
                    text-align: left;
                  }
                }
              }

              .image {
                position: relative;
                transition: all 0.5s;

                //   padding: 12px;
                img {
                  width: 100%;
                  height: auto;
                  vertical-align: bottom;
                }
              }
            }
          }
        }
      }
    }
  }
}</style>
