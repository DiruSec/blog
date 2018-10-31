<template>
  <div id="header">
    <header>
      <a class="expand-btn" @click="expandSide"><span id='micon' class="material-icons">more_horiz</span> </a>
      <h1><router-link to="/">{{genConfig.title}}</router-link></h1>
    </header>
    <div id="sidebar-mask" @click="expandSide"></div>
  </div>
</template>

<script>
  export default {
    name: "topbar",
    computed:{
      genConfig: function(){
        return this.$store.state.sidebar.genConfig
      },
    },
    methods:{
      expandSide: function() {
        let $body = document.querySelector('body');
        let $sidebar_mask = document.querySelector('#sidebar-mask');
        let $micon = document.querySelector('#micon');
        if ($body.className === 'side'){
          $body.className = '';
          $sidebar_mask.style.display = 'none';
          $micon.innerHTML = 'more_horiz'
        } else{
          $body.className = 'side';
          $sidebar_mask.style.display = 'block';
          $micon.innerHTML = 'close'
        }
      }
    }
  }
</script>

<style scoped src="../assets/css/Topbar.css">

</style>