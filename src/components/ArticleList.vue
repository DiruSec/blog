<template>
  <article>
    <div class="meta">
      <span>{{article.createdAt}}</span>
    </div>
    <router-link :to="'/article/'+article.pathName">
      <h1 class="title">
        {{article.title}}
      </h1>
    </router-link>
    <div class="content">
      <div class="summary" v-html="article.abstract">
      </div>
    </div>
    <div class="content-end">
      <router-link class="category btn" :to="'/category/'+article.category">{{article.category}}</router-link>
      <div class="cate-tag-splitter"></div>
      <router-link class="tag btn" :to="'/tag/'+tag" v-for="tag in article.tags" :key="tag">{{tag}}</router-link>
    </div>
  </article>
</template>

<script>
  export default {
    name: "articlelist",
    props:{
      article: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped src="../assets/css/ArticleList.css">

</style>