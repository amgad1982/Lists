<template>
  <div  class="main p-2 bg-gray-100 ml-20">
      <column v-for="item in cols" :key="item"></column>
  </div>
</template>

<script>
import Column from './column.vue'
export default {
    name:"layout",
    components:{
        Column
    },
    data(){
        return{
            cols:this.$_.range(6)
        }
    }
}
</script>

<style>

</style>