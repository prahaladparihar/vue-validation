import Vue from 'vue'
import App from './App.vue'


import Userform from './components/Userform.vue'


Vue.component('user-form', Userform)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')