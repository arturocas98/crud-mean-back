const mongoose = require('mongoose');
const { Schema} = mongoose;

const empleado_schema = new Schema({
    nombre :{ type: String, required: true },
    cargo :{ type: String, required: true },
    oficina :{ type: String, required: true },
    salario :{ type: Number, required: true },

});

module.exports = mongoose.model('empleado',empleado_schema);