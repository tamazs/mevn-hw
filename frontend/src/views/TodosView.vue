<template>
    <div>
        <div v-for="item in state.todos" :key="item.author">
            <h4>{{ item.author }}</h4>
            <p>{{ item.todo }}</p>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';


const state = reactive({
    todos: {}
})

function GetAll() {
    fetch("http://localhost:3000/todos")
    .then(res => res.json())
    .then(data => {
        state.todos = data
    })
}

onMounted(() => {
    GetAll()
})

</script>

<style lang="scss" scoped>

</style>