<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" @load="imgLoad" :key="showImage" />
    <div class="info">
      <div class="title">{{ goodsItem.title }}</div>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collectnum">❤ {{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
import event from "@/plugin/event";
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imgLoad() {
      event.emit("imgLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>
<style lang="less" scoped>
.goods-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
  img {
    width: 100%;
    height: 295px;
    border-radius: 5px;
  }
  .info {
    position: absolute;
    text-align: center;
    .title {
      width: 195px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 13px;
      color: rgb(92, 90, 90);
      margin-bottom: 5px;
    }
    .price {
      color: var(--color-tint);
      font-size: 15px;
    }
    .collectnum {
      color: red;
      font-size: 13px;
      margin-left: 40px;
    }
  }
}
</style>