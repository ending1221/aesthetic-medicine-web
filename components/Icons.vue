<template>
    <div id="icons">
        <a href="https://line.me/ti/p/@all1852n" target="_blank">
            <img class="icon" src="~/assets/img/icons-line.svg" alt="line">
        </a>
        <a href="https://www.facebook.com/messages/t/586478828141918" target="_blank">
            <img class="icon" src="~/assets/img/icons-message.svg" alt="message">
        </a>
        <a href="https://www.facebook.com/maxbeautyclinic/" target="_blank">
            <img class="icon" src="~/assets/img/icons-fb.svg" alt="fb">
        </a>
        <a href="tel:+88622718-7779" target="_blank">
            <img class="icon" src="~/assets/img/icons-phone.svg" alt="phone">
        </a>
    </div>
</template>

<style lang="scss">
    #icons {
        position: fixed;
        right: 0;
        top: 55%;
        display: flex;
        flex-direction: column;
        z-index: 9;
        background-color: rgb(143, 48, 99);

        @include mobile {
            top: initial;
            bottom: 0;
            left: 0;
            transform: translateY(0);
            flex-direction: row;
            background-color: rgb(143, 48, 99);
            padding-left: 10%;
        }

        a {
            height: 50px;
            
            &:hover {
                transform: translateX(-15%);
                @include mobile {
                    transform: translateX(0%) translateY(5%);
                }
            }
        }
        .icon {
            width: 50px;
            height: 50px;
            word-spacing: 0;
        }
    }
    .simplybook-widget-button.setZindex {
        z-index: 9997;
    }
    
</style>

<script>
    export default {
        data() {
            return {
                windowsWidth: 0,
                widget: {},
            }
        },
        methods: {
            getCookie(name){
                let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
                if (arr != null) return unescape(arr[2]); 
                return null;
            },
            delCookie(cookiesName) {
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                var cval = this.getCookie(cookiesName);
                if (cval != null) {
                    document.cookie = cookiesName + "=" +  cval +  ";expires=";
                    exp.toGMTString();
                }
            },
            getPageName() {
                return this.$store.getters.getPageName
            }
        },
        watch: {
            $route(r) {
                const $simplybookBtn = document.querySelector('#icons .simplybook-widget-button');
                let displayState = this.getPageName() === 'reservation' ? 'none' : 'block';
                $simplybookBtn.style.display = displayState;
                                
            },
        },
        mounted() {
            this.delCookie('sb_widget');

            const buttonState = {
                position: 'right', 
                position_offset: '65%' 
            }
            console.log(window.innerWidth);
            if(window.innerWidth < 768) {
                buttonState.position = 'bottom';
                buttonState.position_offset = '0%';
            }
            
            this.widget = new SimplybookWidget({ 
                "widget_type": "button", 
                "url": "https:\/\/maxbeauty.simplybook.asia", 
                "theme": "simple_beauty_theme", 
                "theme_settings": { 
                    "sb_base_color": "#8f3063", 
                    "header_color": "#ffffff", 
                    "timeline_hide_unavailable": "0", 
                    "timeline_show_end_time": "0", 
                    "timeline_modern_display": "as_slots", 
                    "display_item_mode": "block", 
                    "body_bg_color": "#ffffff", 
                    "sb_review_image": "", 
                    "dark_font_color": "#474747", 
                    "light_font_color": "#ffffff", 
                    "sb_company_label_color": "#333333", 
                    "hide_img_mode": "0", 
                    "show_sidebar": "1", 
                    "sb_busy": "#dbcece", 
                    "sb_available": "#f5f0f5" 
                }, 
                "timeline": "modern", 
                "datepicker": "top_calendar", 
                "is_rtl": false, 
                "app_config": { 
                    "allow_switch_to_ada": 0, 
                    "predefined": [] 
                }, 
                "button_title": "\u7acb\u5373\u9810\u7d04", 
                "button_background_color": "#8f3063", 
                "button_text_color": "#ffffff", 
                "button_position": buttonState.position, 
                "button_position_offset": buttonState.position_offset 
            });
            // move simplybook button in icons beacuse this button fixed outside
            document.querySelector('#icons').appendChild(document.querySelector('.simplybook-widget-button'));
        }
    }
</script>