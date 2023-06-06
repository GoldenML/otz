import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.scss'
import router from './router/router.ts'
import App from './App.vue'

// @ts-ignore
const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')
