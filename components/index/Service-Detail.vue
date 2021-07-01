<template>
    <ul class="service-detail">
        <li 
            class="service-detail-item" 
            v-for="item in items" 
            :key="item.name">
            <NuxtLink :to="item.path">
                {{item.name}}
            </NuxtLink>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        items: {
            required: true
        }
    }
}
</script>

<style lang="scss">
    .service-detail {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #832A57;
        left: 0;
        top: 0;
        box-sizing: border-box;
        padding: 8%;
        text-align: left;
        transition: 0.5s;
        opacity: 0;
        
        &-item {
            color: #fff;
            margin-right: 1%;
            display: inline-block;
            max-height: 30px;
            padding: 0 .5rem;
            border-radius: 2px;
            cursor: pointer;
            margin-bottom: 1%;
            a {
                color: #fff;
                font-size: 90%;
            }
            &:hover {
                background-color: #fff;
                a {
                    color: #832A57;
                }
            }
        }
    }
</style>