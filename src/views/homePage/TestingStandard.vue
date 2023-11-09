<template>
  <!-- 检测标准 -->
  <div class="TestingStandard">
    <!-- <br /> -->
    <div class="standard">
      <div class="standardBox">
        <!-- <div class="standardTitle">盛克盟服务</div> -->
        <!-- <div class="lineLight"></div> -->
        <!-- 封面 -->
        <div class="standardCover">
          <!-- 文字说明 -->
          <div class="standardContent">
            <h5 style="font-family: 'CL';font-size: 40px;text-align: center;line-height: 65px;">{{ $t('homePage.testingStandard.title') }}</h5>
            <h1 style="font-family: 'CL';font-size: 66px;text-align: center; font-weight: 700;"> {{ $t('homePage.testingStandard.title1') }}</h1>
          </div>
        </div>
        <!-- <div class="standardCover standardCover2"></div> -->
      </div>
    </div>
     <!-- 企业优势 -->
     <div class="companyAdvantage">
      <div class="companyAdvantageBox">
        <div class="companyAdvantageTitle">{{ $t('homePage.testingStandard.title3') }}</div>
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
        <swiper :options="swiperOptionAdvantage" ref="mySwiper" class="swiperAdvantage">
          <swiper-slide class="AdvantageSlide" v-for="item in companyAdvantageData" :key="item.title">
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


    <div class="service">
      <div class="serviceBox">
        <div class="serviceTitle">{{ $t('homePage.testingStandard.title2') }}</div>
        <div class="lineLight"></div>
        <div class="serviceContent">
          <ul>
            <li>
              <img src="@/assets/standard/s-0.jpg" alt="" />
              <div class="serviceText">
                <h4>{{ $t('homePage.testingStandard.adv0') }}</h4>
                <p>
                  {{ $t('homePage.testingStandard.adv0_1') }}
                </p>
              </div>
            </li>
            <li>
              <img src="@/assets/standard/s-1.jpg" alt="" />
              <div class="serviceText">
                <h4>{{ $t('homePage.testingStandard.adv1') }}</h4>
                <p>
                  {{ $t('homePage.testingStandard.adv1_1') }}
                </p>
              </div>
            </li>
            <li>
              <img src="@/assets/standard/s-2.jpg" alt="" />
              <div class="serviceText">
                <h4>{{ $t('homePage.testingStandard.adv2') }}</h4>
                <p>
                  {{ $t('homePage.testingStandard.adv2_1') }}
                </p>
              </div>
            </li>
            <li>
              <img src="@/assets/standard/s-3.jpg" alt="" />
              <div class="serviceText">
                <h4>{{ $t('homePage.testingStandard.adv3') }}</h4>
                <p>
                  {{ $t('homePage.testingStandard.adv3_1') }}
                </p>
              </div>
            </li>
            <li>
              <img src="@/assets/standard/s-4.jpg" alt="" />
              <div class="serviceText">
                <h4>{{ $t('homePage.testingStandard.adv4') }}</h4>
                <p>
                  {{ $t('homePage.testingStandard.adv4_1') }}
                </p>
              </div>
            </li>
            <li>
              <img src="@/assets/standard/s-5.jpg" alt="" />
              <div class="serviceText">
                <h4>{{ $t('homePage.testingStandard.adv5') }}</h4>
                <p>
                  {{ $t('homePage.testingStandard.adv5_1') }}
                </p>
              </div>
            </li>
            <li>
              <img src="@/assets/standard/serve7.png" alt="" />
              <div class="serviceText">
                <h4>{{ $t('homePage.testingStandard.adv6') }}</h4>
                <p>
                  {{ $t('homePage.testingStandard.adv6_1') }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
    <!-- <div class="companyStandard">
      <div class="companyStandardBox">
        <div class="companyStandardTitle">盛克盟检测标准</div>
        <div class="lineLight"></div>
        <div class="companyStandardContent">
          <ul>
            <li>
              <div class="pacing">1</div>
              <span>严格执行国家食品安全检测标准</span>
            </li>
            <li>
              <div class="pacing">2</div>
              <span>执行盛克盟质量内控标准，实施四重果品检测流程</span>
            </li>
            <li>
              <div class="pacing">3</div>
              <span>盛克盟自建三大食品安全检测中心</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="standardDetail">
      <div class="standardDetailBox">
        <div class="standardDetailTitle">盛克盟标准详解</div>
        <div class="lineLight"></div>
        <div class="standardDetailContent">
          <div class="content_left">
            <div class="content_left_title">【配备高精度检测设备】</div>
            <div class="lineLight2"></div>
            <div class="content_left_desc">
              百果园自建的食品安全检测中心的核心设备均为美国安捷伦提供的最新型号尖端设备；这类设备可完全满足我国政府颁布的最新国标、行标；同时也可按照美国、日本、欧盟的国际性标准，检测食品中相关受控物质。
            </div>
          </div>
          <div class="content_right">
            <ul>
              <li>
                <div class="list_left">
                  <dl>
                    <dt>气相色谱-三重串联四极杆质谱联用仪</dt>
                    <dd>
                      <span>●</span>
                      能够高效精准的对数百种农药痕量残留进行定性定量分析；
                    </dd>
                    <dd>
                      <span>●</span> 定量分析能力可低至ppb(十亿分之一)级别。
                    </dd>
                  </dl>
                </div>
                <div class="list_right">
                  <img src="@/assets/standard/detail.png" alt="" />
                </div>
              </li>
              <li>
                <div class="list_left">
                  <dl>
                    <dt>气相色谱-三重串联四极杆质谱联用仪</dt>
                    <dd>
                      <span>●</span>
                      与气相色谱-三重串联四极杆质谱联用仪一起，可实现对市面上所有农药残留的全检测能力；
                    </dd>
                    <dd>
                      <span>●</span>
                      同时对膨大剂等多种公司禁用物质进行准确检测；
                    </dd>
                    <dd>
                      <span>●</span>
                      定量分析能力可低至ppb（十亿分之一）级别。
                    </dd>
                  </dl>
                </div>
                <div class="list_right">
                  <img src="@/assets/standard/detail.png" alt="" />
                </div>
              </li>
              <li>
                <div class="list_left">
                  <dl>
                    <dt>超高效液相色谱</dt>
                    <dd>
                      <span>●</span>
                      能够对果品进行单糖、维生素、花青素等项目检测，用来评定确认好吃果品富含的营养物质。
                    </dd>
                    <dd><span>●</span> 能够对食品添加剂等进行精准检测分析。</dd>
                  </dl>
                </div>
                <div class="list_right">
                  <img src="@/assets/standard/detail.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 采后研发中心 -->
    <!-- <div class="developmentCenter">
      <div class="developmentCenterBox">
        <div class="developmentCenterTilte">采后研发中心</div>
        <div class="lineLight"></div>
        <div class="developmentCenterImageText">
          <div class="developmentCenterText">
            <p>
              百果园采后研发中心成立于2010年，至今已经有10年之久，团队由首席顾问专家研究员、硕士、学士组成，采后研发中心下设生理实验室和食品安全检测中心，根据百果园质量内控标准对百果园蔬果进行严格的食品安全检测，检测报告具有可追溯性。食品安全检测中心的技术支持来自于国家级实验室——中华供销总社济南果品研究院的技术团队。
            </p>
            <p>
              具有严格的果品质量内控管理体系，自建食品安全检测中心三个(深圳、郑州、上海），建设深圳食品安全检测中心、郑州食品安全检测中心及上海食品安全检测中心，分别守护华南大区、华中大区和华东大区的食品安全，旨在及时、高效、精准的守护食品安全。
            </p>
          </div>
          <div class="developmentCenterImage">
            <img src="@/assets/standard/developmentCenter.png" alt="" />
          </div>
        </div>
        <div class="developmentCenterTilte">基地与仓配</div>
        <div class="lineLight"></div>
        <div class="developmentCenterImageText">
          <div class="developmentCenterText">
            <p>
              从种植端开始管控果品品质，28个配送仓库，均采用多温区储藏，仓库验收，发货均有严格的品控体系，门店配送采用无打扰信任交接，门店晚上下单，第二天早上开门就有货，确保门店库存优，鲜度好！
            </p>
            <img src="@/assets/standard/developmentCenter3.png" alt="" />
          </div>
          <div class="developmentCenterImage">
            <img src="@/assets/standard/developmentCenter2.png" alt="" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- 品控分级 -->
    <!-- <div class="qualityControl">
      <div class="qualityControlBox">
        <div class="qualityControlTitle">品控分级</div>
        <div class="lineLight"></div>
        <div class="qualityControlContent">
          <div class="qualityControlContentBox">
            <div class="qualityControlContentBG"></div>
            <ul>
              <li>
                <img
                  src="@/assets/standard/qualityControlContent1.png"
                  alt=""
                />
                <span>商品到货</span>
                <span>（鲜度、成熟度初步检测）</span>
              </li>
              <li>
                <img
                  src="@/assets/standard/qualityControlContent1.png"
                  alt=""
                />
                <span>商品到货</span>
                <span>（鲜度、成熟度初步检测）</span>
              </li>
              <li>
                <img
                  src="@/assets/standard/qualityControlContent1.png"
                  alt=""
                />
                <span>商品到货</span>
                <span>（鲜度、成熟度初步检测）</span>
              </li>
              <li>
                <img
                  src="@/assets/standard/qualityControlContent1.png"
                  alt=""
                />
                <span>商品到货</span>
                <span>（鲜度、成熟度初步检测）</span>
              </li>
              <li>
                <img
                  src="@/assets/standard/qualityControlContent1.png"
                  alt=""
                />
                <span>商品到货</span>
                <span>（鲜度、成熟度初步检测）</span>
              </li>
              <li>
                <img
                  src="@/assets/standard/qualityControlContent1.png"
                  alt=""
                />
                <span>商品到货</span>
                <span>（鲜度、成熟度初步检测）</span>
              </li>
              <li>
                <img
                  src="@/assets/standard/qualityControlContent1.png"
                  alt=""
                />
                <span>商品到货</span>
                <span>（鲜度、成熟度初步检测）</span>
              </li>
              <li>
                <img
                  src="@/assets/standard/qualityControlContent1.png"
                  alt=""
                />
                <span>商品到货</span>
                <span>（鲜度、成熟度初步检测）</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 温控体系 -->
    <!-- <div class="temperatureControl">
      <div class="temperatureControlBox">
        <div class="temperatureControlTitle">
          温控体系
        </div>
        <div class="temperatureControlDesc">
          【6大温控体系，满足不同果品仓储需求】
        </div>
        <div class="temperatureControlContent">
          <div class="temperatureControl_left">
            <p>
              前期通过大量实验，建立了6个不同的温控保鲜区，满足不同果品仓储要求，实现从采购-仓储-配送的全供应链一体化管理，部分有要求的果品运输采用保温箱冰板加冰板，全程保鲜配送。
            </p>
          </div>
          <div class="temperatureControl_right">
            <ul>
              <li>冷库</li>
              <li>-18°C</li>
              <li>冷库</li>
              <li>-18°C</li>
              <li>冷库</li>
              <li>-18°C</li>
              <li>冷库</li>
              <li>-18°C</li>
              <li>冷库</li>
              <li>-18°C</li>
              <li>冷库</li>
              <li>-18°C</li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
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
      language: localStorage.getItem("lang") || "en",
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
    };
  },
  watch:{

  },
  computed:{
    companyAdvantageData(){
      if (this.$i18n.locale === 'en') {
        return [
          {
            title: "Global base",
            desc: "Ensure fruit quality and safety from the source",
            img: [
              require("@/assets/homePage/world_color.png"),
              require("@/assets/homePage/world_nocolor.png"),
            ],
          },
          {
            title: "Scientific picking",
            desc: "Maturity management, timely harvest to ensure the best taste and flavor of fruit",
            img: [
              require("@/assets/homePage/basket_color.png"),
              require("@/assets/homePage/basket_nocolor.png"),
            ],
          },
          {
            title: "Cold chain",
            desc:
              "From origin to distribution to store sales cold chain control, comprehensive freshness management to ensure fresh fruit, delicious",
            img: [
              require("@/assets/homePage/cold_color.png"),
              require("@/assets/homePage/cold_nocolor.png"),
            ],
          },
          {
            title: "Strict standard",
            desc: "Strictly implement the five operating standards system to ensureImplementation of fruit grading standards",
            img: [
              require("@/assets/homePage/standard_color.png"),
              require("@/assets/homePage/standard_nocolor.png"),
            ],
          },
        ]
      } else {
        return [
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
        ]
      }
      
    },
  },
  updated(){
   
   
  }
};
</script>

<style lang="less">
.TestingStandard {
  width: 100%;
  overflow: auto;
  padding-top: 76.8px;
  background-color: #fff;

  .standard {
    width: 100%;
    // margin-bottom: 80px;

    .standardBox {
      width: 100%;

      .standardTitle {
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

      .standardCover {
        height: 540px;
        width: 100%;
        background-image: url(../../assets/standard/standardBg.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: inherit;
        background-size: cover;
        position: relative;
        // margin-bottom: 90px;

        .standardContent {
          text-align: left;
          color: #138719de;
          font-size: 85px;
          font-weight: 700;
          line-height: 1;
          width: 100%;
          position: absolute;
          // left: 8.33%;
          
          top: 50%;
          transform: translateY(-75%);
          padding: 0 15px;

          p {
            margin: 16px;

            &:last-child {
              text-indent: 1em;
            }
          }
        }
      }

      .standardCover2 {
        background-image: url(../../assets/standard/standardCover.svg);
      }
    }
  }

  .service {
    width: 100%;
    margin-bottom: 80px;

    .serviceBox {
      width: 100%;

      .serviceTitle {
        text-align: center;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        font-weight: 700;
        margin-top: 50px;
        font-family: 'CL'
      }

      .lineLight {
        width: 64px;
        height: 8px;
        background-color: #00852a;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 20px;
      }

      .serviceContent {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        // background-color: #f7f7f7;
        margin-top: 55px;

        ul {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          li {
            // flex: 1;
            width: calc(33.3% - 60px);
            background-color: #f7f7f7;
            margin: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: center;
            // border-right: 1px solid rgba(230, 230, 230, 1);
            position: relative;
            padding: 40px 20px 20px;
            margin-bottom: 60px;

            img {
              // position: absolute;
              // top: -110px;
              // z-index: 1;
              // right: 5px;
            }

            .serviceText {

              // min-height: 180px;
              h4 {
                margin-bottom: 10px;
                font-weight: bolder;
                color: black;
                font-size: 16px;
                font-family: 'CL';
                margin-top: 10px;
              }

              p {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }

  .companyStandard {
    width: 100%;
    margin-bottom: 80px;

    .companyStandardBox {
      width: 100%;

      .companyStandardTitle {
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

      .companyStandardContent {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        background-color: #f7f7f7;
        margin-top: 55px;

        ul {
          display: flex;

          li {
            flex: 1;
            background-color: #f7f7f7;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: center;
            border-right: 1px solid rgba(230, 230, 230, 1);

            &:last-child {
              border-right: none;
            }

            .pacing {
              width: 37px;
              height: 37px;
              background-color: #00852a;
              color: #fff;
              border-radius: 50%;
              font-size: 22px;
              font-weight: 700;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 30px;
            }

            span {
              color: rgba(63, 32, 22, 1);
              font-size: 20px;
              line-height: 1.5;
              text-align: inherit;
            }
          }
        }
      }
    }
  }

  .standardDetail {
    width: 100%;
    margin-bottom: 80px;

    .standardDetailBox {
      background-color: #f7f7f7;
      padding-top: 60px;

      .standardDetailTitle {
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
        margin-bottom: 30px;
      }

      .standardDetailContent {
        max-width: 1200px;
        width: 100%;
        display: flex;
        margin: 0 auto;
        align-items: center;
        padding-bottom: 90px;

        .content_left {
          width: 50%;
          //   flex: 1;
          padding: 0 17px;

          .content_left_title {
            color: #000;
            text-align: left;
            font-size: 26px;
          }

          .lineLight2 {
            width: 64px;
            height: 2px;
            background-color: #00852a;
            margin-top: 30px;
            margin-bottom: 30px;
          }

          .content_left_desc {
            text-align: left;
            color: rgba(63, 32, 22, 1);

            font-size: 16px;
            line-height: 1.8;
          }
        }

        .content_right {
          width: 50%;
          padding: 0 17px;

          ul {
            li {
              background-color: #fff;
              margin-bottom: 14px;
              padding: 15px;
              display: flex;
              border-radius: 5px;

              .list_left {
                width: 60%;
                padding-right: 15px;

                dl {
                  dt {
                    text-align: left;
                    color: rgba(0, 149, 64, 1);
                    font-size: 18px;
                    padding: 5px 0;
                  }

                  dd {
                    text-align: left;
                    color: rgba(63, 32, 22, 1);
                    font-size: 14px;
                    margin: 8px 0;

                    span {
                      color: #ff9fa9;
                    }
                  }
                }
              }

              .list_right {
                width: 40%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
      }
    }
  }

  .developmentCenter {
    width: 100%;
    margin-bottom: 80px;

    .developmentCenterBox {
      padding-top: 60px;

      .developmentCenterTilte {
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
        margin-bottom: 40px;
      }

      .developmentCenterImageText {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        margin-bottom: 120px;

        .developmentCenterText {
          width: 50%;
          padding: 0 32px;
          text-align: center;

          p {
            text-align: left;
            color: rgba(63, 32, 22, 1);
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 15px;
          }

          img {
            width: 50%;
            height: auto;
          }
        }

        .developmentCenterImage {
          width: 50%;
          padding: 0 32px;

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  .qualityControl {
    width: 100%;
    margin-bottom: 80px;

    .qualityControlBox {
      width: 100%;

      .qualityControlTitle {
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
        margin-bottom: 40px;
      }

      .qualityControlContent {
        background-color: rgba(251, 251, 251, 1);
        padding: 0 15px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;

        .qualityControlContentBox {
          padding: 60px;

          ul {
            display: flex;
            flex-wrap: wrap;
            z-index: 1;
            position: relative;

            li {
              width: 25%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 10px;

              img {
                width: 77%;
                height: auto;
              }

              span {
                padding: 5px 0;
                color: rgba(63, 32, 22, 1);
                font-size: 16px;

                &:last-child {
                  font-size: 14px;
                }
              }
            }
          }

          .qualityControlContentBG {
            width: 100%;
            height: 100%;
            position: absolute;
            background-image: url("../../assets/standard/qualityControlContentBG.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: inherit;
            background-size: cover;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }

  .temperatureControl {
    width: 100%;
    margin-bottom: 80px;

    .temperatureControlBox {
      width: 100%;

      .temperatureControlTitle {
        text-align: center;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        letter-spacing: 10px;
      }

      .temperatureControlDesc {
        text-align: center;
        color: rgba(64, 33, 23, 1);
        font-size: 22px;
        padding: 5px 0;
        margin-bottom: 60px;
      }

      .temperatureControlContent {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;

        .temperatureControl_left {
          width: 50%;
          padding: 0 15px;

          p {
            text-align: left;
            color: rgba(63, 32, 22, 1);
            font-size: 16px;
            line-height: 1.8;
          }
        }

        .temperatureControl_right {
          width: 50%;
          padding: 0 15px;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              background-color: rgba(234, 246, 252, 1);
              width: calc(25% - 6px);
              text-align: center;
              padding: 20px;
              color: #333;
              font-size: 18px;
              line-height: 1.5;
              margin: 3px;
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
        font-weight: 700;
        font-family: 'CL';
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
              font-family: "CL";
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
}

@media (max-width: 1200px) {
  .TestingStandard {
    padding-top: 73.6px;

    .standard {
      margin-bottom: 60px;

      .standardBox {
        .standardCover {
          margin-bottom: 60px;

          .standardContent {
            font-size: 66px;
          }
        }
      }
    }

    .service {
      margin-bottom: 60px;

      .serviceBox {
        .serviceContent {
          width: 100%;
          max-width: 95%;

          ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            li {
              // flex: 1;
              width: calc(50% - 60px);
              background-color: #f7f7f7;
              margin: 30px;
              display: flex;
              flex-direction: column;
              align-items: center;
              // justify-content: center;
              // border-right: 1px solid rgba(230, 230, 230, 1);
              position: relative;
              padding: 90px 20px 20px;
              margin-bottom: 60px;

              img {
                position: absolute;
                top: -110px;
                z-index: 1;
                right: 5px;
              }

              .serviceText {

                // min-height: 180px;
                h4 {
                  margin-bottom: 10px;
                  font-weight: bolder;
                  color: black;
                  font-size: 16px;
                  font-family: 'CL';
                }

                p {
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }

    .companyStandard {
      margin-bottom: 60px;

      .companyStandardBox {
        .companyStandardContent {
          width: 100%;
          max-width: 95%;
        }
      }
    }

    .standardDetail {
      margin-bottom: 60px;

      .standardDetailBox {
        .standardDetailContent {
          max-width: 95%;
          width: 100%;
        }
      }
    }

    .developmentCenter {
      width: 100%;
      margin-bottom: 60px;

      .developmentCenterBox {
        .developmentCenterImageText {
          width: 100%;
          max-width: 95%;
        }
      }
    }

    .qualityControl {
      width: 100%;
      margin-bottom: 60px;

      .qualityControlBox {
        width: 100%;

        .qualityControlContent {
          width: 100%;
          max-width: 95%;
        }
      }
    }

    .temperatureControl {
      width: 100%;
      margin-bottom: 60px;

      .temperatureControlBox {
        width: 100%;

        .temperatureControlTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 40px;
          letter-spacing: 10px;
        }

        .temperatureControlDesc {
          text-align: center;
          color: rgba(64, 33, 23, 1);
          font-size: 22px;
          padding: 5px 0;
          margin-bottom: 60px;
        }

        .temperatureControlContent {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 95%;
          margin: 0 auto;

          .temperatureControl_left {
            width: 50%;
            padding: 0 15px;

            p {
              text-align: left;
              color: rgba(63, 32, 22, 1);
              font-size: 16px;
              line-height: 1.8;
            }
          }

          .temperatureControl_right {
            width: 50%;
            padding: 0 15px;

            ul {
              display: flex;
              flex-wrap: wrap;

              li {
                background-color: rgba(234, 246, 252, 1);
                width: calc(25% - 6px);
                text-align: center;
                padding: 20px;
                color: #333;
                font-size: 18px;
                line-height: 1.5;
                margin: 3px;
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
              .cardTitle {}

              .cardDesc {}

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
  }
}

@media (max-width: 768px) {
  .TestingStandard {
    padding-top: 55px;

    .standard {
      .standardBox {
        .standardTitle {
          font-size: 28px;
        }

        .lineLight {
          height: 4px;
        }

        .standardCover {
          margin-bottom: 60px;
          height: 360px;

          .standardContent {
            font-size: 36px;
            font-weight: normal;
            left: 0%;
            padding: 0;
          }
        }
      }
    }

    .service {
      .serviceBox {
        padding: 0 20px;

        .serviceTitle {
          font-size: 28px;
        }

        .lineLight {
          height: 4px;
        }

        .serviceContent {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0px;
          // background-color: #f7f7f7;
          margin-top: 40px;

          ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 90px;

            li {
              // flex: 1;
              width: 100%;
              background-color: #f7f7f7;
              margin: 0px;
              display: flex;
              flex-direction: column;
              align-items: center;
              // justify-content: center;
              // border-right: 1px solid rgba(230, 230, 230, 1);
              position: relative;
              padding: 0px;
              margin-bottom: 110px;

              img {
                position: absolute;
                top: -110px;
                z-index: 1;
                right: 5px;
              }

              .serviceText {
                // min-height: 180px;
                padding: 90px 20px 20px;

                h4 {
                  margin-bottom: 10px;
                  font-weight: bolder;
                  color: black;
                  font-size: 16px;
                  font-family: "CL";
                 
                }

                p {
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }

    .companyStandard {
      .companyStandardBox {
        padding: 0 20px;

        .companyStandardTitle {
          font-size: 28px;
        }

        .lineLight {
          height: 4px;
        }

        .companyStandardContent {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 20px;
          background-color: #f7f7f7;
          margin-top: 40px;

          ul {
            display: flex;
            flex-direction: column;

            li {
              flex: 1;
              background-color: #f7f7f7;
              padding: 30px 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              // justify-content: center;
              border-right: none;
              border-bottom: 1px solid rgba(230, 230, 230, 1);

              &:last-child {
                border-right: none;
                border-bottom: none;
              }

              .pacing {
                width: 37px;
                height: 37px;
                background-color: #00852a;
                color: #fff;
                border-radius: 50%;
                font-size: 22px;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 30px;
              }

              span {
                color: rgba(63, 32, 22, 1);
                font-size: 16px;
                line-height: 1.5;
                text-align: inherit;
              }
            }
          }
        }
      }
    }

    .standardDetail {
      .standardDetailBox {
        .standardDetailTitle {
          font-size: 28px;
        }

        .lineLight {
          height: 4px;
        }

        .standardDetailContent {
          max-width: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 90px;

          .content_left {
            width: 100%;
            padding: 0 32px;
            margin-bottom: 40px;

            .content_left_title {
              font-size: 20px;
            }

            .lineLight2 {
              width: 64px;
              height: 2px;
              background-color: #00852a;
              margin-top: 30px;
              margin-bottom: 30px;
            }

            .content_left_desc {
              font-size: 14px;
            }
          }

          .content_right {
            width: 100%;
            padding: 0 17px;

            ul {
              li {
                background-color: #fff;
                margin-bottom: 14px;
                padding: 15px;
                display: flex;
                flex-direction: column;
                border-radius: 5px;

                .list_left {
                  width: 100%;
                  padding-right: 15px;

                  dl {
                    dt {
                      text-align: left;
                      color: rgba(0, 149, 64, 1);
                      font-size: 16px;
                      padding: 5px 0;
                    }

                    dd {
                      text-align: left;
                      color: rgba(63, 32, 22, 1);
                      font-size: 13px;
                      margin: 8px 0;

                      span {
                        color: #ff9fa9;
                      }
                    }
                  }
                }

                .list_right {
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: 10px;

                  img {
                    width: 100%;
                    height: auto;
                  }
                }
              }
            }
          }
        }
      }
    }

    .developmentCenter {
      .developmentCenterBox {
        .developmentCenterTilte {
          font-size: 28px;
        }

        .lineLight {
          height: 4px;
        }

        .developmentCenterImageText {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          margin-bottom: 120px;

          .developmentCenterText {
            width: 100%;
            padding: 0 20px;
            text-align: center;

            p {
              text-align: left;
              color: rgba(63, 32, 22, 1);
              font-size: 16px;
              line-height: 1.8;
              margin-bottom: 15px;
            }

            img {
              margin-top: 28px;
              width: 80%;
              height: auto;
            }
          }

          .developmentCenterImage {
            width: 100%;
            padding: 0 20px;
            margin-top: 46px;

            img {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }

    .qualityControl {
      .qualityControlBox {
        .qualityControlTitle {
          font-size: 28px;
        }

        .lineLight {
          height: 4px;
        }

        .qualityControlContent {
          background-color: rgba(251, 251, 251, 1);
          padding: 0 15px;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          position: relative;

          .qualityControlContentBox {
            padding: 0px;

            ul {
              display: flex;
              flex-wrap: wrap;
              z-index: 1;
              position: relative;

              li {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 3px;

                img {
                  width: 83%;
                  height: auto;
                }

                span {
                  padding: 5px 0;
                  color: rgba(63, 32, 22, 1);
                  font-size: 14px;

                  &:last-child {
                    font-size: 12px;
                  }
                }
              }
            }

            .qualityControlContentBG {
              display: none;
            }
          }
        }
      }
    }

    .temperatureControl {
      width: 100%;
      margin-bottom: 60px;

      .temperatureControlBox {
        width: 100%;

        .temperatureControlTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 28px;
          letter-spacing: 10px;
        }

        .temperatureControlDesc {
          text-align: center;
          color: rgba(64, 33, 23, 1);
          font-size: 18px;
          padding: 5px 0;
          margin-bottom: 32px;
        }

        .temperatureControlContent {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;

          .temperatureControl_left {
            width: 100%;
            padding: 0 15px;
            margin-bottom: 38px;

            p {
              text-align: left;
              color: rgba(103, 103, 103, 1);
              font-size: 14px;
              line-height: 1.8;
            }
          }

          .temperatureControl_right {
            width: 100%;
            padding: 0 15px;

            ul {
              display: flex;
              flex-wrap: wrap;

              li {
                background-color: rgba(234, 246, 252, 1);
                width: calc(50% - 6px);
                text-align: center;
                padding: 15px;
                color: #333;
                font-size: 16px;
                line-height: 1.5;
                margin: 3px;
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
  }
}</style>
