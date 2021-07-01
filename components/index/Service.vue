<template>
    <div class="service-item">
        <div class="service-item-icon">
            <img 
                :src="imgUrl" 
                :alt="title">
        </div>
        <div class="service-item-texts">
            <h3 class="service-item-title">{{title}}</h3>
            <small>{{titleEn}}</small>
            <p>{{description}}</p>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        titleEn: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imgUrl: {
            required: true
        }
    },
    data() {
        return {
            test: this.title
        }
    }
}
</script>

<style lang="scss">
    .service-item {
        padding: 1.5%;
        text-align: center;
        color: #832A57;
        position: relative;
        @media screen and (max-width: 992px) {
            padding: 3%;
        }
        &:hover {
            .service-detail{
                opacity: 1;
            }
        }
        
        .service-item-title {
            font-weight: 500;
            font-size: 120%;
            line-height: 100%;
            margin-bottom: 0;
        }
        small, p {
            font-weight: 200;
            font-size: 80%;
        }
        p {
            color: #665C60;
        }

        .service-item-icon {
            width: 30%;
            max-width: 150px;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
    }
    
</style>