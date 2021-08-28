<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="iconfont icon-kefu"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="iconfont icon-dianpu"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="iconfont icon-shoucang"></i>
        <span class="text">收藏</span>
      </div>
    </div>

    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.15);
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .iconfont {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 0px;
}

.bar-left .icon-kefu {
  background-position: 0 -53px;
}

.bar-left .icon-dianpu {
  background-position: 0 -99px;
}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
}
</style>