<template>
  <div id="app" class="container">
    <site-header/>
    <site-menu/>
    <index/>
  </div>
</template>

<script>
import Index from './components/index.vue'
import SiteHeader from './components/header.vue'
import SiteMenu from './components/sidemenu.vue'

export default {
  name: 'app',
  components: {
    Index,
    SiteHeader,
    SiteMenu
  }
}
</script>

<style>

</style>
