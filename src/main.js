// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Dropdown, DropdownMenu, DropdownItem, Popover, Icon, Input, Upload, Avatar, Autocomplete, Dialog, Select, Option, Badge } from 'element-ui'
import VueVideoPlayer     from 'vue-video-player'
import VueCarousel        from 'vue-carousel';
import VueParticles       from 'vue-particles'
import BaiduMap from 'vue-baidu-map'
import VueLazyload from 'vue-lazyload'
 

import Vuex from 'vuex'
import store from './store'
import i18n from './i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import 'video.js/dist/video-js.css'

import Menu from '@/components/Menu'

Vue.use(Vuex)
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Avatar);
Vue.use(Autocomplete);
Vue.use(VueVideoPlayer)
Vue.component('v-menu', Menu);
Vue.use(VueCarousel);
Vue.use(VueParticles);
Vue.use(Dialog);
Vue.use(Popover);
Vue.use(Select);
Vue.use(Option);
Vue.use(Badge);
Vue.use(VueLazyload)


// Vue.config.lang = 'en'
// Vue.locale('zh-cn', zh)
// Vue.locale('en', en)

Vue.use(BaiduMap, {
  ak: 'pEd1kn65vhQmV7RfE7ueGKf7'
})
Vue.config.isWechat = false;

var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

if (browser.versions.mobile) {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		//在微信中打开
		Vue.config.isWechat = true;
	}
}



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
