<template>
    <div class="page-container">
         <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>關於美仕媞</el-breadcrumb-item>
            <el-breadcrumb-item>參考價格</el-breadcrumb-item>
        </el-breadcrumb>
        <Title title="參考價格" titleEn="PRICE" />
        <div class="normal-items price-items">
            <div 
                class="item"  
                v-for="item in priceData" 
                :key="item.id"
                @click="openPriceAlert(item.imgsrc)"
            >
                <div class="img">
                    <img :src="item.imgsrc">
                </div>
                <div class="text">
                    <h3 class="title">{{item.title}}</h3>
                </div>
            </div>
        </div>
        <el-pagination
            :pager-count="11"
            layout="prev, pager, next"
            :total="pageCount * 10"
            :hide-on-single-page="true"
            :current-page="Number(pageId)"
            @current-change="currentChange"
        >
        </el-pagination>
        <div v-show="showPrice" @click="closeAlert($event)" id="price-alert">
            <div class="alert-main">
                <img :src="newPriceImgSrc" id="priceImg" alt="療程參考價格">
                <div @click="closeAlert" class="close">
                    <p class="close_text">✕</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from '~/components/Title.vue';

export default {
    components: {
        Title,
    },
    watchQuery: ['page'],
    asyncData(context) {
        // axious api get data
        // test data 
        const currentPage = context.query.page || 1;
        const parPage = 9;
        let testData = [];
        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arr.forEach((item)=>{
            testData.push({
                id: item,
                imgsrc: require('~/assets/img/price.jpg'),
                title: `${item} 不讓醜陪你過聖誕`
            })
        })

        const getItems = () => {
            let current = currentPage * parPage;
            let start = current - parPage;
            return testData.slice(start, current);
        }
        const getPageCount = () => {
            return Math.ceil(testData.length / parPage);
        }
        return {
            pageId: currentPage,
            priceData: getItems(),
            pageCount: getPageCount()
        }
    },
    data(){
        return {
            pagination: {
                totalPages: 0,
                currentPage: 1,
                perPage: 9
            },
            showPrice: false,
            newPriceImgSrc: require('~/assets/img/price.jpg')
        }
    },
    methods: {
        currentChange(pageId) {
            this.$router.push({ path: '/maxBeauty/price', query: { page: pageId } });
            this.scrollToPageTop();
        },
        scrollToPageTop() {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        },
        openPriceAlert(imgSrc) {
            this.showPrice = true;
            this.changePriceImgSrc(imgSrc);
        },
        changePriceImgSrc(imgSrc) {
            console.log(imgSrc);
            this.newPriceImgSrc = imgSrc;
        },
        closeAlert($event) {
            if ($event.target.id === 'priceImg') return
            this.showPrice = false;
        }
    }
}
</script>

<style lang="scss">
.normal-items.price-items {
    .item {
        cursor: pointer;
        .img {
            flex: 7;
            overflow: hidden;
            min-height: 200px;
            // @include 
            &:hover {
                img {
                    transform: scale(1.1);
                }
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: 0.5s;
            }
        }
        .text {
            flex: 1;
            min-height: 50px;
            display: flex;
            align-items: center;
        }
    }
}
#price-alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#333,0.7);
    z-index: 1000000;
    overflow-y: auto;
    .alert-main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        max-height: 90vh;
        @include pad {
            width: 80%;
        }
        @include mobile {
            width: 90%;
        }
        img {
            width: 100%;
        }
        .close {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            border-radius: 100%;
            background-color: rgba(51, 51, 51, 0.7);
            position: absolute;
            right: -10px;
            top: 0;
            transform: translate(100%, 0);
            overflow: visible;
            cursor: pointer;
            @include mobile {
                right: 5px;
                top: 5px;
                transform: translate(0);
            }
        }
        .close_text {
            text-anchor: middle;
            color: rgb(255, 255, 255);
            cursor: default;
            line-height: 0;
            padding-bottom: 3px;
        }
    }
}
</style>
