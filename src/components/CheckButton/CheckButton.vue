<template>
  <div class="check-button" :class="{ yesCheck: isChecked }">
    <img src="../../assets/image/tick.svg" alt="check-button" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  width: 6vw;
  height: 6vw;
  border: 0.75vw solid #ccc;
  border-radius: 50%;
}
.check-button > img {
  display: block;
  width: 100%;
}
.yesCheck {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>