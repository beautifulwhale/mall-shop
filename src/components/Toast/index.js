import Toast from '@/components/Toast/Toast.vue'
const obj = { }
export default obj
// 在main.js安装插件时，会自动调用该插件的install函数，并自动传入Vue对象
obj.install = function (Vue) {
    // 1.创建组件构造器
    const toastContrustor = Vue.extend(Toast);
    // 2.根据组件构造器，可以创建出一个组件对象
    const toast = new toastContrustor();
    // 3.将组件对象，手动挂载到某一元素上
    toast.$mount(document.createElement('div'));
    // 4.toast.$el对应的就是div
    document.body.appendChild(toast.$el);


    // 在Vue原型中定义$toast，方便直接采用$toast使用
    Vue.prototype.$toast = toast;
}