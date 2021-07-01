<template>
    <div class="news-swiper-outside">
        <swiper 
            :options="swiperOption" 
            id="news-swiper" 
            ref="mySwiper">
            <swiper-slide 
                class="news-swiper-inside"  
                v-for="item in testData" 
                :key="item.id">
                <div class="news-img">
                    <img :src="item.imgsrc">
                </div>
                <div class="news-text">
                    <p class="news-time">{{item.time}}</p>
                    <h3 class="news-title">{{item.title}}</h3>
                    <p class="news-detail">{{item.detail}}</p>
                    <button 
                        class="news-btn btn"
                        @click.left="goToNewsContent(item.id)"
                        @click.middle="openNewTab(item.id)">
                        more
                    </button>
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    
    
</template>

<script>

export default {
    name: 'NewsSwiper',
    data(){
        return{
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            testData: []
        }
    },
    methods: {
        setSwiper(slidesPerView, spaceBetween) {
            if (this.$refs.mySwiper.swiperInstance) {
                this.$refs.mySwiper.swiperInstance.params.slidesPerView = slidesPerView;
                this.$refs.mySwiper.swiperInstance.params.spaceBetween = spaceBetween;
            }
        },
        updateSwiper() {
            this.setSwiper(3, 30);

            if(window.innerWidth <= 768) {
                this.setSwiper(2, 15);
            }
            if (window.innerWidth <= 500) {
                this.setSwiper(1, 0);
            }

            this.$refs.mySwiper.swiperInstance.update();
        },
        scrollToPageTop() {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        },
        goToNewsContent(id) {
            this.$router.push(`/maxBeauty/news/${id}`);
            this.scrollToPageTop()
        },
        openNewTab(id) {
            const routerData = this.$router.resolve({path: `/maxBeauty/news/${id}`});
            window.open(routerData.href, '_blank');
        },
    },
    mounted() {
        window.addEventListener('resize', this.updateSwiper);
        this.updateSwiper();

        let arr = [1,2,3,4,5,6];
        arr.forEach((item)=>{
            this.testData.push({
                id: item,
                imgsrc: require('~/assets/img/news.jpg'),
                time: `2021-03-1${item}`,
                title: '新冠肺炎來勢洶洶  美仕媞與您一同守護您的安全及健康',
                detail: '新冠肺炎疫情爆發，美仕媞時尚醫美診所農曆年後實施各項措施，包含全面加強消毒防疫、每日定時以醫療用次氯酸水淨化空氣及酒精消毒環境加強防疫，員工每日健康自主檢查、加強衛教及配戴口罩，每位貴賓入店時確實測量體溫'
            })
        })
    },
    destroyed() {
        window.removeEventListener("resize", this.updateSwiper)
    }
}
</script>

<style lang="scss">
    #news-swiper {
        position: relative;
        height: 50vh;
        max-width: 1280px;
        max-height: 600px;
        min-height: 380px;
        @include pad-xl {
            max-height: 400px;
        }
        @include pad {
            height: 35vh;
            max-height: initial;
        }
        @include mobile {
            min-height: 320px;
        }
        .news-swiper-inside {
            background: #fff;
            /* Center slide text vertically */
            display: flex;
            flex-direction: column;
            .news-img {
                flex: 1;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .news-text {
                flex: 1;
                color: #665C60;
                padding: 5% 7.5%;
                position: relative;
                letter-spacing: 1px;
                .news-time {
                    font-size: 70%;
                    margin-bottom: 2.5%;
                }
                .news-title {
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
                .news-detail {
                    font-size: 14px;
                    font-weight: 300;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;      // 想顯示的行數 lines you want to display
                    -webkit-box-orient: vertical;
                    line-height: 14px;       //解決firefox不支援-webkit-line-clamp的問題
                    max-height: 28px;
                    @include mobile {
                        font-size: 12px;
                        line-height: 12px;       //解決firefox不支援-webkit-line-clamp的問題
                        max-height: 24px;
                    }
                }
                .news-btn {
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