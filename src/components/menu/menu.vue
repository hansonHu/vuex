<template>
  <section id="menu1" v-if="this.$store.state.menu">
   <div>
        <span class="closeMenu" @click="closeMenu"></span>
        <div class="changCity">
          <span ref="changeCity" @click="clickChange">切换城市</span>
          <span ref="cityIn" @click="clickCity" class="cityActived">SHANGHAI</span>
        </div>
        <ul class="menuList" v-if="this.$store.state.city">
          <li v-for="(item,index) in this.$store.state.menuList" ref="index" class="clearfix">
            <a href="javascript:;" :class={active:item.isActived} @click="clickIn(index)" class="clearfix">
              <span class="heng"></span>&nbsp;&nbsp;&nbsp;
              <span class="firstName">{{item.name}}</span>
              <span class="twoName">{{item.twoName}}</span>
            </a>
          </li>
        </ul>
        <ul  v-if="this.$store.state.change">
          <li v-for="(item,index) in this.$store.state.menuCity">
            <a href="javascript:;">{{item}}</a>
          </li>
        </ul>
   </div>
    <div>
      <span>文字</span>
      <span>图1</span>
      <span>图2</span>
      <span>图3</span>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import $ from "jquery"
    export default {

      methods: {
        closeMenu() {
          this.$store.dispatch("closeMenu");
          let mainOut = $("#mainOut");
          mainOut.css("transform","translateZ(0) translateX(0)");
        },
        clickIn(index) {
          this.$store.state.menuList.filter(function (item,index) {
              item.isActived=false
          });

         this.$store.state.menuList[index].isActived=true
        },
        clickCity(){
          this.$store.dispatch("clickCity");
          this.$refs.cityIn.className="cityActived";
          this.$refs.changeCity.className="";

        },
        clickChange(){
          this.$store.dispatch("clickChange");
          this.$refs.cityIn.className="";
          this.$refs.changeCity.className="cityActived";
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#menu1
  width 300px
  height 100%
  background url("../img/index/two/bj_right.png") no-repeat
  background-size 100% 100%
  position fixed
  top 0
  right 0
  z-index 99
  transition 1s
  .closeMenu
    width 30px
    height 30px
    background url("../img/index/one/banner/icon_close.png") no-repeat
    background-size 100% 100%
    position absolute
    top 45px
    right 45px
  .changCity
    width 130px
    height 20px
    font-size 12px
    color rgba(255,255,255,.5)
    position absolute
    left 90px
    top 50px
    span
      &:hover
        color: #fff
        border-bottom 1px solid #ffffff
    .cityActived
      color: #fff
      border-bottom 1px solid #ffffff
  .menuList
    font-size 14px
    position absolute
    top 100px
    left 100px
    list-style none
    color rgb(255,188,173)
    width 100%
    li
      margin-bottom 10px
      position relative
     .active
       color #ffffff
       line-height 19px
       .heng
         display inline-block
         width 40px
         height 2px
         background url("../img/index/one/menu/xian_myspace.png") no-repeat
         background-size 100% 100%
         vertical-align middle
    a
      font-size 14px
      color: rgba(255,255,255,.5)
      width 100%
      text-decoration none
      margin-left -100px
      display flex
      justify-items left
      align-content center
      .heng
        width 40px
        height 2px
        display inline-block
      .firstName
        text-align left
      .twoName
        font-size 12px



</style>
