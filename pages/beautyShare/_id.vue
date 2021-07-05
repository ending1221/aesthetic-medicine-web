<template>
    <div class="page-container">
         <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/beautyShare' }">美麗分享</el-breadcrumb-item>
            <el-breadcrumb-item>標題{{id}}</el-breadcrumb-item>
        </el-breadcrumb>
       <div class="article-container">
           <h1>終於擁有夢寐以求的迷人電眼與挺翹{{id}}</h1>
           <p><img src="~/assets/img/share1.jpg" alt=""></p>
           <p>**療程效果會因個人體質而有所差異**</p><p>單眼皮加上塌鼻的我，平時需要花大量的時間於化妝上，時常修飾過頭一不小心妝就太濃，常被誤以為是「某大姐」。 不化妝、素顏的時候，讓我沒有安全感，整個人看起來也沒有精神；就算頂著全妝拍照後還是非常依賴美肌軟體(⋟﹏⋞)</p><p><strong>我一直嚮往有一對深邃的雙眼及立體的鼻子…..</strong></p><p>於是在姊妹們的鼓勵下，我終於鼓起勇氣踏出一步。</p><p>在網路上爬了文和做了功課後，我選擇了幾間診所去諮詢，因為是第一次接觸醫美，難免有些謹慎!!諮詢多家後最後選擇美仕媞時尚醫美診所，原因是因為諮詢過程中很安心，並且不會強迫推銷有的沒的，按照你的需求去給你建議，</p><p><img src="https://www.max-beauty.com.tw/wp-content/uploads/2017/02/12376634_1018552661559615_267343324429864713_n.jpg" alt="雙眼皮手術03"></p><p>因為我本身的眼皮屬於內雙，厚度較薄脂肪不多，所以醫師建議我做<a href="https://www.max-beauty.com.tw/%E9%9B%99%E7%9C%BC%E7%9A%AE%E9%9F%93%E5%BC%8F%E8%A8%82%E6%9B%B8%E6%A9%9F/" target="_blank" style="color: rgb(109, 35, 70); background-color: initial;"><strong>韓式釘書機雙眼皮</strong></a><strong>，</strong>醫師細心依照我的喜好及五官的比例，和我溝通適合自己的眼皮線條，還有我扁塌的鼻梁，五官之中鼻子位於臉部的中心，對於臉部整體美感佔十分重要的角色，和醫師說希望自己的五官能變得更精緻，在醫師細心的評估及建議下嘗試<a href="https://www.max-beauty.com.tw/%E9%9A%86%E9%BC%BB%E6%89%8B%E8%A1%93/" target="_blank" style="color: rgb(109, 35, 70); background-color: initial;"><strong>三段式隆鼻手術</strong></a>，打造符合我理想的鼻型，讓我臉部五官更加立體，決定好之後馬上預約下次手術時間。</p><h2><strong >手術當天</strong></h2><p>當天的過程很迅速，醫生和護士動作都很溫柔，還一直安撫我不要緊張，放輕鬆，手術過程快速，大大降低了術後腫脹現象，有人問我手術過程會不會痛~但還是要因人而異，我是打麻醉扎針的時候有點痛，其餘都還好，而且很快就退腫的，恢復期超快，完全不影響工作及生活作息。</p>
           <p><img src="https://www.max-beauty.com.tw/wp-content/uploads/2017/02/DSC01827.jpg" alt="雙眼皮手術"></p>
           <h2><strong >♥♥ 我的手術後恢復期紀錄&nbsp;♥♥</strong></h2>
           <p><img src="~/assets/img/share2.jpg" alt=""></p><p><strong>因為勇於嘗試，讓我終於擁有夢寐以求的迷人電眼與挺翹鼻，而且還超自然的，就算素臉也非常有自信。</strong></p><p><img src="~/assets/img/share3.jpg" alt=""></p><p><br></p><h3><span >▋</span><a href="https://www.max-beauty.com.tw/%E9%9B%99%E7%9C%BC%E7%9A%AE%E9%9F%93%E5%BC%8F%E8%A8%82%E6%9B%B8%E6%A9%9F/" target="_blank" style="color: rgb(109, 35, 70); background-color: initial;">想了解更多雙眼皮細節請點我&gt;</a></h3><h3><span >▋</span><a href="https://www.max-beauty.com.tw/nose/" target="_blank" style="color: rgb(109, 35, 70); background-color: initial;">想了解更多隆鼻細節請點我&gt;</a></h3><p><br></p><h4>療程效果會因個人體質而有所差異</h4>
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