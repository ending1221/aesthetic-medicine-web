// state
export const state = () => ({
    service: [
        {
            name: '美體雕塑',
            nameEn: 'Beauty Slim',
            description: '甩開贅肉，曲線更加迷人',
            data: [
                {
                    path: '/service/beautySlim/venus-legacy',
                    name: 'Venus Legacy女神機'
                },
                {
                    path: '/service/beautySlim/s-body',
                    name: 'S美人計劃'
                },
            ]
        },
        {
            name: '美膚光療',
            description: '緊緻、無暇保養',
            nameEn: 'Preventive Medicine',
            data: [
                {
                    path: '/service/preventiveMedicine/ultracel-q',
                    name: '第四代Q+音波拉提'
                },
                {
                    path: '/service/preventiveMedicine/doe',
                    name: 'D.O.E光繞雷射'
                },
                {
                    path: '/service/preventiveMedicine/ultherapy',
                    name: '極限音波拉提'
                },
                {
                    path: '/service/preventiveMedicine/thermage',
                    name: '電波拉提'
                },
                {
                    path: '/service/preventiveMedicine/laserBeauty',
                    name: '蘋果光雷射'
                },
                {
                    path: '/service/preventiveMedicine/ipl',
                    name: '脈衝光'
                },
                {
                    path: '/service/preventiveMedicine/fraxelLaser',
                    name: '飛梭雷射'
                },
                {
                    path: '/service/preventiveMedicine/depiLight',
                    name: '粉餅光雷射'
                },
                {
                    path: '/service/preventiveMedicine/ilib',
                    name: 'ILIB生化雷射'
                },
                {
                    path: '/service/preventiveMedicine/miraDry',
                    name: '微波熱能除汗系統'
                },
            ]
        },
        {
            name: '美麗重現',
            nameEn: 'Surgery Sculpture',
            description: '精緻五官、身體塑型',
            data: [
                {
                    path: '/service/surgerySculpture/koreanDoubleEyelid',
                    name: '韓式訂書機雙眼皮'
                },
                {
                    path: '/service/surgerySculpture/eyebag',
                    name: '眼袋手術'
                },
                {
                    path: '/service/surgerySculpture/rhinoplasty',
                    name: '隆鼻'
                },
                {
                    path: '/service/surgerySculpture/chinImplant',
                    name: '墊下巴'
                },
                {
                    path: '/service/surgerySculpture/pda',
                    name: '羽毛線'
                },
                {
                    path: '/service/surgerySculpture/autologousFat',
                    name: '抽脂/自體脂肪回填'
                },
                {
                    path: '/service/surgerySculpture/breastEnlargement',
                    name: '隆乳手術'
                },
                {
                    path: '/service/surgerySculpture/ultrasoundLipolysis',
                    name: 'Z波黃金脂雕'
                },
                {
                    path: '/service/surgerySculpture/ultraZ',
                    name: '腋下除臭(新型極速香波機)'
                },
            ]
        },
        {
            name: '美學微整',
            nameEn: 'Beauty Service',
            description: '秒殺眾人目光，從改變臉部比例開始',
            data: [
                {
                    path: '/service/beautyService/ellanse',
                    name: '洢蓮絲'
                },
                {
                    path: '/service/beautyService/btx',
                    name: '除皺/瘦小臉'
                },
                {
                    path: '/service/beautyService/hyaluronan',
                    name: '玻尿酸'
                },
                {
                    path: '/service/beautyService/sculptra',
                    name: '舒顏萃/3D聚左旋乳酸'
                },
            ]
        },
    ]
});

// actions
export const actions = {
    setServiceContent({ commit }, service) {
        commit("changePageName", service);
    }
};

// mutations
export const mutations = {
    setServiceContent(state, service) {
        state.service = service
    }

};

// getters
export const getters = {
    getServiceContent: state => {
        return state.service;
    }
};
