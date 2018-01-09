import Vue from "vue";
import Vuex from "vuex";
import $ from "jquery";
Vue.use(Vuex);

const state={
    count:true,
    num:3,
    indexLun:0,
    guan:true,
    menu:false,
    city:true,
    change:false,
    nums:[
    "static/img/under_1.png",
    "static/img/under_2.png",
    "static/img/under_3.png",
    "static/img/under_4.png"

    ],
    menuList:[
      {name:"SPACE课程表",isActived:false},
      {name:"师资",isActived:false},
      {name:"SPACE大师系列",twoName:"梅赛德斯-奔驰",isActived:false},
      {name:"SPACE 全媒体",isActived:false},
      {name:"SPACE 特别主题",isActived:false},
      {name:"SPACE 商品表",isActived:false},
      {name:"加入SPACE",isActived:false},
      {name:"首次免费体验",isActived:false},
      {name:"购买课程",isActived:false},
      {name:"SPACE",isActived:false}
    ],
    menuCity:[
      "北京",
      "上海"
    ]
};
const mutations={
  SHOWBUTTON(state){
    // let menu1 = document.querySelector("#menu1")

    state.count=false;
    state.menu=true
  },
  FN(state,event){
    var event =event||window.event;
    let height1 = document.documentElement.clientHeight;
    if(event.deltaY==-100){
      state.indexLun -=1
      if(state.indexLun<=0){
        state.indexLun=0;
      }
      console.log(height1,state.indexLun)
      $("#mainOut").css("top",-height1*state.indexLun)
    }else if(event.deltaY==100){
      state.indexLun +=1;
      if(state.indexLun>=2){
        state.indexLun=2
      }
      $("#mainOut").css("top",-height1*state.indexLun)
    }
  },
  CLOSEGUAN(state){
    state.guan=false
  },
  CLOSEMENU(state){
    state.menu=false;
    state.count=true
  },
  CLICKCITY(state){
    state.city=true;
    state.change=false
  },
  CLICKCHANGE(state){
    state.city=false;
    state.change=true
  }

};

const actions={
  showButtom({commit}){
    commit("SHOWBUTTON")
  },
  fn({commit}){
    commit("FN")
  },
  closeGuan({commit}){
    commit("CLOSEGUAN")
  },
  closeMenu({commit}){
    commit("CLOSEMENU")
  },
  clickCity({commit}){
    commit("CLICKCITY")
  },
  clickChange({commit}){
    commit("CLICKCHANGE")
  }

};

const getters={


};

export default  new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

