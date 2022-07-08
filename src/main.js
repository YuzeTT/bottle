import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import animated  from'animate.css'

createApp(App)
.use(router)
.use(animated)
.mount('#app')
