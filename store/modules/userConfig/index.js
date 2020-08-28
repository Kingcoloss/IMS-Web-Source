const state = () => ({
    localLang:'en'
})

const actions={
    changeLocalLang({ commit }, lang){
        commit('setLocal', lang)
    }
}

const mutations={
    setLocal(state, data){
        state.localLang = data
    }
}

const getters={
}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}