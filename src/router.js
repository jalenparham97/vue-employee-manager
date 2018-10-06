import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from "@/components/Dashboard"
import NewEmployee from "@/components/NewEmployee"
import ViewEmployee from "@/components/ViewEmployee"
import EditEmployee from "@/components/EditEmployee"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'App',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'NewEmployee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'EditEmployee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',
      name: 'ViewEmployee',
      component: ViewEmployee
    },
  ]
})
