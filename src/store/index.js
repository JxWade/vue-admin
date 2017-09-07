import Vue from 'vue';
import Vuex from 'vuex';

import sidebarState from './state/sidebar'
import sidebarGetters from './getters/sidebar'

Vue.use(Vuex);

// 引入 Vuex
const store = new Vuex.Store({
    debug: true,
    state: {
        domain: 'localhost',
        sidebarState: sidebarState
    },
    modules: {},
    getters: {
        ...sidebarGetters
    }
});

export default store