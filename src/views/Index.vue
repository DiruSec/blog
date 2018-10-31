<template>
  <section id="articleIndex">
    <articlelist v-for="article in articleList" class="post" :key="article._id" :article="article">
    </articlelist>
    <pagination :page="currentPage" :totalPage="totalPage"/>
  </section>
</template>


<script>
  import articlelist from '@/components/ArticleList'
  import pagination from '@/components/Pagination'
  export default {
    name: "index",
    computed:{
      articleList: function(){
        return this.$store.state.articleList
      },
      currentPage: function(){
        return this.$store.state.page
      },
      totalPage: function(){
        return this.$store.state.totalPage
      }
    },
    beforeMount(){
      this.$store.dispatch("updatePage",this.$route.params.page);
      this.$store.dispatch("getArticleList",this.$route.params.page)
    },
    watch: {
      '$route' (to, from){
        this.$store.dispatch("getArticleList",this.$route.params.page)
        this.$store.dispatch("updatePage",this.$route.params.page);
      }
    },
    components: {
      articlelist,
      pagination
    }
  }
</script>

<style scoped src="../assets/css/Index.css">

</style>