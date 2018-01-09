<template>
  <div class="mainOuter">
    <div id="mainOut" @mousewheel="fn" @DOMMouseScroll="fn1" ref="mainOut">
      <headerTop></headerTop>
      <div class="block" ref="block1">
        <el-carousel trigger="click">
          <el-carousel-item v-for="item in this.$store.state.nums" :key="item">
            <img :src=item>
            <span class="imgText"></span>
            <a href="javascript:;" class="imgA">了解课程</a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block">
        <el-carousel trigger="click">
          <el-carousel-item v-for="item in this.$store.state.nums" :key="item">
            <img :src=item>
            <span class="imgText"></span>
            <a href="javascript:;" class="imgA">查看详情</a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block">
        <el-carousel trigger="click">
          <el-carousel-item v-for="item in this.$store.state.nums" :key="item">
            <img :src=item>
            <span class="imgText"></span>
            <a href="javascript:;" class="imgA">了解课程</a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <footerBo></footerBo>
      <footerGuan></footerGuan>
    </div>
    <menuRi></menuRi>
  </div>

</template>

<script type="text/ecmascript-6">
  import headerTop from "../header/headerTop"
  import footerBo from "../footer/footerBo"
  import menuRi from "../menu/menu"
  import footerGuan from "../footerGuan/footerGuan"
  import $ from "jquery"
  let lunFire=0;
    export default {

      components:{
        headerTop,
        footerBo,
        menuRi,
        footerGuan
      },
      methods:{

       fn(event){
         this.$store.dispatch("fn")

       },
        fn1(ev){
         var ev=ev||window.ev;
          var event =event||window.event;
          let height1 = document.documentElement.clientHeight;
          if(ev.detail==-3){
            lunFire -=1
            if(lunFire<=0){
              lunFire=0;
            }
            console.log(height1,lunFire)
            $("#mainOut").css("top",-height1*lunFire)
          }else if(ev.detail==3){
            lunFire +=1;
            if(lunFire>=2){
              lunFire=2
            }
            $("#mainOut").css("top",-height1*lunFire)
          }
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.mainOuter
  width 100%
  height 100%
  overflow hidden
 #mainOut
   width 100%
   height 100%
   margin 0
   padding 0
   position: absolute
   top 0
   left 0
   transition 1s
  .block
    width 100%
    height 100%
    margin 0
    padding: 0;
    .el-carousel__container
      height 100%
      margin 0
      padding: 0;
    .el-carousel
      width 100%
      height 100%
      margin 0
      padding: 0;
      img
        width 100%
        height 100%
        margin 0
        padding: 0;
      .imgText
        display inline-block
        width 46.97%
        height 117px
        position absolute
        top 60%
        left 26.515%
        background url("../../../static/img/musicgo.png") no-repeat
        background-size 100% 100%
      .imgA
        display inline-block
        width 12.5%
        height 60px
        background url("../../../static/img/class/frame_knowme.png") no-repeat
        background-size 100% 100%
        font-size 24px
        color: #fff
        line-height 60px
        font-family: "NotoSansCJK-Bold";
        position absolute
        bottom 10%
        left 43.75%
        text-decoration none

</style>
