<template>
    <div class="nav-home">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.nav-home{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .5);
    .left,.right{
        width: 60px;
    }
    .center{
        flex:1;
        text-align: center;
    }

}
</style>