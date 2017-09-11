<template>
    <img class="image-code" :src="imageSrc" @click="update" :width="width" :height="height" alt="图形验证码">
</template>

<script>
    export default {
        name: 'image-code',
        props: {
            width: null,
            height: null,
        },
        data() {
            return {
                imageSrc: '/static/api/yzm/1.jpeg'
            }
        },
        methods: {
            update() {
                this.imageSrc = `/static/api/yzm/${ Math.floor(Math.random() * 99 + 1)}.jpeg`
            }
        }

    }
</script>
