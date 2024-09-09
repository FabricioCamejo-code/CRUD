const mongoose = require('mongoose')
const BookSchema = require('./schema')

//Model
const Model = mongoose.model
//El nombre de nuestra colección es Books
//que utilizará el esquema de BookSchema
const Book = Model('books', BookSchema)
module.exports = Book
