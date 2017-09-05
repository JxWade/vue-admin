<template>
    <div id="page-layout">
        <page-sidebar :isCollapse="isCollapse"></page-sidebar>
        <div id="layout-right">
            <page-menu-nav :isCollapse="isCollapse" @changeCollapse="changeCollapse"></page-menu-nav>
            <div class="container">contain</div>
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
                isCollapse: false
            }
        },
        methods: {
            changeCollapse(msg) {
                // 做侧边栏的动画效果
                this.isCollapse = !msg;
            }
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
        background: gray;
    }

    #layout-right {
        flex-grow: 1;
        background: pink;
    }
</style>