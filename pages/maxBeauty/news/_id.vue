<template>
    <div class="page-container">
         <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>關於美仕媞</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/maxBeauty/news/page' }">最新消息</el-breadcrumb-item>
            <el-breadcrumb-item>標題</el-breadcrumb-item>
        </el-breadcrumb>
       <div class="article-container">
           <h1>「擁抱天使 與美同行」 美仕媞醫美獻愛心支持陽光基金會 {{id}}</h1>
           <p class="ql-align-justify">有陽光的地方，就有愛！有需要的地方，就有陽光！陽光秉持組織的使命與宗旨，專注於顏面損傷及燒傷者的關懷與服務，為受傷朋友們在生理、心理與職能重建的需求上逐步拓展到全方位的專業服務。</p>
           <p class="ql-align-justify">國內知名的醫美診所-美仕媞時尚醫美診所秉持取之於社會，用之於社會的企業責任，用實際的行動付出關懷，支持陽光基金會推展服務幫助燒傷朋友，<strong>即日起至8/15消費者購買光繞雷射療程，美仕媞時尚醫美診所就為您捐出10%救護金給陽光基金會，「關懷燒傷朋友 你我做得到！」</strong></p>
           <p class="ql-align-center">
               <img src="https://www.max-beauty.com.tw/wp-content/uploads/2019/05/%E9%86%AB%E7%94%9F%E9%97%9C%E5%BF%83%E6%82%A8-600x567.jpg" alt="美仕媞">
            </p>
            <p class="ql-align-justify">八仙樂園塵燃意外時，美仕媞時尚醫美診所成立八仙樂園燒燙傷醫護團隊。加入醫療關懷行列，為八仙傷者集氣，除重度燒燙傷病患須接受大型醫院燒燙傷中心的專業護理外，針對此次事件 1～2 度輕度燒燙傷及燒燙傷面積 20%以下，不需住院治療的傷患，提供免費傷口檢視治療、護理、更換藥品及敷料，所有醫療服務費用支出由診所自行吸收。另外，有關後續皮膚重建部份，修疤美容及心理輔導等服務…也會提供專業之醫療建議，希望藉由提供專業整形外科醫療服務， 能減輕台北市及新北市大型醫院醫療負擔。</p>
            <p class="ql-align-justify">診所醫生表示曾有燒燙傷友到診所想要接受消除身體的疤痕色素療程，了解燒傷朋友要有疤痕對抗的漫長歷程，決定捐出10%的光繞雷射療程收入捐款給陽光基金會，讓消費者在雷射保養照顧自己的同時，也能幫助病友。所謂光繞雷射-「D.O.E光繞雷射」媲美目前最夯的皮秒雷射，可以針對惱人的肝斑做有效的治療，不僅時間上縮短許多，熱傷害減少45%，對於改善泛紅狀況、斑點，粗大毛孔等等更有顯著效果，可列為日常保養項目之一，光繞雷射是一般消費者都可以做又安全的療程，可針對個人肌膚狀況選擇需要的療程。</p>
            <p class="ql-align-center">
                <img src="https://www.max-beauty.com.tw/wp-content/uploads/2019/05/002.jpg" alt="美仕媞診所更買光繞雷射即贈10%給予陽光基金會">
            </p>
            <p class="ql-align-justify">
                <strong>診所響應支持陽光基金會公益活動從5/15~8/15整整3個月，只要是在診所消費光繞雷射療程，美仕媞時尚醫美診所就會捐出10%作為陽光基金會的燒傷者身心重建服務基金，期待可以幫助更多燒傷朋友勇敢迎向陽光。</strong>
            </p>
            <p class="ql-align-justify">陽光基金會：<a href="https://www.sunshine.org.tw/" target="_blank" style="color: rgb(109, 35, 70); background-color: initial;">https://www.sunshine.org.tw/</a>
            </p>
            <p class="ql-align-justify">中天新聞網：<a href="https://act.chinatimes.com/market/content.aspx?AdID=7655" target="_blank" style="color: rgb(109, 35, 70); background-color: initial;">https://udn.com/page/topic/13777</a>
            </p>
            <h1 class="ql-align-justify"><strong>什麼是光繞雷射？</strong></h1>
            <iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/AYljJ0OWxMg?showinfo=0"></iframe>
            <h1 class="ql-align-justify"><strong>案例分享</strong></h1>
            <p class="ql-align-center"><img src="https://www.max-beauty.com.tw/wp-content/uploads/2019/05/%E5%85%89%E7%B9%9E%E9%9B%B7%E5%B0%84BA.png" alt="光繞雷射除斑效果">
            </p>
            <h3 class="ql-align-center">**療程效果會因個人體質而有所差異**</h3>
       </div>
    </div>
</template>

<script>
import Title from '~/components/Title.vue';

export default {
    components: {
        Title,
    },
    asyncData(context) {
        // axious api get data
        // test data 
        const id = context.params.id;
        return {
            id
        }
    },
}
</script>

<style lang="scss">

</style>