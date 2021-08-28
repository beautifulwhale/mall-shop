<template>
  <div class="rate-info" v-if="Object.keys(rateList).length !== 0">
    <div class="user">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="rate">
      <div class="user-info">
        <img :src="rateList.list[0].user.avatar" />
        <span>{{ rateList.list[0].user.uname }}</span>
      </div>
      <div class="content">{{ rateList.list[0].content }}</div>
      <div class="time-size">
        <span>{{ formatTime }}</span>
        <span>{{ rateList.list[0].style }}</span>
      </div>
      <div
        class="shopimg"
        v-for="(item, index) in rateList.list[0].images"
        :key="index"
      >
        <img :src="item" />
      </div>
    </div>
  </div>
</template>
<script>
import { format } from "../../../common/utils";
export default {
  props: {
    rateList: {
      type: Object
    }
  },
  computed: {
    formatTime() {
      let data = new Date(this.rateList.list[0].created * 1000);
      return data.format("yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>
<style lang="less" scoped>
.rate-info {
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  padding: 10px;
  height: 300px;
  .user {
    width: 100%;
    border-bottom: 2px solid gainsboro;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 15px;
    }
  }
  .rate {
    width: 100%;
    padding: 8px;
    .user-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
      span {
        text-align: center;
      }
    }
    .content {
      width: 100%;
      padding: 15px 0;
      font-size: 14px;
    }
    .time-size {
      font-size: 13px;
      color: rgb(160, 160, 160);
      span {
        margin-right: 5px;
      }
    }
    .shopimg {
      width: 70px;
      height: 70px;
      margin-top: 10px;
      float: left;
      margin-right: 10px;
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>