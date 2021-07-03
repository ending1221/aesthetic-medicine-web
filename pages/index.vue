<template>
    <div class="index-container">
        <section class="index">
            <NormalSwiper
                className="index"
                :navigation="false">
                <swiper-slide class="index-swiper-inside">
                    <img class="swiper-img" src="~/assets/img/indexBanner/1.png"/>
                </swiper-slide>
                <swiper-slide class="index-swiper-inside">
                    <img class="swiper-img" src="~/assets/img/indexBanner/2.png"/>
                </swiper-slide>
                <swiper-slide class="index-swiper-inside">
                    <img class="swiper-img" src="~/assets/img/indexBanner/3.png"/>
                </swiper-slide> 
                <swiper-slide class="index-swiper-inside">
                    <img class="swiper-img" src="~/assets/img/indexBanner/4.png"/>
                </swiper-slide> 
                <div id="index-text-group">
                    <h1 class="title">「美。無界限」</h1>
                    <p class="en-title">Flawless Beyond Imagination</p>
                    <h2>帶領妳在美的境界遨翔天際</h2>
                    <p>專屬妳的私房景點，美仕媞時尚醫美座落於松山機場前，斥資千萬打造絕佳高空環景明亮視野，俯瞰燦爛奪目的魅力 101 及美麗華摩天輪美景，這片彷若灑落一地的夜光珍寶，繁華台北迷人風貌盡收眼底。</p>
                </div>
            </NormalSwiper>
        </section>
        <section class="section1">
            <Title title="檔期活動" titleEn="EVENTS" />
            <NormalSwiper
                className="event" >
                <swiper-slide 
                    class="event-swiper-inside" 
                    v-for="img in eventImg" 
                    :key="img.pathShort" >
                    <picture class="swiper-img">
                        <source 
                            media="(max-width:768px)" 
                            :srcset="require(`~/assets/img/events/mobile/${getImgName(img.pathShort)}`)">
                        <img :src="require(`~/assets/img/events/${getImgName(img.pathShort)}`)" />
                    </picture>
                </swiper-slide>
            </NormalSwiper>
        </section>
        <section class="section2">
            <Title title="最新消息" titleEn="NEWS" />
            <News />
        </section>
        <section class="section3">
            <Title title="服務項目" titleEn="SERVICE" />
            <div class="service-items">
                <ServiceItem 
                    v-for="(item, index) in service" 
                    :key="item.name" 
                    :imgUrl="require(`~/assets/img/service-item${index+1}.svg`)" 
                    :title="item.name" 
                    :titleEn="item.nameEn" 
                    :description="item.description" >
                    <ServiceItemDetail :items="item.data" />
                </ServiceItem>
            </div>
        </section>
        <section class="section4">
            <Title 
                title="美麗分享" 
                titleEn="BEAUTY SHARE" />
            <BeautyShare />
        </section>
        
    </div>
    
    
</template>

<script>
import Title from '~/components/Title.vue';
import ServiceItem from '~/components/index/Service.vue';
import ServiceItemDetail from '~/components/index/Service-Detail.vue';
import News from '~/components/index/News.vue';
import BeautyShare from '~/components/index/Beauty-Share.vue';
import NormalSwiper from '~/components/Normal-Swiper.vue';

export default {
    components: {
        NormalSwiper,
        Title,
        News,
        ServiceItem,
        ServiceItemDetail,
        BeautyShare
    },
    data() {
        return {
            service: {},
            eventImg: [],
            newsData: [],
            beautyShareData: []
        }
    },
    methods: {
        getServiceData() {
            this.service = this.$store.getters['service/getServiceContent'];
        },
        importAll(r, arr) {
            r.keys().forEach(key => (arr.push({ pathLong: r(key), pathShort: key })));
        },
        getImgName(path) {
            return path.substring(2, path.length)
        },
        importEventImg() {
            this.importAll(require.context('~/assets/img/events/', false, /\.jpg$|\.png$/), this.eventImg);
        },
        getNewsData() {
            let arr = [1,2,3,4,5,6];
            arr.forEach((item)=>{
                this.newsData.push({
                    id: item,
                    imgsrc: require('~/assets/img/news.jpg'),
                    time: `2021-03-1${item}`,
                    title: '新冠肺炎來勢洶洶  美仕媞與您一同守護您的安全及健康',
                    detail: '新冠肺炎疫情爆發，美仕媞時尚醫美診所農曆年後實施各項措施，包含全面加強消毒防疫、每日定時以醫療用次氯酸水淨化空氣及酒精消毒環境加強防疫，員工每日健康自主檢查、加強衛教及配戴口罩，每位貴賓入店時確實測量體溫'
                })
            })
        },
        getBeautyShareData() {
            let arr = [1,2,3,4,5,6];
            arr.forEach((item)=>{
                this.beautyShareData.push({
                    id: item,
                    imgsrc: require('~/assets/img/beauty-share.jpg'),
                    title: '終於擁有夢寐以求的迷人電眼與挺翹鼻',
                    detail: '<p>想要擁有一對迷人的電眼、深邃的雙眼皮線條及立體翹鼻一直是我的夢想。</p><p>單眼皮加上塌鼻的我，平時需要花大量的時間於化妝上，時常修飾過頭一不小心妝就太濃，常被誤以為是「某大姐」。</p> <p>不化妝、素顏的時候，讓我沒有安全感，整個人看起來也沒有精神；就算頂著全妝拍照後還是非常依賴美肌軟體(⋟﹏⋞) 於是在姊妹們的鼓勵下，我終於鼓起勇氣踏出一步。</p>'
                })
            })
        }
    },
    mounted() {
        this.getServiceData();
        this.importEventImg();
        this.getNewsData();
        this.getBeautyShareData();
    }
}
</script>

<style lang="scss" scoped>

.index-container {
    margin: 0 auto;
    width: 100%;
    min-height: 100vh; 
    overflow-x: hidden;
    section:not(.index) {
        padding: 3.5% 10%;
        padding-bottom: 5%;
        @media screen and (max-width: 992px) {
            padding: 5% 10%;
            padding-bottom: 7.5%;
        }
    }
    #index-text-group {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        z-index: 99;
        width: 100%;
        height: 90%;
        padding-top: 35vh;
        max-width: 1280px;
        color: #fff;
        letter-spacing: 1px;
        pointer-events: none;
        @include pc {
            padding: 0 10%;
            padding-top: 14rem;
        }
        @include pad-xl {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 80%;
            height: 100vh;
            padding: 0;
        }
        @media screen and (max-width: 992px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 10%;
            padding-top: 0;
            padding-left: 0;
            width: 80%;
            height: 90vh;
        }
        .title {
            font-size: 270%;
            font-weight: 500;
            margin-left: -2%;
            display: inline-block;
            @media screen and (max-width: 992px) {
                display: block;
            }
            @include mobile {
                margin-left: -7%;
            }
        }
        .en-title {
            font-size: 120%;
            font-weight: 300;
            display: inline-block;
        }
        h2 {
            font-size: 160%;
            font-weight: 300;
            margin-bottom: 20px;       
        }
        p {
            width: 50%;
            max-width: 600px;
            font-size: 110%;
            font-weight: 200;
            @include pad-xl {
                width: 80%;
                max-width: none;
            }
            @media screen and (max-width: 992px) {
                width: 80%;
                max-width: none;
            }
            @include mobile {
                width: 100%;
            }
        }
    }
    .section2 {
        .news-swiper-outside {
            position: relative;
            width: 100%;
            .swiper-button-prev, .swiper-button-next {
                color: #832A57;
                font-weight: bold;
                transform: scale(0.7);
            }
        }
    }
    .section2, .section4 {
        background: #EDE8ED;
    }
    .section3 {
        .service-items {
            max-width: 1280px;
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
            .service-item {
                flex: 49%;
                margin-right: .5%;
                margin-bottom: .5%;
                background-color: #EDE8ED;

                &:nth-child(2), &:nth-child(4) {
                    margin-right: 0;
                }
                @media screen and (max-width: 992px) {
                    flex: 49%;
                    margin-right: 0;
                    margin-bottom: 1%;
                    &:nth-child(1), &:nth-child(3), &:nth-child(5) {
                        margin-right: 1%;
                    }
                }
                @include mobile {
                    flex: 100%;
                    margin-right: 0;
                    margin-bottom: 1.5%;
                    &:nth-child(1), &:nth-child(3), &:nth-child(5) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}

</style>
