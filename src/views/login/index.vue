<template>
    <div class="login" :style="{height:clientHeight}">
        <div class="box">
            <div class="item">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <h1 class="panel-title">{{title}}</h1>
                    </div>
                    <div class="panel-body">
                        <form>
                            <div class="form-group">
                                <label for="username">账号：</label>
                                <input type="email" class="form-control" id="username" placeholder="请输入邮箱或手机号">
                            </div>
                            <div class="form-group">
                                <label for="password">密码：</label>
                                <input type="password" class="form-control" id="password" placeholder="请输入密码">
                            </div>
                            <div class="form-group">
                                <label for="ymz">验证码：</label>
                                <div class="yzm">
                                    <input type="password" class="form-control" id="ymz" placeholder="请输入验证码">
                                    <img src="/static/images/yzm.png" width="120" height="34" alt="">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success" @click.prevent="formSubmit">登 录</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                // 1. 表单的标题
                title: "后台管理系统",
                // 2. 测量屏幕的高度，让背景铺满整个屏幕
                clientHeight:'',
            }
        },
        methods: {
            formSubmit() {
                console.log("路由跳转");
                this.$router.push({path: '/index'})
            }
        },
        mounted() {
            // 动态设置背景图的高度为浏览器可视区域高度

            // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
            this.clientHeight = `${document.documentElement.clientHeight}px`;
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
            const that = this;
            window.onresize = function temp() {
                that.clientHeight = `${document.documentElement.clientHeight}px`;
            };
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .login {
        background: url("/static/images/background.jpg") fixed center center no-repeat;
        background-size: cover;
    }

    .box {
        height:650px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .item {
        width: 400px;
    }

    .panel-heading h1 {
        font-size: 24px;
    }

    .panel-body {
        padding: 20px 40px;
        form {
            .yzm {
                display: flex;
                img {
                    padding-left: 20px;
                    flex-shrink: 0;
                }
            }
            button {
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }
</style>
