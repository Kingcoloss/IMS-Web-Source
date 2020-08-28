export const state = () => ({
    locales:{
        type:String,
        default:'th'
    }
})

export const actions = {
    async setLocales({ commit }, local){
        await commit('setLocalesData', local)
    }
}

export const mutations = {
    setLocalesData({ state }, data){
        state.locales = data
    }
}

export const getters={
    getLocal: state => {
        return state.locales
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}