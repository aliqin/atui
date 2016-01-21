<template>
  <header class="navbar navbar-fixed-top bs-docs-nav" id="top" role="banner">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="../" class="navbar-brand">VueComponent</a>
      </div>
      <nav id="bs-navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav" id="J_header">
          <li v-for="theme in themes">
            <a href="#tabs" :class="{active:theme.active}" @click="changeTheme(theme.csslink,$event)">{{theme.name}}风格</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="http://gitlab.alibaba-inc.com/aliqin/vue-component/">
            <span class="icon-github-circled"></span>
            GitLab
          </a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style>
  .navbar-nav .active {
    background-color: #eee !important;
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
          active:true
      },
      {
          name : '天猫网厅',
          csslink:'tmallwt.css',
          active:false
      },
      {
          name : '阿里通信',
          csslink:'alitx.css',
          active:false
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
