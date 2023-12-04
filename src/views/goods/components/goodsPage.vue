<!-- 商品预览页 GoodsPage -->

<template>
  <div class="newsPage">
    <div class="newsBgc"></div>
    <div class="circle">
      <h1 class="title">{{ news.title }}</h1>
      <div class="newsInfo">
        <span>
          <div> {{ news.category }}</div>
          <div style="margin-top: 10px;" v-if="!token">
            <el-tooltip class="item" effect="dark" content="请登录后进行查看" placement="top">
              <span>单价：**** 元</span>
            </el-tooltip>
          </div>


          <div style="margin-top: 10px;" v-else>单价：{{ news.price }}元</div>

        </span>
        <span>{{ news.createdAt }}</span>
      </div>

      <!-- 文章内容 -->
      <div class="circleText">
        <template v-for="(item, index) in news.introduction">

          <img v-if="item.type === 'image'" :src="item.imageName" draggable="false" />
          <p v-if="item.type === 'text'">
            {{ item.content }}
          </p>
        </template>

        <div>
          <p>{{$t('goods.belongCompany')}}：{{ news.belongCompany }}</p>
          <p> {{$t('goods.monthlySales')}}：{{ news.monthlySales }} </p>
          <p>{{$t('goods.transportation')}}：{{ news.logisticsMethod }}</p>
        </div>

      </div>
      <!-- 上一篇 -->
      <div class="selectOther">
        <div class="preCircle" v-if="neighborsData.nextOne.title !== ''"
          @click="goNews(neighborsData.nextOne.farmToolsId)">
          {{$t('home.previous')}}: <span>{{ neighborsData.nextOne.title }}</span>
        </div>
        <div class="nextCircle" v-if="neighborsData.lastOne.title !== ''"
          @click="goNews(neighborsData.lastOne.farmToolsId)">
          {{$t('home.next')}}: <span>{{ neighborsData.lastOne.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      token: window.sessionStorage.getItem('token'),
      news: {},
      lang:localStorage.getItem("lang") || "zh",
      neighborsData: {
        nextOne: {
          title: "",
          farmToolsId: "",
        },
        lastOne: { title: "", farmToolsId: "" },
      },
    };
  },
  mounted() {
    this.$eventBus.$on("changeLanguage", (lang) => {
      this.lang = lang;
      this.getNews();
    });
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      let farmToolsId = this.$route.query.farmToolsId;
      this.axios
        .get(` ${process.env.VUE_APP_URL}/api/farmTools/${farmToolsId}?lang=${this.lang === 'en' ? '1' : '0'}`)
        .then((res) => {
          this.news = res.data.data[0];
          this.news.createdAt = moment(this.news.createdAt).format(
            "YYYY-MM-DD HH:mm"
          );
          this.news.introduction = JSON.parse(this.news.introduction);
          for (let i = 0; i < this.news.introduction.length; i++) {
            if (this.news.introduction[i].type === "image") {
              this.news.introduction[
                i
              ].imageName = `${process.env.VUE_APP_URL}/api/farmTools/picture/${this.news.introduction[i].imageName}`;
            }
          }
          this.getNeighbors();
        });
    },
    getNeighbors() {
      let farmToolsId = this.$route.query.farmToolsId;
      this.axios
        .get(` ${process.env.VUE_APP_URL}/api/farmTools/${farmToolsId}/neighbors`)
        .then((res) => {
          this.neighborsData = res.data.data;
        });
    },

    goNews(farmToolsId) {
      this.$router.replace({
        name: "GoodsPage",
        query: {
          farmToolsId,
        },
      });
      this.getNews();
    },
  },
};
</script>

<style lang="less">
.newsPage {
  user-select: text;

  .newsBgc {
    background-image: url(../../../assets/newsPage/comunidades.jpg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 180px 0;
  }

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
      color: #797878;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 24px;
      margin-top: 36px;
      font-size: 15px;
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

  .selectOther {
    margin-top: 26px;

    .preCircle,
    .nextCircle {
      color: #333;
      font-size: 14px;
      margin-bottom: 30px;
      cursor: pointer;

      span {
        margin-left: 28px;
      }
    }
  }
}

@media (max-width: 992px) {
  .newsPage {
    .circle {
      padding: 10px 15px;
    }
  }
}
</style>
