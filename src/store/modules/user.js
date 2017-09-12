import http from "@/utils/http";
import auth from "@/utils/auth";
import router from "@/router";

export default {
    state: {
        httpFlag: false,                                    // 发送http请求的标志位
        userInfo: null,                                     // 用户的基本信息
        role: null,                                         // 用户的角色信息
        authority: null,                                    // 权限信息
        errorMessage: null,                                 // http请求的错误信息
    },

    mutations: {
        httpFlag: (state, httpFlag) => {
            state.httpFlag = httpFlag;
        },
        userInfo: (state, userInfo) => {
            state.username = userInfo;
        },
        role: (state, role) => {
            state.role = role;
        },
        authority: (state, authority) => {
            state.authority = authority;
        },
        // 错误信息进行监听，并清除
        errorMessage: (state, errorMessage) => {
            state.errorMessage = errorMessage;

            setTimeout(function () {
                state.errorMessage = null
            }, 100);
        }
    },

    actions: {

        /**
         * 登录
         * @param commit
         * @param data
         */
        user_login({commit}, data) {

            let that = this;
            that.state.debug && console.log("请求do_login参数为：", data);
            commit("httpFlag", true);

            // 请求服务器
            http.post('/do_login', {
                params: {
                    username: data.username,
                    password: data.password,
                    yzm: data.yzm
                }
            }).then(function (response) {
                that.state.debug && console.log("响应do_login参数为：", response);
                commit("httpFlag", false);

                // 如果返回成功
                if (response.data.ServerNo == 200) {

                    that.state.debug && console.log("设置令牌cookie 为：" + response.data.ServerData.token);
                    auth.setToken(response.data.ServerData.token);

                    router.replace('/index');
                } else {
                    // 如果返回失败
                    commit("errorMessage", response.data.ServerMessage);
                }

            }).catch(function (error) {

                commit("httpFlag", false);
                console.log(error);
            });

        },

        /**
         * 获取用户信息
         * @param commit
         */
        user_get_info({commit}) {
            let that = this;
            that.state.debug && console.log("请求userinfo接口");

            http.post('/userinfo').then(function (response) {
                that.state.debug && console.log("响应userinfo参数为：", response);

                // 设置获取用户的基本信息、角色和权限
                commit('userInfo', response.data.ServerData.userInfo);
                commit('role', response.data.ServerData.role);
                commit('authority', response.data.ServerData.authority);
            }).catch(function (error) {
                console.log(error);
            });
        },
        /**
         * 退出
         * @param commit
         */
        user_logout({commit}) {

        }

    }
}