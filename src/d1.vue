<template>
  <div class="container">
    <h1 @click="say">{{ msg }}</h1>
  </div>
</template>
<script>
// import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue'
export default {
  name: "App",
  setup() {
    const msg = "hi vue3"

    const say = () => {
      console.log('hi vue3vue3');
    }
    return { msg , say }
  }
}
</script>