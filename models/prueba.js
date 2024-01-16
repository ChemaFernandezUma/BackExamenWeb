const mongoose = require("mongoose");
const pruebaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("pruebas", pruebaSchema);