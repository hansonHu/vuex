<template>
  <section class="footerHan">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" class="footerLeft">
        <div  >
          <span> ©SPACE Concepts All Rights Reserved&nbsp;&nbsp;</span>
          <a href="javascript:;">| CONTACT US</a>
        </div>

      </el-col>
      <el-col  :xs="8" :sm="8" :md="8" :lg="8">&nbsp;</el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" class="footerRight">
        <div >
          <span class="share-text">share&nbsp;&nbsp;</span>
          <span class="share">&nbsp;|&nbsp;&nbsp;&nbsp;</span>
          <ul class="share-some">
            <li><a href="javascript:;"></a></li>&nbsp;
            <li><a href="javascript:;"></a></li>&nbsp;
            <li><a href="javascript:;"></a></li>&nbsp;
            <li><a href="javascript:;"></a></li>&nbsp;
            <li><a href="javascript:;"></a></li>
          </ul>
          <span class="sound">sound&nbsp;&nbsp;</span>
          <span class="wave"><img src="../img/music.png"></span>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerHan
    position fixed
    left 0
    bottom 30px
    z-index 9
    width 100%
    .footerLeft
      font-size 12px
      color: #fff
      height 38px
      line-height 38px
      a
        color: #ffffff
        text-decoration none
        padding-left: 33px;
        background-image: url(../img/mail.png);
        background-repeat: no-repeat;
        background-position: left center;
    .footerRight
      color #fff
      font-size 14px
      ul
        list-style none
        display inline-block
        padding-left 0
        margin 0
        li
          float left
          width 32px
          height 32px
          margin 0 auto
          &:nth-of-type(1) a
            display inline-block
            width 100%
            height 100%
            background: url(../img/weibo1.png) no-repeat;
          &:nth-of-type(2) a
            display inline-block
            width 100%
            height 100%
            background: url(../img/Facebook1.png) no-repeat;
          &:nth-of-type(3) a
            display inline-block
            width 100%
            height 100%
            background: url(../img/twitter1.png) no-repeat;
          &:nth-of-type(4) a
            display inline-block
            width 100%
            height 100%
            background: url(../img/instagram1.png) no-repeat;
          &:nth-of-type(5) a
            display inline-block
            width 100%
            height 100%
            background: url(../img/weibo1.png) no-repeat;
      .sound
        margin-left -20px




</style>
