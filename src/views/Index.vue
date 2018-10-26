<template>
  <section id="articleIndex">
    <article v-for="article in articleList" class="post" :key="article._id">
      <div class="meta">
        <span>{{article.createdAt}}</span>
      </div>
        <router-link :to="'/article/'+article.pathName">
          <h1 class="title">
        {{article.title}}
          </h1>
        </router-link>
      <div class="content">
        <div class="summary">
          {{article.content}}
        </div>
      </div>
      <div class="content-end">
        <router-link class="category btn" :to="'/category/'+article.category">{{article.category}}</router-link>
        <div class="cate-tag-splitter"></div>
        <router-link class="tag btn" :to="'/tag/'+tag" v-for="tag in article.tags" :key="tag">{{tag}}</router-link>
      </div>
    </article>
  </section>
</template>


<script>
  export default {
    name: "index",
    computed:{
      articleList: function(){
        return this.$store.state.articleList
      }
    },
  }
</script>

<style scoped src="../assets/css/Index.css">

</style>