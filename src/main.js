import Vue from 'vue'
import Vuelidate from 'vuelidate' //vue validation
import App from './App.vue'

//validation
Vue.use(Vuelidate);

import Userform from './components/Userform.vue'


Vue.component('user-form', Userform)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    validations: {},
}).$mount('#app')