<template>
  <section>
    <h1 class="title">
      存档
    </h1>
    <div v-for="archive in archiveList" :key="archive.name" class="archive-content">
      <h2 class="archive-date">
        {{archive.date}}
      </h2>
      <ul>
        <li class="archive-article" v-for="article in archive.articles" :key="article.id">
          <router-link class="archive-link" :to="'/article/'+article.path">{{article.title}}</router-link>
          <span class="date">{{article.createdAt}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "archive",
    computed: {
      archiveList: function(){
        return this.$store.state.archive
      }
    },
    mounted(){
      this.$store.dispatch("getArchiveList")
    },
  }
</script>

<style scoped src="../assets/css/Title.css"></style>
<style scoped>
  .archive-content{
    margin: 2rem 0 0 0;
  }
  .archive-article{
    position: relative;
    left: 2rem;
    line-height: 1.5;
  }
  .archive-link{
    font-size: 1.1rem
  }
  .date{
    margin-left: .5rem;
    font-size: .8rem;
    font-style: italic;
  }
</style>