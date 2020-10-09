const express = require('express')
const router = express.Router()


const TodoModel = require('../models/Todo.model')

router.get('/', (req, res) => {  
    TodoModel.find()
        .then((todos) => {
            res.render('landing.hbs', {todos})
        })
})

router.get('/add-form', (req, res) => {
    res.render('add-form.hbs')
})

router.post('/add-form', (req, res) => {
    console.log(req.body)
    TodoModel.create(req.body)
        .then(() => {
            console.log('Data added')
            res.redirect('/')
        })
})

router.get('/todo/:id', (req, res) => {
    let id = req.params.id
    TodoModel.findById(id)
        .then((todo) => {
            // get a detail page ready
            res.render('todo-detail.hbs', {todo})
        })
})

router.get('/todo/:id/delete', (req, res) => {
    let id = req.params.id
    TodoModel.findByIdAndDelete(id)
        .then(() => {
            console.log('Todo deleted')
            res.redirect('/')
        })
})

router.get('/todo/:id/edit', (req, res) => {
    let id = req.params.id
    TodoModel.findById(id)
        .then((todo) => {
            res.render('edit-form', {todo})
        })
})  

router.post('/todo/:id/edit', (req, res) => {
    let id = req.params.id
    TodoModel.findByIdAndUpdate(id, { $set: req.body } )
        .then(() => {
            res.redirect('/')
        })
})  

module.exports = router