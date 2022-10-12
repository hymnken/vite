<template>
  <div>
    <p>{{name}}</p>
    <button @click="updateName">click</button>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue'
export default {
    name:'App',
    setup () {
    //    const obj = {
    //     name:'ls',
    //     age:18
    //    }

    const obj = reactive({
         name:'ls',
         age:18
    })

    console.log(obj);

    //    const updateName = () =>{
    //     obj.name = 'zqweq'
    //    }
    //    return {obj , updateName} 

    // let { name } = obj

    const name = toRef(obj,'name')

    const updateName = () =>{
        name.value ='hhjk'
    }

    return {name ,updateName}

    }
}
</script>

<style>

</style>