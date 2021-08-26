<template>
    <swiper 
        :options="swiperOption" 
        :id="`${className}-swiper`">
        <slot></slot>
        <div 
            v-if="navigation && data.length > 1" 
            :class="`swiper-button-prev`"></div>
        <div 
            v-if="navigation && data.length > 1" 
            :class="`swiper-button-next`"></div>

        <div v-if="pagination" class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name: 'NormalSwiper',
    props: {
        className: {
            default: 'normal',
            type: String
        },
        navigation: {
            default: true,
            type: Boolean
        },
        pagination: {
            default: true,
            type: Boolean
        },
        data: {
            default: () => ([]),
            require: true,
            type: Array
        }
    },
    data(){
        return{
            swiperOption: {
                slidesPerView: 'auto',
                centeredSlides: true,
                pagination: {
                    el: `#${this.className}-swiper  .swiper-pagination`,
                    dynamicBullets: false,
                    bulletActiveClass: 'index-bullet-Active',
                    bulletClass: 'index-bullet',
                },
                autoplay: {
                    disableOnInteraction: false,
                    delay: 5000
                },
                navigation: {
                    nextEl: `#${this.className}-swiper .swiper-button-next`,
                    prevEl: `#${this.className}-swiper .swiper-button-prev`
                },
                effect: 'fade'
            }
        }
    }
}
</script>

<style lang="scss">
    #index-swiper {
        width: 100vw;
        height: 100vh;
        position: relative;
        
        .swiper-slide {
            width: 100vw;
            object-fit: cover;
            position: relative;
        }
        .swiper-img {
            height: 100%;
            width: 100vw;
            object-fit: cover;
            position: relative;
        }
        .index-swiper-inside {
            position: relative;
            &::after {
                content: '';
                width: 100vw;
                height: 100%;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background-color: rgba(132, 43, 87, 0.35);
            }
        }
        .swiper-pagination {
            padding-right: 10%;
            padding-bottom: 3%;   
            text-align: right;     
        }
        
        .index-bullet {
            width: 8px;
            height: 8px;
            display: inline-block;
            border-radius: 100%;
            background: transparent;
            border: solid 1px #fff;
            opacity: 1;
            margin: 0 4px;
        }
        .index-bullet-Active {
            width: 8px;
            height: 8px;
            display: inline-block;
            border-radius: 100%;
            background: #fff;
            border: solid 1px #fff;
            opacity: 1;
        }
    }
    
    #event-swiper {
        width: 100%;
        height: 28vw;
        position: relative;
        max-width: 1280px;
        max-height: 450px;
        margin: 0 auto;
        
        @include pad {
            min-height: 80vw;
        }
        .swiper-slide {
            width: 100%;
            object-fit: cover;
            position: relative;
        }
        .swiper-img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            position: relative;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
        }
        .swiper-button-prev, .swiper-button-next {
            color: #fff;
            font-weight: bold;
            transform: scale(0.7);
            margin: 0 20px;
            top: 50%;
            transform: translateY(-50%);
            @include mobile {
                margin: 0;
            }
        }
        .index-bullet {
            width: 8px;
            height: 8px;
            display: inline-block;
            border-radius: 100%;
            background: transparent;
            border: solid 1px #fff;
            opacity: 1;
            margin: 0 4px;
        }
        .index-bullet-Active {
            width: 8px;
            height: 8px;
            display: inline-block;
            border-radius: 100%;
            background: #fff;
            border: solid 1px #fff;
            opacity: 1;
        }
    }
</style>