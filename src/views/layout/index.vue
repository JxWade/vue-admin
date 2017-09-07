<template>
    <div id="page-layout">
        <page-sidebar :isCollapse="isCollapse" :clientHeight="clientHeight"></page-sidebar>
        <div id="layout-right">
            <page-menu-nav :isCollapse="isCollapse" @changeCollapse="changeCollapse"></page-menu-nav>
            <div class="contai">contain</div>
            <div class="contar">contain</div>
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
                clientHeight:null,
            }
        },
        methods: {
            changeCollapse(msg) {
                // 做侧边栏的动画效果
                this.isCollapse = !msg;
            }
        },
        mounted() {
            // 动态设置背景图的高度为浏览器可视区域高度

            // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
            this.clientHeight = `${document.documentElement.clientHeight}`;
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
            const that = this;
            window.onresize = function temp() {
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
    }

    #layout-right {
        flex-grow: 1;
        background: pink;
    }
</style>