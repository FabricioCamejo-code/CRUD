const mongoose = require('mongoose')
const Book = require('./models')


async function searchDoc() {
    try {
        const resultDoc = await Book.find()
        //const resultDoc = await Book.find(query/o-consulta) read query
        //example const resultDoc = await Book.find({name: 'NodeJS: Una guía'}) read query
        console.log(resultDoc)
        console.log('------------ ¡¡¡ Search-Read Complete ;) !!! ---------')
    }
    catch(err){console.log(err)}
}

searchDoc()