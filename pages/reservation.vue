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
                    <input class="form-item-input" :class="{'error': error.name}" v-model="name" type="text" />
                    <p v-show="error.name" class="error">* 請填寫姓名</p>
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
                    <p v-show="error.birthday" class="error">* 請選擇生日</p>
                </div>
                <label class="form-item">
                    <div class="form-item-title">手機號碼
                        <span class="form-star">*</span>
                    </div>
                    <input class="form-item-input" v-model="phone" type="number" max="9999999999" />
                    <p v-show="error.phone" class="error">* 請填寫正確的手機號碼</p>
                </label>
                <label class="form-item">
                    <div class="form-item-title">E-mail
                        <span class="form-star">*</span>
                    </div>
                    <input class="form-item-input" v-model="mail"  type="mail" />
                    <p v-show="error.mail" class="error">* 請填寫正確的 E-mail</p>
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
                <p v-show="error.checkedArr" class="error">* 請至少勾選一個項目</p>
            </div>

            <p class="form-title">諮詢內容</p>
            <textarea name="advisory" id="advisory" v-model="advisory"></textarea>
            <div class="btn" @click="verifyFrom">送出</div>
        </form>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.78059784499!2d121.5494527!3d25.061374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22a6a0dfb1740c3c!2z576O5LuV5aqe5pmC5bCa6Yar576O6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1620288484663!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

        <div class="alert" :class="{'show': showAlert}">
            <div class="alert-bg"></div>
            <div class="alert-content">
                <div class="close" @click="closeAlert">x</div>
                <h2>已成功預約!</h2>
                <p>我們已收到您的預約，將儘快與您聯繫，感謝您的等待與支持。</p>
                <div class="reservation-data">
                    <h3>以下為您本次的預約資訊：</h3>
                    <ul>
                        <li>姓名：{{name}}</li>
                        <li>電話：{{phone}}</li>
                        <li>生日：{{birthday}}</li>
                        <li>E-mail：{{mail}}</li>
                        <li>諮詢項目：{{getCheckedListText}}</li>
                        <li>諮詢內容：{{advisory}}</li>
                    </ul>
                </div>
            </div>
        </div>
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
            showAlert: false,
            name: '',
            birthday: '',
            phone: '',
            mail: '',
            checkedArr: [],
            advisory: '',
            error: {
                name: false,
                birthday: false,
                phone: false,
                mail: false,
                checkedArr: false
            }
        }
    },
    methods: {
        verifyFrom() {
            let isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

            this.error.name = this.name.length > 0 ? false : true;
            this.error.birthday = this.birthday === '' ? true : false;
            this.error.phone = this.phone.length === 10 ? false : true;
            this.error.mail = !isMail.test(this.mail) ? true : false;
            this.error.checkedArr = this.checkedArr.length === 0 ? true : false;

            this.checkHasError();
        },
        checkHasError() {
            let errorArr = [];
            Object.keys(this.error).forEach(i=>{
                errorArr.push(this.error[i]); 
            })
            const notFindError = (e) => {
                return e === false
            }
            console.log('errorArr', errorArr);
            console.log('notFindError', errorArr.every(notFindError));

            if (errorArr.every(notFindError)) {
                this.showAlert = true;
            }

            return
        },
        closeAlert() {
            this.showAlert = false;
        }
    },
    computed: {
        getCheckedListText() {
            let text = '';
            if (this.checkedArr.length > 0) {
                this.checkedArr.forEach(item => {
                    text += `${item}、`            
                })
                text = text.slice(0, text.length-1);
                console.log('text',text);
            }
            return text
        },
    },
    watch: {
        phone: function() {
            if (this.phone.length > 10) {
                this.error.phone = true;
            } else {
                this.error.phone = false;
            }
        }
    }
}

</script>

<style lang="scss">
    .alert {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        display: none;
        .alert-bg {
            width: 100%;
            height: 100%;
            background-color: rgba(#333, 0.8);
        }
        .alert-content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 1rem;
            width: 50vw;
            max-width: 800px;
            height: 80vh;
            z-index: 99999;
            padding: 2rem 4rem;
            box-sizing: border-box;
            .close {
                position: absolute;
                right: 0;
                top: 0;
                transform: translateX(150%);
                color: #fff;
                cursor: pointer;
                font-size: 150%;
            }
            .reservation-data {
                margin-top: 5%;
                padding: 2.5% 5%;
                border-top: #8E2E63 1px solid;
            }
            h2 {
                color: #8E2E63;
                text-align: center;
                margin-bottom: 1%;
            }
            h3 {
                font-weight: 300;
                margin-top: 3%;
                color: #8E2E63;
                text-align: center;
            }
            p {
                text-align: center;
                font-size: 90%;
                opacity: 0.9;
                letter-spacing: 1px;
            }
            ul {
                margin-top: 3%;
            }
            li {
                font-weight: 300;
                line-height: 150%;
                letter-spacing: 1px;
            }
        }
    }
    .alert.show {
        display: block;
    }
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
            display: inline-block;
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
    .error {
        color:#FF3333;
        font-size: 80%;
        font-weight: 200;
    }
    
</style>