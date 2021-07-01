<template>
    <div class="index-title">
        <h1 class="zh">{{title}}</h1>
        <h2 v-show="titleEn" class="en">{{titleEn}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        titleEn: String 
    }
}
</script>

<style lang="scss">
    .index-container, .page-container {
        .index-title {
            text-align: center;
            margin-bottom: 2.5%;
            @media screen and (max-width: 992px) {
                margin-bottom: 5%;
            }
            .zh, .en {
                display: inline-block;
                letter-spacing: 1px;
                font-size: 150%;
            }
            .zh {
                font-weight: 500;
                color: #665C60;
                margin-right: 15px;
                line-height: 80%;        
                @include mobile {
                    padding-right: 10px;
                    margin-right: 10px;
                }
            }
            .en {
                font-weight: 200;
                color: #832A57;
                border-left: solid 1px #832A57;
                padding-left: 15px;
                padding-bottom: 2.5px;
                line-height: 90%;
            }
        }
    }
</style>