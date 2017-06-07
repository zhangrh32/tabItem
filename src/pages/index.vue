<template>
<div class="main main-box" ref="main">
  <!--左侧导航栏-->
  <div class="main-left">
    <div class="logo">
      <span>DEVLOON</span>
    </div>
    <ul class="tabItem" ref="tabH">
      <a class="item" v-for="item in itemUrl" :class="{active:currentPath === item.url}" @click="tabItem(item.url)"><i></i><li>{{ item.title }}</li></a>
    </ul>
  </div>
  <div class="main-right">
      <div class="main-top">
          <div class="top-search">
              <input placeholder="输入档案编号、姓名、手机号码、证件号码 过滤"/>
          </div>
          <div class="user">
              <span>Vimenlam</span>
             <div class="user-img"></div>
          </div>
      </div>
      <div class="main-right-view" ref="rightView">
          <router-view class="view"></router-view>
      </div>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        itemUrl: [{
          title: 'list1',
          url: '/doctor/list'
        }, {
          title: 'list2',
          url: '/charge/list'
        }],
        currentPath: ''
      }
    },
    methods: {
      // 切换item标签
      tabItem (url) {
        let _this = this
        _this.$router.push(url)
        _this.checkTabItem()
      },
      // 判断当前的router是哪一个，并显示高亮
      checkTabItem () {
        let _this = this
        _this.currentPath = _this.$route.fullPath
      }
    },
    mounted: function () {
      let _this = this
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      _this.$refs.tabH.style.height = h - 53 - 18 + 'px'
      _this.$refs.rightView.style.height = h - 53 + 'px'
      _this.checkTabItem()
    }
  }
</script>
<style >
  body {
    margin: 0;
  }
  div, p, span, ul, li {
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style: none;
  }
  .main{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: #F5F8F9;
  }
  .main-left{
      width: 200px;
      height: 100%;
      background: #FFFFFF;
      box-shadow: 0 2px 7px 0 rgba(0,0,0,0.07);
      overflow: auto;
      overflow-x: hidden;
      position: relative;
      z-index: 9;
  }
  .logo{
    width: 200px;
    height: 53px;
    overflow: hidden;
    font-size:18px;
    line-height: 53px;
    text-align: center;
    color: #666;
    margin-bottom: 18px;
  }
  .main-left .tabItem a {
    display: block;
    width: 100%;
    position: relative;
  }
  .main-left .tabItem {
    overflow: auto;
  }
  .main-left .tabItem li{
    width: 148px;
    height: 48px;
    margin: 0 auto;
    line-height: 48px;
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #959EB9;
    text-align: center;
  }
  .main-left .tabItem a i {
    position: absolute;
    top: 10px;
    left: -1px;
    height: 28px;
    border-left: 3px solid #FFFFFF;
  }
  .main-left .tabItem a.active i {
    border-left: 3px solid #2178F8;
  }
  .main-left .tabItem a.active li{
      border-top:1px solid;
      border-bottom:1px solid;
      border-color: rgba(151,151,151,0.1);
  }
  .main-left .tabItem a li{
      border-top:1px solid;
      border-bottom:1px solid;
      border-color: #FFFFFF;
  }
  .main-top{
      background: #FFFFFF;
      box-shadow: 0 2px 7px 0 rgba(0,0,0,0.07);
      height: 53px;
      width: 100%;
  }
  .main .main-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .top-search{
      margin-left:27px;
      line-height: 53px;
      float:left;
      width: 500px;
  }
  .top-search input {
    width: 100%;
    border: none;
    outline: none;
  }
  .user{
    float:right;
    padding-top:17px;
    margin-right:20px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #667489;
    padding-right:40px;
    position: relative;
  }
  .user-img{
      width:29px;
      height: 29px;
      position: absolute; right: 0; top: 13px;
      border-radius:50%;
      background:red;
  }
  .main-right-view {
    overflow: auto;
  }
</style>
<style>
  ::-webkit-input-placeholder {
    opacity: 0.36;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #A9A9A9;
  }
  ::-moz-placeholder {
    opacity: 0.36;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #A9A9A9;
  } /* firefox 19+ */
  :-ms-input-placeholder {
    opacity: 0.36;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #A9A9A9;
  } /* ie */
  input:-moz-placeholder {
    opacity: 0.36;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #A9A9A9;
  }
  .flex {
    display: box;			  /* OLD - Android 4.4- */
    display: -webkit-box;	  /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;		 /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;	  /* TWEENER - IE 10 */
    display: -webkit-flex;	 /* NEW - Chrome */
    display: flex;
      display: -o-box;
  }
  .downC{
    -webkit-box-align: center;
    /* 12版 */
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
  }
  .lineR {
    /* 09版 */
    -webkit-box-pack: flex-end;
    /* 12版 */
    -webkit-justify-content: flex-end;
    -moz-justify-content: flex-end;
    -ms-justify-content: flex-end;
    -o-justify-content: flex-end;
    justify-content: flex-end;
  }
  .lineC {
    /* 09版 */
    -webkit-box-pack: center;
    /* 12版 */
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clear {
    *zoom: 1;
  }
  .clear:before, .clear:after {
    display: table;
    line-height: 0;
    content: "";
  }
  .clear:after {
    clear: both;
  }
  input,textarea {
    font-size: 14px;
    color: #267BF7;
    text-shadow: 0px 0px 0px #4F5A6B;
    -webkit-text-fill-color: transparent;
  }
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
    text-shadow: none;
    -webkit-text-fill-color: initial;
  }
</style>
