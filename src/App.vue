<template>
  <div id="app">
    <nav>
      <Sidebar />
    </nav>
    <div id="router">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
    name: 'home',
    components: {
        Sidebar
    }
}
</script>

<style>
  @import url(../node_modules/material-design-icons/iconfont/material-icons.css);
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
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
    text-align: center;
    max-width: 1390px;
    padding: 0 40px 0 290px;
  }
</style>
