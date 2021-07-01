<template>
    <div class="team-item">
        <div class="img-block">
            <img 
                :src="require(`~/assets/img/team/${id}.png`)" 
                :alt="name"
            >
        </div>
        <div class="text-block">
            <div class="name">{{name}} 
                <span>醫師</span>
            </div>
            
            <div class="team-title">
                {{title}}
            </div>
            <span class="normalText">特別預約門診</span>
            <button 
                class="btn"
                @click.left="leftClickEvent(id)"
                @click.middle="middleClickEvent(id)"
            >more</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'id', 'title', 'leftClickEvent', 'middleClickEvent']
}
</script>

<style lang="scss">
    .team-item {
        display: inline-flex;
        flex-direction: column;
        padding: 1.5%;
        padding-bottom: 7%;
        position: relative;
        box-shadow: 0 0 15px rgba(#333, 0.3);
        border-radius: 2px;
        margin: 1%;
        min-width: 300px;
        @media screen and (max-width: 992px) {
            margin: 2%;
            padding-bottom: 10%;
            min-width: initial;
        }
        @include mobile {
            width: 100%;
            padding: 3%;
            padding-bottom: 20%;
            margin: 0;
            margin-bottom: 5%;
        }
        .normalText {
            font-weight: 200;
            @media screen and (max-width: 992px) {
                font-size: 90%;
            }
            @include mobile {
                font-size: 110%;
            }
        }
        .img-block {
            flex: 2;
            max-width: 300px;
            img {
                width: 100%;
            }
        }
        .text-block {
            flex: 1;
            padding: 1% 0;
            .name {
                color: #842B57;
                font-size: 140%;
                font-weight: 500;
                span {
                    font-size: 80%;
                    color: #333;
                    font-weight: 500;
                }
                @include mobile {
                    font-size: 200%;
                }
            }
            .team-title {
                color: #fff;
                background-color: #842B57;
                font-size: 90%;
                font-weight: 200;
                display: inline-block;
                padding: .5% 4%;
                margin-top: 1%;
                margin-right: 2%;
                border-radius: 2px;
                @include mobile {
                    font-size: 120%;
                }
            }
        }
        .btn {
            font-size: 80%;
            position: absolute;
            right: 5%;
            bottom: 5%;

        }
        
    }
</style>