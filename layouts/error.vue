<template>
    <div class="page-container">
        <h2 v-if="error.statusCode === 404">oops! 找不到此頁面 :( <br>即將跳轉回首頁</h2>
        <h2 v-else>似乎哪裡出錯了... :( <br>即將跳轉回首頁</h2>
        <br>
        <NuxtLink class="btn" @click="clearTimer" to="/">回到首頁</NuxtLink>
    </div>
</template>

<script>
export default {
    props: ['error'],
    data() {
        return {
            timer: null
        }
    },
    mounted() {
        const v = this;
        this.timer = setTimeout(()=>{
            this.$router.push('/');
            clearTimeout(v.timer);
        }, 3000)
    },
    methods: {
        clearTimer() {
            clearTimeout(this.timer);
        }
    }
}
</script>