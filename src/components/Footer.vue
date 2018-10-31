<template>
  <div class="footer">
    © {{year}} {{genConfig.title}} | <a href="https://github.com/DiruSec/blog/">Source</a>
    <br/>
    Powered by <a href="https://github.com/vuejs/vue">Vue</a> & <a href="https://github.com/pallets/flask">Flask</a>
  </div>
</template>

<script>
  export default {
    name: "footerview",
    computed:{
      year: function(){
        return new Date().getFullYear()
      },
      genConfig: function(){
        return this.$store.state.sidebar.genConfig
      }
    }
  }
</script>

<style scoped>
  div{
    text-align: center;
    padding-bottom: 20px;
    line-height: 1.5;
  }
</style>