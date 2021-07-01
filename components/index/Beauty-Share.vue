<template>
    <div class="beauty-swiper-outside">
        <swiper 
            :options="swiperOption" 
            id="beauty-swiper" 
            ref="mySwiper">
            <swiper-slide 
                class="beauty-swiper-inside"  
                v-for="item in testData" 
                :key="item.id">
                <div class="beauty-img">
                    <img :src="item.imgsrc" alt="">
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
                slidesPerView: 2,
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
            console.log(this.$refs.mySwiper.swiperInstance);
            if(this.$refs.mySwiper.swiperInstance) {
                this.$refs.mySwiper.swiperInstance.params.slidesPerView = slidesPerView;
                this.$refs.mySwiper.swiperInstance.params.spaceBetween = spaceBetween;
            }
        },
        updateSwiper() {
            this.setSwiper(2, 30);

            if (window.innerWidth <= 768) {
                this.setSwiper(1, 0);
            }
            
            if(this.$refs.mySwiper.swiperInstance) this.$refs.mySwiper.swiperInstance.update();
        },
        goToNewsContent(id) {
            this.$router.push(`/beautyShare/${id}`);
        },
        openNewTab(id) {
            const routerData = this.$router.resolve({path: `/beautyShare/${id}`});
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
                imgsrc: require('~/assets/img/beauty-share.jpg'),
                title: '終於擁有夢寐以求的迷人電眼與挺翹鼻',
                detail: '<p>想要擁有一對迷人的電眼、深邃的雙眼皮線條及立體翹鼻一直是我的夢想。</p><p>單眼皮加上塌鼻的我，平時需要花大量的時間於化妝上，時常修飾過頭一不小心妝就太濃，常被誤以為是「某大姐」。</p> <p>不化妝、素顏的時候，讓我沒有安全感，整個人看起來也沒有精神；就算頂著全妝拍照後還是非常依賴美肌軟體(⋟﹏⋞) 於是在姊妹們的鼓勵下，我終於鼓起勇氣踏出一步。</p>'
            })
        })
        console.log(this.testData);
    },
    destroyed() {
        window.removeEventListener('resize', this.updateSwiper)
    }
}
</script>

<style lang="scss">
    .beauty-swiper-outside {
        position: relative;
        width: 100%;
        .swiper-button-prev, .swiper-button-next {
            color: #832A57;
            font-weight: bold;
            transform: scale(0.7);
        }
    }
    #beauty-swiper {
        position: relative;
        height: 50vh;
        max-width: 1280px;
        max-height: 600px;
        @include pad-xl {
            max-height: 380px;
        }
        @include pad {
            height: 35vh;
            max-height: initial;
        }
        @include mobile {
            min-height: 400px;
        }
        .beauty-swiper-inside {
            background: #fff;
            display: flex;
            @include mobile {
                flex-direction: column;
            }
            .beauty-img {
                flex: 50%;
                overflow: hidden;
                @include mobile {
                    flex: 60%;
                    min-height: 250px;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    @include mobile {
                        height: initial;
                    }
                }
            }
            .beauty-text {
                flex: 50%;
                color: #665C60;
                padding: 7.5%;
                position: relative;
                letter-spacing: 1px;
                @include mobile {
                    flex: 40%;
                    padding: 10%;
                    padding-top: 7.5%;
                    padding-bottom: 25%;
                    min-height: 250px;
                }
                .beauty-title {
                    font-size: 22px;
                    font-weight: 500;
                    margin-bottom: 5%;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;      // 想顯示的行數 lines you want to display
                    -webkit-box-orient: vertical;
                    line-height: 26px;       //解決firefox不支援-webkit-line-clamp的問題
                    max-height: 52px;

                    @include mobile {
                        font-size: 16px;
                        line-height: 16px;       //解決firefox不支援-webkit-line-clamp的問題
                        max-height: 32px;
                    }
                }
                .beauty-detail {
                    font-size: 14px;
                    font-weight: 300;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 8;      // 想顯示的行數 lines you want to display
                    -webkit-box-orient: vertical;
                    line-height: 18px; 
                    max-height: 180px;
                    @media screen and (max-width: 1279px) {
                        -webkit-line-clamp: 8; 
                        line-height: 18px;
                        max-height: 144px;
                    }
                    @include mobile {
                        -webkit-line-clamp: 4; 
                        font-size: 12px;
                        line-height: 14px;
                        max-height: 56px;
                    }
                }
                .beauty-btn {
                    background-color: #832A57;
                    color: #fff;
                    font-size: 15px;
                    line-height: 100%;
                    border: none;
                    padding: 7.5px 25px;
                    padding-bottom: 9px;
                    position: absolute;
                    border-radius: 2px;
                    right: 18%;
                    bottom: 10%;
                    cursor: pointer;
                    &:hover {
                        background-color: #602D4B
                    }
                    @include mobile {
                        right: 10%;
                    }
                }
            }
        }
        
    }
    
    
</style>