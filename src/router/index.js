import Vue        from 'vue'
import Router     from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
  	mode: 'history',
  	routes: [
  		{
            path      : '/',
            component : (resolve) => require(['@/views/bottomBar.vue'], resolve),
            meta      : {
	            title: 'Workz space'
	        },
            children: [{
                path      : '/',
                component : (resolve) => require(['@/views/Home/index.vue'], resolve),
            },{
                path : '/profile',
                component : (resolve) => require(['@/views/Profile/index.vue'], resolve),
            },{
                path : '/contact',
                component : (resolve) => require(['@/views/Contact/index.vue'], resolve),
            },{
                path : '/wishlist',
                component : (resolve) => require(['@/views/Wish/index.vue'], resolve),
                meta: {
                    title: 'Workz space'
                }
          }]
  		},{
            path      : '/workspace',
            component : (resolve) => require(['@/views/Workspace/index.vue'], resolve),
            meta: {
                title: 'Workz space'
            },
        },{
            path : '/follow',
            component : (resolve) => require(['@/views/Follow/index.vue'], resolve),
            meta: {
                title: 'Workz space'
            }
        },{
            path      : '/testimonials',
            component : (resolve) => require(['@/views/Testimonials/index.vue'], resolve),
            meta      : {
                title: 'Workz space'
            }
      }
  	]
});

export default router;
