<template>
    <div class="tagbaritem">
        <slot class="slotitem" name="top"></slot>
        <slot class="slotitem" name="bottom"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less" scoped>
.tagbaritem{
    width: 48px;
    height: 47px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: gray;
    .slotitem{
        flex: 1;
    }
}
</style>