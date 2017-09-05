<template>
    <div class="layout">
            <sidebar class="sidebar"></sidebar>
        <div class="layout-right">
            <div class="header">header</div>
            <div class="container">contain</div>
        </div>
    </div>
</template>

<script>
    import Header from './header';
    import Sidebar from './sidebar';


    export default {
        name:'layout',
        components:{Sidebar}
    }
</script>

<style lang="scss">
    .layout{
        display: flex;
        background: gray;
    }
    .sidebar{
        background:tomato;
    }
    .layout-right{
        flex-grow:1;
        background: pink;
    }
</style>