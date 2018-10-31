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

    <div class="entry-content" v-html="article.content"></div>
    <div class="post-info">
      <div v-for="tag in article.tags" class="info-tags" :key="tag">
      <span class="material-icons">local_offer</span>
        <span class="info-tagtext">{{tag}}</span>
      </div>
    </div>
    <relative-post />
    <div class="disqus">

    </div>

  </article>
</template>

<script>
  import RelativePost from "../components/relativePost";

  export default {
    components: {RelativePost},
    name: "articleview",
    computed: {
      article: function(){
        return this.$store.state.article;
      }
    },
    mounted(){
      this.$store.dispatch("getArticle",this.$route.params.path)
    },
  }
</script>

<style src="../assets/css/Article.css">

</style>