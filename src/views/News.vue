<template>
  <div
    class="News"
    :style="{
      width: $store.state.showMenu === true ? '100%' : 'calc(100% - 181px)',
    }"
  >
    <AddNews
      v-if="this.$route.query.type === 'AddNews'"
      @getForm="getForm"
    ></AddNews>
    <NewsPreview
      :form="form"
      v-if="this.$store.state.showNewsPreview"
    ></NewsPreview>
    <ManagingNews v-if="this.$route.query.type === 'Managing'"></ManagingNews>
  </div>
</template>

<script>
import AddNews from "@/components/addNews.vue";
import NewsPreview from "@/components/newsPreview.vue";
import ManagingNews from "@/components/managingNews.vue";
export default {
  components: { AddNews, NewsPreview, ManagingNews },
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
  background-image: url(../assets/linea_tiempo_fondo-2.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
