import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import WidgetPage from '../views/WidgetPage.vue'
import ProfileView from '../views/ProfileView.vue'
import UpdateIView from '../views/UpdateIView.vue'
import UpdatePView from '../views/UpdatePView.vue'
import AdminView from '../views/AdminView.vue'
import AdminCreate from '../views/AdminCreate.vue'
import AdminUpdateP from '../views/AdminUpdateP.vue'
import AdminUpdateI from '../views/AdminUpdateI.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },

  {
    path: '/widget',
    name: 'WidgetPage',
    component: WidgetPage
  },

  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
  },

  {
    path: '/updatei',
    name: 'UpdateIView',
    component: UpdateIView
  },

  {
    path: '/updatep',
    name: 'UpdatePView',
    component: UpdatePView
  },

  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  },

  {
    path: '/createuser',
    name: 'AdminCreate',
    component: AdminCreate
  },

  {
    path: '/adminupdatep/:id',
    name: 'AdminUpdateP',
    component: AdminUpdateP
  },

  {
    path: '/adminupdatei/:id',
    name: 'AdminUpdateI',
    component: AdminUpdateI
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
