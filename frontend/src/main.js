import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** Styles import */
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/global.scss'

createApp(App).use(store).use(router).mount('#app')
