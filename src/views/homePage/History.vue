<template>
  <div class="history">
    <br />
    <!-- 发展历程 -->
    <div class="developmentCourse">
      <div class="developmentCourseBox">
        <div class="developmentCourseTitle">发展历程</div>
        <div class="lineLight"></div>
        <div class="developmentCourseCover"></div>
      </div>
    </div>
    <!-- 发展列表 -->
    <div class="companyHistory">
      <ul>
        <li v-for="(item, index) in historyList" :key="index">
          <div class="point">
            <!-- <img src="@/assets/history/point.svg" alt="" /> -->
          </div>
          <span class="year">{{ item.year }}</span>
          <ul class="historyDesc">
            <li v-for="(item2, index2) in item.desc" :key="index2">
              {{ item2 }}
            </li>
          </ul>
        </li>
      </ul>
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
      historyList: [
        {
          year: "2001年",
          desc: ["公司在深圳注册成立"],
        },
        {
          year: "2002年",
          desc: ["首家门店在中国深圳开业"],
        },
        {
          year: "2008年",
          desc: ["“网上百果园”上线，进一步拓展网络销售渠道"],
        },
        {
          year: "2009年",
          desc: ["正式推出“三无退货”服务标准"],
        },
        {
          year: "2013年",
          desc: ["率先于国内建立并推出以口感为导向的水果质量分类体系"],
        },
        {
          year: "2016年",
          desc: [
            "手机App百果园正式上线，开启全新水果电商业态",
            "百果园获得国家工商行政管理总局授予的中国驰名商标认证",
          ],
        },
        {
          year: "2017年",
          desc: [
            "线上采购交易平台上线，打造行业级供应商交易平台",
            "收购果多美商标，实现多渠道品牌运营",
          ],
        },
        {
          year: "2021年",
          desc: [
            "荣获农业农村部、国家发展和改革委员会、商务部、中国人民银行、国家税务总局、中国证监会及中华全国供销合作总社联合授予全国农业产业化龙头企业称号",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less">
.history {
  width: 100%;
  overflow: auto;
  padding-top: 92px;
  background-color: #fff;
  .developmentCourse {
    width: 100%;
    margin-bottom: 80px;
    .developmentCourseBox {
      width: 100%;
      .developmentCourseTitle {
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
      .developmentCourseCover {
        height: 540px;
        width: 100%;
        background-image: url(../../assets/history/cover.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: inherit;
        background-size: cover;
        position: relative;
        margin-bottom: 90px;
      }
    }
  }
  .companyHistory {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    ul {
      & > li {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        margin-bottom: 45px;
        flex-wrap: wrap;
        &:hover {
          .historyDesc {
            color: rgba(0, 133, 42, 1);
          }
          .point {
            background-color: rgba(0, 133, 42, 0.1);
            &::before {
              background-color: rgba(0, 133, 42, 0.5);
            }
          }
        }
        .point {
          width: 45px;
          height: 45px;
          margin-right: 45px;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          position: relative;
          transition: all 0.3s;
          &::before {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.3);
            content: "";
          }
          img {
            width: 100%;
            height: auto;
          }
        }
        .year {
          text-align: left;
          color: rgba(0, 133, 42, 1);
          font-size: 34px;
          min-width: 175px;
          margin-right: 30px;
        }
        .historyDesc {
          font-size: 22px;
          flex: 1;
          padding-top: 8px;
          color: rgba(0, 0, 0, 0.9);
          transition: all 0.3s;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .history {
    padding-top: 82px;
    .developmentCourse {
      margin-bottom: 60px;
      .developmentCourseBox {
        .developmentCourseCover {
          margin-bottom: 60px;
        }
      }
    }
    .companyHistory {
      max-width: 95%;
      width: 100%;
      ul {
        & > li {
          .point {
            img {
            }
          }
          .year {
            color: rgba(0, 133, 42, 1);
            font-size: 28px;
            font-weight: bold;
          }
          .historyDesc {
            font-size: 18px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .history {
    padding-top: 55px;
    .developmentCourse {
      margin-bottom: 60px;
      .developmentCourseBox {
        .developmentCourseTitle {
          font-size: 28px;
        }
        .lineLight {
          height: 4px;
        }
        .developmentCourseCover {
          margin-bottom: 60px;
          height: 360px;
        }
      }
    }
    .companyHistory {
      max-width: 100%;
      width: 100%;
      padding: 0 20px;
      margin-bottom: 60px;
      ul {
        & > li {
          flex-direction: column;
          margin-bottom: 30px;
          .point {
            margin-bottom: 5px;
            img {
            }
          }
          .year {
            color: rgba(0, 133, 42, 1);
            font-size: 26px;
            font-weight: normal;
            padding-left: 5px;
            margin-bottom: 15px;
          }
          .historyDesc {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
