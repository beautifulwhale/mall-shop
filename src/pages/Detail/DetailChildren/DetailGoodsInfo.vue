<template>
  <div class="goods-info" v-if="Object.keys(goods).length !== 0">
    <div class="title">
      {{ goods.title }}
    </div>
    <div class="price">
      <div class="now-price">{{ goods.price }}</div>
      <div class="old-price" v-show="goods.oldPrice">{{ goods.oldPrice }}</div>
      <div class="discount" v-show="goods.discountDesc">
        {{ goods.discountDesc }}
      </div>
    </div>
    <div class="sale-message">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="service">
      <div
        class="service-info"
        v-for="item in goods.services.length - 1"
        :key="item"
      >
        <img :src="goods.services[item - 1].icon" />
        <span>{{ goods.services[item - 1].name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.goods-info {
  height: 160px;
  padding: 6px;
  background-color: #fff;
  .title {
    font-size: 15px;
    font-weight: 550;
  }
  .price {
    margin-top: 5px;
    width: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .now-price {
      color: rgb(240, 24, 132);
      font-size: 19px;
    }
    .old-price {
      font-size: 12px;
      color: grey;
      text-decoration: line-through;
      margin-top: 5px;
      margin: 0 5px;
    }
    .discount {
      width: 60px;
      height: 25px;
      background-color: hotpink;
      color: white;
      border-radius: 15px;
      font-size: 13px;
      font-weight: bold;
      line-height: 25px;
      text-align: center;
    }
  }
  .sale-message {
    display: flex;
    justify-content: space-between;
    color: rgb(170, 169, 169);
    font-size: 13px;
    margin-top: 15px;
  }
  .service {
    // border-bottom: 5px solid gray;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    .service-info {
      // flex: 1;
      img {
        width: 12px;
        height: 12px;
        margin-right: -4px;
        padding-top: 1px;
      }
      span {
        font-size: 13px;
      }
    }
  }
}
</style>