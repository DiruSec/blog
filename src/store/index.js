import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import sidebar_store from './modules/sidebar_store.js';

export default new vuex.Store({
    modules: {
        sidebar: sidebar_store
    },
    mutations:{

    },
    actions:{

    }
})