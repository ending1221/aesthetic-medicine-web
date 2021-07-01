<template>
    <div class="normal-items">
        <div 
            class="item"  
            v-for="item in data" 
            :key="item.id"
        >
            <div class="img">
                <img :src="item.imgsrc">
            </div>
            <div class="text">
                <p class="time">{{item.time}}</p>
                <h3 class="title">{{item.title}}</h3>
                <p class="detail">{{item.detail}}</p>
                <button 
                    class="btn"
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
        data: {
            type: Array,
            required: true
        },
        pageName: {
            type: String,
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
            this.$router.push(`/maxBeauty/${this.pageName}/${id}`);
            this.scrollToPageTop()
        },
        openNewTab(id) {
            const routerData = this.$router.resolve({path: `/maxBeauty/${this.pageName}/${id}`});
            window.open(routerData.href, '_blank');
        },
    }
}
</script>

<style lang="scss">
.normal-items {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5%;
    .item {
        flex: 30%;
        margin-right: 2%;
        margin-bottom: 2%;
        background: #fff;
        display: flex;
        flex-direction: column;
        background: #fff;
        box-shadow: 0 0 15px rgba(#333, 0.3);
        display: flex;
        flex-direction: column;
        max-height: 450px;
        max-width: 48%;
        &:nth-child(3n+3) {
            margin-right: 0%;
        }
        @include pad {
            flex: 48%;
            &:nth-child(3n+3) {
                margin-right: 2%;
            }
            &:nth-child(even) {
                margin-right: 0;
            }
        }
        @include mobile {
            flex: 100%;
            margin-bottom: 5%;
            margin-right: 0%;
            max-width: 100%;
            &:nth-child(3n+3) {
                margin-right: 0;
            }
            &:nth-child(even) {
                margin-right: 0%;
            }
        }
        .img {
            flex: 1;
            overflow: hidden;
            min-height: 200px;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .text {
            flex: 1;
            color: #665C60;
            padding: 5% 7.5%;
            position: relative;
            letter-spacing: 1px;
            min-height: 220px;
            .time {
                font-size: 70%;
                margin-bottom: 2.5%;
            }
            .title {
                font-size: 20px;
                font-weight: 500;
                line-height: 100%;
                margin-bottom: 5%;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;      // 想顯示的行數 lines you want to display
                -webkit-box-orient: vertical;
                line-height: 20px;       //解決firefox不支援-webkit-line-clamp的問題
                max-height: 40px;

                @include mobile {
                    font-size: 16px;
                    line-height: 16px;       //解決firefox不支援-webkit-line-clamp的問題
                    max-height: 32px;
                }
            }
            .detail {
                font-size: 14px;
                font-weight: 300;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 4;      // 想顯示的行數 lines you want to display
                -webkit-box-orient: vertical;
                line-height: 14px;       //解決firefox不支援-webkit-line-clamp的問題
                max-height: 56px;
                @include mobile {
                    font-size: 12px;
                    line-height: 12px;       //解決firefox不支援-webkit-line-clamp的問題
                    max-height: 48px;
                }
            }
            .btn {
                font-size: 15px;
                line-height: 100%;
                padding: 7.5px 25px;
                padding-bottom: 9px;
                position: absolute;
                right: 7.5%;
                bottom: 10%;
            }
        }
        

    }
}
</style>