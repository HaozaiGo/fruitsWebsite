<template>
  <div class="concat">
    <div class="concatBG">
      <div class="concatBGBox">
        <div class="concatBGCover"></div>
      </div>
    </div>
    <div class="concat_container">
      <div class="concat_containerBox">
        <div class="concatList">
          <ul>
            <li>
              <div class="concatLiLeft">
                <h4>上海</h4>
                <span>Shanghai</span>
              </div>
              <div class="concatLiRight">
                <span>{{$t('homePage.contact.title')}} </span>
                <span>{{$t('homePage.contact.title1')}}：021-38473057</span>
              </div>
            </li>
            <!-- <li>
              <div class="concatLiLeft">
                <h4>上海</h4>
                <span>Shanghai</span>
              </div>
              <div class="concatLiRight">
                <span>静安区西康路225号3栋509室</span>
                <span>电话：021-6266-1830</span>
              </div>
            </li>
            <li>
              <div class="concatLiLeft">
                <h4>上海</h4>
                <span>Shanghai</span>
              </div>
              <div class="concatLiRight">
                <span>静安区西康路225号3栋509室</span>
                <span>电话：021-6266-1830</span>
              </div>
            </li> -->
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
.concat {
  width: 100%;
  padding-top: 76.8px;
  background-color: #f3f3f3;
  .concatBG {
    width: 100%;
    margin-bottom: 80px;
    .concatBGBox {
      width: 100%;
      .concatBGCover {
        height: 540px;
        width: 100%;
        background-image: url(../../assets/homePage/companyProfileCover.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: inherit;
        background-size: cover;
        position: relative;
        margin-bottom: 90px;
      }
    }
  }
  .concat_container {
    width: 100%;
    background-color: #f3f3f3;
    margin-bottom: 100px;
    .concat_containerBox {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          display: flex;
          width: 100%;
          border-bottom: 1px solid #fff;
          padding: 30px 0;
          &:hover {
            .concatLiLeft {
              h4 {
                color: #f77e34;
              }
              span {
                color: #f77e34;
              }
            }
            .concatLiRight {
              padding-left: 60px;
              &::after {
                transform: scaleX(1);
              }
              span {
                color: #f77e34;
              }
            }
          }
          .concatLiLeft {
            width: 30%;
            margin-right: 66px;

            h4 {
              transition: all 0.5s;
              color: #343434;
              font-weight: normal;
              font-size: 40px;
              text-align: right;
              line-height: 1;
            }
            span {
              transition: all 0.5s;
              display: block;
              font-size: 15px;
              line-height: 1;
              text-transform: capitalize;
              margin-top: 1rem;
              text-align: right;
              font-weight: 400;
            }
          }
          .concatLiRight {
            display: flex;
            flex-direction: column;
            width: 70%;
            padding-left: 0px;
            position: relative;
            transition: all 0.5s;

            &::after {
              transition: all 0.5s;
              transform-origin: left top;
              content: "";
              width: 50px;
              height: 2px;
              background-color: #f77e34;
              position: absolute;
              left: 0;
              top: 20px;
              transform: scaleX(0);
            }
            span {
              transition: all 0.5s;
              font-size: 20px;
              font-weight: 400;
              color: #343434;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .concat {
    padding-top: 73.6px;
    .concatBG {
      width: 100%;
      margin-bottom: 60px;
      .concatBGBox {
        width: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .concat {
    padding-top: 55px;
    .concatBG {
      width: 100%;
      margin-bottom: 60px;
      .concatBGBox {
        width: 100%;
        .concatBGCover {
          margin-bottom: 60px;
          height: 360px;
        }
      }
    }
    .concat_container {
      width: 100%;
      background-color: #f3f3f3;
      margin-bottom: 100px;
      padding: 0 15px;
      .concat_containerBox {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          li {
            display: flex;
            flex-direction: column;
            width: 100%;
            border-bottom: 1px solid #fff;
            padding: 30px 0;
            &:hover {
              .concatLiLeft {
                h4 {
                  color: #f77e34;
                }
                span {
                  color: #f77e34;
                }
              }
              .concatLiRight {
                padding-left: 60px;
                &::after {
                  transform: scaleX(1);
                }
                span {
                  color: #f77e34;
                }
              }
            }
            .concatLiLeft {
              width: 100%;
              margin-right: 66px;

              h4 {
                transition: all 0.5s;
                color: #343434;
                font-weight: normal;
                font-size: 30px;
                text-align: center;
                line-height: 1;
              }
              span {
                transition: all 0.5s;
                display: block;
                font-size: 15px;
                line-height: 1;
                text-transform: capitalize;
                margin-top: 10px;
                margin-bottom: 20px;
                text-align: center;
                font-weight: 400;
              }
            }
            .concatLiRight {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 100%;
              padding-left: 0px;
              position: relative;
              transition: all 0.5s;

              &::after {
                transition: all 0.5s;
                transform-origin: left top;
                content: "";
                width: 50px;
                height: 2px;
                background-color: #f77e34;
                position: absolute;
                left: 0;
                top: 20px;
                transform: scaleX(0);
              }
              span {
                transition: all 0.5s;
                font-size: 16px;
                font-weight: 400;
                color: #343434;
                line-height: 1.5;
              }
            }
          }
        }
      }
    }
  }
}
</style>
