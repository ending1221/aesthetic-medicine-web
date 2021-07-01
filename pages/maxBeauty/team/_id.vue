<template>
    <div class="page-container" id="doctorPage">
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>關於美仕媞</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/maxbeauty/team' }" >醫療團隊</el-breadcrumb-item>
            <el-breadcrumb-item>{{data[id].name}}醫師</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="introduction">
            <div class="introduction-content">
                <div class="img-block">
                    <img :src="require(`~/assets/img/team/${id}.png`)" :alt="data[id].name">
                </div>
                <div class="text-block">
                    <div class="title">{{data[id].title}}</div>
                    <div class="name">{{data[id].name}}
                        <span>醫師</span>
                    </div>
                    <div class="skill">
                        <p 
                            v-for="(item,index) in data[id].skill" 
                            :key="`skill-${index}`"
                        >
                            {{item}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="experience">
            <div class="title-block">學經歷</div>
            <div class="text-block">
                <p 
                    v-for="(item,index) in data[id].experience" 
                    :key="`experience-${index}`"
                >
                    {{item}}
                </p>
            </div>
        </div>
        <div class="certificate">
            <div class="title-block">專業認證</div>
            <div class="img-block">
                <div class="img-item" 
                    v-for="(img, index) in images" 
                    :key="`certificate-img-${index}`"
                    
                >
                    <img 
                        :src="require(`~/assets/img/team/${id}/${img}`)" 
                        alt="證書"
                    >
                </div>
            </div>
            <div class="text-block">
                <p 
                    v-for="(item,index) in data[id].certificate" 
                    :key="`certificate-${index}`"
                >
                    {{item}}
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    asyncData(context) {
        context.app.store.dispatch('team/setPageId', context.params.id);
        return {
            id: context.params.id,
            data: context.app.store.getters['team/getTeamData']
        }
    },
    data(context) {
        console.log(context);
        return {
            allImages: [],
            images: []
        }
    },
    mounted() {
        console.log('id', parseInt(this.getPageId()));
        let path = `~/assets/img/team/${parseInt(this.getPageId())}`;
        console.log('path',path);
        
        this.importAll(require.context('~/assets/img/team/', true, /\.jpg$|\.png$/));
        this.getThisIdImg();
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => (this.allImages.push({ pathLong: r(key), pathShort: key })));
        },
        getImgName(pathShort) {
            // del path './id/'
            return pathShort.substring(4, pathShort.length)
        },
        getPageId() {
            return this.$store.getters['team/getPageId']
        },
        getThisIdImg() {
            this.allImages.forEach((img, i)=>{
                 if (img.pathLong.substring(18,25) === `team/${this.getPageId()}/`) {
                     let imgName = this.getImgName(img.pathShort);
                     this.images.push(imgName)
                 }
            })
            console.log(this.images);
        }
    }
}
</script>

<style lang="scss">
    #doctorPage {
        max-width: none;
        padding: 0;
        padding-bottom: 5%;
        .el-breadcrumb {
            max-width: 1280px;
            padding-left: 10%;
            margin: 0 auto;
            margin-bottom: 1.5%;
            @media screen and (max-width: 992px) {
                padding-left: 15%;
            }
            @include mobile {
                padding-left: 10%;
            }
        }
        .experience, .certificate, .introduction-content {
            max-width: 1280px;
            margin: 0 auto;
            color: #333;
            font-weight: 300;
            font-size: 90%;
            @include pc {
                padding: 2.5% 10%;
            }
            @media screen and (max-width: 992px) {
                padding: 2.5% 15%;
            }
            @include mobile {
                font-size: 110%;
            }
            p {
                line-height: 170%;
            }
        }
        .experience p {
            display: inline-block;
            width: 47%;
            margin-right: 1%;
            @media screen and (max-width: 992px) {
                width: 100%;
                margin-right: 0;
            }
        }
        .img-item {
            width: 31%;
            height: 15vw;
            max-height: 250px;
            margin-right: 1.5%;
            margin-bottom: 1.5%;
            display: inline-block;
            text-align: center;
            border: 1px solid #EDE8ED;
            border-radius: 2px;
            overflow: hidden;
            &:nth-child(3n+3){
                margin-right: 0%;
            }
            img {
                height: 100%;
                object-fit: cover;
            }
            @include mobile {
                width: 49%;
                height: 25vw;
                margin-right: 1.5%;
                &:nth-child(3n+3){
                    margin-right: 1.5%;
                }
                &:nth-child(even){
                    margin-right: 0;
                }
            }
        }
        
        .title-block {
            color: #842B57;
            font-weight: 500;
            font-size: 150%;
            margin: 3% 0 1.5%;
            @include mobile {
                margin: 3% 0 3.5%;
            }
        }
        .introduction-content {
            padding: 1.5% 0;
            display: flex;
            align-items: center;
            
            @include pc {
                padding: 3.5% 10%;
            }
            @media screen and (max-width: 992px) {
                padding: 3.5% 15%;
            }
            @include mobile {
                flex-direction: column;
                padding: 5% 15%;
            }
            .img-block {
                flex: 1;
                max-width: 240px;
                min-width: 200px;
                @media screen and (max-width: 992px) {
                    flex: 200px;
                }
                img {
                    width: 100%;
                }
            }
            .text-block {
                flex-grow: 1;
                margin-left: 5%;
                @include mobile {
                    width: 100%;
                    margin-left: 0%;
                }
                .title {
                    color: #fff;
                    background-color: #842B57;
                    font-size: 90%;
                    font-weight: 200;
                    display: inline-block;
                    padding: .5% 1.5%;
                    border-radius: 2px;

                    @include mobile {
                        margin-top: 5%;
                        font-size: 110%;
                    }
                }
                .name {
                    color: #842B57;
                    font-size: 200%;
                    font-weight: 500;
                    margin-bottom: 1%;
                    
                    span {
                        font-size: 80%;
                        color: #333;
                        font-weight: 500;
                    }
                }
            }
        }
    }
    .introduction {
        width: 100vw;
        background-color: #EDE8ED;

    }
</style>