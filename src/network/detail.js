import { request } from './request';
export function getDetailList(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function getRecomendList(){
    return request({
        url:'/recommend'
    })
}

//把数据封装成一个对象,整合数据，面向对象的封装思想
export class goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.lowNowPrice = itemInfo.lowNowPrice
        this.columns = columns;
        this.services = services;
    }
}
export class shops {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo;
        this.score = shopInfo.score;
        this.name = shopInfo.name;
        this.cGoods = shopInfo.cGoods;
        this.cSells = shopInfo.cSells;
        this.cFans = shopInfo.cFans;
    }
}





