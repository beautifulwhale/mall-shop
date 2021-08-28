<template>
  <div v-if="Object.keys(goodsParams).length !== 0" class="sizeinfo">
    <div class="size">
      <div
        class="sizes-detail"
        v-for="(table, index) in goodsParams.rule.tables"
        :key="index"
      >
        <div class="sizes" v-for="(tableitem, index) in table" :key="index">
          <span
            class="sizeitem"
            v-for="(item, index) in tableitem"
            :key="index"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
    <div class="goods-message">
      <div
        class="goods-item"
        v-for="(item, index) in goodsParams.info.set"
        :key="index"
      >
        <span class="key">{{ item.key }}</span>
        <span class="value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsParams: {
      type: Object
    }
  }
};
</script>
<style lang="less" scoped>
.sizeinfo{
  margin-bottom: 15px;
}
.size {
  width: 100%;
  margin-top: 15px;
  padding: 20px 10px 0 10px;
  background-color: #fff;
  .sizes-detail {
    width: 100%;
    .sizes {
      display: flex;
      align-items: center;
      border-bottom: 1px solid gainsboro;
      padding: 5px;
      span {
        flex: 1;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
.goods-message {
  width: 100%;
  background-color: #fff;
  padding: 0 35px;
  .goods-item {
    display: flex;
    padding: 5px;
    border-bottom: 1px solid gainsboro;
    .key {
      flex: 1;
      font-size: 14px;
    }
    .value {
      flex: 2;
      color: hotpink;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>