<template>
  <div class="list-item">
    <!-- 是否选中图标 -->
    <div class="item-selector">
      <check-button
        class="ck-button"
        :isChecked="product.checked"
        @click.native="checkClick"
      />
    </div>
    <!-- 左边 -->
    <div class="item-img">
      <div class="div-img">
        <img :src="product.image" />
      </div>
    </div>
    <!-- 右边 -->
    <div class="item-right">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">商品描述：{{ product.discountDesc }}</div>

      <div class="item-price-count">
        <span class="item-price">¥{{ product.price }}</span>
        <span class="item-count">×{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from "@/components/CheckButton/CheckButton";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    }
  }
};
</script>
<style lang="less" scoped>
.list-item {
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  width: 25vw;
  height: 30vw;
}
.item-img .div-img {
  width: 95%;
  height: 95%;
  margin: 2.5% 2.5%;
  border-radius: 5px;
  overflow: hidden;
}
.item-img img {
  width: 100%;
  vertical-align: top;
}
.item-right {
  width: 62.5vw;
  height: 30vw;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc {
  font-size: 14px;
  color: #666;
}
.item-price-count {
  display: flex;
  justify-content: space-between;
}
.item-price {
  color: orangered;
}
.ck-button {
  flex: none;
}
</style>