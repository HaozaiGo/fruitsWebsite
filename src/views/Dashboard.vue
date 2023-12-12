<template>


  <div class="dashboard" :style="{
    width: $store.state.showMenu === true ? '100%' : 'calc(100% - 181px)',
  }">
    <el-button style="position: fixed;right: 30px;">退出登陆</el-button>
    <iframe :src="iframeUrl" frameborder="0" ref="iframes" id="iFrame"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeUrl: "",
      tableList: [
        { table: "PowerBi", iframeUrl: "https://app.powerbi.com/reportEmbed?reportId=fc0d93c9-b654-4d6a-b044-b97b7cb0d874&autoAuth=true&ctid=ba749e9d-562f-44cf-9c08-ff614d3f8e23" },
        { table: "PowerBi1", iframeUrl: "https://app.powerbi.com/reportEmbed?reportId=70c2c1f2-f2d8-466c-8531-07dda06a624a&autoAuth=true&ctid=ba749e9d-562f-44cf-9c08-ff614d3f8e23" },

        {
          table: "CherryWorld",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/Conection/CherryWorld?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
        {
          table: "ActualSelling",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/CherryBest/ActualSelling?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },

        {
          table: "Comparatives",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/CherryBest/Comparatives?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },

        {
          table: "BRAND",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/Cherry_Prices_1_1/M_PricesBRAND?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },

        {
          table: "VARIETY",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/Cherry_Prices_1_1/M_PricesVARIETY?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },

        {
          table: "CITY",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/Cherry_Prices_1_1/M_PricesCITY?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },

        {
          table: "FOBRETURN",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/Cherry_Prices_1_1/FOBRETURN?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
        {
          table: "QCSummary",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/Cherry_Prices_1_1/QCSummary?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
        {
          table: "BUDGETREAL",
          iframeUrl:
            "https://prod-apnortheast-a.online.tableau.com/t/svafruits/views/Cherry_Prices_1_1/BUDGETREAL?:embed=y&:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link",
        },
      ],
    };
  },
  mounted() {
    for (let i = 0; i < this.tableList.length; i++) {
      if (this.$route.query.table === this.tableList[i].table) {
        this.iframeUrl = this.tableList[i].iframeUrl;

        break;
      }
    }
  },
  watch: {
    $route() {
      for (let i = 0; i < this.tableList.length; i++) {
        if (this.$route.query.table === this.tableList[i].table) {
          this.iframeUrl = this.tableList[i].iframeUrl;

          break;
        }
      }
    },
  },
};
</script>

<style lang="less">
.dashboard {
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

  &::-webkit-scrollbar {
    display: none;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
