<template>
  <div class="copyright_container">
    <div class="footer">
      <div class="logoPhone">
        <img src="@/assets/copyRight/logo.png" alt="" />
      </div>
      <div class="footerBox">
        <div class="footerList">
          <div class="footer_left">
            <ul class="linkList">
              <li>{{$t('homePage.footer.row0')}}</li>
              <li>{{$t('homePage.footer.row0_1')}}</li>
              <li>{{$t('homePage.footer.row0_2')}}</li>
              <li>{{$t('homePage.footer.row0_3')}}</li>
              <li>{{$t('homePage.footer.row0_4')}}</li>
              <li>{{$t('homePage.footer.row0_5')}}</li>
              <li>{{$t('homePage.footer.row0_6')}}</li>
            </ul>
            <ul class="qrCodeList" style="display:none">
              <li>
                <img src="@/assets/copyRight/qrcode.svg" alt="" />
              </li>
              <li>
                <img src="@/assets/copyRight/qrcode.svg" alt="" />
              </li>
              <li>
                <img src="@/assets/copyRight/qrcode.svg" alt="" />
              </li>
            </ul>
            <ul class="companyMsg">
              <li>
                {{$t('homePage.footer.row1')}}： {{$t('homePage.footer.row1_1')}}
              </li>
              <li>{{$t('homePage.footer.row2')}}：021-38473057</li>
              <li>{{$t('homePage.footer.row2_1')}}：{{$t('homePage.footer.row2_2')}} 13817003472</li>
              <li>
                <a href="https://beian.miit.gov.cn/" target="_blank"
                  >沪ICP备19041670号-2</a
                >
              </li>
            </ul>
          </div>
          <div class="footer_right" style="display:none">
            <ul class="qrCodeList">
              <li>
                <img src="@/assets/copyRight/qrcode.svg" alt="" />
              </li>
              <li>
                <img src="@/assets/copyRight/qrcode.svg" alt="" />
              </li>
              <li>
                <img src="@/assets/copyRight/qrcode.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyRight">
        <div class="copyRight_left">
          <span>Copyright © SVA 2022-2023 All rights reserved.</span>
          <a href="#">
            <img src="@/assets/copyRight/police.png" alt="" />
            <span>粤公网安备 44030702003133号 </span>
          </a>
          <span>技术支持：盛克盟</span>
        </div>
        <div class="copyRight_right">
          <div class="logo">
            <img src="@/assets/copyRight/logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="copyright"> -->
    <!-- <p>© 2023 盛克盟&nbsp;</p> -->
    <!-- <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备19041670号</a> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.copyright_container {
  width: 100%;
  max-height: 100%;
  .footer {
    padding: 60px 0;
    width: 100%;
    max-height: 100%;
    background-color: rgba(20, 56, 46, 1);
    .logoPhone {
      display: none;
    }
    .footerBox {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .footerList {
        display: flex;
        .footer_left {
          width: 90%;
          padding: 0 15px;
          .linkList {
            display: flex;
            flex-wrap: wrap;
            li {
              color: rgba(255, 255, 255, 1);
              font-size: 16px;
              line-height: 1.5;
              text-align: inherit;
              font-size: 14px;
              padding: 10px 10px;
              min-width: 77.5px;
              cursor: pointer;
              text-align: left;
            }
          }
          .qrCodeList {
            display: none;
          }
          .companyMsg {
            margin-top: 15px;
            li {
              text-align: left;
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              margin-bottom: 8px;
              line-height: 1.6;
              a{
                text-decoration: none;
                color: #fff;
              }
            }
          }
        }
        .footer_right {
          width: 30%;
          padding: 0 15px;
          .qrCodeList {
            width: 100%;
            display: flex;
            li {
              width: 33%;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                width: 83%;
                height: auto;
              }
            }
          }
        }
      }
    }
    .copyRight {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 120px;
      padding: 0 12px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .copyRight_left {
        text-align: left;
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        img {
          width: 20px;
          height: auto;
          vertical-align: bottom;
        }
        a {
          color: #fff;
          text-decoration: none;
          margin-right: 5px;
          margin-left: 5px;
        }
      }
      .copyRight_right {
        .logo {
          width: 60px;
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

@media only screen and (min-width: 1024px) {
}
@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 768px) {
  .copyright_container {
    width: 100%;
    .footer {
      padding: 30px 0px;
      width: 100%;
      background-color: rgba(20, 56, 46, 1);
      .logoPhone {
        width: 80px;
        padding: 0 15px;
        margin-bottom: 36px;
        display: block;
        max-width: 120px;
        img {
          width: 100%;
          height: auto;
        }
      }
      .footerBox {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        .footerList {
          display: flex;
          flex-direction: column;

          .footer_left {
            width: 100%;
            padding: 0 15px;

            .linkList {
              display: flex;
              flex-wrap: wrap;
              li {
                color: rgba(255, 255, 255, 1);
                font-size: 15px;
                line-height: 1.5;
                text-align: inherit;
                font-size: 13px;
                font-weight: bold;
                padding: 8px 10px;
                width: 50%;
                text-align: left;
                cursor: pointer;
              }
            }
            .qrCodeList {
              width: 100%;
              display: flex;
              margin: 25px 0;

              li {
                width: 33%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0px;
                img {
                  width: 66%;
                  height: auto;
                }
              }
            }
            .companyMsg {
              margin-top: 15px;
              li {
                text-align: left;
                color: rgba(255, 255, 255, 1);
                font-size: 12px;
                line-height: 1.6;
                padding: 8px 0;
              }
            }
          }
          .footer_right {
            width: 100%;
            padding: 0 15px;
            order: 1;
            .qrCodeList {
              width: 100%;
              // display: flex;
              display: none;
              li {
                width: 33%;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                  width: 83%;
                  height: auto;
                }
              }
            }
          }
        }
      }
      .copyRight {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 15px;
        padding: 0 12px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .copyRight_left {
          display: flex;
          flex-direction: column;
          text-align: left;
          color: rgba(255, 255, 255, 1);
          font-size: 12px;
          span {
            margin-bottom: 8px;
          }
          img {
            width: 20px;
            height: auto;
            vertical-align: bottom;
          }
          a {
            color: #fff;
            text-decoration: none;
            margin-right: 5px;
            margin-left: 5px;
            margin-bottom: 8px;
          }
        }
        .copyRight_right {
          display: none;
          .logo {
            width: 60px;
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
</style>
