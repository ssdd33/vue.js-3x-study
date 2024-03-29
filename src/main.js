import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 전역에서 사용할 패키지 추가
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app')
