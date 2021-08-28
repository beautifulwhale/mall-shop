<template>
  <div class="goods-cart">
    <goods-cart-item
      v-for="(item, index) in goods"
      :key="index"
      :product="item"
    ></goods-cart-item>
  </div>
</template>
<script>
import GoodsCartItem from "@/pages/ShopCart/ShopCartChildren/GoodsCartItem";
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
    GoodsCartItem
  }
};
</script>
<style lang="less" scoped>
</style>