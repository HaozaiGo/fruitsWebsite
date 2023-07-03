<template>
  <div
    class="home"
    :style="{
      width: $store.state.showMenu === true ? '100%' : 'calc(100% - 181px)',
    }"
    :settings="settings"
  >
    <div class="homeDataOne">
      <h2>{{ $t("home.InspectionsReports") }}</h2>
      <div class="timeSelect">
        <!-- <el-date-picker
          v-model="timeSelect"
          type="monthrange"
          align="right"
          unlink-panels
          range-separator="to"
          :start-placeholder="$t('home.StartDate')"
          :end-placeholder="$t('home.EndDate')"
          @change="dataChange"
        >
        </el-date-picker> -->
        <el-date-picker
          v-model="timeSelectYearStart"
          type="year"
          :placeholder="$t('home.StartYear')"
          class="yearSelect"
          @change="dataChange"
        >
        </el-date-picker>
        <span class="yearGap">-</span>
        <el-date-picker
          v-model="timeSelectYearEnd"
          type="year"
          :placeholder="$t('home.EndYear')"
          class="yearSelect"
          @change="dataChange"
        >
        </el-date-picker>
        <el-select
          v-model="product"
          :placeholder="$t('home.SelectProduct')"
          @change="productChange"
          clearable
        >
          <el-option
            v-for="item in options"
            :key="item.product"
            :label="item.product"
            :value="item.product"
          >
          </el-option>
        </el-select>
        <el-input
          placeholder="Search Lot"
          prefix-icon="el-icon-search"
          class="searchLot"
          v-model="searchLot"
          @change="searchLotFn"
          clearable
        >
        </el-input>
      </div>
      <!-- <div class="timeTip">*YYYY-MM-DD</div> -->
    </div>
    <div class="homeDataTwo">
      <h4>{{ $t("home.InspectionSummary") }}</h4>
      <div class="chartList">
        <div class="chartBar">
          <div class="chartOne" ref="chartOne"></div>
        </div>
        <div class="chartPie">
          <div class="chartTwo" ref="chartTwo"></div>
        </div>
      </div>
    </div>
    <div class="homeDataThree">
      <div class="toolOfData">
        <!-- <div class="changeEntries">
          {{ $t("home.show") }}
          <el-input-number
            v-model="entriesNum"
            controls-position="right"
            @change="changeEntries"
            :min="1"
            :max="30"
            size="small"
          ></el-input-number>
          {{ $t("home.entries") }}
        </div> -->
        <!-- <div class="searchEntries">
          Search：<el-input
            v-model="searchEntries"
            placeholder=""
            size="small"
          ></el-input>
        </div> -->
      </div>
      <div class="tableDataList">
        <el-table :data="tableData" border stripe>
          <el-table-column
            prop="lot"
            :label="$t('home.Lot')"
            sortable
            width="190"
          >
            <template slot-scope="scope">
              <div class="Lot" @click="showDetail(scope.row)">
                {{ scope.row.lot }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="company"
            :label="$t('home.Company')"
            sortable
            width="130"
          >
          </el-table-column>
          <el-table-column
            prop="shipperConsignee"
            :label="$t('home.ShipperConsignee')"
            sortable
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="location"
            :label="$t('home.Location')"
            sortable
            width="190"
          >
          </el-table-column>
          <el-table-column
            prop="product"
            :label="$t('home.Product')"
            sortable
            width="110"
          >
          </el-table-column>
          <el-table-column
            prop="package"
            :label="$t('home.Package')"
            sortable
            width="140"
          >
          </el-table-column>

          <el-table-column
            prop="reference"
            :label="$t('home.Reference')"
            sortable
            width="120"
          >
          </el-table-column>

          <el-table-column
            prop="date"
            :label="$t('home.Date')"
            sortable
            width="110"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            :label="$t('home.Status')"
            sortable
            align="center"
            width="auto"
          >
            <template>
              <div class="flag">
                <img src="../assets/detail/flag.png" alt="" />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('home.option')"
            align="center"
            width="300"
            v-if="role === 'ADMIN'"
          >
            <template slot-scope="scope">
              <div class="uploadExcel">
                <el-button
                  size="mini"
                  @click="handleUpload(scope.$index, scope.row.containerId)"
                  style="margin-right:10px"
                >
                  <img src="../assets/detail/upload.png" alt="" />{{
                    $t("home.upload")
                  }}</el-button
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
              </div>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('home.download')"
            align="center"
            width="150"
            v-if="role === 'ADMIN'"
          >
            <template slot-scope="scope">
              <div class="excelDownloadBox">
                <div
                  class="excelDownload"
                  @click="downloadExcel(scope.row)"
                  v-if="scope.row.saleFile === true"
                >
                  <img src="../assets/detail/file-excel.png" alt="" />
                </div>
                <div class="excelDelete" v-if="scope.row.saleFile === true">
                  <el-popconfirm
                    :confirm-button-text="$t('register.confirm')"
                    :cancel-button-text="$t('register.cancel')"
                    icon="el-icon-info"
                    icon-color="red"
                    :title="$t('home.sureXlsx')"
                    @confirm="handleDeleteXlsx(scope.$index, scope.row)"
                    confirm-button-type="danger"
                  >
                    <el-button size="mini" type="danger" slot="reference">{{
                      $t("register.delete")
                    }}</el-button>
                  </el-popconfirm>
                </div>
              </div>
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
      <input
        type="file"
        ref="fileInput"
        class="fileInput"
        @change="getUploadFile($event)"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
let Echarts = require("echarts/lib/echarts");
import moment from "moment";
export default {
  name: "App",

  data() {
    return {
      // 滚动条
      settings: {
        wheelSpeed: 1,
        minScrollbarLength: 20,
        swipeEasing: true,
      },
      // 角色权限
      role: "",
      // 日期
      pickerOptions: {
        shortcuts: [
          {
            text: this.$t("home.LatestWeek"),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: this.$t("home.LastMonth"),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: this.$t("home.Last3Months"),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      timeSelect: null,
      timeSelectYearStart: null,
      timeSelectYearEnd: null,
      // 水果种类
      options: [],
      product: "",
      // 搜索lot
      searchLot: "",
      // 图表
      chartOne: "",
      chartTwo: "",
      chartTwoLoad: false,
      chartOneInit: false,
      chartTwoInit: false,

      chartTwoCanLoad: 0,
      // 表格
      entriesNum: 50,
      currentPage: 1,
      searchEntries: "",
      // 一页的数据
      tableData: [],
      // 时间筛选
      tableDateData: [],
      // 产品筛选
      tableProductData: [],
      // 搜索筛选
      tableSearchData: [],
      // 筛选后的数据
      filterData: [],
      // 总条数
      totalNum: 0,
      totalNumChange: false,
      // 详情数据

      filename: "",
      uploadContainerId: "",
    };
  },

  created() {
    if (window.sessionStorage.getItem("userInfo")) {
      this.role = JSON.parse(window.sessionStorage.getItem("userInfo")).role;

      if (window.sessionStorage.getItem("token")) {
        // 获取水果分页数据
        this.getLotData(this.currentPage, this.entriesNum, true);
        // 获取水果总条数
        this.getLotCount();
        // 获取水果种类
        this.getProduct();
      }
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (this.chartTwoLoad) {
        this.chartTwo.resize();
        this.chartOne.resize();
      }
    });
  },
  methods: {
    init() {
      //2.初始化
      if (!this.chartOneInit) {
        this.chartOne = Echarts.init(this.$refs.chartOne);
      }
      let optionData = [];
      for (let i = 0; i < this.options.length; i++) {
        optionData.push({
          product: this.options[i].product,
          OK: this.options[i].count,
          Trouble: 0,
        });
      }

      //3.配置数据
      let optionOne = {
        legend: {
          orient: "vertical",
          left: "80%",
          top: "center",
        },
        grid: {
          left: "20%",
          right: "20%",
        },
        tooltip: {},
        color: ["#b1212b", "#34a55f"],
        dataset: {
          dimensions: ["product", "Trouble", "OK"],
          source: optionData,
        },

        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }],
      };

      // 4.传入数据
      this.chartOne.setOption(optionOne);
      this.chartOneInit = true;
    },
    initChartTwo() {
      if (!this.chartTwoInit) {
        this.chartTwo = Echarts.init(this.$refs.chartTwo);
      }
      let optionData = [];
      for (let i = 0; i < this.options.length; i++) {
        optionData.push({
          value: this.options[i].count,
          name: this.options[i].product,
        });
      }
      let optionTwo = {
        title: {
          text: this.totalNum,
          subtext: "TOTAL INSPECTION SUMMARY",
          left: "center",
          itemGap: 5,
          bottom: 15,
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "80%",
          top: "center",
        },
        series: [
          {
            name: "INSPECTION SUMMARY",
            type: "pie",
            radius: ["60%", "35%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "16",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: optionData,
            // color: ["#fd7f28", "#d34f4f"],
          },
        ],
      };

      this.chartTwo.setOption(optionTwo);
      this.chartTwoLoad = true;
      this.chartTwoInit = true;
    },
    // 改变条数
    changeEntries(value) {
      this.entriesNum = value;

      this.getLotData(this.currentPage, this.entriesNum);
    },
    // 改变页码数
    currentChange(value) {
      this.currentPage = value;
      this.getLotData(this.currentPage, this.entriesNum);
    },
    showDetail(value) {
      window.sessionStorage.setItem("containerDetail", JSON.stringify(value));
      this.$store.commit("setContainerDetail", value);
      this.$store.commit("setShowLotDetail", true);
    },
    // 获取集装箱数据
    getLotData(page, size, firstLoad = false) {
      //判断是否有筛选状态
      if (
        (this.timeSelectYearStart !== null &&
          this.timeSelectYearEnd !== null) ||
        this.product !== "" ||
        this.searchLot !== ""
      ) {
        // 在筛选状态下
        this.tableData = [];
        for (
          let i = (page - 1) * size;
          i < this.filterData.length && i < page * size;
          i++
        ) {
          this.tableData.push(this.filterData[i]);
        }
        // 总页数更改
        this.totalNum = this.filterData.length;
        this.totalNumChange = true;
        if (this.currentPage !== 1 && this.tableData.length === 0) {
          this.currentChange(this.currentPage - 1);
        }
      } else {
        // 判断身份
        let containerUrl;
        if (this.role === "QC") {
          containerUrl = `${process.env.VUE_APP_URL}/api/qc/container?page=${page}&size=${size}`;
        } else if (this.role === "USER") {
          containerUrl = `${process.env.VUE_APP_URL}/api/user/container?page=${page}&size=${size}`;
        } else {
          containerUrl = `${process.env.VUE_APP_URL}/api/container?page=${page}&size=${size}`;
        }

        this.axios
          .get(containerUrl, {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          })
          .then((res) => {
            if (this.role === "QC" || this.role === "USER") {
              this.tableData = res.data.data.containers;
              this.totalNum = res.data.data.count;
            } else {
              this.tableData = res.data.data;
            }

            if (this.currentPage !== 1 && this.tableData.length === 0) {
              this.currentChange(this.currentPage - 1);
            }
            if (
              !window.sessionStorage.getItem("containerDetail") &&
              this.tableData.length > 0
            ) {
              window.sessionStorage.setItem(
                "containerDetail",
                JSON.stringify(this.tableData[0])
              );
              this.$store.commit("setContainerDetail", this.tableData[0]);
            }

            if (this.role === "QC" || this.role === "USER") {
              this.chartTwoCanLoad++;
              if (this.chartTwoCanLoad % 2 === 0) {
                this.initChartTwo();
                this.init();
              }
            }
          });
      }
    },
    // 获取集装箱总条数
    getLotCount() {
      if (this.role === "QC" || this.role === "USER") return;
      this.axios
        .get(`${process.env.VUE_APP_URL}/api/container/count`, {
          headers: {
            Authorization: window.sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.totalNum = res.data.data;
          this.chartTwoCanLoad++;
          if (this.chartTwoCanLoad >= 2) {
            this.initChartTwo();
            this.init();
          }
        });
    },
    // 获取水果种类
    getProduct() {
      let containerUrl;
      if (this.role === "QC") {
        containerUrl = `${process.env.VUE_APP_URL}/api/qc/container/product`;
      } else if (this.role === "USER") {
        containerUrl = `${process.env.VUE_APP_URL}/api/user/container/product`;
      } else {
        containerUrl = `${process.env.VUE_APP_URL}/api/container/product`;
      }
      this.axios
        .get(containerUrl, {
          headers: {
            Authorization: window.sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          let product = res.data.data;
          this.options = [];
          for (let i = 0; i < product.length; i++) {
            this.options.push(product[i]);
          }
          this.chartTwoCanLoad++;
          if (this.chartTwoCanLoad % 2 === 0) {
            this.initChartTwo();
            this.init();
          }
        });
    },
    // 水果种类搜索
    productChange() {
      let containerUrl;

      if (this.role === "QC") {
        containerUrl = `${process.env.VUE_APP_URL}/api/qc/product/${this.product}`;
      } else if (this.role === "USER") {
        containerUrl = `${process.env.VUE_APP_URL}/api/user/product/${this.product}`;
      } else {
        containerUrl = `${process.env.VUE_APP_URL}/api/container/product/${this.product}`;
      }

      if (this.product !== "") {
        this.axios
          .get(containerUrl, {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          })
          .then((res) => {
            this.tableProductData = res.data.data;
            // 判断日期是否选择
            if (
              this.timeSelectYearStart !== null &&
              this.timeSelectYearEnd !== null &&
              this.searchLot !== ""
            ) {
              this.calcIntersection(this.tableProductData, this.tableDateData);
              this.calcIntersection(this.filterData, this.tableSearchData);
            } else if (
              this.timeSelectYearStart !== null &&
              this.timeSelectYearEnd !== null
            ) {
              this.calcIntersection(this.tableProductData, this.tableDateData);
            } else if (this.searchLot !== "") {
              this.calcIntersection(
                this.tableProductData,
                this.tableSearchData
              );
            } else {
              this.filterData = this.tableProductData;
            }
            this.getLotData(this.currentPage, this.entriesNum);
          });
      } else {
        // 水果种类清空清空
        if (
          this.timeSelectYearStart !== null &&
          this.timeSelectYearEnd !== null
        ) {
          this.dataChange();
        } else if (this.searchLot !== null) {
          this.searchLotFn();
        } else {
          this.getLotData(this.currentPage, this.entriesNum);
        }
      }
    },
    // 日期搜索
    dataChange() {
      let containerUrl;

      if (
        this.timeSelectYearStart !== null &&
        this.timeSelectYearEnd !== null
      ) {
        if (
          new Date(this.timeSelectYearStart).getTime() ===
          new Date(this.timeSelectYearEnd).getTime()
        ) {
          this.timeSelectYearEnd = null;
          return;
        }
        if (
          new Date(this.timeSelectYearStart).getTime() >
          new Date(this.timeSelectYearEnd).getTime()
        ) {
          let timeSelectYearStart = this.timeSelectYearStart;
          this.timeSelectYearStart = this.timeSelectYearEnd;
          this.timeSelectYearEnd = timeSelectYearStart;
        }
        let startTime = moment(
          new Date(`${moment(this.timeSelectYearStart).format("YYYY")}-10-01`)
        ).format("YYYY-MM-DD");
        let endTime = moment(
          new Date(
            `${moment(this.timeSelectYearEnd).format("YYYY")}-10-01`
          ).getTime() -
            20 * 60 * 60 * 1000
        ).format("YYYY-MM-DD");
        if (this.role === "QC") {
          containerUrl = `${process.env.VUE_APP_URL}/api/qc/container/date?startDate=${startTime}&endDate=${endTime}`;
        } else if (this.role === "USER") {
          containerUrl = `${process.env.VUE_APP_URL}/api/user/container/date?startDate=${startTime}&endDate=${endTime}`;
        } else {
          containerUrl = `${process.env.VUE_APP_URL}/api/container/date?startDate=${startTime}&endDate=${endTime}`;
        }
        this.axios
          .get(
            containerUrl,

            {
              headers: {
                Authorization: window.sessionStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            this.tableDateData = res.data.data;
            // 判断产品是否选择
            if (this.product !== "" && this.searchLot !== "") {
              this.calcIntersection(this.tableProductData, this.tableDateData);
              this.calcIntersection(this.filterData, this.tableSearchData);
            } else if (this.product !== "") {
              this.calcIntersection(this.tableProductData, this.tableDateData);
            } else if (this.searchLot !== "") {
              this.calcIntersection(this.tableSearchData, this.tableDateData);
            } else {
              this.filterData = this.tableDateData;
            }
            this.getLotData(this.currentPage, this.entriesNum);
          });
      } else {
        // 日期清空
        if (this.product !== "") {
          this.productChange();
        } else if (this.searchLot !== "") {
          this.searchLotFn();
        } else {
          this.getLotData(this.currentPage, this.entriesNum);
        }
      }
    },
    // Lot搜索
    searchLotFn() {
      if (this.searchLot !== "") {
        this.axios
          .get(
            `${process.env.VUE_APP_URL}/api/container/lot?lot=${this.searchLot}`,
            {
              headers: {
                Authorization: window.sessionStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            this.tableSearchData = res.data.data;
            if (
              this.timeSelectYearStart !== null &&
              this.timeSelectYearEnd !== null &&
              this.product !== ""
            ) {
              this.calcIntersection(this.tableSearchData, this.tableDateData);
              this.calcIntersection(this.filterData, this.tableProductData);
            } else if (
              this.timeSelectYearStart !== null &&
              this.timeSelectYearEnd !== null
            ) {
              this.calcIntersection(this.tableSearchData, this.tableDateData);
            } else if (this.product !== "") {
              this.calcIntersection(
                this.tableSearchData,
                this.tableProductData
              );
            } else {
              this.filterData = this.tableSearchData;
            }
            this.getLotData(this.currentPage, this.entriesNum);
          });
      } else {
        // lot搜索清空

        if (
          this.timeSelectYearStart !== null &&
          this.timeSelectYearEnd !== null
        ) {
          this.dataChange();
        } else if (this.product !== "") {
          this.productChange();
        } else {
          this.getLotData(this.currentPage, this.entriesNum);
        }
      }
    },
    // 获取交集
    calcIntersection(arrA, arrB) {
      let newArr = new Set();
      arrA.forEach((elem) => newArr.add(elem.containerId));
      this.filterData = arrB.filter((item) => newArr.has(item.containerId));
    },

    // 上传文件
    handleUpload(index, containerId) {
      this.uploadContainerId = containerId;

      this.$refs.fileInput.click();
    },
    getUploadFile(e) {
      // 上传文件
      this.filename = e.target.files[0].name;
      let that = this;
      this.axios
        .post(
          `${process.env.VUE_APP_URL}/api/container/${this.uploadContainerId}/sale/excel`,
          {
            file: e.target.files[0],
          },
          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          // 更新数据
          for (let i = 0; i < that.tableData.length; i++) {
            if (that.tableData[i].containerId === that.uploadContainerId) {
              that.tableData[i].saleFile = true;
            }
          }
          this.$message({
            showClose: true,
            message: "文件添加成功",
            type: "success",
          });
        });
    },
    downloadExcel(row) {
      this.axios
        .get(
          `${process.env.VUE_APP_URL}/api/container/${row.containerId}/sale/excel`,

          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          // let fileName = res.data.data[res.data.data.length - 1];
          let fileName = "";
          if (process.env.VUE_APP_COMPANY === "QYSW") {
            fileName = res.data.data[0].substring(
              res.data.data[0].indexOf("/api"),
              res.data.data[0].length
            );
          } else {
            fileName =
              "api" +
              res.data.data[0].substring(
                res.data.data[0].indexOf("/download"),
                res.data.data[0].length
              );
          }
          window.location.href = fileName;
        });
    },
    // 删除集装箱数据
    handleDelete(index, row) {
      this.axios
        .delete(
          ` ${process.env.VUE_APP_URL}/api/admin/container?containerId=${row.containerId}`,

          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          //判断是否有筛选状态
          if (
            (this.timeSelectYearStart !== null &&
              this.timeSelectYearEnd !== null) ||
            this.product !== ""
          ) {
            this.productChange();
            this.dataChange();
          }
          // 获取水果分页数据
          this.getLotData(this.currentPage, this.entriesNum, true);
          // 获取水果总条数
          this.getLotCount();
          // 获取水果种类
          this.getProduct();
        });
    },
    // 删除销售报告数据
    handleDeleteXlsx(index, row) {
      this.axios
        .delete(
          ` ${process.env.VUE_APP_URL}/api/container/${row.containerId}/sale/excel`,

          {
            headers: {
              Authorization: window.sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          //判断是否有筛选状态
          if (
            (this.timeSelectYearStart !== null &&
              this.timeSelectYearEnd !== null) ||
            this.product !== ""
          ) {
            this.productChange();
            this.dataChange();
          }
          // 获取水果分页数据
          this.getLotData(this.currentPage, this.entriesNum, true);
          // 获取水果总条数
          this.getLotCount();
          // 获取水果种类
          this.getProduct();
        });
    },
  },
};
</script>

<style lang="less">
.home {
  width: calc(100% - 181px);
  height: calc(100% - 57px);
  float: right;
  background-color: #f1f3f6;
  padding: 40px;
  overflow: auto;
  transition: all 0.5s;
  background-image: url(../assets/linea_tiempo_fondo-2.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  .homeDataOne {
    width: 100%;
    height: 147px;
    background-color: #fff;
    padding: 18px 23px 40px;
    min-width: 880px;
    margin-bottom: 28px;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(../assets/fondo_marcas2.png),
        url("../assets/fondo_marcas3.png");
      background-position: left center, right, center;
      background-size: contain, contain;
      background-repeat: no-repeat, no-repeat;
      pointer-events: none;
      left: 0;
      top: 0;
    }
    h2 {
      position: relative;
      font-family: Poppins-Bold;
    }
    .timeSelect {
      margin-top: 18px;
    }
    .yearSelect {
      width: 160px;
    }
    .yearGap {
      position: relative;
      padding: 0 8px;
    }
    .searchLot {
      width: auto;
      margin-left: 32px;
      width: 200px;
    }
    input {
      font-family: Poppins-Regular;
    }
    .timeTip {
      color: #999999;
      font-size: 12px;
      font-weight: 700;
      margin-top: 4.5px;
    }
  }
  .homeDataTwo {
    width: 100%;
    height: 410px;
    background-color: #fff;
    min-width: 880px;
    margin-bottom: 28px;
    background-image: url(../assets/fondo_marcas4.png),
      url("../assets/fondo_marcas5.png");
    background-position: left center, right, center;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
    h4 {
      height: 40px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ebebeb;
      padding-left: 10px;
      font-size: 12px;
      color: #333;
      font-family: Poppins-Bold;
    }
    .chartList {
      width: 100%;
      height: 370px;
      display: flex;
      .chartBar,
      .chartPie {
        height: 100%;
        flex: 1;
        .chartOne,
        .chartTwo {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .homeDataThree {
    width: 100%;
    // height: 410px;
    background-color: #fff;
    min-width: 880px;
    // margin-bottom: 28px;
    padding: 22px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(../assets/fondo_marcas4.png),
        url("../assets/fondo_marcas5.png");
      background-position: left center, right, center;
      background-size: contain, contain;
      background-repeat: no-repeat, no-repeat;
      transform: rotate(180deg);
      pointer-events: none;
      left: 0;
      top: 0;
    }

    .toolOfData {
      font-size: 12px;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      position: relative;
      .searchEntries {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 150px;
        }
      }
    }
    .Lot {
      color: #3a99d8;
      text-decoration: underline;
      cursor: pointer;
      font-family: Poppins-Regular;
    }
    .flag {
      height: 16px;
      text-align: center;
      img {
        height: 100%;
        width: auto;
      }
    }
    .uploadExcel {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 12px;
        height: auto;
        vertical-align: bottom;
        margin-right: 6px;
      }
    }
    .excelDownloadBox {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .excelDownload {
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        margin-right: 9px;
        cursor: pointer;
        text-align: center;
        img {
          height: 16px;
          width: auto;
        }
      }
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
  }
}
.fileInput {
  position: absolute;
  left: -1000%;
}
</style>
<style lang="less">
.el-select-dropdown__item,
.el-picker-panel__shortcut {
  span {
    font-family: Poppins-Regular;
  }
}
th .cell {
  font-family: Poppins-Bold;
}
td .cell {
  font-family: Poppins-Regular;
}
.home {
  .homeDataOne {
    .el-date-editor .el-range-separator {
      padding: 0;
    }
    .el-select {
      margin-left: 32px;
    }
  }
  .homeDataThree {
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
}
</style>
