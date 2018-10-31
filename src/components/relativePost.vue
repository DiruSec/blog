<template>
  <nav class="relative-post">
    <router-link class="nextpost" v-if="notBlank(next)" :to="'/article/'+next.path">{{next.title}} &raquo;</router-link>
    <router-link class="prevpost" v-if="notBlank(prev)" :to="'/article/'+prev.path">&laquo; {{prev.title}}</router-link>
    <div class="clear"></div>
  </nav>
</template>

<script>
  export default {
    name: "relative-post",
    props: {
      next: {
        type: Object
      },
      prev: {
        type: Object
      }
    },
    methods: {
      notBlank: function(object) {
        for (let index in object){
          return true
        }
        return false
      }
    }
  }
</script>

<style scoped>
  .nextpost{
    display: inline-block;
    float: right
  }

  .prevpost{
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