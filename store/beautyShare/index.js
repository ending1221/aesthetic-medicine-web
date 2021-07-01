// state
export const state = () => ({
    currentPage: 1,
    parPage: 10,
    data: []
});

// actions
export const actions = {
    initData({ commit }) {
        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        let data = [];
        arr.forEach((item)=>{
            data.push({
                id: item,
                imgsrc: require('~/assets/img/beauty-share.jpg'),
                title: '終於擁有夢寐以求的迷人電眼與挺翹鼻',
                detail: '<p>想要擁有一對迷人的電眼、深邃的雙眼皮線條及立體翹鼻一直是我的夢想。</p><p>單眼皮加上塌鼻的我，平時需要花大量的時間於化妝上，時常修飾過頭一不小心妝就太濃，常被誤以為是「某大姐」。</p> <p>不化妝、素顏的時候，讓我沒有安全感，整個人看起來也沒有精神；就算頂著全妝拍照後還是非常依賴美肌軟體(⋟﹏⋞) 於是在姊妹們的鼓勵下，我終於鼓起勇氣踏出一步。</p>'
            })
        })
        commit("initData");
    },
    slicePageData({ commit }, pageId) {
        commit("slicePageData", pageId);
    },
    changeCurrentPage({ commit }, pageId) {
        commit("changeCurrentPage", pageId);
    }
};

// mutations
export const mutations = {
    initData(state, data) {
        state.data = data
    },
    slicePageData(state, pageId) {
        console.log(state.data)
        let current = pageId * state.parPage;
        let start = current - state.parPage;
        let data = state.data;
        return data.slice(start, current);
    },
    changeCurrentPage(state, pageId) {
        state.currentPage = pageId
    }

};

// getters
export const getters = {
    getTeamData: state => {
        return state.teamGroup;
    },
    getCurrentPage: state => {
        return state.currentPage;
    }
};
