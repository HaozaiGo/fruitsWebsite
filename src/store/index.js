import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 是否显示左侧导航
    showMenu: false,
    showLotDetail: false,
    // 左侧导航选中
    leftNavSelect: 0,
    // 子菜单表格选中
    childrenTableSelect: 0,
    childrenNewsSelect: 0,
    containerDetail: "",
    detailData: {
      netWeightAvg: 0,
      bloomAvg: 0,
      decayAvg: 0,
      moldAvg: 0,
      sensitiveAvg: 0,
      shrivelingAvg: 0,
      softAvg: 0,
      mainDefects: "",
      //
      bitterPitAvg: 0,
      braeburnMarkAvg: 0,
      bruisesAvg: 0,
      coreRotAvg: 0,
      corkAvg: 0,
      crackingAvg: 0,
      discolorationAvg: 0,
      firmRipeAvg: 0,
      freezingDamageAvg: 0,
      groundColorGreenAvg: 0,
      groundColorTurningAvg: 0,
      groundColorYellowAvg: 0,
      hailDamageAvg: 0,
      insectDamageAvg: 0,
      internalBreakdownAvg: 0,
      internalBrowningAvg: 0,
      lenticelBreakdownAvg: 0,
      mechanicalDamageAvg: 0,
      misshapenAvg: 0,
      missizeAvg: 0,
      moldAvg: 0,
      punctureAvg: 0,
      russetAvg: 0,
      scaldAvg: 0,
      scarsAvg: 0,
      sunBurnAvg: 0,
      waterCoreAvg: 0,
      woundsAvg: 0,
    },
    sumOfTotalDefectsList: [],
    userInfo: {
      name: "",
      username: "",
      role: "",
    },
    // 新闻预览页面
    showNewsPreview: false,
  },
  mutations: {
    setUserInfo(state, val) {
      state.userInfo.name = val.name;
      state.userInfo.username = val.username;
      state.userInfo.role = val.role;
    },
    setShowMenu(state, val) {
      state.showMenu = val;
    },
    setShowLotDetail(state, val) {
      state.showLotDetail = val;
    },
    setLeftNavSelect(state, val) {
      state.leftNavSelect = val;
    },
    setChildrenTableSelect(state, val) {
      state.childrenTableSelect = val;
    },
    setChildrenNewsSelect(state, val) {
      state.childrenNewsSelect = val;
    },
    setContainerDetail(state, val) {
      state.containerDetail = val;
    },
    setNetWeightAvg(state, val) {
      state.detailData.netWeightAvg = val.netWeightAvg.toFixed(2);
      state.detailData.bloomAvg = (val.bloomAvg * 100).toFixed(2) + "%";
      state.detailData.decayAvg = (val.decayAvg * 100).toFixed(2) + "%";
      state.detailData.moldAvg = (val.moldAvg * 100).toFixed(2) + "%";
      state.detailData.sensitiveAvg = (val.sensitiveAvg * 100).toFixed(2) + "%";
      state.detailData.shrivelingAvg =
        (val.shrivelingAvg * 100).toFixed(2) + "%";
      state.detailData.softAvg = (val.softAvg * 100).toFixed(2) + "%";
      //
      state.detailData.groundColorGreenAvg =
        (val.groundColorGreenAvg * 100).toFixed(2) + "%";
      state.detailData.groundColorTurningAvg =
        (val.groundColorTurningAvg * 100).toFixed(2) + "%";
      state.detailData.groundColorYellowAvg =
        (val.groundColorYellowAvg * 100).toFixed(2) + "%";
      state.detailData.bitterPitAvg = (val.bitterPitAvg * 100).toFixed(2) + "%";
      state.detailData.braeburnMarkAvg =
        (val.braeburnMarkAvg * 100).toFixed(2) + "%";
      state.detailData.bruisesAvg = (val.bruisesAvg * 100).toFixed(2) + "%";
      state.detailData.coreRotAvg = (val.coreRotAvg * 100).toFixed(2) + "%";
      state.detailData.corkAvg = (val.corkAvg * 100).toFixed(2) + "%";
      state.detailData.crackingAvg = (val.crackingAvg * 100).toFixed(2) + "%";
      state.detailData.discolorationAvg =
        (val.discolorationAvg * 100).toFixed(2) + "%";
      state.detailData.firmRipeAvg = (val.firmRipeAvg * 100).toFixed(2) + "%";
      state.detailData.freezingDamageAvg =
        (val.freezingDamageAvg * 100).toFixed(2) + "%";
      state.detailData.hailDamageAvg =
        (val.hailDamageAvg * 100).toFixed(2) + "%";
      state.detailData.insectDamageAvg =
        (val.insectDamageAvg * 100).toFixed(2) + "%";
      state.detailData.internalBreakdownAvg =
        (val.internalBreakdownAvg * 100).toFixed(2) + "%";
      state.detailData.internalBrowningAvg =
        (val.internalBrowningAvg * 100).toFixed(2) + "%";
      state.detailData.lenticelBreakdownAvg =
        (val.lenticelBreakdownAvg * 100).toFixed(2) + "%";
      state.detailData.mechanicalDamageAvg =
        (val.mechanicalDamageAvg * 100).toFixed(2) + "%";
      state.detailData.misshapenAvg = (val.misshapenAvg * 100).toFixed(2) + "%";
      state.detailData.missizeAvg = (val.missizeAvg * 100).toFixed(2) + "%";
      state.detailData.punctureAvg = (val.punctureAvg * 100).toFixed(2) + "%";
      state.detailData.russetAvg = (val.russetAvg * 100).toFixed(2) + "%";
      state.detailData.scaldAvg = (val.scaldAvg * 100).toFixed(2) + "%";
      state.detailData.scarsAvg = (val.scarsAvg * 100).toFixed(2) + "%";
      state.detailData.sunBurnAvg = (val.sunBurnAvg * 100).toFixed(2) + "%";
      state.detailData.waterCoreAvg = (val.waterCoreAvg * 100).toFixed(2) + "%";
      state.detailData.woundsAvg = (val.woundsAvg * 100).toFixed(2) + "%";
      state.detailData.lackOfColorAvg = (val.lackOfColorAvg * 100).toFixed(2) + "%";
      state.detailData.noStemAvg = (val.noStemAvg * 100).toFixed(2) + "%";
      state.detailData.pittingAvg = (val.pittingAvg * 100).toFixed(2) + "%";
      state.detailData.dryStemAvg = (val.dryStemAvg * 100).toFixed(2) + "%";
      state.detailData.flavorChangedAvg = (val.flavorChangedAvg * 100).toFixed(2) + "%";
    },
    setMainDefects(state, val) {
      state.detailData.mainDefects = val;
    },
    setSumOfTotalDefectsList(state, val) {
      state.sumOfTotalDefectsList = val;
      for (let i = 0; i < state.sumOfTotalDefectsList.length; i++) {
        state.sumOfTotalDefectsList[i] = (
          state.sumOfTotalDefectsList[i] * 100
        ).toFixed(2);
      }
    },
    setShowNewsPreview(state, val) {
      state.showNewsPreview = val;
    },
  },
  actions: {},
  modules: {},
});
