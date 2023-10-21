import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'

import HomeComp from './components/HomeComp.vue'
import ChatComp from './components/ChatComp.vue'
import Testapi from './components/TestAPI.vue'

const routes = [
    {path: '/', name: 'Home', component:HomeComp},
    {path: '/chat', name: 'Chat', component:ChatComp},
    {path: '/vb', name: 'TestApi', component:Testapi},
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

