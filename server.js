const mongoose = require('mongoose')
require('./create')
require('./models')
require('./schema')
require('./read-find')
require('./update')
require('./delete')
require('./schemaPesonalizador')

//Al establecer useNewUrlParser: true, le indicas a Mongoose que utilice este nuevo analizador de URL cuando se conecte a MongoDB
//usenewurlparse corrige muchos de estos problemas y mejora la compatibilidad y flexibilidad al manejar las cadenas de conexión.
mongoose.connect('mongodb://localhost/testBooks')
.then(db => console.log('DB is connect'))
.catch(err => console.error(err))