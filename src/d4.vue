<template>
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click="updateName">click</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name:'App',
    setup () {

    const obj = reactive({
         name:'ls',
         age:18
    })

    const obj2 = toRefs(obj)
    // console.log(obj2);

    const updateName  = () => {
      obj2.name.value = 'opopopop'
    }


    return { ...obj2 , updateName }

    }
}
</script>

<style>

</style>