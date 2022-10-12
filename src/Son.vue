<template>
  <div class="container">
    <h2>zizujian {{money}}</h2>
    <hr>
    <GrandSon />
  </div>
</template>
<script>
import { inject } from 'vue'
import GrandSon from './grandSon.vue' 
export default {
  name: 'Son',
  components:{
    GrandSon
  },

  setup () {
    const money = inject('money')

    return { money }
}
}
</script>

<style scoped lang="less">

</style>