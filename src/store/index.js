import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex);
const state = {
    cartList: []
}
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
    // mutations: {
    //     addCart(state, payload) {
    //         const oldProduct = state.cartList.find(item => item.goodItemId === payload.goodItemId)
    //         if (oldProduct) {
    //             oldProduct.count += 1
    //         } else {
    //             payload.count = 1
    //             state.cartList.push(payload);
    //         }
    //     }
    // }
})
export default store
