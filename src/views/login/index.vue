<template>
    <div id="login" :style="{height:clientHeight}">
        <div class="box">
            <div class="item">
                <div class="page-header">
                    <h1>Management System<br>
                        <small>By VUE</small>
                    </h1>
                </div>
                <form class="form-horizontal">
                    <bootstrap-validator :validate="validator.username" :validateError="errors" inputName="username"
                                         colSmOffset="3">
                        <label class="col-sm-3 control-label">账号：</label>
                        <div class="col-sm-9">
                            <input type="text" v-validate="validator.username" name="username" class="form-control"
                                   placeholder="请输入邮箱或手机" v-model="formData.username">
                        </div>
                    </bootstrap-validator>

                    <bootstrap-validator :validate="validator.password" :validateError="errors" inputName="password"
                                         colSmOffset="3">
                        <label class="col-sm-3 control-label">密码：</label>
                        <div class="col-sm-9">
                            <input type="password" v-validate="validator.password" name="password"
                                   class="form-control" placeholder="请输入密码" v-model="formData.password">
                        </div>
                    </bootstrap-validator>
                    <bootstrap-validator :validate="validator.yzm" :validateError="errors" inputName="yzm"
                                         colSmOffset="3">
                        <label class="col-sm-3 control-label">验证码：</label>
                        <div class="yzm col-sm-9">
                            <input type="text" class="form-control" v-validate="validator.yzm" name="yzm"
                                   placeholder="请输入验证码" v-model="formData.yzm">
                            <image-code :width="120" :height="34"></image-code>
                        </div>
                    </bootstrap-validator>

                    <div class="form-group">
                        <div class="col-sm-offset-3 col-sm-9">
                            <button type="submit" :class="['btn btn-success',httpFlag?'disabled':'']"
                                    @click.prevent="formSubmit">
                                <i class="el-icon-loading pull-left" v-if="httpFlag"
                                   style="position: relative;top:3px;left: 10px;"></i>登 录
                            </button>
                        </div>
                    </div>
                </form>

                <!--运行全局store中请求api时候的错误信息-->
                <template v-if="errorMessage">{{ showError()}}</template>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'login',
        data() {
            return {
                // 1. 表单的标题
                title: "后台管理系统",
                // 2. 测量屏幕的高度，让背景铺满整个屏幕
                clientHeight: '',
                formData: {
                    username: '',
                    password: '',
                    yzm: ''
                },
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
                },
            }
        },
        computed: {
            ...mapState({
                //错误信息
                errorMessage: state => state.user.errorMessage,
                // 加载进度
                httpFlag: state => state.user.httpFlag,
            })
        },
        methods: {
            formSubmit() {
                // 防止多次提交
                if (this.httpFlag) return;

                // 提交请求
                if (this.errors.items.length == 0) {
                    this.$store.dispatch('user_login', this.formData)
                }
            },
            showError() {
                this.$message.error(this.errorMessage);
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    #login {
        background: url("/static/images/background.jpg") fixed center center no-repeat;
        background-size: cover;

        .box {
            height: 650px;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .item {
            width: 400px;
        }

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
