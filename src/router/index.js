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
      }
  	]
});

export default router;
