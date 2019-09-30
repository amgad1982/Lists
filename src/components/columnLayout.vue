<template>
  <div  class="main p-2 bg-gray-100 ml-40 mt-12">
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
            cols:[1,2,3,4,5,6,7,8]
        }
    }
}
</script>

<style>

</style>