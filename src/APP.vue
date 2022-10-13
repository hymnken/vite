<!-- <template>
  <div class="container">
    <h1>fuzujian {{money}}</h1>  <button @click="money=1000">faqian</button> 
    <hr>
    <Son />
  </div>
</template>
<script>
import Son from '@/Son.vue'
import { provide, ref } from 'vue'
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递给子组件
  setup () {
    const money = ref(100)

    const changeMoney = (sale) => {
      console.log('changeMoney',sale);
      money.value = money.value - sale
    }
    
    provide('money',money)

    provide('changeMoney',changeMoney)

      return {money , changeMoney}
  }
}
</script> -->


<template lang="">
  <div>
    <h1>fuzujianh {{count}}</h1>
    <hr>
    <!-- <Son :modelValue="count" @update:modelValue="count=$event"></Son> -->
    <Son v-model="count"></Son>

  </div>
</template>
<script>
import Son from '@/Son.vue'
import { ref } from 'vue'
export default {
  name:'App',
  components:{
    Son
  },
  setup() {
    const count = ref(0)
    
    return { count } 
  }
}
</script>
<style lang="">
  
</style>