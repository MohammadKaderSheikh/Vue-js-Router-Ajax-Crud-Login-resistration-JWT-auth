import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../components/Login.vue';
import Resistration from '../components/Resistration.vue';
import AboutViewVue from '../views/AboutView.vue';
import Dashboard from '../Pages/Dashboard.vue';
import Insert from '../components/Insert.vue'
import StudentDetails from '../components/StudentDetails.vue'
import EditStudent from '../components/EditStudent.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/student/:id',
      name: 'StudentDetails',
      component: StudentDetails,
    },
    {
      path: '/student/edit/:id',
      name: 'EditStudent',
      component: EditStudent,
    },
    {
      path: '/dashborad',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',      
      component: AboutViewVue
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
      component:Insert
    }
  ]
})

export default router;
