<template>
  <b-container class="theme-container p-2">
      <div>
        <b-button v-b-toggle.sidebar-right>Show Current Lesson Plan</b-button>
        <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
          <div class="px-3 py-2">
            <p>
              Lesson 1
            </p>
            <p>
              Lesson 2
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
        </b-sidebar>
      </div>
  </b-container>
</template>

<script>
export default {
  name: "toggleSidebar"
}
</script>

<style scoped>

</style>