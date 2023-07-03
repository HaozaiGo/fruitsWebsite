<template>
  <div class="lotDetail">
    <div class="lotDeatilBox">
      <div class="lotDetailTitle">
        <h4>Lot Detail</h4>
        <span>Report Summary.</span>
      </div>
      <div class="lotChart">
        <VuePerfectScrollbar class="lotDataOne">
          <dl>
            <!-- <dt>Temp Avg</dt>
            <dd></dd> -->
            <dt>Net Weight Avg</dt>
            <dd>{{ $store.state.detailData.netWeightAvg }}</dd>
            <dt>Defects Summary</dt>
            <dd>
              {{ defectsSummary }}
            </dd>
            <dt>Main Defects</dt>
            <dd>{{ $store.state.detailData.mainDefects }}</dd>
          </dl>
        </VuePerfectScrollbar>

        <div class="lotDataTwo"><div class="charts" ref="chart"></div></div>
      </div>
      <div class="detailBtn">
        <div class="close" @click="closeLotDetail">close</div>
        <div class="goDetail" @click="goDetail">More info</div>
      </div>
    </div>
  </div>
</template>

<script>
let Echarts = require("echarts/lib/echarts");
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  props: {
    getNetWeightsAvg: {
      type: Function,
    },
    getMainDefects: {
      type: Function,
    },
    getTotalDefects: {
      type: Function,
    },
  },
  components: {
    VuePerfectScrollbar,
  },
  data() {
    return {};
  },
  computed: {
    sumOfTotalDefectsList() {
      return this.$store.state.sumOfTotalDefectsList;
    },
    defectsSummary() {
      let defectsSummary = "";
      let detailData = this.$store.state.detailData;
      defectsSummary = this.computedDefectsSummary(detailData);

      return defectsSummary.substring(0, defectsSummary.length - 1);
    },
  },
  created() {
    this.getNetWeightsAvg();
    this.getMainDefects();
    this.getTotalDefects();
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.chart.resize();
    });
  },
  methods: {
    init() {
      //2.初始化
      this.chart = Echarts.init(this.$refs.chart);
      let defectData = [
        { value: 0, name: "Excellent" },
        { value: 0, name: "Good" },
        { value: 0, name: "Fair" },
        { value: 0, name: "Poor" },
        { value: 0, name: "Bad" },
      ];
      for (let i = 0; i < this.sumOfTotalDefectsList.length; i++) {
        if (this.sumOfTotalDefectsList[i] < 10) {
          defectData[0].value++;
        } else if (this.sumOfTotalDefectsList[i] < 20) {
          defectData[1].value++;
        } else if (this.sumOfTotalDefectsList[i] < 30) {
          defectData[2].value++;
        } else if (this.sumOfTotalDefectsList[i] < 41) {
          defectData[3].value++;
        } else {
          defectData[4].value++;
        }
      }

      let colorList = ["#1f6cad", "#25AE5F", "#dfd545", "#da742c", "#da222e"];
      let defectData2 = [];
      let colorList2 = [];
      for (let i = 0; i < defectData.length; i++) {
        if (defectData[i].value !== 0) {
          defectData2.push(defectData[i]);
          colorList2.push(colorList[i]);
        }
      }

      defectData = defectData.filter((item, index) => {
        if (item.value === 0) {
          colorList.splice(index, 1);
        }
        return item.value != 0;
      });

      //3.配置数据
      let option = {
        tooltip: {
          trigger: "item",
        },

        legend: {
          orient: "vertical",
          right: "10%",
          top: "center",
        },
        series: [
          {
            name: "Report Summary",
            type: "pie",
            radius: ["60%", "35%"],
            center: ["30%", "center"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 0,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%",
                textStyle: {
                  align: "center",
                  baseline: "middle",
                  fontFamily: "微软雅黑",
                  fontSize: 12,
                  fontWeight: "bold",
                },
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: defectData2,
            color: colorList2,
          },
        ],
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
    closeLotDetail() {
      this.$store.commit("setShowLotDetail", false);
    },
    goDetail() {
      this.$router.push({
        path: "/detail",
        query: { lotId: this.$store.state.containerDetail.containerId },
      });
      this.$store.commit("setLeftNavSelect", 1);
      this.$store.commit("setShowLotDetail", false);
    },
  },
};
</script>

<style lang="less">
.lotDetail {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  //   display: none;
  .lotDeatilBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 880px;
    .lotDetailTitle {
      background-color: #f7f9fa;
      height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;
      border-bottom: 1px solid #e5e5e5;
      h4 {
        color: #25ae5f;
        font-size: 26px;
        // font-family: Poppins-Regular;
        font-family: Poppins-Bold;
      }
      span {
        color: #9d9fa2;
        font-size: 12px;
        font-family: Poppins-Regular;
        // font-family: Poppins-Bold;
      }
    }
    .lotChart {
      display: flex;
      margin-bottom: 20px;
      max-height: 380px;
      height: 380px;
      .lotDataOne,
      .lotDataTwo {
        flex: 1;
        .charts {
          width: 100%;
          height: 100%;
        }
      }
      .lotDataOne {
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 20px;
        border-right: 1px solid #e5e5e5;
        overflow: auto;
        dl {
          font-size: 12px;
          width: 50%;
          color: #333;
          dt {
            font-family: Poppins-Regular;
            // font-family: Poppins-Bold;
          }
          dd {
            margin-bottom: 19px;
            font-weight: 700;
            // font-family: Poppins-Regular;
            font-family: Poppins-Bold;
          }
        }
      }
    }
    .detailBtn {
      height: 75px;
      border-top: 1px solid #e5e5e5;
      background-color: #f7f9fa;
      display: flex;
      align-items: center;
      justify-content: right;
      padding-right: 15px;
      .close,
      .goDetail {
        padding: 9px 12px;
        border-radius: 5px;
        cursor: pointer;
        font-family: Poppins-Regular;
        // font-family: Poppins-Bold;
      }
      .close {
        border: 1px solid #e5e5e5;
        color: #333;
        background-color: #fff;
      }
      .goDetail {
        background-color: #35495d;
        color: #fff;
        margin-left: 10px;
      }
    }
  }
}
</style>
