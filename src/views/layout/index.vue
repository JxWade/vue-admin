<template>
    <div id="page-layout">
        <!--侧边导航区-->
        <page-sidebar :isCollapse="isCollapse" :clientHeight="clientHeight"></page-sidebar>
        <div id="layout-right">
            <!--页面的头部-->
            <page-menu-nav :isCollapse="isCollapse" @changeCollapse="changeCollapse"></page-menu-nav>
            <div id="page-layout-contain">
                <!--页面的背景-->
                <img src="/static/images/layout-background.jpg" alt="">
                <!--页面的内容区域-->
                <div :style="{width:clientWidth -200 +'px',height:clientHeight - 59 +'px',padding:'20px'}">
                    <div>
                        <router-view></router-view>
                    </div>
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
            }
        },
        methods: {
            changeCollapse(msg) {
                // 做侧边栏的动画效果
                this.isCollapse = !msg;
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
            }
        }
    }

</style>