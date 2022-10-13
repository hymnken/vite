import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mixin({
    mounted() {
        console.log('zhunbeihaole1')
    },
})


app.mount('#app')