<!-- <template>
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

</style> -->

<template lang="">
  <div>
    <h2>zizujian {{modelValue}}</h2><button @click="fn">change</button>
  </div>
</template>
<script>
export default {
  name:'Son',
  props:{
    modelValue:{
      type:Number,
      default:0
    }
  },

  setup(props,{emit}) {
    const fn = () => {
      emit('update:modelValue',100)
    }

    return { fn }
  }

}
</script>
<style lang="">
  
</style>