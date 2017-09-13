<template>
    <div id="page-layout">
        <!--侧边导航区-->
        <page-sidebar :isCollapse="isCollapse" :clientHeight="clientHeight"
                      @getBreadcrumbInfo="getBreadcrumbInfo"></page-sidebar>
        <div id="layout-right">
            <!--页面的头部-->
            <page-menu-nav :isCollapse="isCollapse" @changeCollapse="changeCollapse"
                           :breadcrumbInfo="breadcrumbInfo"></page-menu-nav>
            <div id="page-layout-contain">
                <!--页面的背景-->
                <img src="/static/images/layout-background.jpg" alt="">
                <!--页面的内容区域-->
                <div :style="{width:clientWidth -  sidebarWidth +'px',height:clientHeight - 59 +'px',padding:'20px'}">
                    <transition name="router-view-page">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PageMenuNav from './header';
    import PageSidebar from './sidebar';

    export default {
        name: 'page-layout',
        data() {
            return {
                isCollapse: false,
                clientWidth: null,
                clientHeight: null,
                breadcrumbInfo: [],
            }
        },
        computed: {
            sidebarWidth: function () {
                return this.isCollapse ? 64 : 200;
            }
        },
        methods: {
            changeCollapse(msg) {
                // 做侧边栏的动画效果
                this.isCollapse = !msg;
            },
            // 获取面包屑信息
            getBreadcrumbInfo(index) {

                this.breadcrumbInfo = index.split("-");
            },
            initBreadcrumbInfo() {
                let nowPath = this.$router.currentRoute.path;
                let sidebar = this.$store.state.sidebarState;

                for (let item in sidebar) {

                    // 第一层 成员
                    if (nowPath == sidebar[item].title.url) {
                        this.breadcrumbInfo = [item];
                    }

                    // 第二层 成员
                    for (let one in sidebar[item].items) {
                        if (nowPath == sidebar[item].items[one].url) {
                            this.breadcrumbInfo = [item, one];
                        }
                    }

                    // 第三层 成员
                    for (let one in sidebar[item].item_groups) {
                        for (let key in sidebar[item].item_groups[one].items) {
                            if (nowPath == sidebar[item].item_groups[one].items[key].url) {
                                this.breadcrumbInfo = [item, one, key];
                            }
                        }
                    }
                }
            }
        },
        mounted() {
            // 首先在Virtual DOM渲染数据时，设置窗口大小．
            this.clientWidth = `${document.documentElement.clientWidth}`;
            this.clientHeight = `${document.documentElement.clientHeight}`;
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下窗口大小
            const that = this;
            window.onresize = function temp() {
                that.clientWidth = `${document.documentElement.clientWidth}`;
                that.clientHeight = `${document.documentElement.clientHeight}`;
            };

            this.initBreadcrumbInfo();
        },
        components: {
            PageSidebar,
            PageMenuNav
        }
    }
</script>

<style lang="scss">
    #page-layout {
        display: flex;
        background: white;

        #layout-right {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            background: #eee;

            #page-layout-contain {
                flex-grow: 1;
                position: relative;
                img {
                    position: absolute;
                    width: 100%;
                    Height: 100%;
                    z-index: 1;
                    opacity: 0.3;
                }
                & > div {
                    flex-grow: 0;
                    position: relative;
                    z-index: 2;
                    overflow: scroll;
                }

                .router-view-page-enter-active {
                    transition: all 1s;
                }
                .router-view-page-leave-active {
                    display: none;
                }
                .router-view-page-enter, .router-view-page-leave-active {
                    opacity: 0;
                    transform: rotateX(90deg);
                }
            }
        }
    }

</style>