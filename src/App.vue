<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less" scoped>
</style>
