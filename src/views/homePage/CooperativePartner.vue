<template>
  <div class="cooperativePartner">
    <div class="cooperativePartnerBG">
      <div class="cooperativePartnerBGBox">
        <div class="cooperativePartnerBGCover"></div>
      </div>
    </div>
    <div class="partner">
      <div class="partnerBox">
        <div class="partnerTitle">合作伙伴</div>
        <div class="partnerList">
          <ul>
            <li><img src="@/assets/partner/partner1.png" alt="" /></li>
            <li><img src="@/assets/partner/partner2.jpeg" alt="" /></li>
            <li><img src="@/assets/partner/partner3.jpeg" alt="" /></li>
            <li><img src="@/assets/partner/partner4.jpeg" alt="" /></li>
            <li><img src="@/assets/partner/partner5.png" alt="" /></li>
            <li><img src="@/assets/partner/partner6.png" alt="" /></li>
            <li><img src="@/assets/partner/partner7.png" alt="" /></li>
            <li><img src="@/assets/partner/partner8.png" alt="" /></li>
          </ul>
        </div>
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
.cooperativePartner {
  width: 100%;
  overflow: auto;
  padding-top: 76.8px;
  background-color: #fff;
  .cooperativePartnerBG {
    width: 100%;
    margin-bottom: 80px;
    .cooperativePartnerBGBox {
      width: 100%;
      .cooperativePartnerBGCover {
        height: 280px;
        width: 100%;
        background-image: url(../../assets/partner/partnerBg.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: inherit;
        background-size: cover;
        position: relative;
        margin-bottom: 90px;
      }
    }
  }
  .partner {
    width: 100%;
    margin-bottom: 80px;
    .partnerBox {
      width: 100%;
      // 公司简介标题
      .partnerTitle {
        text-align: center;
        color: rgba(0, 0, 0, 1);
        font-size: 40px;
        letter-spacing: 10px;
        margin-bottom: 60px;
      }
      .partnerList {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 25%;
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            img {
              width: 100%;
              vertical-align: bottom;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .cooperativePartner {
    padding-top: 73.6px;
    .cooperativePartnerBG {
      width: 100%;
      margin-bottom: 60px;
      .cooperativePartnerBGBox {
        width: 100%;
        .cooperativePartnerBGCover {
        }
      }
    }
    .partner {
      width: 100%;
      margin-bottom: 80px;
      .partnerBox {
        width: 100%;
        // 公司简介标题
        .partnerTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 40px;
          letter-spacing: 10px;
          margin-bottom: 60px;
        }
        .partnerList {
          width: 100%;
          max-width: 95%;
          margin: 0 auto;
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              width: 25%;
              padding: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              img {
                width: 100%;
                vertical-align: bottom;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .cooperativePartner {
    padding-top: 55px;
    .cooperativePartnerBG {
      width: 100%;
      margin-bottom: 60px;
      .cooperativePartnerBGBox {
        width: 100%;
        .cooperativePartnerBGCover {
          margin-bottom: 60px;
          height: 180px;
        }
      }
    }
    .partner {
      width: 100%;
      margin-bottom: 80px;
      .partnerBox {
        width: 100%;
        // 公司简介标题
        .partnerTitle {
          text-align: center;
          color: rgba(0, 0, 0, 1);
          font-size: 28px;
          letter-spacing: 6px;
          margin-bottom: 40px;
        }
        .partnerList {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              width: 50%;
              padding: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              img {
                width: 100%;
                vertical-align: bottom;
              }
            }
          }
        }
      }
    }
  }
}
</style>
