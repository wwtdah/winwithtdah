import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/components/pages/HomeView.vue'
import ContactView from '@/components/pages/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/contact', name:'Contact', component: ContactView },
  
]


const router = createRouter({
  // Note: We're using createMemoryHistory() here for compatibility
  //       with the Playground. In a real application you'd usually
  //       use createWebHistory() or createWebHashHistory() instead,
  //       tying the route to the browser URL. See the documentation
  //       for more information about history modes.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router