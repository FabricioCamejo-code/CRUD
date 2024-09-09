const mongoose = require('mongoose')
const Book = require('./models')

//usaremos model.deleteOne o model.deleteMany
//result en la devolución de llamada
// result proporciona un objeto que indica: Cuántos documentos se eliminaron (deletedCount).Cuántos documentos coincidieron con la
//consulta (n). Si la operación fue exitosa o no (ok).
//model.deleteOne (queryoconsulta, (err,
    //resultado) => {
     // código
    //})
//example

async function deleteDocument(){
    try{
        const deleteDoc = await Book.deleteOne({name: 'namelibro'})
        console.log(deleteDoc)
        console.log('------------ ¡¡¡ Delete Complete ;) !!! ---------')
    }
    catch(err){console.log(err)}
}

deleteDocument()
