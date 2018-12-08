import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './scss/grid.scss'			// сітка

Vue.config.productionTip = false

new Vue({

	store,
    render: h => h(App)
    
}).$mount('#app')
