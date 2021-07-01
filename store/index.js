// state
export const state = () => ({
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
