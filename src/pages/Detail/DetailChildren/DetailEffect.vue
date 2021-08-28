<template>
  <div v-if="Object.keys(users).length !== 0" class="detail-info">
    <div class="desc">
      {{ users.desc }}
    </div>
    <div class="left"></div>
    <div class="effect">{{ users.detailImage[0].key }}</div>
    <div class="right"></div>
    <div
      class="imgs"
      v-for="(item, index) in users.detailImage[0].list"
      :key="index"
    >
      <img :src="item" @load="imgload" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    users: {
      type: Object
    }
  },
  data() {
    return {
      count: 0,
      detailImgNum: 0
    };
  },
  methods: {
    imgload() {
      //采用节流的思想,让图片加载完成之后再发送事件
      // if (++this.count === this.detailImgNum) {}
        this.$emit("imgLoad");      
    }
  },
  watch: {
    detailInfo() {
      this.detailImgNum = this.users.detailImage[0].list.length;
    }
  }
};
</script>
<style lang="less" scoped>
.detail-info {
  width: 100%;
  margin-top: 20px;
  background-color: #fff;
  padding: 5px;
  .desc {
    font-size: 14px;
    font-weight: 600;
  }
  // .left{
  //     width: 40%;
  //     height: 5px;
  //     color: black;
  // }
  .effect {
    font-size: 18px;
    color: hotpink;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 5px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .imgs {
    padding: 10px;
    height: 330px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>