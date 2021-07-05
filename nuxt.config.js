const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
      base: '/aesthetic-medicine-web/'
    }
  } : {}
export default {
    ...routerBase,
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '美仕媞時尚醫美診所-台北醫美優質診所,提供微整及整形外科項目,專業醫美醫療團隊,肉毒除皺,玻尿酸,抽脂,除毛雷射',
        htmlAttrs: {
        lang: 'zh-TW'
        },
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '台北醫美美仕媞時尚醫美診所-台北醫美優質診所,原廠認證醫療器材,專業訓練醫師醫療團隊,提供微整項目:肉毒除皺,玻尿酸,除毛雷射,洢蓮絲,瘦小臉,瘦肩,瘦小腿,瘦大腿,雷射,音波拉提, 電波拉皮,埋線,除汗,豐唇,私密處G緊,海芙音波,整形外科服務項目:自體脂肪隆乳,抽脂,隆鼻,墊下巴,雙眼皮,一對一諮詢,客製化療程。' },
        { property:'og:locale', content: 'zh_TW' },
        { property:'og:type', content: 'website' },
        { property:'og:title', content: '台北醫學美容診所推薦-美仕媞時尚醫美診所 - 美仕媞時尚醫美診所' },
        { property:'og:url', content: 'https://www.max-beauty.com.tw/' },
        { property:'og:site_name', content: '美仕媞時尚醫美診所' },
        ],
        link: [
        { rel: 'icon', type: 'image/x-icon', href: '../favicon.ico' }
        ],
        script: [
        { src: '../simplybook.js'}
        ],
        htmlAttrs: {
            translate: 'no',
            class: "notranslate",  
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: "~/assets/css/fonts-group.css" }, 
        { src: "swiper/css/swiper.css" },
    ],
    styleResources: {
        scss: ['./assets/scss/*.scss']
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/font-awesome", 
        "~/plugins/vue-swiper.js",
        "~/plugins/element-ui.js",
    ],
    loading: '~/components/loading.vue',
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources' 
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://fontawesome.com/
        'nuxt-fontawesome',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel:{
            plugins: [
                ['@babel/plugin-proposal-private-methods', { loose: true }]
            ]
        }
    },

    fontawesome: {
        // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
        component: 'fa', 
        imports: [
        // 引入 fas 所有的icon
        {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
        }
        ]
    }
}
