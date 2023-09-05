import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../components/Login.vue';
import Resistration from '../components/Resistration.vue';
import AboutViewVue from '../views/AboutView.vue';
import Dashboard from '../Pages/Dashboard.vue';
import Insert from '../components/Insert.vue'
import StudentDetails from '../components/StudentDetails.vue'
import EditStudent from '../components/EditStudent.vue';
import Product from '../components/Product.vue';
import AddProduct from '../components/AddProduct.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
     
     
    },
    {
      path: '/student/:id',
      name: 'StudentDetails',
      component: StudentDetails,
      meta: { requiresAuth: true }
    },
    {
      path: '/student/edit/:id',
      name: 'EditStudent',
      component: EditStudent,
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',      
      component: AboutViewVue,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resistration',
      name: 'resistration',
      component: Resistration
    },
    {
      path:'/insert',
      name:'inset',
      component:Insert,
      meta: { requiresAuth: true }
    },
    {
      path:'/product',
      name:'product',
      component: Product
    },
    {
      path:'/addProduct',
      name:'addProduct',
      component: AddProduct,
      meta: { requiresAuth: true }
    }
  ]
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    // Redirect to the login page if not authenticated
    next('/login');
  } else {
    // Continue to the requested route
    next();
  }
});
export default router;
