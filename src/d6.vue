<template>
  <div>
    <div>X:{{x}}</div>
    <div>Y:{{y}}</div>


    <div><button @click="add">{{count}}</button></div>

  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive ,toRefs ,ref} from 'vue'
export default {
  name: 'App',
  setup() {
    const mouse = reactive({
      x: 0,
      y: 0
    })

    const move = (e) => {
      // console.log(e.pageX);
      // console.log(e.pageY);
      mouse.x = e.pageX
      mouse.y = e.pageY 
    }

    onMounted(() => {
      document.addEventListener('mousemove',move)
    })

    onUnmounted(() => {
      document.removeEventListener('mousemove',move)
    })


    const count = ref(0)

    const add = () => {
      count.value ++
    }



    return {...toRefs(mouse) , count , add}
  }
}
</script>

<style>
</style>