<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>
            <router-link to="/">回到首页</router-link>
        </h2>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: '我是头部'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
