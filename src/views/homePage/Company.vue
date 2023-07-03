<template>
  <div class="Company">
    <div class="CompanyBg">
      <div class="CompanyBgBox">
        <!-- 封面 -->
        <div class="CompanyBgCover"></div>
      </div>
    </div>
    <div class="introduction">
      <h4>公司简介</h4>
      <div class="lineLight"></div>
      <div class="introductionText">
        <p>
          盛克盟（上海）成立于2007年，是由全球顶尖的苹果公司San
          Clemente和全球顶尖的莓类公司Hortifrut共同占股经营，目前在国内80%是批发渠道、20%是零售渠道。两家母公司都拥有不少知名品牌，如：龙头牌车厘子以及苹果、Berry
          Collection、Naturipe等。盛克盟（上海）在服务好B端批发商客户的同时，也在努力服务好C端超市等渠道的客户，争取把最新鲜的水果以最快的速度用最短的时间送到最终消费者的手上，让天下人享受新鲜美味的水果。
        </p>
        <br />
        <p>
          盛克盟在全球各地都有分公司，如：美国、加拿大、英国、墨西哥、智利（总部）、阿根廷、乌拉圭、秘鲁、罗马尼亚、中国上海、中国广州等。目前国内在上海以及深圳的加工分包中心也已经投入使用，将来也会在更多的省份开设加工分包中心，更好的服务客户！同时也有为水果商（国内国外公司皆可）设计包装方案然后送到超市或者一件代发（电商）等一系列服务。
        </p>
      </div>
    </div>
    <Footer></Footer>
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
.Company {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 73.6px;
  background-color: #fff;
  .CompanyBg {
    width: 100%;
    margin-bottom: 60px;
    .CompanyBgBox {
      width: 100%;
      .CompanyBgCover {
        height: 360px;
        width: 100%;
        background-image: url(../../assets/company/companyBg.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: inherit;
        background-size: cover;
        position: relative;
        margin-bottom: 60px;
      }
    }
  }
  .introduction {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 90px;
    h4 {
      text-align: center;
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
    .introductionText {
      p {
        text-align: left;
        color: rgba(103, 103, 103, 1);
        font-size: 20px;
        line-height: 1.8;
      }
    }
  }
}
@media (max-width: 1200px) {
  .Company {
    padding-top: 73.6px;
    .CompanyBg {
      margin-bottom: 60px;
      .CompanyBgBox {
        .CompanyBgCover {
          margin-bottom: 60px;
        }
      }
    }
    .introduction {
      width: 95%;
      h4 {
        font-size: 40px;
      }
    }
  }
}
@media (max-width: 768px) {
  .Company {
    padding-top: 55px;
    .CompanyBg {
      margin-bottom: 30px;
      .CompanyBgBox {
        .CompanyBgCover {
          margin-bottom: 30px;
          height: 280px;
        }
      }
    }
    .introduction {
      width: 100%;
      padding: 0 15px;
      h4 {
        font-size: 28px;
      }
      .lineLight {
        height: 4px;
      }
      .introductionText {
        p {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
