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
                            <bootstrap-validator :validate="validator.username" :validateError="errors" inputName="username">
                                <label>账号：</label>
                                <input type="text" v-validate="validator.username" name="username" class="form-control"
                                       placeholder="请输入邮箱或手机">
                            </bootstrap-validator>

                            <bootstrap-validator :validate="validator.password" :validateError="errors"
                                                 inputName="password">
                                <label>密码：</label>
                                <input type="password" v-validate="validator.password" name="password"
                                       class="form-control" placeholder="请输入密码">
                            </bootstrap-validator>

                            <bootstrap-validator :validate="validator.yzm" :validateError="errors" inputName="yzm">
                                <label>验证码：</label>
                                <div class="yzm">
                                    <input type="text" class="form-control" v-validate="validator.yzm" name="yzm"
                                           placeholder="请输入验证码">
                                    <img src="/static/images/yzm.png" width="120" height="34" alt="">
                                </div>
                            </bootstrap-validator>

                            <button type="submit" class="btn btn-success" @click.prevent="formSubmit">登 录</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BootstrapValidator from '@/components/bootstrap_validator';

    export default {
        name: 'login',
        data() {
            return {
                // 1. 表单的标题
                title: "后台管理系统",
                // 2. 测量屏幕的高度，让背景铺满整个屏幕
                clientHeight: '',
                username: "chenjiawen",
                validator: {
                    username: {
                        rules: {required: true, email: true},
                        messages: {required: "账号不能为空", email: "必须为邮箱的格式"}
                    },
                    password: {
                        rules: {required: true, min: 6, max: 10},
                        messages: {required: "密码不能为空", min: "最小六位", max: "最多10位"}
                    },
                    yzm: {
                        rules: {required: true, min: 4, max: 4},
                        messages: {required: "请填写验证码", min: "请填写正确的验证码", max: "请填写正确的验证码"}
                    }
                }
            }
        },
        methods: {
            formSubmit() {
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
        components: {BootstrapValidator}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .login {
        background: url("/static/images/background.jpg") fixed center center no-repeat;
        background-size: cover;
    }

    .box {
        height: 650px;
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
