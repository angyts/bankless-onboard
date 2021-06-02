<template>
  <b-container class="p-2">
      <navigation-bar></navigation-bar>
      <Content/>
      <toggle-sidebar></toggle-sidebar>
  </b-container>
</template>

<script>
import navigationBar from "../components/navigationBar";
import toggleSidebar from "../components/toggleSidebar";

export default{
  components:{navigationBar, toggleSidebar},
}
</script>

<style>

</style>