import Vue from 'vue'
import App from './App.vue'
import store from './store'

import sassStyles from './scss/grid.scss'

sassStyles;

Vue.config.productionTip = false

new Vue({

	store,
    render: h => h(App)
    
}).$mount('#app')
