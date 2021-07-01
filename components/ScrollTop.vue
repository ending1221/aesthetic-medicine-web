<template>
    <div :class="{hide: hideScrollTop}" id="scroll-top" @click="scrollToPageTop">
        <fa :icon="['fas', 'angle-up']" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            hideScrollTop: true
        }
    },
    methods: {
        scrollToPageTop() {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        },
        scrollEvent(e) {
            if (window.scrollY < 450) {
                this.hideScrollTop = true;
            } else {
                this.hideScrollTop = false;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollEvent)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollEvent)
    }
}
</script>

<style lang="scss">
    #scroll-top {
        width: 45px;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        color: #fff;
        background-color: rgba(97, 46, 76, 0.3);
        transition: 0.5s;
        position: fixed;
        text-align: center;
        bottom: 5%;
        right: 2.5%;
        border-radius: 100%;
        cursor: pointer;
        transform: translateX(0%);
        z-index: 999999;
        @include mobile {
            bottom: 12%;
        }
        &:hover {
            background-color: rgba(97, 46, 76, 0.8);
        }
        &.hide {
            right: 0;
            transform: translateX(110%);
        }
    }
</style>