<template>
    <div class="page-container">
         <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>關於美仕媞</el-breadcrumb-item>
            <el-breadcrumb-item>醫師專欄</el-breadcrumb-item>
        </el-breadcrumb>
        <Title title="醫師專欄" titleEn="DOCTORS COLUMN" />
        <NormalItem 
            :data="newsData"
            pageName="doctorsColumn"
        />
        <el-pagination
            :pager-count="11"
            layout="prev, pager, next"
            :total="pageCount * 10"
            :hide-on-single-page="true"
            :current-page="Number(pageId)"
            @current-change="currentChange"
        >
        </el-pagination>
    </div>
</template>

<script>
import Title from '~/components/Title.vue';
import NormalItem from '~/components/Normal-Item.vue';

export default {
    components: {
        Title,
        NormalItem
    },
    watchQuery: ['page'],
    asyncData(context) {
        // axious api get data
        // test data 
        const currentPage = context.query.page || 1;
        console.log('currentPage',currentPage);
        const parPage = 9;
        let testData = [];
        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arr.forEach((item)=>{
            testData.push({
                id: item,
                imgsrc: require('~/assets/img/doctorColumn.jpg'),
                time: `2021-03-11`,
                title: `${item} 張東美醫師】想瘦哪就瘦哪`,
                detail: '維持曼妙身材，是女人一生課題。愛美是女人的天性，肥胖是女人的天敵。減肥(瘦身)是採用人為手段故意降低體重，特別是減少體內的脂肪。每個人減肥的原因各自不同。除了積極抗制飲食和運動減肥外，市面上還有各種幫助減肥的方式，包括侵入性的手術抽脂和非侵入性的各種物理性化學性溶脂方式。'
            })
        })

        const getItems = () => {
            let current = currentPage * parPage;
            let start = current - parPage;
            return testData.slice(start, current);
        }
        const getPageCount = () => {
            return Math.ceil(testData.length / parPage);
        }

        return {
            pageId: currentPage,
            newsData: getItems(),
            pageCount: getPageCount()
        }
    },
    data(){
        return {
            pagination: {
                totalPages: 0,
                currentPage: 1,
                perPage: 9
            },
        }
    },
    methods: {
        currentChange(pageId) {
            // this.$router.push(`/maxBeauty/news/page/${pageId}`);
            this.$router.push({ path: '/maxBeauty/doctorsColumn', query: { page: pageId } }) 
            this.scrollToPageTop();
        },
        scrollToPageTop() {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        }
    }
}
</script>
