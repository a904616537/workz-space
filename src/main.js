// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Dropdown, DropdownMenu, DropdownItem, Icon, Input, Upload } from 'element-ui'
import VueVideoPlayer     from 'vue-video-player'
import VueCarousel        from 'vue-carousel';
import VueParticles       from 'vue-particles'
import Vuex from 'vuex'
import store from './store'


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
Vue.use(VueVideoPlayer)
Vue.component('v-menu', Menu);
Vue.use(VueCarousel);
Vue.use(VueParticles)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
