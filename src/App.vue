<template>
  <div id="app">
    <nav>
      <Sidebar />
    </nav>
    <div id="router">
    <!--<div id="nav">-->
      <!--<router-link to="/home">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view/>
    <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'home',
    components: {
        Sidebar,
      Footer
    }
}
</script>

<style>
  @import url(../node_modules/material-design-icons/iconfont/material-icons.css);
  #app {
    font-family: Helvetica Neue,Arial,Hiragino Sans GB,STHeiti,Microsoft YaHei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666;
  }
  #nav {
    padding: 30px;
    text-align: center;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  nav{
    background-color: #202020;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    width: 250px;
    z-index: 2;
  }

  #router{
    background-color: #ffffff;
    max-width: 1390px;
    padding: 0 40px 0 290px;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }
</style>
