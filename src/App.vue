<template>
  <div id="app">
    <Topbar />
    <nav class="sidebar">
      <Sidebar />
    </nav>
    <div id="router">
    <!--<div id="nav">-->
      <!--<router-link to="/home">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view/>
    <FooterView />
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import FooterView from '@/components/Footer.vue'

export default {
    name: 'home',
    components: {
      Topbar,
        Sidebar,
      FooterView
    }
}
</script>

<style>
  @import url(../node_modules/material-design-icons/iconfont/material-icons.css);
  @import url(./assets/css/Base.css);
  #app {
    font-family: Helvetica Neue,Arial,Hiragino Sans GB,STHeiti,Microsoft YaHei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
