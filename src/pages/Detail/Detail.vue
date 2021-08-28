<template>
  <div id="detail">
    <!-- 导航 -->
    <nav-bar class="navbar">
      <div slot="left" @click="$router.back()">
        <i class="iconfont icon-huitui"></i>
      </div>
      <div slot="center" class="titlenav">
        <div
          class="title"
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in titles"
          :key="index"
          @click="titleClick(index)"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scrollBack="scrollBack"
      :probe-type="3"
    >
      <swiper-detail :swiper-data="swiperDataList"></swiper-detail>
      <detail-goods-info :goods="goods"></detail-goods-info>
      <detail-shop-info :shops="shops"></detail-shop-info>
      <detail-effect :users="users" @imgLoad="imgLoad"></detail-effect>
      <detail-params
        :goods-params="goodsParams"
        ref="detailparams"
      ></detail-params>
      <detail-rate :rate-list="rateList" ref="rate"></detail-rate>
      <detail-recommend
        :recommend-list="recommendList"
        ref="recommend"
      ></detail-recommend>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom @addCart="addCart"></detail-bottom>
  </div>
</template>
<script>
//引入子组件
import NavBar from "@/components/NavBar/NavBar";
import SwiperDetail from "@/pages/Detail/DetailChildren/SwiperDetail";
import DetailGoodsInfo from "@/pages/Detail/DetailChildren/DetailGoodsInfo";
import DetailShopInfo from "@/pages/Detail/DetailChildren/DetailShopInfo";
import Scroll from "@/components/Scroll/Scroll";
import DetailEffect from "@/pages/Detail/DetailChildren/DetailEffect";
import DetailParams from "@/pages/Detail/DetailChildren/DetailParams";
import BackTop from "@/components/BackTop/BackTop";
import DetailRate from "@/pages/Detail/DetailChildren/DetailRate";
import DetailRecommend from "@/pages/Detail/DetailChildren/DetailRecommend";
import DetailBottom from "@/pages/Detail/DetailChildren/DetailBottom";
import { debounce } from "../../common/utils";
//引入接口函数
import {
  getDetailList,
  goods,
  shops,
  getRecomendList
} from "../../network/detail";
import { imgLoadMixins } from "../../common/mixin";
import event from "@/plugin/event";
import {mapActions} from 'vuex'
export default {
  name: "detail",
  data() {
    return {
      goodItemId: null,
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      swiperDataList: [],
      goods: {},
      shops: {},
      users: {},
      goodsParams: {},
      isShowBackTop: false,
      rateList: {},
      recommendList: [],
      themeTopY: [],
      getThemeTopY: null
    };
  },
  created() {
    this.goodItemId = this.$route.params.id;
    this.getDetailList();
    this.getRecomendList();
    this.getThemeTopY = debounce(function() {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.detailparams.$el.offsetTop);
      this.themeTopY.push(this.$refs.rate.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
    });
  },
  methods: {
    ...mapActions({
      add_cart:'addCart'
    }),
    async getDetailList() {
      const result = await getDetailList(this.goodItemId);
      const data = result.result;
      this.swiperDataList = data.itemInfo.topImages;
      //商品信息
      this.goods = new goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //店铺信息
      this.shops = new shops(data.shopInfo);
      //用户穿着效果
      this.users = data.detailInfo;
      //商品参数
      this.goodsParams = data.itemParams;
      //评论
      this.rateList = data.rate;
    },
    async getRecomendList() {
      const res = await getRecomendList();
      this.recommendList = res.data.list;
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200);
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    addCart() {
      const product = {};
      product.image = this.swiperDataList[0];
      product.title = this.goods.title;
      product.discountDesc = this.goods.discountDesc;
      product.price = this.goods.lowNowPrice;
      product.goodItemId = this.goodItemId;
      this.$store.dispatch("addCart", product).then(res => {
        this.$toast.show(res,3000)
        console.log(res);
      });
      // this.add_cart(product).then(res=>console.log(res));
    },
    //返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 400);
    },
    scrollBack(position) {
      this.isShowBackTop = -position.y > 800;
      /**
       *[0, 4506, 5059, 5374, __ob__: Observer]
       * 1. 0-4506 4506-5059 5059-5374 第一种情况
       * 2. 5374+  第二种情况
       *
       */
      let length = this.themeTopY.length - 1;
      for (let i = 0; i <= length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length &&
            -position.y >= this.themeTopY[i] &&
            -position.y < this.themeTopY[i + 1]) ||
            (i === length && -position.y >= this.themeTopY[i]))
        ) {
          this.currentIndex = i;
        }
      }
    }
  },
  mixins: [imgLoadMixins],
  mounted() {},
  destroyed() {
    event.off("imgLoad", this.imgLoadListen);
  },
  components: {
    NavBar,
    SwiperDetail,
    DetailGoodsInfo,
    DetailShopInfo,
    Scroll,
    DetailEffect,
    DetailParams,
    BackTop,
    DetailRate,
    DetailRecommend,
    DetailBottom
  }
};
</script>
<style lang="less" scoped>
.iconfont {
  font-size: 15px;
  font-weight: bold;
  margin-left: 15px;
}
.titlenav {
  display: flex;
  .title {
    flex: 1;
    span {
      padding: 5px;
      font-size: 14px;
      text-align: center;
    }
  }
}
.active {
  color: var(--color-high-text);
}
#detail {
  height: 100vh;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
.navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>