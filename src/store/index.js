import Vue from 'vue';
import Vuex from 'vuex';

import sidebarState from './state/sidebar'

Vue.use(Vuex);

// 引入 Vuex
const store = new Vuex.Store({
    debug: true,
    state: {
        domain: 'localhost',
        sidebarState: sidebarState
    },
    modules: {},
    getters: {}
});

export default store