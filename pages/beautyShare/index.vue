<template>
    <div class="page-container">
         <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>美麗分享</el-breadcrumb-item>
        </el-breadcrumb>
        <Title title="美麗分享" titleEn="BEAUTY SHARE" />
        <BeautyItem 
            :beautyData="beautyData"
        />
        <p>{{beautyData}}</p>
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
import BeautyItem from '~/components/beautyShare/Beauty-Item.vue';

export default {
    components: {
        Title,
        BeautyItem
    },
    watchQuery: ['page'],
    asyncData(context) {
        // axious api get data
        // test data 
        // context.query.page 可抓到 ?page=1 的參數
        const currentPage = context.query.page || 1;
        const parPage = 10;
        let testData = [];
        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        arr.forEach((item)=>{
            testData.push({
                id: item,
                imgsrc: require('~/assets/img/beauty-share.jpg'),
                title: '終於擁有夢寐以求的迷人電眼與挺翹鼻',
                detail: '<p>想要擁有一對迷人的電眼、深邃的雙眼皮線條及立體翹鼻一直是我的夢想。</p><p>單眼皮加上塌鼻的我，平時需要花大量的時間於化妝上，時常修飾過頭一不小心妝就太濃，常被誤以為是「某大姐」。</p> <p>不化妝、素顏的時候，讓我沒有安全感，整個人看起來也沒有精神；就算頂著全妝拍照後還是非常依賴美肌軟體(⋟﹏⋞) 於是在姊妹們的鼓勵下，我終於鼓起勇氣踏出一步。</p>'
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
            beautyData: getItems(),
            pageCount: getPageCount(),
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
            this.$router.push({ path: '/beautyShare', query: { page: pageId } }) 
            console.log(pageId);
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

<style lang="scss">

.beauty-items {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5%;
    .beauty-item {
        flex: 48%;
        margin-right: 2%;
        margin-bottom: 2%;
        background: #fff;
        background: #fff;
        box-shadow: 0 0 15px rgba(#333, 0.3);
        display: flex;
        min-height: 330px;
        max-height: 450px;
        max-width: 48%;
        &:nth-child(even) {
            margin-right: 0%;
        }
        @media screen and (max-width: 992px) {
            flex: 48%;
            margin-right: 0%;
        }
        @include mobile {
            flex: 100%;
            flex-direction: column;
            max-width: 100%;
            margin-bottom: 5%;
            margin-right: 0%;
        }
        .beauty-img {
            flex: 50%;
            overflow: hidden;
            @include mobile {
                flex: 60%;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                @include mobile {
                    height: initial;
                }
            }
        }
        .beauty-text {
            flex: 50%;
            color: #665C60;
            padding: 7.5%;
            position: relative;
            letter-spacing: 1px;
            @include mobile {
                flex: 40%;
                padding: 10%;
                padding-top: 7.5%;
                padding-bottom: 25%;
            }
            .beauty-title {
                font-size: 22px;
                font-weight: 500;
                margin-bottom: 5%;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;      // 想顯示的行數 lines you want to display
                -webkit-box-orient: vertical;
                line-height: 26px;       //解決firefox不支援-webkit-line-clamp的問題
                max-height: 52px;

                @include mobile {
                    font-size: 16px;
                    line-height: 16px;       //解決firefox不支援-webkit-line-clamp的問題
                    max-height: 32px;
                }
            }
            .beauty-detail {
                font-size: 14px;
                font-weight: 300;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 8;      // 想顯示的行數 lines you want to display
                -webkit-box-orient: vertical;
                line-height: 18px; 
                max-height: 180px;
                @media screen and (max-width: 1279px) {
                    -webkit-line-clamp: 8; 
                    line-height: 18px;
                    max-height: 144px;
                }
                @include mobile {
                    -webkit-line-clamp: 4; 
                    font-size: 12px;
                    line-height: 14px;
                    max-height: 56px;
                }
            }
            .beauty-btn {
                background-color: #832A57;
                color: #fff;
                font-size: 15px;
                line-height: 100%;
                border: none;
                padding: 7.5px 25px;
                padding-bottom: 9px;
                position: absolute;
                border-radius: 2px;
                right: 18%;
                bottom: 10%;
                cursor: pointer;
                &:hover {
                    background-color: #602D4B
                }
                @include mobile {
                    right: 10%;
                }
            }
        }
        

    }
}
</style>