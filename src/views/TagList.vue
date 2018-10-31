<template>
  <section class="taglist">
    <h1 class="title">
      标签
    </h1>
    <div class="tagcontents">
      <router-link class="tags" v-for="tag in tagList" :to="'/tag/'+tag.tagName" :key="tag.tagName">{{tag.tagName}}({{tag.tagCount}})</router-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: "taglist",
    computed: {
      tagList: function(){
        return this.$store.state.taglist
      }
    },
    beforeMount(){
      this.$store.dispatch("getTagList");
    },
  }
</script>

<style scoped src="../assets/css/Title.css"></style>
<style scoped>
  .tags{
    border: 1px solid #4B91D5;
    border-radius: 4px;
    color: #4B91D5;
    padding: .5rem .8rem;
    margin: 0 1rem 1rem 0;
    line-height: 1rem;
    display: inline-block;
    transition: color ease .2s;
  }

  .tags:hover{
    color: #216EBA
  }
</style>