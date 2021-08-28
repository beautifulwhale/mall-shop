<template>
  <div id="shopcart">
    <!-- 首部导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content">
      <goods-cart :goods="cartList"></goods-cart>
    </scroll>
    <goods-bottom></goods-bottom>
    <!-- 底部导航 -->
    <foot-guide></foot-guide>
  </div>
</template>
<script>
import FootGuide from "@/components/FootGuide/FootGuide";
import NavBar from "@/components/NavBar/NavBar";
import GoodsCart from "@/pages/ShopCart/ShopCartChildren/GoodsCart";
import Scroll from "@/components/Scroll/Scroll";
import GoodsBottom from '@/pages/ShopCart/ShopCartChildren/GoodsBottom'
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  },
  components: {
    FootGuide,
    NavBar,
    GoodsCart,
    Scroll,
    GoodsBottom
  }
};
</script>
<style lang="less" scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  z-index: 9;
}
#shopcart {
  height: 100vh;
}
.content {
  height: calc(100% - 93px - 40px);
  overflow: hidden;
  background-color: #fff;
}
</style>