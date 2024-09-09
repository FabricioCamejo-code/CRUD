//ejecutar solo node  schemaPersonalizador.js
//Method personalizado schema 
//Los métodos se adjuntan al esquema y son de dos tipos: 
// uno Métodos de instancia
const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://localhost/testBooksNewTest')
.then(db => console.log('DB is connect'))
.catch(err => console.error(err))

const BookSchema = new Schema({
    name: String,
    author: String
});

// Definiendo un método de instancia en el esquema
BookSchema.methods.getBookName = function() {
    return this.name + ' ' + this.author; // Corregido para concatenar correctamente
};

// Crear el modelo a partir del esquema
const Book = mongoose.model('Book', BookSchema);


// Crear una instancia del modelo
const myBook = new Book({
    name: 'Ali & Hussain: Best Friends',
    author: 'Hussain Arif'
});


// Llamar al método de instancia
console.log(myBook.getBookName); // Esto debería mostrar "Ali & Hussain: Best Friends Hussain Arif"
