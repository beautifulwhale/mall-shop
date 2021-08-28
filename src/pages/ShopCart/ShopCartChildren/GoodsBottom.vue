<template>
  <div class="cart-bottom">
    <div class="all-checked" @click="allClick">
      <check-button :is-checked="isAllChecked" />
      <span>全选</span>
    </div>

    <div class="all-count">合计:￥{{ totalPrice }}</div>
    <div class="settlement" @click='selletClick'>
      <span>去结算({{ sellectCartLength }})</span>
    </div>
  </div>
</template>
<script>
import CheckButton from "@/components/CheckButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((pre, item) => {
          return pre + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    isAllChecked() {
      if (this.$store.state.cartList.length === 0) {
        return false;
      } else {
        return !this.$store.state.cartList.filter(item => !item.checked).length;
        // return !this.$store.state.cartList.find(item => !item.checked);
        // return !this.$store.state.cartList.some(item => !item.checked);
      }
    },
    sellectCartLength() {
      return this.cartList.filter(item => item.checked).length;
    }
  },
  methods: {
    allClick() {
      if (this.isAllChecked) {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        });
        // for (let item of this.$store.state.cartList) {
        //   item.checked = false;
        // }
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        });
        //  for (let item of this.$store.state.cartList) {
        //   item.checked = true;
        // }
      }
    },
    selletClick(){
      if(this.cartList.length ===0){
        this.$toast.show('请添加商品在结算',3000)
      }
    }
  }
};
</script>
<style lang="less" scoped>
.cart-bottom {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 49px;
  background-color: #ecebeb;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  .all-checked,
  .all-count {
    flex: 3;
    display: flex;
    padding-left: 5px;
    justify-content: flex-start;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
  .settlement {
    height: 40px;
    flex: 2;
    text-align: center;
    line-height: 40px;
    color: white;
    background-color: var(--color-tint);
  }
}
</style>