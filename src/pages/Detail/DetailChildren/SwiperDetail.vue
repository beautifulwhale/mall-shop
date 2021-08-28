<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="item" v-for="item in swiperData">
        <img :src="item" class="img"/>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  props: {
    swiperData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false, // 取消鼠标操作后的轮播暂停【无操作轮播继续】【参考链接1】
          stopOnLastSlide: false // 在最后一页停止
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
};
</script>
<style lang="less" scoped>
.swiper-slide{
    height: 300px;
    overflow: hidden;
    img{
      width: 100%;
    }
}
</style>