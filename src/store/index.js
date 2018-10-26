import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import sidebar_store from './modules/sidebar_store.js';
import articleList_store from './modules/articleList_store';
import article_store from './modules/article_store';

export default new vuex.Store({
    modules: {
        sidebar: sidebar_store,
        articleList: articleList_store,
        article: article_store
    },
    mutations:{

    },
    actions:{

    }
})