<template>
  <div class="newsPreview">
    <div class="close" @click="closeNewsPreview">
      <img src="@/assets/addNews/close.png" alt="" />
    </div>
    <div class="newsPage">
      <div class="circle">
        <h1 class="title">{{ newsData.title }}</h1>
        <div class="newsInfo">
          <span>
            <div> {{ newsData.category }}</div>
            <div style="margin-top: 10px;">单价：{{ newsData.price }}元</div>
          </span>
          <span>{{ newsData.createdAt }}</span>
        </div>
        <!-- 文章内容 -->
        <div class="circleText">
          <template v-for="(item, index) in newsData.article">
            <p :key="index" v-if="item.type === 'text'">
              {{ item.content }}
            </p>
            <img :key="index" :src="item.imageName" v-if="item.type === 'image'" />
          </template>
          <div>
            <p>所属公司：{{ newsData.belongCompany }}</p>
            <p> 月销量：{{ newsData.monthlySales }} </p>
            <p>物流方式：{{ newsData.logisticsMethod }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["form"],
  data() {
    return {
      newsData: {},
      lang:localStorage.getItem("lang") || "zh"
    };
  },

  created() {
    this.newsData = this.form;
    // 获取时间
    let date = new Date();
    this.newsData.date = moment(date).format("YYYY-MM-DD HH:mm");
  },
  methods: {
    closeNewsPreview() {
      this.$store.commit("setShowNewsPreview", false);
    },
  },
};
</script>

<style lang="less">
.newsPreview {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;

  .close {
    position: absolute;
    left: calc(90% + 10px);
    bottom: 90%;
    cursor: pointer;
    z-index: 1;

    img {
      width: 40px;
      height: auto;
    }
  }

  .newsPage {
    width: 80%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    overflow: auto;

    .circle {
      padding: 10px 12.4% 10px;

      h1 {
        font-size: 36px;
        font-family: 微软雅黑;
        color: #212121;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        text-align: left;
      }

      .title {
        padding-top: 24px;
        line-height: 1.3;
      }

      .newsInfo {
        color: #999;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-bottom: 24px;
        margin-top: 36px;
        font-size: 14px;
        border-bottom: 1px solid #ebebeb;
      }

      .circleText {
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 30px;

        p {
          word-wrap: break-word;
          color: #666;
          font-size: 14px;
          line-height: 2.8;
          margin-top: 30px;
          // text-indent: 2em;
        }

        img {
          width: 100%;
          height: auto;
          margin-top: 30px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .newsPage {
      width: 95%;
      height: 90%;

      .circle {
        padding: 10px 15px;
      }
    }
  }
}
</style>
