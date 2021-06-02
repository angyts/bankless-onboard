import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

if (typeof window !== "undefined"){window.global = window}

export default ({
  Vue
}) => {
    Vue.use(BootstrapVue)
}
