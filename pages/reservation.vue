<template>
    <div class="page-container" id="reservation-page">        
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>預約諮詢</el-breadcrumb-item>
        </el-breadcrumb>
        <Title title="預約諮詢" titleEn="CONTACT US" />
        <p class="reservation-text">歡迎預約美仕媞時尚醫美診所，本預約開放7日後至兩個月內的時段預約。</p>
        
        <form class="reservation-form">
            <div class="form-items">
                <label class="form-item">
                    <div class="form-item-title">姓名
                        <span class="form-star">*</span>
                    </div>
                    <input class="form-item-input" v-model="name" type="text" />
                </label>
                <div class="form-item">
                    <div class="form-item-title">生日
                        <span class="form-star">*</span>
                    </div>
                    <el-date-picker
                        v-model="birthday"
                        type="date"
                        placeholder="選擇日期"
                    >
                    </el-date-picker>
                </div>
                <label class="form-item">
                    <div class="form-item-title">聯絡電話
                        <span class="form-star">*</span>
                    </div>
                    <input class="form-item-input" v-model="phone"  type="text" />
                </label>
                <label class="form-item">
                    <div class="form-item-title">E-mail
                        <span class="form-star">*</span>
                    </div>
                    <input class="form-item-input" v-model="mail"  type="mail" />
                </label>
            </div>
            <p class="form-title">諮詢項目 (可複選)
                <span class="form-star">*</span>
            </p>
            <div class="form-checkboxs">
                
                <label for="cbox1" class="form-checkbox">
                    <input type="checkbox" id="cbox1" v-model="checkedArr" value="肌膚斑點">
                    <span>肌膚斑點</span>
                </label>
                <label for="cbox2" class="form-checkbox">
                    <input type="checkbox" id="cbox2" v-model="checkedArr" value="臉頰凹陷">
                    <span>臉頰凹陷</span>
                </label>
                <label for="cbox3" class="form-checkbox">
                    <input type="checkbox" id="cbox3" v-model="checkedArr" value="無痛除毛">
                    <span>無痛除毛</span>
                </label>
                <label for="cbox4" class="form-checkbox">
                    <input type="checkbox" id="cbox4" v-model="checkedArr" value="毛孔粗大">
                    <span>毛孔粗大</span>
                </label>
                <label for="cbox5" class="form-checkbox">
                    <input type="checkbox" id="cbox5" v-model="checkedArr" value="臉部拉提">
                    <span>臉部拉提</span>
                </label>
                <label for="cbox6" class="form-checkbox">
                    <input type="checkbox" id="cbox6" v-model="checkedArr" value="煥白保濕">
                    <span>煥白保濕</span>
                </label>
                <label for="cbox7" class="form-checkbox">
                    <input type="checkbox" id="cbox7" v-model="checkedArr" value="痘痘凹疤">
                    <span>痘痘凹疤</span>
                </label>
                <label for="cbox8" class="form-checkbox">
                    <input type="checkbox" id="cbox8" v-model="checkedArr" value="輪廓線條">
                    <span>輪廓線條</span>
                </label>
                <label for="cbox9" class="form-checkbox">
                    <input type="checkbox" id="cbox9" v-model="checkedArr" value="私密保養">
                    <span>私密保養</span>
                </label>
            </div>

            <p class="form-title">諮詢內容
                <span class="form-star">*</span>
            </p>
            <textarea name="advisory" id="advisory"></textarea>
            <button class="btn">送出</button>
        </form>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.78059784499!2d121.5494527!3d25.061374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22a6a0dfb1740c3c!2z576O5LuV5aqe5pmC5bCa6Yar576O6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1620288484663!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>

<script>
import Title from '~/components/Title.vue';

export default {
    components: {
        Title
    },
    data() {
        return {
            name: null,
            birthday: null,
            phone: null,
            mail: null,
            checkedArr: []
        }
    },
    
}

</script>

<style lang="scss">
    #reservation-page {
        iframe {
            @include mobile {
                width: 100vw;
                position: relative;
                left: -12%;
            }
        }
    }
    .el-date-picker__header-label.active, .el-date-picker__header-label:hover,
    .el-year-table td .cell:hover, .el-year-table td.current:not(.disabled) .cell,
    .el-month-table td .cell:hover, .el-date-table td.available:hover,.el-picker-panel__icon-btn:hover  {
        color: #8E2E63;
    }
    .el-date-table td.current:not(.disabled) span {
        color: #FFF;
        background-color: #8E2E63;
    }
    .el-date-table td.today span {
        color: #8E2E63;
    }

    .form-star {
        color: #FF3333;
        display: inline-block;
        font-weight: 200;
    }
    .map {
        display: block;
        max-width: 600px;
        margin: 0 auto;
        margin-top: 5%;
        width: 100%;
    }
    .reservation-text {
        text-align: center;
        margin-bottom: 5%;
        font-weight: 200;
    }
    .reservation-form {
        margin: 0 auto;
        max-width: 600px;
        color: #333;
        font-weight: 200;
        input {
            font-weight: 'Arial';
        }
        .btn {
            margin-top: 5%;
            @include mobile {
                width: 100%;
            }
        }
        .form-title {
            display: inline-block;
            margin-top: 5%;
        }
        .form-checkbox {
            flex: 33.3333%;
            margin-bottom: 1.5%;
            input {
                margin-right: 2%;
            }
            @include mobile {
                flex: 50%;
            }
        }
        .form-checkboxs {
            margin-top: 2.5%;
        }
        .form-items, .form-checkboxs {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }
        .form-item {
            flex: 48%;
            margin-right: 2%;
            &:nth-child(even) {
                margin-right: 0;
            }
            @include mobile {
                flex: 100%;
                margin-right: 0;
            }
        }
        .form-item-title {
            font-weight: 200;
            font-size: 100%;
            margin: 2% 0;
        }
        .el-date-editor {
            width: 100%;
            max-height: 50px;
            input {
                padding: .75rem 30px;
                height: 100%;
                font-size: 120%;
                border-radius: 2px;
                color: #333;
            }
        }
        .form-item-input {
            color: #333;
            font-weight: 200;
            font-size: 90%;
            border: 1px solid rgba(51,51,51,0.2);
            padding: .75rem;
            width: 100%;
            max-height: 50px;
            box-sizing: border-box;
            @include mobile {
                font-size: 130%;
            }
        }
        #advisory {
            width: 100%;
            height: 200px;
            resize: none;
            border: 1px solid rgba(51,51,51,0.2);
            margin-top: 1.5%;
        }
    }
    
</style>