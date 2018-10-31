<template>
  <nav class="relative-post">
    <router-link class="nextpost" to="/article/">Lorem Ipsum »</router-link>
    <router-link class="prevpost" to="/article/">« Lorem Ipsum</router-link>
    <div class="clear"></div>
  </nav>
</template>

<script>
  export default {
    name: "relative-post"
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