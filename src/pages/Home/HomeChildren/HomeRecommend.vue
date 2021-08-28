<template>
  <div class="recommend">
    <a class="recommenditem" v-for="item in recommends" :key="item.sort">
      <img :src="item.image" />
      <div class="title">{{ item.title }}</div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.recommend {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  border-bottom: 10px solid #eee;
  padding: 15px 0 20px 0;
  .recommenditem {
    img {
      width: 70px;
      height: 70px;
      background-color:#fff;
    }
    .title {
      padding-top: 8px;
      font-size: 14px;
      text-align: center;
      color: black;
    }
  }
}
</style>