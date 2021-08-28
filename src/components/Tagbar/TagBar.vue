<template>
  <div>
    <div class="tag-bar">
      <slot class="tag-item" name="left"></slot>
      <slot class="tag-item" name="center_one"></slot>
      <slot class="tag-item" name="center_two"></slot>
      <slot class="tag-item" name="right"></slot>
    </div>
  </div>
</template>
<script>
// import TagBarItem from '@/components/Tagbar/TagBarItem'
export default {
  // components:{
  //     TagBarItem
  // }
};
</script>

<style lang="less" scoped>
.tag-bar {
  width: 100%;
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2px rgba(100, 100, 100, 0.8);
  display: flex;
  justify-content: space-around;
}
</style>