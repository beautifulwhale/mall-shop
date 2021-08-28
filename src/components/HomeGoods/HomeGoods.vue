<template>
  <div>
    <div class="goods">
      <home-goods-item
        v-for="(item, index) in goods"
        :goods-item="item"
        :key="index"
      ></home-goods-item>
    </div>
  </div>
</template>
<script>
import HomeGoodsItem from "@/components/HomeGoods/HomeGoodsItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    HomeGoodsItem
  }
};
</script>
<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  //   padding: 2px;
}
</style>