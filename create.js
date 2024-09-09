const mongoose = require('mongoose')
const Book = require('./models')



async function createBook() {
    try{
        const book = await new Book({name: 'NodeJS: Una guía two'})
        const result = await book.save() // Manejo de la promesa con await
        console.log(result)
        console.log(result,'------------ ¡¡¡ Created ;) !!! ---------')
        //await mongoose.disconnect();  // Desconectar después de la operación

    }
    catch(err){console.log(err)}
    
}

createBook()