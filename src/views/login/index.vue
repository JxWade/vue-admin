<template>
    <div class="login box">
        <div class="item">


            <div class="panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title">{{title}}</h3>
                </div>
                <div class="panel-body">
                    Panel content
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                title:"XXX 后台管理系统"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    body {
        background: url("/static/images/background.jpg") fixed center center no-repeat;
        background-size: cover;
    }

    .box {
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .item {
       width: 500px;
    }
</style>
