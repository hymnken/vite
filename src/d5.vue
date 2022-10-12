<template>
  <div>
    <p>{{age}}</p>
    <p>{{name}}</p>
    <button @click="updateName">okok</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name:'App',
    setup () {

      const age = ref(14)

      const name = ref('lisi')
      
      const updateName = () => {
        name.value = 'kllkl'
      }

    return { age , name , updateName }

    }
}
</script>

<style>

</style>