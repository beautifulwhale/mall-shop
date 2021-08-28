<template>
  <div id="home">
    <!-- 底部组件 -->
    <foot-guide class="foot"></foot-guide>
    <!-- 导航组件 -->
    <nav-bar class="nav-bar">
      <div slot="center">小雨购物</div>
    </nav-bar>
    <tab-control
      :tabcontrolList="tabcontrolList"
      class="tag-control"
      v-show="isFixed"
      @tabClick="tabClick"
      ref="tabControl1"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollBack="scrollBack"
      :pull-up-load="true"
      @scorllPullUp="loadMoreGoods"
    >
      <!-- 轮播图组件 -->
      <swiper-item
        :banners="bannerList"
        @swiperImgLoad="swiperImgLoad"
      ></swiper-item>
      <!-- 分类组件 -->
      <home-recommend :recommends="recommendList"></home-recommend>
      <!-- 本周流行 -->
      <feature-view></feature-view>
      <!-- 样式切换 -->
      <tab-control
        :tabcontrolList="tabcontrolList"
        class="tagcontrol"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <!-- 商品 -->
      <home-goods :goods="goodsInfo"></home-goods>
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
</template>
<script>
import FootGuide from "@/components/FootGuide/FootGuide";
import NavBar from "@/components/NavBar/NavBar";
import SwiperItem from "@/pages/Home/HomeChildren/SwiperItem";
import HomeRecommend from "@/pages/Home/HomeChildren/HomeRecommend";
import FeatureView from "@/pages/Home/HomeChildren/FeatureView";
import TabControl from "@/components/TabControl/TabControl";
import HomeGoods from "@/components/HomeGoods/HomeGoods";
import Scroll from "@/components/Scroll/Scroll";
import BackTop from "@/components/BackTop/BackTop";
import event from "@/plugin/event";
import { getHomeBannerList, getHomeGoods } from "../../network/home";
import { debounce } from "../../common/utils";
import { imgLoadMixins } from "../../common/mixin";
export default {
  data() {
    return {
      bannerList: [],
      recommendList: [],
      tabcontrolList: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentGoods: "pop",
      isShowBack: false,
      tagcontrolTop: 0,
      isFixed: false,
      ScrollY: 0,
    };
  },
  computed: {
    goodsInfo() {
      return this.goods[this.currentGoods].list;
    }
  },
  created() {
    this.getHomeBannerList();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins: [imgLoadMixins],
  mounted() {},
  components: {
    FootGuide,
    NavBar,
    SwiperItem,
    HomeRecommend,
    FeatureView,
    TabControl,
    HomeGoods,
    Scroll,
    BackTop
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.ScrollY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.ScrollY = this.$refs.scroll.scroll.y;

    //离开时取消到事件总线
    event.off("imgLoad", this.imgLoadListen);
  },
  methods: {
    //获取轮播图和分类组件
    async getHomeBannerList() {
      const res = await getHomeBannerList();
      this.bannerList = res.data.banner.list;
      this.recommendList = res.data.recommend.list;
    },
    //根据类型获取商品
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    //切换tab来更新商品数据
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "new";
          break;
        case 2:
          this.currentGoods = "sell";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //通过位置判断回到顶部得图标显示隐藏
    scrollBack(position) {
      this.isShowBack = -position.y > 1000;
      this.isFixed = -position.y > this.tagcontrolTop;
    },
    //当滚动到底部时加载新数据
    loadMoreGoods() {
      this.getHomeGoods(this.currentGoods);
    },

    swiperImgLoad() {
      this.tagcontrolTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.$refs.tabControl2.$el.offsetTop)
    }
  }
};
</script>
<style lang="less" scoped>
#home {
  padding-bottom: 51px;
  position: relative;
  height: 100vh;
}
.foot {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/*
由于better-scroll的改变时更改translate属性，所以他被拉上去了
.fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
*/
.tag-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>