<template>
    <div class="beauty-items">
        <div 
            class="beauty-item"  
            v-for="item in beautyData" 
            :key="item.id"
        >
            <div class="beauty-img">
                <img :src="item.imgsrc">
            </div>
            <div class="beauty-text">
                <h3 class="beauty-title">{{item.id}} {{item.title}}</h3>
                <div 
                    class="beauty-detail" 
                    v-html="item.detail"
                ></div>
                <button 
                    class="beauty-btn btn"
                    @click.left="goToNewsContent(item.id)"
                    @click.middle="openNewTab(item.id)">
                    more
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        beautyData: {
            type: Array,
            required: true
        }
    },
    methods: {
        scrollToPageTop() {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        },
        goToNewsContent(id) {
            this.$router.push(`/beautyShare/${id}`);
            this.scrollToPageTop()
        },
        openNewTab(id) {
            const routerData = this.$router.resolve({path: `/beautyShare/${id}`});
            window.open(routerData.href, '_blank');
        },
    }
}
</script>

<style>

</style>