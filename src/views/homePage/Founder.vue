<template>
  <div class="founder">
    <br />
    <!-- 创始人介绍 -->
    <div class="founderIntroduction">
      <div class="founderIntroductionBox">
        <div class="founderIntroductionTitle">创始人介绍</div>
        <div class="lineLight"></div>
        <div class="founderContent">
          <div class="founderImg">
            <img src="@/assets/founder/founder.png" alt="" />
          </div>
          <div class="founderText">
            <h4>余惠勇</h4>
            <p>百果园创始人、董事长</p>
            <p>生于1968年 ，江西人，毕业于江西农业大学园艺系农业蔬菜专业。</p>
            <p>
              2001年于深圳创办百果园，现任深圳百果园实业（集团）股份有限公司董事长，三个零蔬菜公司董事长，中国果品流通协会副会长、中国优质农产品开发服务协会副会长、优质果品产业联合会发起人、优果联董事长
              。
            </p>
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
};
</script>

<style lang="less">
.founder {
  width: 100%;
  overflow: auto;
  padding-top: 92px;
  background-color: #fff;
  .founderIntroduction {
    width: 100%;
    margin-bottom: 80px;
    .founderIntroductionBox {
      width: 100%;
      .founderIntroductionTitle {
        text-align: center;
        color: rgba(52, 52, 52, 1);
        font-size: 36px;
        font-weight: bold;
      }
      .lineLight {
        width: 64px;
        height: 6px;
        background-color: #00852a;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 20px;
      }
      .founderContent {
        display: flex;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 40px;
        .founderImg {
          width: 50%;
          flex: 1;
          padding: 0 15px;
          //   overflow: hidden;
          img {
            border-radius: 5px;
            width: 95%;
            height: auto;
          }
        }
        .founderText {
          width: 50%;
          flex: 1;
          padding: 0 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          h4 {
            text-align: left;
            color: rgba(52, 52, 52, 1);
            font-size: 24px;
            font-weight: bold;
            line-height: 1.5;
            margin-bottom: 10px;
          }
          p {
            text-align: left;
            color: rgba(78, 74, 103, 1);
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .founder {
    width: 100%;
    overflow: auto;
    padding-top: 82px;
    background-color: #fff;
    .founderIntroduction {
      width: 100%;
      margin-bottom: 80px;
      .founderIntroductionBox {
        width: 100%;
        .founderIntroductionTitle {
          text-align: center;
          color: rgba(52, 52, 52, 1);
          font-size: 36px;
          font-weight: bold;
        }
        .lineLight {
          width: 64px;
          height: 6px;
          background-color: #00852a;
          margin: 0 auto;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .founderContent {
          display: flex;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 40px;
          .founderImg {
            width: 50%;
            flex: 1;
            padding: 0 15px;
            //   overflow: hidden;
            img {
              border-radius: 5px;
              width: 95%;
              height: auto;
            }
          }
          .founderText {
            width: 50%;
            flex: 1;
            padding: 0 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h4 {
              text-align: left;
              color: rgba(52, 52, 52, 1);
              font-size: 24px;
              font-weight: bold;
              line-height: 1.5;
              margin-bottom: 10px;
            }
            p {
              text-align: left;
              color: rgba(78, 74, 103, 1);
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .founder {
    width: 100%;
    overflow: auto;
    padding-top: 55px;
    background-color: #fff;
    .founderIntroduction {
      width: 100%;
      margin-bottom: 80px;
      .founderIntroductionBox {
        width: 100%;
        .founderIntroductionTitle {
          text-align: center;
          color: rgba(52, 52, 52, 1);
          font-size: 22px;
          font-weight: bold;
        }
        .lineLight {
          width: 64px;
          height: 4px;
          background-color: #00852a;
          margin: 0 auto;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .founderContent {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          margin-top: 40px;
          .founderImg {
            width: 100%;
            flex: 1;
            padding: 0 15px;
            //   overflow: hidden;
            margin-bottom: 15px;
            img {
              border-radius: 5px;
              width: 95%;
              height: auto;
            }
          }
          .founderText {
            width: 100%;
            flex: 1;
            padding: 0 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h4 {
              text-align: left;
              color: rgba(13, 9, 37, 1);
              font-size: 20px;
              font-weight: bold;
              line-height: 1.5;
              margin-bottom: 10px;
            }
            p {
              text-align: left;
              color: rgba(78, 74, 103, 1);
              font-size: 15px;
              line-height: 1.5;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }
}
</style>
