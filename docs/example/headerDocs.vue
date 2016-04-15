<template>
  <header class="navbar navbar-top bs-docs-nav" id="top" role="banner">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="" class="navbar-brand">VueComponent</a>
      </div>
      <nav id="bs-navbar" class="collapse navbar-collapse">
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="http://gitlab.alibaba-inc.com/aliqin/vue-component/">
            <span class="icon-github-circled"></span>
            GitLab
          </a></li>
          <li><a href="http://ued.aliqin.alibaba.net/webcompon/" target="_blank">
            <span class="icon-github-circled"></span>
            视觉稿
          </a></li>
        </ul>
      </nav>
    </div>
  </header>
  <ul class="themes" id="J_header">
    <li v-for="theme in themes" :class="{active:theme.active}" :style="{backgroundColor:theme.color}" @click="changeTheme(theme.csslink,$event)">
    </li>
  </ul>
</template>
<style lang="less">
  .navbar-nav .active {
    background-color: #eee !important;
  }
  .themes{
    position: fixed;
    right:50px;
    top:50px;
    list-style: none;
    li{
      float:left;
      background:#ff7500;
      width:12px;
      height:12px;
      border-radius:100%;
      text-indent: -10000px;
      margin:0 5px;
      cursor: pointer;
      &.active{
        width:15px;
        height:15px;
      }
    }
  }
</style>
<script>
export default {
  data() {
    return {
      themes:[
      {
          name : '大鱼',
          csslink:'alidayu.css',
          active:true,
          color:'#00aaff'
      },
      {
          name : '天猫网厅',
          csslink:'tmallwt.css',
          active:false,
          color:'#e52e2e'
      },
      {
          name : '阿里通信',
          csslink:'alitx.css',
          active:false,
          color:'#ff7500'
      },
      ]
    }
  },methods:{
    changeTheme(csslink,event) {
      event.preventDefault();
      this.themes.forEach((i)=>{
        i.active = false;
        if(i.csslink == csslink) {
          i.active = true;
        }
      })
      document.getElementById('J_ThemeCss').href = 'build/' + csslink
      document.body.className = csslink.replace('.css','')
    }
  }
}
</script>
