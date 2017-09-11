// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 引入 全局字体样式
import "@/assets/font/scss/font-awesome.scss"
// 引入饿了么组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 字段验证
import VeeValidate from 'vee-validate';
// 引入全局自定义组件
import '@/components/index'

const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    messages: null,
    strict: true
};
Vue.use(VeeValidate, config);
Vue.use(ElementUI);

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
    // 跳转到index页面
    if (to.path == '/')
        next('/index');
});

router.afterEach(() => {
    NProgress.done();
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});
