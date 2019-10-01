<template>
  <div id="app" class="container">
    <site-menu/>
    <index/>
  </div>
</template>

<script>
import Index from './components/index.vue'
import SiteMenu from './components/sidemenu.vue'

export default {
  name: 'app',
  components: {
    Index,
    SiteMenu
  }
}
</script>

<style>

</style>
