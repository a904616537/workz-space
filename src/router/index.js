import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  	mode: 'history',
  	routes: [
  		{
  			path      : '/',
	        component : (resolve) => require(['@/views/Home/index.vue'], resolve),
	        meta: {
	            title: 'Workz space'
	        },
  		},{
        path      : '/workspace',
          component : (resolve) => require(['@/views/Workspace/index.vue'], resolve),
          meta: {
              title: 'Workz space'
          },
      },{
        path : '/profile',
          component : (resolve) => require(['@/views/Profile/index.vue'], resolve),
          meta: {
              title: 'Workz space'
          }
      },{
        path : '/wish',
          component : (resolve) => require(['@/views/Wish/index.vue'], resolve),
          meta: {
              title: 'Workz space'
          }
      },{
        path : '/follow',
          component : (resolve) => require(['@/views/Follow/index.vue'], resolve),
          meta: {
              title: 'Workz space'
          }
      },{
        path : '/contact',
          component : (resolve) => require(['@/views/Contact/index.vue'], resolve),
          meta: {
              title: 'Workz space'
          }
      },{
        path : '/testimonials',
          component : (resolve) => require(['@/views/Testimonials/index.vue'], resolve),
          meta: {
              title: 'Workz space'
          }
      }
  	]
});

export default router;
