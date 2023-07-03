<template>
  <div class="global">
    <Login />
  </div>
</template>

<script>
import Login from "@/views/Login.vue";
export default {
  components: {
    Login,
  },
  created() {},
};
</script>

<style lang="less">
.global {
  padding-top: 76.8px;
}
@media (max-width: 1200px) {
  .global {
    padding-top: 73.6px;
  }
}
@media (max-width: 768px) {
  .global {
    padding-top: 55px;
  }
}
</style>
