<template>
  <section id="tagIndex">
    <h1 class="title">标签为 {{path}} 的文章</h1>
    <articlelist v-for="article in tags" class="post" :key="article._id" :article="article">
    </articlelist>
  </section>
</template>

<script>
  import articlelist from '@/components/ArticleList'
  export default {
    name: "tagname",
    computed:{
      tags: function(){
        return this.$store.state.tag
      },
      path: function(){
        return this.$route.params.tagname
      }
    },
    beforeMount(){
      this.$store.dispatch("getArticleListByTag",this.$route.params.tagname);
    },
    components: {
      articlelist
    }
  }
</script>

<style scoped src="../assets/css/Title.css">
</style>