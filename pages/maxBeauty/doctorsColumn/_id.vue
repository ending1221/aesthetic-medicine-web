<template>
    <div class="page-container">
         <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>關於美仕媞</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/maxBeauty/news/page' }">醫師專欄</el-breadcrumb-item>
            <el-breadcrumb-item>標題</el-breadcrumb-item>
        </el-breadcrumb>
       <div class="article-container">
           <h1>{{id}}【張東美醫師】想瘦哪就瘦哪</h1>
           <p><img src="https://www.max-beauty.com.tw/wp-content/uploads/2018/03/shutterstock_149111510_OK.jpg"></p><p class="ql-align-justify">維持曼妙身材，是女人一生課題。愛美是女人的天性，肥胖是女人的天敵。減肥(瘦身)是採用人為手段故意降低體重，特別是減少體內的脂肪。每個人減肥的原因各自不同。除了積極抗制飲食和運動減肥外，市面上還有各種幫助減肥的方式，包括侵入性的手術抽脂和非侵入性的各種物理性化學性溶脂方式。</p><h2 class="ql-align-justify">打造完美S曲線</h2><p class="ql-align-justify">速塑S美人療程是利用藥物特性，將藥物注射進皮下脂肪層，直接破壞脂肪細胞，並使之乳糜化(變得像液體一樣)，於是更容易被體內巨噬細胞帶走吸收，再藉由淋巴管輸送至肝臟，分解為二氧化碳雨水，再排出體外。如此一來，便能達到消脂效果。無論是全身性的脂肪堆積與修飾身型，都是一種方便安全的治療選擇。這類藥物最初的用途是治療肝炎、脂肪肝，由於具備破壞脂肪細胞的效果，運用在醫美領域，確實可以達到局部消脂、雕塑身體線條的功效。</p>
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