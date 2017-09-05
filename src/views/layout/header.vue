<template>
    <div id="page-menu-nav">
        <div>
            <!--折叠字体图标-->
            <div :class="['collapse-image',isCollapse?'isCollapse':'']" @click="clickCollapse">
                <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
            </div>

            <!--面包屑-->
            <div class="breadcrumb-container">
                <ol class="breadcrumb">
                    <li><a href="#">首页</a></li>
                    <li><a href="#">Library</a></li>
                    <li class="active"><a href="#">Data</a></li>
                </ol>
            </div>
        </div>
        <!--管理员基本信息-->
        <div id="user-basic-info">
            <el-dropdown>
                <div>
                    <img src="/static/images/header.gif" class="img-rounded">
                    <span>超级管理员：admin</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <span><i class="fa fa-archive" aria-hidden="true"></i> Profile</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span><i class="fa fa-cog" aria-hidden="true"></i> Settings</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span><i class="fa fa-bell" aria-hidden="true"></i> messages &nbsp;&nbsp;&nbsp; <span class="badge">12</span></span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span><i class="fa fa-share" aria-hidden="true"></i> logout</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
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
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
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
        justify-content: space-between;
        background-color: $page-layout-header-background;
        color: $page-layout-header-color;
        border-bottom: 2px solid #ccc;
        height: 59px;
        padding: 20px 20px 10px;
        font-size: 22px;
        & > div {
            display: flex;

            .collapse-image {
                transform: rotate(0deg);
                transition: transform 0.5s;
            }
            .isCollapse {
                transform: rotate(-90deg);
                transition: transform 0.5s;
            }

            .breadcrumb-container .breadcrumb {
                background-color: transparent;
                font-size: 18px;
                padding: 0 0 0 40px;
                li {
                    a {
                        color: $page-layout-header-color;
                    }
                    &.active a {
                        color: $page-layout-header-darken-color;
                    }
                }

            }
        }
        #user-basic-info {
            img {
                width: 40px;
                height: 40px;
                position: relative;
                top: -10px;
            }
            .el-dropdown {
                display: inline-block;
                span {
                    vertical-align: 5px;
                    color: $page-layout-header-color;
                    font-size: 18px;
                }
            }
        }
    }
</style>
