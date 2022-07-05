import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import App from './App.vue'
import roteador from './roteador'
import { key, store } from './store/tarefa'

createApp(App)
    .use(roteador)
    .use(store, key)
    .mount('#app')
