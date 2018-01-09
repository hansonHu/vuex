<template>
    <section class="footerGuan" v-if="this.$store.state.guan">
      <el-row :gutter="10">
        <el-col  :xs="12" :sm="12" :md="12" :lg="12" class="guangLeft">
          <img src="../img/index/one/banner/FirstTry.png">
          <a href="javascript:;">免费体验</a>
        </el-col>
        <el-col  :xs="12" :sm="12" :md="12" :lg="12" class="guangRight">
          <img src="../img/index/one/banner/SPACEShop.png">
          <a href="javascript:;">进入商城</a>
        </el-col>
        <span class="closeGuan" @click="closeGuan"></span>
      </el-row>
    </section>
</template>

<script type="text/ecmascript-6">
    export default {

      methods:{
        closeGuan(){
          this.$store.dispatch("closeGuan")
        }

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerGuan
    width 100%
    margin 0!important
    padding 0
    height 120px
    position fixed
    bottom 0
    left 0
    z-index 99
    .guangLeft
      margin 0
      padding 0!important
      height 120px
      background url("../img/index/one/banner/banner1.png") no-repeat
      background-size 100% 100%
      position relative
      img
        width 25.45%
        height 34px
        position absolute
        left 5.29%
        top 43px
      a
        position absolute
        left 0
        right 0
        bottom 0
        top 0
        margin auto
        display inline-block
        width 15.62%
        font-size 18px
        text-align center
        height 50px
        line-height 50px
        background url("../img/index/one/banner/frame_jinru.png") no-repeat
        background-size 100% 100%
        color: #ffffff
        text-decoration none
    .guangRight
      margin 0
      padding 0!important
      height 120px
      background url("../img/index/one/banner/banner2.png") no-repeat
      background-size 100% 100%
      position relative
      img
        width 25.45%
        height 34px
        position absolute
        left 5.29%
        top 43px
      a
        position absolute
        left 0
        right 0
        bottom 0
        top 0
        margin auto
        display inline-block
        width 15.62%
        font-size 18px
        text-align center
        height 50px
        line-height 50px
        background url("../img/index/one/banner/frame_jinru.png") no-repeat
        background-size 100% 100%
        color: #ffffff
        text-decoration none
  .closeGuan
    display inline-block
    width 32px
    height 32px
    background url("../img/index/one/banner/icon_close.png") no-repeat
    background-size 100% 100%
    position absolute
    top 44px
    right 3.64%


</style>
