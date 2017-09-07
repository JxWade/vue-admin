import Vue from 'vue'
import Router from 'vue-router'
// 引入单一页面
import SinglePage from './modules/single_page'
// 引入复合页面
import IndexRouter from './modules/index_router'
import TableRouter from './modules/table_router'
import FormRouter from './modules/form_router'

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
                ...TableRouter,
                ...FormRouter
            ]
        },
    ]
})
