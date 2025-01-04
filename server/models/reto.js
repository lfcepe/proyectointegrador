const mongoose = require('mongoose');

let retoSchema = new mongoose.Schema({
    nombre:{type: String, required: true},
    descripcion:{type: String, required: true},
    puntos: {type: Number, default: 0}
})
let Reto = mongoose.model('Reto', retoSchema);
module.exports = Reto;



