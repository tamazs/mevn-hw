const express = require('express');
const router = express.Router();
const Todo = require('../models/todos');

//Get all todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
})

//Create new todo
router.post('/new', async (req, res) => {
    const newTodo = new Todo(
        {
            todo: "Learn new stuff",
            author: "me bruh"
        }
    );
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
})

//Get by id
router.get('/get/:id', async (req, res) => {
    const todos = await Todo.findById({ _id : req.params.id })
    res.json(todos)
})

//Update by id
router.put('/update/:id', async (req, res) => {
    const todosUpdate = await Todo.updateOne(
        { _id: req.params.id }, 
        //{ $set: req.body }
        {todo: "Learn nothing",
        author: "def not me"}
    )
    res.json(todosUpdate)
})

//Delete by id
router.delete('/delete/:id', async (req, res) => {
    const todosDelete = await Todo.findByIdAndDelete({ _id : req.params.id })
    res.json(todosDelete)
})

module.exports = router