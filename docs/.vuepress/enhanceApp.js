import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Ceramic from '@ceramicnetwork/http-client'
import { IDX } from '@ceramicstudio/idx'

const aliases = {
  alias1: 'definitionID 1',
  alias2: 'definitionID 2',
}

const ceramic = new Ceramic('https://ceramic-clay.3boxlabs.com')
const idx = new IDX({ ceramic, aliases })

export default ({
  Vue, idx
}) => {
    Vue.use(BootstrapVue)
}
