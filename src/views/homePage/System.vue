<template>
  <div class="system">
    <br />
    <!-- 果标体系 -->
    <div class="fruitMarkSystem">
      <div class="fruitMarkSystemBox">
        <div class="fruitMarkSystemTitle">果标体系</div>
        <div class="lineLight"></div>
        <div class="fruitMarkSystemCover">
          <!-- 文字说明 -->
          <div class="fruitMarkSystemContent">
            <p>盛克盟</p>
            <p>果品标准体系</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 果品标准体系介绍 -->
    <div class="introductionFruitSystem">
      <div class="introductionFruitSystemBox">
        <div class="introductionFruitSystemTitle">果品标准体系介绍</div>
        <div class="introductionFruitSystemContent">
          <div class="imgBox">
            <img src="@/assets/system/fruit.png" alt="" />
          </div>
          <div class="introductionFruitSystemContentList">
            <div class="lineLight"></div>
            <p>
              针对不同水果的特性和共性建立果品标准是一个世界性难题，品质难统一也是制约果品行业发展的一大“魔咒”。
            </p>
            <p>
              百果园公司独创水果“四度一味一安全”量化维度，即将水果按“糖酸度、鲜度、脆度、细嫩度、香味、安全性”分成招牌、A级、B级、C级4个等级。鲜度是所有商品果的基本标准，安全性是果业发展的生死线。而好吃是检验水果的重要标准！品质分级让好吃看得见，保障消费者的切身利益。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 果品标准体系建立发展历程 -->
    <div class="systemHistory">
      <div class="systemHistoryBox">
        <div class="systemHistoryTitle">果品标准体系建立发展历程</div>
        <!-- 轮播图 -->
        <div class="systemHistoryCarouse">
          <div class="systemHistorySwiper">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide
                v-for="(item, index) in systemHistoryData"
                :key="index"
              >
                <div class="topRow">
                  <img :src="item.img" alt="" />
                </div>
                <div class="bottomRow">
                  <div class="historyYear">
                    <span>{{ item.year }}</span>
                    <span class="line"></span>
                  </div>
                  <div class="historyDesc">
                    {{ item.desc }}
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
        </div>
        <!-- 手机端 -->
        <ul class="systemHistoryPhone">
          <li v-for="(item, index) in systemHistoryData" :key="index">
            <div class="systemHistoryImg">
              <img :src="item.img" alt="" />
            </div>
            <div class="historyYear">
              <span>{{ item.year }}</span>
              <span class="line"></span>
            </div>
            <div class="historyDesc">
              {{ item.desc }}
            </div>
          </li>
          <li>
            <div class="systemHistoryImg">
              <img src="@/assets/system/swiper1.png" alt="" />
            </div>
            <div class="historyYear">
              <span>2014年</span>
              <span class="line"></span>
            </div>
            <div class="historyDesc">
              百果园受中国果品流通协会正式委托，制定“果品连锁超市行业标准”。
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 果品标准体系介绍 -->
    <div class="fruitSystemIntrouduct">
      <div class="introductionFruitSystemBox">
        <div class="introductionFruitSystemContent">
          <div class="introductionFruitSystemContentList">
            <div class="introductionFruitSystemTitle">果品标准体系介绍</div>
            <div class="lineLight"></div>
            <p>“四级两类三规格”：招牌、A级、B级、C级4个等级；</p>
            <p>
              稀有、非稀有两个类别；大、中、小三个规格。招牌、A、B、C
              是指的同一类水果内在品质的不同所分出的级别差异。这是同一种果品的纵向比较。而稀有果品是不同品种间的横向比较。比较差异是否足够大。比如说世界一苹果，跟大众苹果比，是稀有的，珍贵的。日本巨峰和普通大众化葡萄比也是珍贵稀有的。它不是指的一个同质化类别中分出的不同等级。规格，这里单纯从体积大小的维度划分。
            </p>
            <p>“四度一味一安全”：糖酸度、鲜度、脆度、细嫩度、香味、安全性。</p>
          </div>
          <div class="imgBox">
            <img src="@/assets/system/fruit2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 果品标准应用 -->
    <div class="fruitApplication">
      <div class="fruitApplicationBox">
        <div class="fruitApplicationTitle">
          果品标准应用
        </div>
        <div class="fruitApplicationDesc">产品标准体系</div>
        <div class="fruitApplicationImg">
          <img src="@/assets/system/fruitApplication.svg" alt="" />
        </div>
      </div>
    </div>
    <!-- 底部 -->
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
        slidesPerView: 3,
        loop: true,
        navigation: {
          prevEl: ".swiper-button-next",
          nextEl: ".swiper-button-prev",
        },
      },
      systemHistoryData: [
        {
          img: require("@/assets/system/swiper1.png"),
          year: "2014年",
          desc:
            "百果园受中国果品流通协会正式委托，制定“果品连锁超市行业标准”。",
        },
        {
          img: require("@/assets/system/swiper1.png"),
          year: "2019年",
          desc:
            " 由于稀有级和C级的水果占比极低，百果园为便于果品标准体系在消费端的教育及传播，将果标体系宣传图简化成主要的招牌、A级、B级三个等级。 ",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.system {
  width: 100%;
  overflow: auto;
  padding-top: 92px;
  background-color: #fff;
  .fruitMarkSystem {
    width: 100%;
    margin-bottom: 80px;
    .fruitMarkSystemBox {
      width: 100%;
      .fruitMarkSystemTitle {
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
      .fruitMarkSystemCover {
        height: 540px;
        width: 100%;
        background-image: url(../../assets/homePage/companyProfileCover.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: inherit;
        background-size: cover;
        position: relative;
        margin-bottom: 90px;
        .fruitMarkSystemContent {
          text-align: left;
          color: rgba(255, 255, 255, 1);
          font-size: 85px;
          font-weight: normal;
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
            margin-bottom: 38px;
            text-align: left;
            color: rgba(103, 103, 103, 1);
            font-size: 18px;
            line-height: 1.8;
          }
        }
      }
    }
  }

  .fruitSystemIntrouduct {
    background-color: rgba(65, 164, 96, 1);
    .introductionFruitSystemBox {
      .introductionFruitSystemContent {
        padding: 80px 0;
        .introductionFruitSystemTitle {
          text-align: left;
          color: #fff;
          font-size: 40px;
          letter-spacing: 10px;
          margin-bottom: 30px;
        }
        .introductionFruitSystemContentList {
          padding: 0px;
          padding-right: 32px;
          .lineLight {
            background-color: #fff;
          }
          p {
            color: #fff;
          }
        }
        .imgBox {
          justify-content: end;
        }
      }
    }
  }
  .systemHistory {
    width: 100%;
    margin-bottom: 80px;
    .systemHistoryBox {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .systemHistoryTitle {
        text-align: center;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        letter-spacing: 10px;
        margin-bottom: 40px;
      }
      .systemHistoryCarouse {
        margin-bottom: 80px;
        text-align: center;
        // overflow: hidden;
        position: relative;
        .systemHistorySwiper {
          width: calc(100% - 108px);
          overflow: hidden;
          //   text-align: center;
          margin: 0 auto;
          .topRow {
            padding: 29px;
            img {
              width: 100%;
              height: auto;
            }
          }
          .bottomRow {
            padding: 0 29px;
            .historyYear {
              text-align: left;
              color: rgba(63, 32, 22, 1);
              font-size: 24px;
              font-weight: bold;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 10px;
              .line {
                flex: 1;
                height: 1px;
                background-color: rgba(100, 100, 100, 1);
                display: inline-block;
                margin-left: 36px;
              }
            }
            .historyDesc {
              text-align: left;
              color: rgba(100, 100, 100, 1);
              font-size: 15px;
              line-height: 1.7;
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
      }
      .systemHistoryPhone {
        display: none;
      }
    }
  }
  .fruitApplication {
    width: 100%;
    margin-bottom: 80px;
    .fruitApplicationBox {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .fruitApplicationTitle {
        text-align: left;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        letter-spacing: 10px;
        margin-bottom: 10px;
      }
      .fruitApplicationDesc {
        text-align: left;
        color: rgba(64, 33, 23, 1);
        font-size: 22px;
        margin-bottom: 50px;
      }
      .fruitApplicationImg {
        width: 100%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .system {
    padding-top: 82px;
    .fruitMarkSystem {
      margin-bottom: 60px;
      .fruitMarkSystemBox {
        .fruitMarkSystemCover {
          margin-bottom: 60px;
          .fruitMarkSystemContent {
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
    .fruitSystemIntrouduct {
      background-color: rgba(65, 164, 96, 1);
      margin-bottom: 60px;
      .introductionFruitSystemBox {
        width: 100%;
        max-width: 95%;
      }
    }
    .systemHistory {
      margin-bottom: 60px;
      .systemHistoryBox {
        width: 100%;
        max-width: 95%;
        .systemHistoryTitle {
          font-size: 40px;
        }
        .systemHistoryCarouse {
          margin-bottom: 80px;

          .systemHistorySwiper {
            width: 100%;
          }
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      }
    }
    .fruitApplication {
      width: 100%;
      margin-bottom: 80px;
      .fruitApplicationBox {
        width: 100%;
        max-width: 95%;
        margin: 0 auto;
        .fruitApplicationTitle {
          text-align: left;
          color: rgba(0, 0, 0, 1);
          font-size: 40px;
          letter-spacing: 10px;
          margin-bottom: 10px;
        }
        .fruitApplicationDesc {
          text-align: left;
          color: rgba(64, 33, 23, 1);
          font-size: 22px;
          margin-bottom: 50px;
        }
        .fruitApplicationImg {
          width: 100%;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .system {
    padding-top: 55px;
    .fruitMarkSystem {
      margin-bottom: 60px;
      .fruitMarkSystemBox {
        .fruitMarkSystemTitle {
          font-size: 28px;
        }
        .lineLight {
          height: 4px;
        }
        .fruitMarkSystemCover {
          margin-bottom: 60px;
          height: 360px;
          .fruitMarkSystemContent {
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
            img {
            }
          }
          .introductionFruitSystemContentList {
            width: 100%;
            .lineLight {
            }
            p {
              font-size: 16px;
            }
          }
        }
      }
    }

    .fruitSystemIntrouduct {
      background-color: rgba(65, 164, 96, 1);
      margin-bottom: 60px;
      .introductionFruitSystemBox {
        width: 100%;
        max-width: 95%;
        .introductionFruitSystemContent {
          padding: 60px 0;
          .introductionFruitSystemTitle {
            font-size: 28px;
            letter-spacing: 6px;
          }
          .introductionFruitSystemContentList {
            padding: 0 12px;
            order: 2;
          }
          .imgBox {
            order: 1;
            justify-content: center;
          }
        }
      }
    }
    .systemHistory {
      margin-bottom: 60px;
      padding: 0 20px;
      .systemHistoryBox {
        width: 100%;
        max-width: 100%;
        .systemHistoryTitle {
          font-size: 28px;
        }
        .systemHistoryCarouse {
          display: none;
        }
        .systemHistoryPhone {
          padding: 0 3px;
          display: block;
          li {
            margin-bottom: 60px;
            .systemHistoryImg {
              width: 100%;
              text-align: center;
              margin-bottom: 15px;
              img {
                width: 93%;
                height: auto;
              }
            }
            .historyYear {
              text-align: left;
              color: rgba(63, 32, 22, 1);
              font-size: 20px;
              font-weight: bold;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 10px;
              .line {
                flex: 1;
                height: 1px;
                background-color: rgba(100, 100, 100, 1);
                display: inline-block;
                margin-left: 36px;
              }
            }
            .historyDesc {
              text-align: left;
              color: rgba(100, 100, 100, 1);
              font-size: 15px;
              line-height: 1.7;
            }
          }
        }
      }
    }
    .fruitApplication {
      width: 100%;
      margin-bottom: 60px;
      .fruitApplicationBox {
        width: 100%;
        max-width: 95%;
        margin: 0 auto;
        .fruitApplicationTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 28px;
          letter-spacing: 6px;
          margin-bottom: 10px;
        }
        .fruitApplicationDesc {
          text-align: center;
          color: rgba(64, 33, 23, 1);
          font-size: 17px;
          margin-bottom: 50px;
        }
        .fruitApplicationImg {
          width: 100%;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
