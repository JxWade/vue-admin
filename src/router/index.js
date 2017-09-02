import Vue from 'vue'
import Router from 'vue-router'
// 引入路由模块
import WelcomeRouter from './modules/welcome_router'
import TableRouter from './modules/table_router'
import FormRouter from './modules/form_router'

Vue.use(Router);

// 加载路由模块
export default new Router({
    routes: [
        ...WelcomeRouter,
        ...TableRouter,
        ...FormRouter
    ]
})
