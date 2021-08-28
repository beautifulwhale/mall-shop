<template>
  <div>
    <TagBar>
      <router-link to="/home" slot="left">
        <TagBarItem
          :style="{ color: '/home' === $route.path ? 'palevioletred' : 'gray' }"
        >
          <i class="iconfont icon-index-copy" slot="top"></i>
          <span slot="bottom">首页</span>
        </TagBarItem>
      </router-link>
      <router-link to="/category" slot="center_one">
        <TagBarItem
          :style="{
            color: '/category' === $route.path ? 'palevioletred' : 'gray'
          }"
        >
          <i class="iconfont icon-leimupinleifenleileibie2" slot="top"></i>
          <span slot="bottom">分类</span>
        </TagBarItem>
      </router-link>
      <router-link to="/shopcart" slot="center_two">
        <TagBarItem
          :style="{
            color: '/shopcart' === $route.path ? 'palevioletred' : 'gray'
          }"
        >
          <i class="iconfont icon-gouwu" slot="top"></i>
          <span slot="bottom">购物</span>
        </TagBarItem>
      </router-link>
      <router-link to="/profile" slot="right">
        <TagBarItem
          :style="{
            color: '/profile' === $route.path ? 'palevioletred' : 'gray'
          }"
        >
          <i class="iconfont icon-wode" slot="top"></i>
          <span slot="bottom">我的</span>
        </TagBarItem>
      </router-link>
    </TagBar>
  </div>
</template>
<script>
import TagBar from "@/components/Tagbar/TagBar";
import TagBarItem from "@/components/Tagbar/TagBarItem";
export default {
  components: {
    TagBar,
    TagBarItem
  }
};
</script>
<style lang="less" scoped>
</style>