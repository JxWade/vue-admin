import Vue from 'vue';
import Vuex from 'vuex';
import Env from '@/env'


import sidebarState from './state/sidebar'
import sidebarGetters from './getters/sidebar'

import user from './modules/user';

Vue.use(Vuex);

// 引入 Vuex
const store = new Vuex.Store({
    state: {
        debug: Env.debug,                                                       // 调试模式
        sidebarState: sidebarState                                              // 侧边栏的配置信息
    },
    modules: {
        user:user,
    },
    getters: {
        ...sidebarGetters
    },
});

export default store