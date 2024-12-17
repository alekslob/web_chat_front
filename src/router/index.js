import { createRouter, createWebHashHistory } from 'vue-router'
import Chat from '../views/Chat.vue'
import AdminPannel from '../views/AdminPannel.vue'
const routes = [
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    
  },
  {
    path: '',
    name: 'admin',
    component: AdminPannel
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
