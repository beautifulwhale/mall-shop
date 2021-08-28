<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message, time = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, time);
    }
  }
};
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.65);
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
}
</style>






