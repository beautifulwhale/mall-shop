import { ADD_COUNT, ADD_TO_CART } from './mutations-type'
export default {
    addCart({ state, commit }, payload) {
        //action返回的是Promise
        return new Promise((resolve, reject) => {
            const oldProduct = state.cartList.find(item => item.goodItemId === payload.goodItemId)
            if (oldProduct) {
                // oldProduct.count += 1
                commit(ADD_COUNT, oldProduct)
                resolve('商品+1')
            } else {
                payload.count = 1
                // state.cartList.push(payload);
                commit(ADD_TO_CART, payload)
                resolve('添加商品')
            }
        })

    }

}

