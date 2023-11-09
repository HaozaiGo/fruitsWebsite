<template>
  <div class="managingNews">
    <div class="managingNewsTable">
      <div class="tableDataList">
        <el-table :data="tableData" border stripe>
          <el-table-column
            prop="title"
            :label="$t('manage.order')"
            width="70"
            align="center"
          >
            <template slot-scope="scope">
              <div class="Title">
                {{ scope.$index + 1 + (currentPage - 1) * entriesNum }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="title"
            :label="$t('manage.title')"
            width="190"
            align="center"
          >
            <template slot-scope="scope">
              <div class="Title">
                {{ scope.row.title }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="coverImg"
            :label="$t('manage.cover')"
            width="100"
            align="center"
          >
            <template slot-scope="scope">
              <div class="coverImg" v-if="scope.row.coverImg">
                <img :src="`${scope.row.coverImg}`" alt="" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="summary"
            :label="$t('manage.summary')"
            width="190"
            align="center"
          >
            <template slot-scope="scope">
              <div class="summary">
                {{ scope.row.summary }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="category"
            :label="$t('manage.category')"
            width="190"
            align="center"
          >
            <template slot-scope="scope">
              <div class="category">
                {{ scope.row.category }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="belongCompany"
            :label="$t('manage.belongCompany')"
            width="190"
            align="center"
          >
            <template slot-scope="scope">
              <div class="author">
                {{ scope.row.belongCompany }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="price"
            :label="$t('manage.price')"
            width="190"
            align="center"
          >
            <template slot-scope="scope">
              <div class="createdBy">
                {{ scope.row.price }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="monthlySales"
            :label="$t('manage.monthlySales')"
            width="190"
            align="center"
          >
            <template slot-scope="scope">
              <div class="createdBy">
                {{ scope.row.monthlySales }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="logisticsMethod"
            :label="$t('manage.logisticsMethod')"
            width="190"
            align="center"
          >
            <template slot-scope="scope">
              <div class="createdBy">
                {{ scope.row.logisticsMethod }}
              </div>
            </template>
          </el-table-column>
          
          <el-table-column
            prop="createdAt"
            :label="$t('manage.createdAt')"
            width="190"
            align="center"
          >
            <template slot-scope="scope">
              <div class="Title">
                {{ scope.row.createdAt }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            :label="$t('manage.option')"
            width="160"
            align="center"
            class="option"
          >
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                style="margin-right:10px"
                @click="goView(scope.row.farmToolsId)"
                >{{ $t("manage.browse") }}</el-button
              >
              <el-popconfirm
                :confirm-button-text="$t('register.confirm')"
                :cancel-button-text="$t('register.cancel')"
                icon="el-icon-info"
                icon-color="red"
                :title="$t('home.sure')"
                @confirm="handleDelete(scope.$index, scope.row)"
                confirm-button-type="danger"
              >
                <el-button size="mini" type="danger" slot="reference">{{
                  $t("register.delete")
                }}</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 显示数量 -->
      <div class="entriesShow">
        {{ $t("home.showing") }} {{ (currentPage - 1) * entriesNum + 1 }}
        {{ $t("home.to") }} {{ currentPage * entriesNum }} {{ $t("home.of") }}
        {{ totalNum }}
        {{ $t("home.sumEntries") }}
      </div>
      <!-- 分页 -->
      <div class="table3Page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalNum"
          :page-size="entriesNum"
          :current-page="currentPage"
          @current-change="currentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      entriesNum: 10,
      totalNum: 0,
    };
  },
  created() {
    this.getNewsList(this.currentPage, this.entriesNum);
  },
  methods: {
    currentChange(value) {
      this.currentPage = value;
      console.log(this.currentPage);
      this.getNewsList(this.currentPage, this.entriesNum);
    },
    // 获取新闻列表
    getNewsList(page, size) {
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/farmTools/list?page=${page}&size=${size}`,
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.totalNum = res.data.data.count;
          this.tableData = res.data.data.data;
          for (let i = 0; i < this.tableData.length; i++) {
            this.tableData[i].createdAt = moment(
              this.tableData[i].createdAt
            ).format("YYYY-MM-DD HH:mm");
            if (this.tableData[i].coverImg) {
              this.tableData[
                i
              ].coverImg = `${process.env.VUE_APP_URL}/api/farmTools/picture/${this.tableData[i].coverImg}`;
            }
          }
        });
    },
    // 删除新闻数据
    handleDelete(index, row) {
      this.axios
        .delete(
          ` ${process.env.VUE_APP_URL}/api/farmTools/${row.farmToolsId}`,

          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          this.getNewsList(this.currentPage, this.entriesNum);
        });
    },
    // 浏览
    goView(farmToolsId) {
      window.open(`/goodsInformation/newsPage?farmToolsId=${farmToolsId}`);
    },
  },
};
</script>

<style lang="less">
.managingNewsTable {
  width: 100%;
  background-color: #fff;
  min-width: 880px;
  padding: 22px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../../../assets/fondo_marcas4.png),
      url("../../../assets/fondo_marcas5.png");
    background-position: left center, right, center;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    transform: rotate(180deg);
    pointer-events: none;
    left: 0;
    top: 0;
  }
  .entriesShow {
    font-size: 12px;
    margin-top: 12px;
    margin-bottom: 10px;
    color: #333;
    position: relative;
    font-family: Poppins-Regular;
  }
  .table3Page {
    display: flex;
    justify-content: right;
    position: relative;
    .number {
      font-family: Poppins-Regular;
    }
  }
  .coverImg {
    height: 100px;
    width: 100px;
    img {
      height: 100px;
      width: 100px;
    }
  }
  .summary {
    text-decoration: none;

    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    word-break: break-word;
    max-height: none;
    font-size: 12px;
    line-height: 1.7;
    margin-top: 18px;
  }
}
.managingNewsTable {
  .el-input-number--small {
    width: 72.5px;
  }
  .el-input-number--small .el-input-number__decrease,
  .el-input-number--small .el-input-number__increase {
    width: 22px;
  }
  .el-input-number.is-controls-right .el-input__inner {
    padding-right: 32px;
    padding-left: 0px;
  }
  .el-table thead {
    color: #333;
  }
  // .el-table--scrollable-x .el-table__body-wrapper {
  //   &::-webkit-scrollbar {
  //     display: none;
  //   }
  // }
  .el-table .el-table__cell {
    padding: 9px 0;
  }
  .el-table th.el-table__cell > .cell {
    white-space: nowrap;
    text-overflow: clip;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
