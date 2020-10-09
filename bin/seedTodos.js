
const mongoose = require('mongoose')
const TodoModel = require('../models/Todo.model')

require('../config/db.config')

TodoModel.insertMany([
    {name: 'Mongoose' , description: 'Learn Mongoose'},
    {name: 'React' , description: 'Learn React'},
    {name: 'HTML' , description: 'Learn HTML'}
])
    .then(() => {
        console.log('Data was added!')
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Somewthing went wrong ', err)
    })