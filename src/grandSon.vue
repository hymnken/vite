<template>
    <div class="container">
        <h3>grandsion {{money}} <button @click="fn">xiaofei20</button></h3>
    </div>
</template>
<script>
import { inject } from 'vue'
export default {
    name:'GrandSon',
    setup() {
        const money = inject('money')

        const changeMoney = inject('changeMoney')

        const fn = () => {
            changeMoney(20)
        }

        return {money , changeMoney , fn}
    }
}
</script>
<style lang="">
    
</style>