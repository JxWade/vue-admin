<template>
    <div id="page-menu-nav">
        <div :class="['collapse-image',isCollapse?'isCollapse':'']" @click="clickCollapse">
            <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
        </div>

        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
    </div>
</template>

<script>
    export default {
        name: 'page-menu-nav',
        props: [
            "isCollapse",
        ],
        data() {
            return {

            }
        },
        methods: {
            clickCollapse() {
                this.$emit('changeCollapse', this.isCollapse)
            }
        }
    }
</script>


<style lang="scss">
    @import "../../style/variables";

    #page-menu-nav {
        display: flex;
        height: 59px;
        background-color: $page-layout-header-background;
        color: $page-layout-header-color;
        border-bottom: 2px solid #ccc;
        padding: 20px 20px 10px;

        .collapse-image {
            font-size: 22px;
            transform: rotate(0deg);
            transition:transform 0.5s;
        }
        .isCollapse {
            transform: rotate(-90deg);
            transition:transform 0.5s;
        }
    }
</style>
