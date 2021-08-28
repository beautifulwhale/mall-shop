<template>
  <div v-if="Object.keys(recommendList).length !== 0">
    <home-goods :goods="recommendList"></home-goods>
  </div>
</template>
<script>
import HomeGoods from "@/components/HomeGoods/HomeGoods";
export default {
  props: {
    recommendList: {
      type: Array
    }
  },
  components: {
    HomeGoods
  }
};
</script>
<style lang="less" scoped>
</style>