<template>
    <div class="page-container">
         <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>關於美仕媞</el-breadcrumb-item>
            <el-breadcrumb-item>最新消息</el-breadcrumb-item>
        </el-breadcrumb>
        <Title title="最新消息" titleEn="NEWS" />
        <NormalItem 
            :data="newsData"
            pageName="news"
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
        const parPage = 9;
        let testData = [];
        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arr.forEach((item)=>{
            testData.push({
                id: item,
                imgsrc: require('~/assets/img/news.jpg'),
                time: `2021-03-11`,
                title: `${item} 新冠肺炎來勢洶洶  美仕媞與您一同守護您的安全及健康`,
                detail: '新冠肺炎疫情爆發，美仕媞時尚醫美診所農曆年後實施各項措施，包含全面加強消毒防疫、每日定時以醫療用次氯酸水淨化空氣及酒精消毒環境加強防疫，員工每日健康自主檢查、加強衛教及配戴口罩，每位貴賓入店時確實測量體溫'
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
        console.log(getItems());

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
            this.$router.push({ path: '/maxBeauty/news', query: { page: pageId } }) 
            console.log(pageId);
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
