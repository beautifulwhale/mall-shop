<template>
  <div class="shop-info">
    <!-- 商家头像 -->
    <div class="avtor">
      <img :src="shops.shopLogo" />
      <span>{{ shops.name }}</span>
    </div>
    <div class="shop-message">
      <div class="sell-baby">
        <div class="sell">
          <div class="sellnum">{{ shops.cSells }}</div>
          <div class="allsell">总销量</div>
        </div>
        <div class="goods">
          <div class="cgoods">{{ shops.cGoods }}</div>
          <div class="allgoods">全部宝贝</div>
        </div>
      </div>
      <div class="score-info">
        <div class="score" v-for="(item, index) in shops.score" :key="index">
          <span>{{ item.name }}</span>
          <span>{{ item.score }}</span>
          <span :class="{ top: item.isBetter === true }" v-if="item.isBetter"
            >高</span
          >
          <span :class="{ low: item.isBetter === false }" v-else>低</span>
        </div>
      </div>
      <div class="comeonshop">
        <span>进店逛逛</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shops: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.shop-info {
  width: 100%;
  height: 240px;
  margin-top: 20px;
  background-color: #fff;
  .avtor {
    width: 100%;
    height: 70px;
    padding-left: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    span {
      text-align: center;
      font-size: 14px;
      margin: 15px 10px;
    }
  }
  .shop-message {
    width: 100%;
    height: 200px;
    padding: 30px 20px 0;
    // display: flex;
    // justify-content: space-around;
    .sell-baby {
      width: 50%;
      height: 35.4px;
      float: left;
      display: flex;
      justify-content: space-around;
      border-right: 2px solid rgb(223, 220, 220);
      .sell {
        .sellnum {
          font-size: 15px;
          margin-bottom: 5px;
          text-align: center;
        }
        .allsell {
          font-size: 12px;
          color: rgb(95, 95, 95);
          text-align: center;
        }
      }
      .goods {
        .cgoods {
          font-size: 15px;
          margin-bottom: 5px;
          text-align: center;
        }
        .allgoods {
          font-size: 12px;
          color: rgb(95, 95, 95);
          text-align: center;
        }
      }
    }
    .score-info {
      width: 50%;
      height: 100px;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      padding-left: 20px;
      margin-top: -25px;
      .score {
        font-size: 13px;
        width: 120px;
        display: flex;
        justify-content: space-between;
        .low {
          background-color: greenyellow;
          color: white;
        }
        .top {
          background-color: rgb(248, 12, 12);
          color: white;
        }
      }
    }
    .comeonshop {
      margin: 10px auto;
      text-align: center;
      width: 100px;
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      color: rgb(155, 154, 154);
      border-radius: 10px;
      background-color: rgb(238, 238, 238);
    }
  }
}
</style>