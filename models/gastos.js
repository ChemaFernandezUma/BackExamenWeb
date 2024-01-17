const mongoose = require("mongoose");
// timestamp. Fecha y hora en la que se realiza la anotación.
// - concepto. Texto breve que identifica el gasto.
// - importe. Importe pagado.
// - e-mail. De la persona que ha realizado el pago del gasto.
// - token. Token de identificación obtenido al iniciar sesión en el sistema.

const gastosSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    },
    concepto: {
        type: String,
        required: true
    },
    importe: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    imagenes: {
        type: String,
        required: false
    },
    lugar: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("gastos", gastosSchema);