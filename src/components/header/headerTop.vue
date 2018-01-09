<template>
  <section>
    <div id="header1">
      <template>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="8" :md="8" :lg="8" class="logo"><img src="../img/index/one/menu/logo.png" alt=""></el-col>
          <el-col :xs="8" :sm="8" :md="8" :lg="8">&nbsp;</el-col>
          <el-col :xs="8" :sm="8" :md="8" :lg="8">
            <div class="topMenu">
              <a href="javascript:;">简 &nbsp;</a>
              <span>|&nbsp;</span>
              <a href="javascript:;">EN &nbsp;</a>
              <span class="user">MY SPACE</span> &nbsp; &nbsp;
              <span class="topImg"><img src="../img/avatar.png"></span> &nbsp; &nbsp;
              <span class="button" v-if="this.$store.state.count" @click="showButtom"></span>
            </div>
          </el-col>
        </el-row>
      </template>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import $ from "jquery"


    export default {

      methods:{
        showButtom(){
          this.$store.dispatch("showButtom");
          let mainOut = $("#mainOut");
          mainOut.css("transform","translateZ(-100vw) translateX(-300px)");
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #header1
    height 77px
    position fixed
    /*background black*/
    top 54px
    left 0
    width 100%
    z-index 9
    .logo
      img
        width 23.28%
        margin-left -40%
    .topMenu
      float right
      margin-right 10%
      .button
        display inline-block
        width 25px
        height 25px
        background url("../img/index/one/menu/icon_menu.png") no-repeat
        background-size 100% 100%
        vertical-align middle
      a
        font-size 12px
        color #fff
        text-decoration none
        &:hover
          color: #fff
      span
        font-size 12
        color: #fff
        &:nth-of-type(1)
          font-weight bold
      .user
        display inline-block
        font-size 11px
        border-bottom 2px solid #fff
        font-family: "Montserrat-Bold";
      .topImg
        display inline-block
        vertical-align middle






</style>
