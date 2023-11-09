<template>
    <div
      class="News"
      :style="{
        width: $store.state.showMenu === true ? '100%' : 'calc(100% - 181px)',
      }"
    >
      <AddGoods
        v-if="this.$route.query.type === 'AddGoods'"
        @getForm="getForm"
      ></AddGoods>
      <goodsPreview
        :form="form"
        v-if="this.$store.state.showNewsPreview"
      ></goodsPreview>
      <ManagingNews v-if="this.$route.query.type === 'GoodsManaging'"></ManagingNews>
    </div>
  </template>
  
  <script>
  import AddGoods from "./components/addGoods.vue";
  import goodsPreview from "./components/goodsPreview.vue";
  import ManagingNews from "./components/managingNews.vue";
  export default {
    components: { AddGoods, goodsPreview, ManagingNews },
    data() {
      return {
        form: {},
      };
    },
    created() {},
    methods: {
      getForm(data) {
        this.form = data;
      },
    },
  };
  </script>
  
  <style lang="less">
  .News {
    width: calc(100% - 181px);
    height: calc(100% - 57px);
    float: right;
    background-color: #f1f3f6;
    padding: 40px;
    overflow: auto;
    transition: all 0.5s;
    background-image: url(../../assets/linea_tiempo_fondo-2.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  </style>
  