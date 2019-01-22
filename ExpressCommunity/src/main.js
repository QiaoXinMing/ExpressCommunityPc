import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import VueQuillEditor from 'vue-quill-editor'
import './base/css/font.css'
import './base/css/font7.css'
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
import './base/js/jquery'
import './base/css/base.css'
import index from './base/js/index'
const bus = new Vue();
Vue.use(Router);
Vue.use(VueQuillEditor);

Vue.prototype.bus = bus;
Vue.prototype.index = index;
Vue.config.productionTip = false;
    /* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (index.getSession("username") === "null") {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        } else {
            next(); //登录成功跳转到下级页面
        }
    } else {
        next();
    }
})
new Vue({
    el: '#app',
    components: { App },
    router,
    template: '<App/>'
})