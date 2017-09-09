import Vue from 'vue'
import Router from 'vue-router'
// 引入单一页面
import SinglePage from './modules/single_page'
// 引入复合页面
import IndexRouter from './modules/index_router'
import CoreRouter from './modules/core_router'
import ComponentRouter from './modules/component_router'
import GraphRouter from './modules/graph_router'
import SkinRouter from './modules/skin_router'

import Layout from '@/views/layout'

Vue.use(Router);

// 加载路由模块
export default new Router({
    mode: 'history',
    routes: [
        ...SinglePage,
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children:[
                ...IndexRouter,
                ...CoreRouter,
                ...ComponentRouter,
                ...GraphRouter,
                ...SkinRouter,
            ]
        },
    ]
})
