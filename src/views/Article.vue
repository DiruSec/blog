<template>
  <article class="post">
    <header>
    <div class="meta">
      <span>{{article.createdAt}}</span>
    </div>
    <h1 class="title">
      {{article.title}}
    </h1>
    </header>

  </article>
</template>

<script>
  export default {
    name: "article",
    computed: {
      article: function(){
        let articleList = this.$store.state.articleList;
        for (let list in articleList){
          if (articleList[list].pathName === this.$route.params.path){
            return articleList[list]
          }
        }
      }
    }
  }
</script>

<style scoped src="../assets/css/Article.css">

</style>