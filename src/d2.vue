<template>
  <div class="container">
    genzujian
  </div>
</template>
<script>
import { onBeforeMount, onMounted } from 'vue'

export default {
  name: "App",
  setup() {
    onBeforeMount(() => {
      console.log('before',document.querySelector('.container'));
    })
    
    onMounted(() =>{
      console.log('before1',document.querySelector('.container'));
    })

    onMounted(() => {
      console.log('before2',document.querySelector('.container'));
    })
  }
}
</script>