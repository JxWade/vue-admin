<template>
    <div class="sidebar">
        <el-menu default-active="1-4-1" class="sidebar-nav" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
            <h3 class="title-contain">
                <div>
                    <i :class="[sidebarHeader.icon]" aria-hidden="true"></i>
                    <span v-show="!isCollapse">{{ sidebarHeader.title }}</span>
                </div>
            </h3>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        props:{
            isCollapse: false
        },
        data() {
            return {
                sidebarHeader: {
                    icon: "fa fa-home",
                    title: "后台系统"
                },
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>


<style lang="scss">

    .sidebar-nav {
        background: white;
        &:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
        h3.title-contain{
            margin: 0;
            background: #324157;
            color: #f5f5f5;
            & > div {
                padding: 20px 20px 10px;
                border-bottom: 2px solid #ccc;
                overflow: hidden;
                white-space: nowrap;

            }
        }
        .el-menu{
            background-color: #f5f5f5;
        }
    }
</style>

