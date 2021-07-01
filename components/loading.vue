<template lang="html">
    <div class="loading-page" v-if="loading">
        <div class="loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
        loading: false
        }),
        methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        }
        }
    }
</script>

<style lang="scss" scoped>
    .loading-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(68, 58, 64, 0.8);
        text-align: center;
        padding-top: 200px;
        font-size: 30px;
        font-family: sans-serif;
        z-index: 999;
    }
    .loader {
        position: absolute;
        top: 50%;
        left: 40%;
        margin-left: 10%;
        transform: translate3d(-50%, -50%, 0);
        display: inline-block;
        background-color: #fff;
        padding: 1.5rem 1.75rem;
        border-radius: 10px;
    }
    .dot {
        width: 20px;
        height: 20px;
        background: #832A57;
        border-radius: 100%;
        display: inline-block;
        animation: slide 1s infinite;
    }
    @for $i from 1 through 5 {
        .dot:nth-child(#{$i}) {
            animation-delay: ($i * .1s);
            background: rgb((130 + ($i * 15)), (42 + ($i * 5)), (87 + ($i * 10)));
        }
    }
    @keyframes slide {
        0% {
            transform: scale(1);
        }
        50% {
            opacity: .3;
            transform: scale(2);
        }
        100% {
            transform: scale(1);
        }
    }
</style>