<template>
    <div>
        <p>{{ test.name }}</p>
    </div>
</template>

<script setup>
import { reactive } from 'vue';


const test = reactive({
    name: "Mr Dude"
})

</script>

<style lang="scss" scoped>

</style>