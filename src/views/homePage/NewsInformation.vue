<template>
  <div class="newsInformation">
    <!-- <div class="newsInformationTitle">NEWS INFORMATION</div> -->
    <div class="newsTab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in categoryList"
          :label="item"
          :name="item"
          :key="index"
        >
          <div class="newsContainer">
            <ul class="newsCardList">
              <li
                @click="goNews(item1.newsId)"
                v-for="(item1, index1) in newsList"
                :key="index1"
              >
                <!-- 插入封面 -->
                <div class="cover">
                  <img :src="item1.coverImg" alt="" />
                </div>
                <!-- 标题 -->
                <h4 class="newsTitle">
                  {{ item1.title }}
                </h4>
                <!-- 文章内容 -->
                <div class="newsText">
                  {{ item1.summary }}
                </div>
                <!-- 上传时间和作者信息 -->
                <div class="newsInfo">
                  <span>{{ item1.author }}</span>
                  <span>{{ item1.createdAt }}</span>
                </div>
                <!-- <div class="newsGo">
                  <div size="small" class="newsGoButton">
                    {{ $t("homePage.news.News") }}
                  </div>
                  <div class="arrow">
                    <img src="../../assets/newsInformation/arrow.png" alt="" />
                  </div>
                </div> -->
              </li>
            </ul>
          </div></el-tab-pane
        >
      </el-tabs>
      <!-- 分页 -->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalNum"
        :page-size="entriesNum"
        :current-page="currentPage"
        @current-change="currentChange"
        class="paging"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      activeName: "first",
      currentPage: 1,
      entriesNum: 10,
      totalNum: 0,
      categoryList: [],
      newsList: [],
    };
  },
  created() {
    // 获取所有新闻类别
    this.getNewsCategory(true);
    console.log(process.env);
  },
  methods: {
    // 获取所有新闻类别
    getNewsCategory(firstLoad) {
      this.axios
        .get(` ${process.env.VUE_APP_URL}/api/news/category/list`)
        .then((res) => {
          this.categoryList = res.data.data;
          if (firstLoad) {
            this.activeName = this.categoryList[0];
            //
          }
          this.getNewsList(this.activeName, this.currentPage, this.entriesNum);
        });
    },
    // 获取新闻类别的新闻
    getNewsList(category, page, size) {
      this.axios
        .get(
          ` ${process.env.VUE_APP_URL}/api/news/category/${category}?page=${page}&size=${size}`
        )
        .then((res) => {
          this.totalNum = res.data.data.count;
          this.newsList = res.data.data.data;
          for (let i = 0; i < this.newsList.length; i++) {
            this.newsList[i].createdAt = moment(
              this.newsList[i].createdAt
            ).format("YYYY-MM-DD");
            if (this.newsList[i].coverImg) {
              this.newsList[
                i
              ].coverImg = `${process.env.VUE_APP_URL}/api/news/picture/${this.newsList[i].coverImg}`;
            }
          }
        });
    },
    currentChange(value) {
      this.currentPage = value;
      this.getNewsList(this.activeName, this.currentPage, this.entriesNum);
    },
    //
    handleClick(tab, event) {
      this.currentPage = 1;
      this.getNewsCategory(false);
    },
    goNews(newsId) {
      this.$router.push({
        name: "NewsPage",
        query: {
          newsId,
        },
      });
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="less">
.newsInformation {
  width: 100%;
  overflow: auto;
  padding-top: 76.8px;
  background-color: #fff;
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #00852a;
  }
  // .el-pagination.is-background .el-pager li:not(.disabled):hover {
  //   color: #891735;
  // }
}
.newsInformationTitle {
  background: #00852a;
  padding: 30px;
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  color: #fff;
}
.newsTab {
  padding: 10px 12.4% 10px;
  background: url(../../assets/newsInformation/bg-1.jpg) no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .el-tabs__item {
    font-family: 黑体, SimHei;
    font-weight: bold;
  }
  .el-tabs__item.is-active {
    color: #00852a;
  }
  .el-tabs__active-bar {
    background-color: #00852a;
  }
  .paging {
    display: flex;
    justify-content: right;
  }
}
.newsContainer {
  padding: 0px;
  .newsCardList {
    display: flex;
    flex-wrap: wrap;
    li {
      width: calc(33.3% - 20px);
      padding: 0px;
      padding-bottom: 50px;
      margin: 24px 10px;
      cursor: pointer;
      background-color: #fff;
      position: relative;
      &:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        img {
          transform: scale(1.2);
        }
      }
      .cover {
        width: 100%;
        height: 240px;
        display: flex;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
          transition: all 0.5s;
        }
      }
      .newsTitle {
        font-size: 24px;
        margin-top: 40px;
        padding: 0 20px;
        word-break: break-word;
        overflow: hidden;
        // white-space: nowrap;
        text-overflow: ellipsis;
        color: rgba(0, 0, 0, 0.6);
      }
      .newsInfo {
        border-top: 1px solid #f1f1f1;
        position: absolute;
        bottom: 0;
        width: 100%;
        font-size: 16px;
        color: rgb(75, 75, 75);
        margin-top: 9px;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        span {
          color: #0a0a0a61;
        }
      }
      .newsText {
        font-family: 黑体, SimHei;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        color: rgb(169, 169, 169);
        display: -webkit-box;
        overflow: hidden;
        // -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
        word-break: break-word;
        max-height: none;
        font-size: 16px;
        line-height: 1.7;
        margin-top: 20px;

        padding: 0 20px;
      }
      .newsGo {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .newsGoButton {
          display: inline-block;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
          -webkit-appearance: none;
          text-align: center;
          box-sizing: border-box;
          outline: 0;
          margin: 0;
          transition: 0.1s;
          font-weight: 500;
          font-size: 12px;
          border-radius: 3px;
          padding: 6px 8px;
        }
        .arrow {
          flex: 1;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: right;
          img {
            width: auto;
            height: 100%;
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .newsInformation {
    padding-top: 73.6px;
  }
  .newsTab {
    .el-tabs__nav-scroll {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
  .newsContainer {
    padding: 0px;
    .newsCardList {
      li {
        width: calc(50% - 20px);
      }
    }
  }
}
@media (max-width: 768px) {
  .newsInformation {
    padding-top: 55px;
  }
  .newsTab {
    padding: 10px 0px 10px;
    .el-tabs__item {
      font-size: 12px;
    }
    .el-tabs__nav-scroll {
      padding: 0 15px;
    }
  }
  .newsContainer {
    padding: 0px;
    .newsCardList {
      li {
        width: calc(100% - 20px);
      }
    }
  }
}
</style>
