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
                    <li>{{ breadcrumbDetail[0].name }}</li>
                    <li v-if="breadcrumbDetail[1] != undefined">{{ breadcrumbDetail[1].name }}</li>
                    <li v-if="breadcrumbDetail[2] != undefined">{{ breadcrumbDetail[2].name }}</li>
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
                        <span><i class="fa fa-bell" aria-hidden="true"></i> messages &nbsp;&nbsp;&nbsp; <span
                                class="badge">12</span></span>
                    </el-dropdown-item>
                    <el-dropdown-item @click.native="logout">
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
        props: {
            isCollapse: false,
            breadcrumbInfo: null,
        },
        data() {
            return {}
        },
        computed: {
            /**
             *  获取面包屑的详细信息
             * @returns {Array}
             */
            breadcrumbDetail() {
                let sidebar = this.$store.state.sidebarState;
                let breadcrumb = [];

                breadcrumb[0] = sidebar[this.breadcrumbInfo[0]].title;

                if (this.breadcrumbInfo[2] != undefined) {
                    breadcrumb[1] = sidebar[this.breadcrumbInfo[0]].item_groups[this.breadcrumbInfo[1]].title;
                    breadcrumb[2] = sidebar[this.breadcrumbInfo[0]].item_groups[this.breadcrumbInfo[1]].items[this.breadcrumbInfo[2]];
                } else if (this.breadcrumbInfo[1] != undefined) {
                    breadcrumb[1] = sidebar[this.breadcrumbInfo[0]].items[this.breadcrumbInfo[1]];
                }

                return breadcrumb;
            }
        },
        methods: {
            clickCollapse() {
                this.$emit('changeCollapse', this.isCollapse)
            },
            logout(){
                this.$store.dispatch('user_logout');
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
