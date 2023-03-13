import { ref } from "vue"


const getTodos = () => {
    const state = ref({
        todos: {}
    })

    const GetAllTodos = async () => {
        try {
            await fetch("http://localhost:3000/todos")
            .then(res => res.json())
            .then(data => {
                state.value.todos = data
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    return { state, GetAllTodos }
}

export default getTodos