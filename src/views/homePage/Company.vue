<template>
  <div class="Company">
    <div class="CompanyBg">
      <div class="CompanyBgBox">
        <!-- 封面 -->
        <div class="CompanyBgCover"></div>
      </div>
    </div>
    <div class="introduction">
      <h4> {{ $t('homePage.Introduction.title0') }}</h4>
      <div class="lineLight"></div>
      <div class="introductionText">
        <p>
          {{ $t('homePage.Introduction.title') }}
        </p>
        <br />
        <p>
          {{ $t('homePage.Introduction.title2') }}
        </p>
      </div>
      <div class="right_side">
      <video src="@/assets/homePage/San_Clemente_sinaudiojunio2020.mp4" poster="@/assets/homePage/videoCover.jpg"
        controls></video>
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
.right_side{
  width: 100%;
  video{
    width: 100%;
    vertical-align: bottom;
  }
}
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
      font-family: 'CL';
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
        font-family: 'CL';
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
}</style>
