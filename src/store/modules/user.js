import http from "@/utils/http";
import auth from "@/utils/auth";
import router from "@/router";

export default {
    state: {
        httpFlag: false,                                    // 发送http请求的标志位
        userInfo: undefined,                                     // 用户的基本信息
        role: undefined,                                         // 用户的角色信息
        authority: undefined,                                    // 权限信息
        errorMessage: undefined,                                 // http请求的错误信息
    },

    mutations: {
        httpFlag: (state, httpFlag) => {
            state.httpFlag = httpFlag;
        },
        userInfo: (state, userInfo) => {
            state.userInfo = userInfo;
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
                    // 设置令牌，并且清空用户的基本信息、角色、权限
                    auth.setToken(response.data.ServerData.token);
                    commit("userInfo", undefined);
                    commit("role", undefined);
                    commit("authority", undefined);

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
         * 获取用户信息,
         * @param commit
         * @param callback       如果有会回调函数， 则用户客户端加载用户信息(存在则不请求)；如果不存在，则直接更新用户信息
         */
        user_get_info({commit, state}, callback) {

            // 1. 如果存在回调函数，则判断是否存在用户全局信息
            if (((typeof callback) == "function" ) &&
                (this.state.user.userInfo != undefined) &&
                (this.state.user.role != undefined) &&
                (this.state.user.authority != undefined) &&
                (auth.getToken() != undefined)
            ) {
                callback();
                return;
            }

            // 2. 获取用户信息
            let that = this;
            that.state.debug && console.log("请求userinfo接口");

            http.post('/userinfo').then(function (response) {
                that.state.debug && console.log("响应userinfo参数为：", response);

                // 如果返回成功
                if (response.data.ServerNo == 200) {
                    // 设置获取用户的基本信息、角色和权限
                    commit('userInfo', response.data.ServerData.userInfo);
                    commit('role', response.data.ServerData.role);
                    commit('authority', response.data.ServerData.authority);

                    if ((typeof callback) == "function") {
                        callback();
                    }
                } else {
                    that.state.debug && console.log("响应userinfo数据失败");
                }
            }).catch(function (error) {
                console.log(error);
            });
        },

        /**
         * 退出
         * @param commit
         */
        user_logout({commit}) {
            auth.removeToken();

            router.replace('/login');
        }

    }
}