import Vue from 'vue'
import vuex from 'vuex'
import api from './api'
Vue.use(vuex);

const axios = require('axios');
const apiPrefix = 'http://localhost:5000/api/';

import sidebar_store from './modules/sidebar_store';
import articleList_store from './modules/articlelist_store';
import taglist_store from './modules/taglist_store';
import tag_store from './modules/tag_store';
import article_store from './modules/article_store';
import archive_store from './modules/archive_store';

export default new vuex.Store({
  state:{
    page: 1,
    totalPage: 1,
    relativePost: {},
    updateTitle: api.updateTitle,
  },
    modules: {
        sidebar: sidebar_store,
        articleList: articleList_store,
        taglist: taglist_store,
        tag: tag_store,
        article: article_store,
        archive: archive_store,
    },
    mutations:{
        getArticleList (state, res){
            state.articleList = res
        },

        getArchiveList (state, res){
            state.archive = res
        },

      getTagList (state, res){
        state.taglist = res
      },

      getArticle (state, res){
        state.article = res
      },

      getArticleListByTag (state, res){
        state.tag = res
      },

      updatePage(state,res){
            state.page = res
      },

      getTotalPage(state,res){
        state.totalPage = res
      },

      getRelativePost(state,res){
        state.relativePost = res
      }
    },
    actions:{
        getArticleList({commit},page=1){
            axios.get(apiPrefix+'get/articleList/'+page)
              .then(data=>{
                commit('getArticleList', api.parseAjaxData(data.data.data));
                this.state.updateTitle("首页")
              })
        },

        getArchiveList({commit}){
          axios.get(apiPrefix+'get/archiveList')
            .then(data=>{
              commit('getArchiveList', api.parseArchiveData(data.data.data));
              this.state.updateTitle("归档")
            })
        },

      getTagList({commit}){
        axios.get(apiPrefix+'get/tagList')
          .then(data=>{
            commit('getTagList', api.parseTagData(data.data.data));
            this.state.updateTitle("标签")
          })
      },

      getArticle({commit},path){
        axios.get(apiPrefix+'get/articleByPath/'+path)
          .then(data=>{
            commit('getArticle', api.parseArticleData(data.data.data));
            this.state.updateTitle(data.data.data.title)
          });
        axios.post(apiPrefix+'post/prevNextByPath',{'path': path})
          .then(data=>{
            commit('getRelativePost', data.data.data)
          })
      },

      getArticleListByTag({commit},tag){
        axios.get(apiPrefix+'get/articleListByTag/'+tag)
          .then(data=>{
            commit('getArticleListByTag', api.parseAjaxData(data.data.data));
            this.state.updateTitle("包含"+ tag +"标签的文章")
          })
      },
      updatePage({commit},page=1){
        axios.get(apiPrefix+'get/totalCount')
          .then(data=>{
            commit('updatePage', parseInt(page));
            commit('getTotalPage', Math.ceil(parseInt(data.data.data[0].count)/10))
          })
      }

    }
})