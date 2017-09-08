<template>
    <div id="page-sidebar">
        <h3 class="title-contain">
            <div>
                <i :class="[sidebarHeader.icon]" aria-hidden="true"></i>
                <span v-show="!isCollapse">{{ sidebarHeader.title }}</span>
            </div>
        </h3>
        <div :style="{height:clientHeight - 59 +'px',overflow:isCollapse ? 'visible':'scroll'}">
            <el-menu class="page-sidebar-nav" @open="handleOpen" @close="handleClose"
                     :collapse="isCollapse">
                <template v-for="(item,index) in getSidebarInfo">

                    <!--一级导航没有子导航-->
                    <template v-if="(item.items == undefined)  && (item.item_groups == undefined)">
                        <el-menu-item :index="index.toString()" @click="routePush(item.title.url)">
                            <i :class="[item.title.icon]" aria-hidden="true"></i>&nbsp;&nbsp;
                            <span slot="title">{{item.title.name}}</span>
                        </el-menu-item>
                    </template>

                    <!--一级导航有子导航-->
                    <template v-else>
                        <el-submenu :index="index.toString()">
                            <!--标题-->
                            <template slot="title">
                                <i :class="[item.title.icon]" aria-hidden="true"></i>&nbsp;&nbsp;
                                <span slot="title">{{item.title.name}}</span>
                            </template>

                            <!--子导航有孙子导航-->
                            <template v-if="item.item_groups != undefined">
                                <template v-for="(value,key) in item.item_groups">
                                    <el-menu-item-group>
                                        <span slot="title">
                                            <i :class="[value.title.icon]" aria-hidden="true"></i>&nbsp;&nbsp;
                                            <span>{{value.title.name}}</span>
                                        </span>
                                        <template v-for="(child,ck) in value.items">
                                            <el-menu-item :index="index+'-'+key+'-'+ck"
                                                          @click="routePush(child.url)">
                                                <i :class="[child.icon]" aria-hidden="true"></i>&nbsp;&nbsp;
                                                <span>{{child.name}}</span>
                                            </el-menu-item>
                                        </template>
                                    </el-menu-item-group>
                                </template>
                            </template>

                            <!--遍历子导航-->
                            <template v-if="item.items != undefined">
                                <template v-for="(value,key) in item.items">
                                    <el-menu-item :index="index+'-'+key" @click="routePush(value.url)">
                                        <i :class="[value.icon]" aria-hidden="true"></i>&nbsp;&nbsp;
                                        <span>{{value.name}}</span>
                                    </el-menu-item>
                                </template>
                            </template>
                        </el-submenu>

                    </template>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'page-sidebar',
        props: {
            isCollapse: false,
            clientHeight: null,
        },
        data() {
            return {
                sidebarHeader: {
                    icon: "fa fa-home",
                    title: "后台系统"
                },
            };
        },
        computed: {
            ...mapGetters([
                'getSidebarInfo',
            ])
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            routePush(url) {
                this.$router.push(url);
            }
        }
    }
</script>


<style lang="scss">
    @import "../../style/variables";

    #page-sidebar {
        h3.title-contain {
            margin: 0;
            background: $page-layout-header-background;
            color: $page-layout-header-color;
            border-bottom: 2px solid #ccc;
            & > div {
                padding: 20px 20px 10px;
                overflow: hidden;
                white-space: nowrap;

            }
        }
        & > div {
            .page-sidebar-nav {
                background: white;
                &:not(.el-menu--collapse) {
                    width: 200px;
                }
                &.el-menu--collapse {
                    width: 64px;
                }
                .el-menu {
                    background-color: #f5f5f5;
                }
            }
        }
    }
</style>

