import { createApp } from 'vue'
// Vuetify
import 'vuetify/styles'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'
import store from './store'

document.title = 'Webchat'

createApp(App).use(store).use(router).use(vuetify).mount('#app')
