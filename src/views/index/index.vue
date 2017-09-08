<template>
    <div class="hello">

        <div class="panel panel-default">
            <div class="panel-body">
                <h2>简单介绍</h2>
                <p>
                    本人结合个人的经验，基于vue来完成简单的后台模板，鉴于正在编写。里面也许会遇到各种坑，请见谅。
                </p><br>

                <h4>本后台使用的基础组件</h4>
                <ol>
                    <li>使用 <kbd>vue-cli</kbd> 构建时，生成的路由组件</li><br>
                    <li>使用 页面加载的进度条组件 <kbd>NProgress</kbd></li><br>
                    <li>使用 vue官方提供的状态管理组件 <kbd>vuex</kbd> store</li><br>
                    <li>引入了  <kbd>font-awesome</kbd> 全局字体</li><br>
                    <li>使用 饿了么  <kbd>ElementUI</kbd> 组件</li><br>
                    <li>使用 字段验证 <kbd>VeeValidate</kbd> 基础组件</li><br>
                </ol>

                <h4>自定义组件</h4>
                <ol>
                    <li>基于字段验证封装了 <kbd>bootstrap-validate</kbd>组件</li><br>
                </ol>

                <p> <i> 下面来看看具体的使用...</i></p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {

            }
        },
        mounted(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">

</style>
