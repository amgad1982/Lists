<template>
  <div  class="main">
      <column v-for="item in _.range(0,20)"></column>
  </div>
</template>

<script>
import Column from './column.vue'
export default {
    name:"layout",
    components:{
        Column
    }
}
</script>

<style>

</style>