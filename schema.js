const mongoose = require('mongoose')
const { Schema } = mongoose
//Schema
const BookSchema = new Schema({
    name: String
})

module.exports = BookSchema