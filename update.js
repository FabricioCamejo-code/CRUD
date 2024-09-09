const mongoose = require('mongoose')
const Book = require('./models')

//Mas comun para actualizar model.updateOne un document
//model.updateOne (query/o-consulta-amodificar, fieldsToUpdate-a-actualizar ,
//    (err, result) => {
     // código
//    })
//result es una propiedad que en esta devolución de llamada obtendremos: La cantidad de documentos que coinciden
//con esta consulta (n).El número de documentos modificados (nModified). Si la operación fue exitosa o no (ok)
//Example
async function updateBook() {
    try{
        const updateDoc = await Book.updateOne({name: 'NodeJS: Una guía'}, {name: 'NodeJSupdate: Una guia Actualizada'})
        console.log(updateDoc)
        console.log('------------ ¡¡¡ Update Complete ;) !!! ---------')
    }
    catch(err){console.log(err)}
}

updateBook()
