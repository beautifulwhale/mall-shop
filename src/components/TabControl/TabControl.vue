<template>
  <div class="tabtitle">
    <div
      class="tabtitleitem"
      v-for="(item, index) in tabcontrolList"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="changeActive(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabcontrolList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    changeActive(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style lang="less" scoped>
.tabtitle {
  display: flex;
  line-height: 40px;
  .tabtitleitem {
    flex: 1;
    text-align: center;
    background-color: #fff;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px;
  }
}
</style>