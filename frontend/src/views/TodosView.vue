<template>
    <div>
        <div v-for="item in state.todos" :key="item.author">
            <h4>{{ item.author }}</h4>
            <p>{{ item.todo }}</p>
            <button @click="deleteTodo(item._id)">Delete todo</button>
            <button @click="editTodo(item._id)">Edit todo</button>
        </div>
    </div>
    <button @click="newTodo()">New Todo - static</button>
</template>

<script setup>
import todocrud from '../modules/todocrud';
import { onMounted } from 'vue';

const { state, GetAllTodos, newTodo, deleteTodo, editTodo } = todocrud()

onMounted(() => {
    GetAllTodos()
})

</script>

<style lang="scss" scoped>

</style>