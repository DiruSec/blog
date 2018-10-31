<template>
  <nav class="pagination">
    <router-link class="nextpage" v-if="page < totalPage" :to="nextpage">下一页 &raquo;</router-link>
    <router-link class="prevpage" v-if="page > 1" :to="prevpage">&laquo; 上一页</router-link>
    <div class="clear"></div>
  </nav>
</template>

<script>
  export default {
    name: "pagination",
    props: {
      page:{
        type: Number
      },
      totalPage:{
        type: Number
      }
    },
    computed: {
      prevpage: function(){
        if (this.page===2){
          return '/'
        }
        return '/'+(this.page-1)
      },
      nextpage: function(){
          return '/'+(this.page+1)
      }
    }
  }
</script>

<style scoped>
  .nextpage{
    display: inline-block;
    float: right
  }

  .prevpage{
    display: inline-block;
    float: left
  }

  .clear{
    clear: both;
  }

  nav{
    line-height: 2;
    border-bottom: 1px #dddddd solid;
    padding-bottom: .5rem;
    margin-bottom: .5rem;
  }
</style>