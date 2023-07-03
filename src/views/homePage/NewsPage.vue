<template>
  <div class="newsPage">
    <div class="newsBgc"></div>
    <div class="circle">
      <h1 class="title">{{ news.title }}</h1>
      <div class="newsInfo">
        <span>{{ news.createdAt }}</span>
        <span>{{ news.author }}</span>
      </div>
      <!-- 文章内容 -->
      <div class="circleText">
        <template v-for="(item, index) in news.content">
          <p v-if="item.type === 'text'">
            {{ item.content }}
          </p>
          <img
            v-else-if="item.type === 'image'"
            :src="item.imageName"
            draggable="false"
          />
        </template>
      </div>
      <!-- 上一篇 -->
      <div class="selectOther">
        <div
          class="preCircle"
          v-if="neighborsData.nextOne.title !== ''"
          @click="goNews(neighborsData.nextOne.newsId)"
        >
          上一篇 <span>{{ neighborsData.nextOne.title }}</span>
        </div>
        <div
          class="nextCircle"
          v-if="neighborsData.lastOne.title !== ''"
          @click="goNews(neighborsData.lastOne.newsId)"
        >
          下一篇 <span>{{ neighborsData.lastOne.title }}</span>
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
      news: {},
      neighborsData: {
        nextOne: {
          title: "",
          newsId: "",
        },
        lastOne: { title: "", newsId: "" },
      },
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      let newsId = this.$route.query.newsId;
      this.axios
        .get(` ${process.env.VUE_APP_URL}/api/news/${newsId}`)
        .then((res) => {
          this.news = res.data.data[0];
          this.news.createdAt = moment(this.news.createdAt).format(
            "YYYY-MM-DD HH:mm"
          );
          this.news.content = JSON.parse(this.news.content);
          for (let i = 0; i < this.news.content.length; i++) {
            if (this.news.content[i].type === "image") {
              this.news.content[
                i
              ].imageName = `${process.env.VUE_APP_URL}/api/news/picture/${this.news.content[i].imageName}`;
            }
          }
          this.getNeighbors();
        });
    },
    getNeighbors() {
      let newsId = this.$route.query.newsId;
      this.axios
        .get(` ${process.env.VUE_APP_URL}/api/news/${newsId}/neighbors`)
        .then((res) => {
          this.neighborsData = res.data.data;
        });
    },

    goNews(newsId) {
      this.$router.replace({
        name: "NewsPage",
        query: {
          newsId,
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
    background-image: url(../../assets/newsPage/comunidades.jpg);
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
