import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './../node_modules/bulma/css/bulma.css';
import '@/assets/css/index.css'
import '@/assets/css/about.css'
import '@/assets/css/footer.css'

createApp(App).use(router).mount('#app')
