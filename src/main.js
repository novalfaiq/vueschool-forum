import App from '@/App.vue'
import AppDate from '@/components/AppDate.vue'
import router from '@/router'
import { createApp } from 'vue'

const app = createApp(App)

app.use(router)
app.component('AppDate', AppDate)
app.mount('#app')
