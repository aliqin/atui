<template>
  <header class="navbar navbar-top bs-docs-nav" id="top" role="banner">
    <v-row class="container">
      <v-col span="5">
        <h1><a href="components.html">ATUI</a></h1>
      </v-col>
      <v-col span="25">
        <v-menu mode="horizontal">
          <menu-item><a href="components.html">组件</a></menu-item>
          <menu-item><a href="widgets.html">widgets(业务组件)</a></menu-item>
          <menu-item><a href="filters.html">filters(数据过滤器)</a></menu-item>
          <menu-item><a href="http://gitlab.alibaba-inc.com/aliqin/atui/">GitLab</a></menu-item>
          <menu-item><a href="http://ued.aliqin.alibaba.net/webcompon/">视觉稿</a></menu-item>
        </v-menu>
      </v-col>
    </v-row>
  </header>
  <ul class="themes" id="J_header">
    <li v-for="theme in themes" :class="{active:theme.active}" :style="{backgroundColor:theme.color}" @click="changeTheme(theme.csslink,$event)" :title="theme.name">
    </li>
  </ul>
</template>
<script>
import { Layout, Menu } from 'src/'
const { SubMenu, MenuItem } = Menu
const vRow = Layout.Row
const vCol = Layout.Col
export default {
  data() {
    return {
      themes:[
      {
          name : '大于蓝',
          csslink:'greater-blue.css',
          active:true,
          color:'#00aaff'
      },
      {
          name : '天猫红',
          csslink:'tmall-red.css',
          active:false,
          color:'#e52e2e'
      },
      {
          name : '淘宝橙',
          csslink:'tao-orange.css',
          active:false,
          color:'#ff7500'
      },
      ]
    }
  },
  methods:{
    changeTheme(csslink, event) {
      event.preventDefault();
      this.themes.forEach((i)=>{
        i.active = false;
        if(i.csslink == csslink) {
          i.active = true;
        }
      })
      document.getElementById('J_ThemeCss').href = '../build/' + csslink
      // document.body.className = csslink.replace('.css','')
      Vue.util.addClass(document.body,csslink.replace('.css',''))
    }
  },
  components: {
    vRow,
    vCol,
    vMenu: Menu,
    SubMenu,
    MenuItem
  }
}
</script>
