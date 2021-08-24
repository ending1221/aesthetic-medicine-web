<template>
    <header id="header">
        <nav class="navbar">
            <NuxtLink class="logo" to="/">
                <img src="~/assets/img/logo.svg" alt="Max Beauty Clinic">
            </NuxtLink>
            <a  id="moblie-menu" 
                :class="{open: isOpen}" 
                @click="handleMenuOpen" 
                href="javascript:;">
                <fa v-if="!isOpen" :icon="['fas', 'bars']" />
                <fa v-if="isOpen" :icon="['fas', 'times']" />
            </a>
            <ul class="nav-group" :class="{open: isOpen}">
                <li class="nav-item" 
                @click="handleMainMenuOpen(1, $event)" 
                data-index="1">
                    <a class="nav-item-a" href="javascript:;">關於美仕媞 
                        <fa :icon="['fas', 'angle-down']" />
                    </a>

                    <ul class="nav-mainMenu" 
                        :class="{open: mainMenuIsOpenIndex == 1}">
                        <li class="nav-mainMenu-item">
                            <NuxtLink class="inside-a" to="/maxBeauty/about">關於我們</NuxtLink>
                        </li>
                        <li 
                            class="nav-mainMenu-item" >
                            <NuxtLink class="nav-subItem-a inside-a" to="/maxBeauty/team">醫療團隊 <fa :icon="['fas', 'angle-down']" v-if="bodyWidth > 996" /></NuxtLink>
                            <SubMenu 
                                :items="teamData" 
                                suffix="醫師"/>
                        </li>
                        <li class="nav-mainMenu-item">
                            <NuxtLink class="inside-a" to="/maxBeauty/news">最新消息</NuxtLink>
                        </li>
                        <li class="nav-mainMenu-item">
                            <NuxtLink class="inside-a" to="/maxBeauty/doctorsColumn">醫師專欄</NuxtLink>
                        </li>
                        <li class="nav-mainMenu-item">
                            <NuxtLink class="inside-a" to="/maxBeauty/price">參考價格</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="nav-item service-group" 
                    @click="handleMainMenuOpen(2, $event)" 
                    data-index="2">
                    <a class="nav-item-a" href="javascript:;">服務項目 
                        <fa :icon="['fas', 'angle-down']" />
                    </a>
                    <ul 
                        class="nav-mainMenu" 
                        :class="{open: mainMenuIsOpenIndex == 2}" >

                        <li class="nav-mainMenu-item" 
                            @click="handleSubMenuOpen(item.name)" 
                            v-for="(item, index) in service" 
                            :key="item.description + index" >
                            <a class="nav-subItem-a inside-a" href="javascript:;">{{item.name}} <fa :icon="['fas', 'angle-down']" /></a>
                            <SubMenu 
                                :class="{open: subMenuIsOpenName == item.name}" 
                                :items="item.data" />
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/beautyShare">美麗分享</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/reservation">預約諮詢</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import SubMenu from '~/components/Header-SubMenu.vue';
export default {
    components: {
        SubMenu
    },
    data() {
        return {
            bodyWidth: null,
            isOpen: false,
            service: {},
            teamData: [],
            mainMenuIsOpenIndex: '',
            subMenuIsOpenName: ''
        };
    },
    mounted() {
        this.bodyWidth = document.body.clientWidth;
        this.teamData = this.$store.getters['team/getTeamData'];     
        this.service = this.$store.getters['service/getServiceContent'];       
    },
    watch: {
        $route(r) {
            this.isOpen = false;
            this.mainMenuIsOpenIndex = '';
            this.subMenuIsOpenName = '';
        },
    },
    methods: {
        handleMenuOpen() {
            this.isOpen = !this.isOpen;
        },
        handleMainMenuOpen(index, $event) {
            if($event.target.className !== 'nav-item-a') return
            this.mainMenuIsOpenIndex = this.mainMenuIsOpenIndex == index ? '' : index;
            this.subMenuIsOpenName = '';
        },
        handleSubMenuOpen(name) {
            this.subMenuIsOpenName = this.subMenuIsOpenName == name ? '' : name;
        }
    },
}

</script>


<style lang="scss">

    header#header{
        width: 100vw;
        background-color: rgba(256,256,256,0.9);
        border-bottom: solid 4px #842B57;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 999;

        .navbar {
            width: 100%;
            max-width: 1310px;
            margin: 0 auto;
            padding: 10px 15px;
            padding-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            box-sizing: border-box;
            @include pc {
                padding: 15px 10% 10px 10%;
            }
            @media screen and (max-width: 992px) {
                padding: 15px 10%;
            }
        }

        a {
            color: #302113;
            text-decoration: none;
            display: block;
        }
        .logo {
            max-width: 250px;
            img {
                width: 100%;
            }
            @include mobile {
                max-width: 170px;
            }
        }
        #moblie-menu {
            display: none;
            background-color: transparent;
            color: #842B57;
            font-size: 32px;
            font-weight: 100;
            height: auto;
            width: auto;
            cursor: pointer;
            position: absolute;
            right: 10%;
            top: 25%;
            z-index: 99999;
            @media screen and (max-width: 992px) {
                display: inline-block;
                
            }
            @include mobile {
                font-size: 28px;
            }
            
            &.open {
                color: #fff;
            }
        }

        .nav-group {
            display: inline-flex;
            justify-content: flex-end;
            width: 70%;
            padding-right: 1%;
            position: relative;
            z-index: 99;
            @media screen and (max-width: 992px) {
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #842B57;
                justify-content: flex-start;
                flex-direction: column;
                align-items: center;
                padding-right: 0;
                padding-top: 15%;
                box-sizing: border-box;
                overflow: hidden;
                overflow-y: auto;
                transform: translateX(-100%);
                transition: 0.5s;

                &.open {
                    transform: translateX(0%);
                }
                .nuxt-link-active {
                    color: #FFEA9A !important;
                    font-weight: 500;
                }
            }
            @include mobile {
                padding-top: 20%;
                z-index: 99998;
            }
            
            .nav-item {
                font-size: 15px;
                letter-spacing: 1px;
                display: inline-block;
                position: relative;
                padding-bottom: 15px;
                margin-left: 5%;
                @media screen and (max-width: 992px) {
                    width: 100%;
                    font-size: 24px;
                    padding: 0;
                    margin-left: 0;
                    border-bottom: solid 1px rgba(242, 242, 242, 0.3);
                    &:nth-child(1) {
                        border-top: solid 1px rgba(242, 242, 242, 0.3);
                    }
                    & > a {
                        color: #fff;
                        display: block;
                        width: 100%;
                        padding: 25px 10%;
                    }
                    .fa-angle-down {
                        position: absolute;
                        right: 10%;
                        margin-top: 10px;
                        pointer-events: none;
                        @include pad {
                            margin-top: 5px;
                        }
                    }
                }
                @include pad {
                    font-size: 22px;
                }
                @include mobile {
                    font-size: 15px;
                }
                
                &:hover {
                    & > a {
                        color: #842B57;
                        font-weight: 500;
                    }
                    & > .nav-mainMenu {
                        visibility: initial;
                    }
                    @media screen and (max-width: 992px) {
                        background-color: rgba(96, 45, 75, 0.5);
                        & > a {
                            color: #fff;
                        }
                        & > .nav-mainMenu {
                        visibility: hidden;
                    }
                    }
                }
                .nav-mainMenu {
                    visibility: hidden;
                    position: absolute;
                    left: 50%;
                    margin-top: 15px;
                    background-color: #fff;
                    border-top: solid 3px #842B57;
                    border-bottom: solid 3px #842B57;
                    transform: translateX(-50%);
                    @media screen and (max-width: 992px) {
                        height: 0;
                        position: relative;
                        left: initial;
                        margin-top: 0;
                        width: 100vw;
                        transform: translateX(0);
                        border: none;
                        background-color: transparent;
                        &.open {
                            visibility: initial;
                            height: auto;
                        }
                    }
                    &-item {
                        position: relative;
                        min-width: 120px;
                        text-align: center;
                        border-bottom: solid 1px #F2F2F2;
                        @media screen and (max-width: 992px) {
                            width: 100%;
                            text-align: left;
                            border-bottom: solid 1px rgba(242, 242, 242, 0.3);
                            & > a {
                                color: #fff;
                            }
                            &:nth-child(1) {
                                border-top: solid 1px rgba(242, 242, 242, 0.3);
                            }
                        }
                        & > a {
                            font-size: 14px;
                            padding: .5rem .75rem;
                            display: block;
                            
                            @media screen and (max-width: 992px) {
                                font-size: 22px;
                                padding: 1.75rem;
                                padding-left: 15%;
                                position: relative;
                                &::before {
                                    contain: '> ';
                                    position: absolute;
                                    left: 0;
                                }
                                
                            }
                            @include mobile {
                                font-size: 14px;
                            }
                        }
                        &:hover {
                            background-color: #f8f8f8;
                            & > a {
                                color: #842B57;
                                font-weight: 500;
                            }
                            & > .nav-mainMenu-item-subMenu{
                                visibility: initial;
                            }
                            @media screen and (max-width: 992px) {
                                background-color: rgba(96, 45, 75, 0.5);
                                & > a {
                                    color: #fff;
                                }
                                & > .nav-mainMenu-item-subMenu{
                                    visibility: hidden;
                                }
                            }
                        }
                        .inside-a {
                            @media screen and (max-width: 992px) {
                                &::before {
                                    content: '- ';
                                    display: inline-block;
                                    padding-left: 10%;
                                }
                            }
                        }
                        &-subMenu {
                            visibility: hidden;
                            position: absolute;
                            right: 0;
                            top: -3px;
                            width: 110%;
                            transform: translateX(100%);
                            background-color: #fff;
                            border-top: solid 3px #842B57;
                            border-bottom: solid 3px #842B57;
                            border-right: solid 3px #F2F2F2;
                            border-left: solid 3px #F2F2F2;

                            @media screen and (max-width: 992px) {
                                width: 100%;
                                height: 0;
                                position: relative;
                                left: initial;
                                margin-top: 0;
                                top: 0;
                                width: 100vw;
                                transform: translateX(0);
                                border: none;
                                background-color: transparent;
                                &.open {
                                    visibility: initial !important;
                                    height: auto;
                                }
                            }
                            &-item {
                                border-bottom: solid 1px #F2F2F2;
                                & > a {
                                    font-size: 14px;
                                    padding: .5rem .75rem;
                                    display: block;
                                }
                                @media screen and (max-width: 992px) {
                                    width: 100%;
                                    text-align: left;
                                    border-bottom: solid 1px rgba(242, 242, 242, 0.3);
                                    & > a {
                                        color: #fff;
                                        padding: 1.5rem .75rem;
                                        padding-left: 8%;
                                        display: block;
                                    }
                                    &:nth-child(1) {
                                        border-top: solid 1px rgba(242, 242, 242, 0.3);
                                    }
                                }
                                @include mobile {
                                    font-size: 14px;
                                }
                                .inside-a {
                                    font-size: 14px;
                                    @media screen and (max-width: 992px) {
                                        font-size: 20px;
                                        &::before {
                                            content: '- ';
                                            display: inline-block;
                                            padding-left: 5%;
                                            padding-right: 2%;
                                        }
                                    }
                                    @include mobile {
                                        font-size: 14px;
                                    }
                                }
                                &:hover {
                                    background-color: #f8f8f8;
                                    & > a {
                                        color: #842B57;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    ul {
        list-style: none;
        padding: 0;
    }
    header#header .nav-group .nav-item.service-group .nav-mainMenu-item-subMenu {
        width: 150%;
    }

</style>