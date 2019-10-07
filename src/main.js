// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Dropdown, DropdownMenu, DropdownItem, Icon, Input } from 'element-ui'
import VueVideoPlayer from 'vue-video-player'
import VueCarousel from 'vue-carousel';
 
import 'video.js/dist/video-js.css'

import './assets/base.scss'
import './assets/style.scss'
import Menu from '@/components/Menu'

Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);
Vue.use(Input);
Vue.use(VueVideoPlayer)
Vue.component('v-menu', Menu);
Vue.use(VueCarousel);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
