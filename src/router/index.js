import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import AdminView from '../views/AdminView.vue'
import AdminUsersView from '../views/AdminUsers.vue'
import AdminProductsView from '../views/AdminProducts.vue'
import profileView from '../views/profileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
    {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/products/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/admin/users',
    name: 'adminUsers',
    component: AdminUsersView
  },
  {
    path: '/admin/products',
    name: 'adminProducts',
    component: AdminProductsView
  },
  {
    path: '/profile',
    name: 'profile',
    component: profileView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
