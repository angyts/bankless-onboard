<template>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="/">Bankless: Onboard</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="lesson0-onboard">Get a Wallet</b-nav-item>
              <b-nav-item href="#">Lesson 2</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>Connect Wallet</em>
                </template>
                <b-dropdown-item @click="connectWallet">Connect Wallet</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
</template>

<script>
// https://developers.ceramic.network/build/installation/
import CeramicClient from '@ceramicnetwork/http-client'
const API_URL = "https://ceramic-clay.3boxlabs.com"

const ceramic = new CeramicClient(API_URL)

// https://developers.ceramic.network/build/configure-did/
import KeyDidResolver from 'key-did-resolver'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'

const resolver = { ...KeyDidResolver.getResolver(),
                   ...ThreeIdResolver.getResolver(ceramic) }

import { DID } from 'dids'
const did = new DID({ resolver })

ceramic.setDID(did)

// https://developers.ceramic.network/build/authentication/
import { ThreeIdConnect,  EthereumAuthProvider } from '@3id/connect'

export default {
  name: "navigationBar",
  methods:{
    async connectWallet (){
      const addresses = await window.ethereum.enable()
      const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
      await threeIdConnect.connect(authProvider)
      const provider = await threeIdConnect.getDidProvider()
      ceramic.did.setProvider(provider)
      await ceramic.did.authenticate()
    }
  }
}
</script>

<style scoped>

</style>