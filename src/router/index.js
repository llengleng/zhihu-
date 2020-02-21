import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'Find',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Find.vue')
  },
	{
	  path: '/answer',
	  name: 'Answer',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import(/* webpackChunkName: "about" */ '../views/Answer.vue')
	},
	{
	  path: '/allnews',
	  name: 'AllNews',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import(/* webpackChunkName: "about" */ '../views/AllNews.vue')
	},
		{
	  path: '/alltable',
	  name: 'AllRoundTable',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import(/* webpackChunkName: "about" */ '../views/AllRoundTable.vue')
	},
	{
	  path: '/allsave',
	  name: 'AllSave',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import(/* webpackChunkName: "about" */ '../views/AllSave.vue')
	},
	{
	  path: '/allspecial',
	  name: 'AllSpecial',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import(/* webpackChunkName: "about" */ '../views/AllSpecial.vue')
	},
]

const router = new VueRouter({
  routes
})

export default router
