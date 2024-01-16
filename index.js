const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose")
const multer = require('multer');
const fileUpload = multer();
const cloudinary = require('cloudinary');

const app = express();
const port = 5001;
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));

const pruebaRoutes = require("./routes/pruebaRoutes");

app.use("/prueba", pruebaRoutes);
mongoose.connect(
    "mongodb+srv://userWeb:userWeb@exameweb.ci2qqri.mongodb.net/datosExamenDia17").then(() =>
        console.log("Hemos conectado con mongoDB")
    ).catch((error) =>
        console.error(error)
    )


app.get("/", (req, res) => {
    res.send("Esta es la API del examen de Web")
}
)

app.listen(port, console.log("Servidor Backend escuchando en el puerto ", port))