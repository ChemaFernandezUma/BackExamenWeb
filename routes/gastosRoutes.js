const express = require('express');
const router = express.Router();
const gastoSchema = require("../models/gastos");
const axios = require('axios');

//CRUD GASTOS
//Get
router.get("/", async (req, res) => {
    gastoSchema.find().then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

//Get by id
router.get("/:id", async (req, res) => {
    gastoSchema.findById(req.params.id).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

//Post
router.post("/", async (req, res) => {
    gastoSchema.create(req.body).then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    });
});

//Put
router.put("/:id", async (req, res) => {
    gastoSchema.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    }
    );
}
);

//Delete
router.delete("/:id", async (req, res) => {
    gastoSchema.findByIdAndDelete(req.params.id).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    }
    );
}
);

//Obtener orden descendente por timestamp
router.get("/gasto/desc", async (req, res) => {
    const data = await gastoSchema.find();
    // Ordenar los resultados en el lado del cliente
    const sortedData = data.sort((a, b) => b.timestamp - a.timestamp);
    res.json(sortedData);
}
);

//Obtener saldo del usuario con email X
router.get("/saldo/:email", async (req, res) => {
    const data = await gastoSchema.find({ email: req.params.email });
    let saldo = 0;
    data.forEach((gasto) => {
        saldo += gasto.importe;
    });

    //Obtenemos cuantos usuarios h9ay (cuantos emails diferentes hay en la bdd)
    const data1 = await gastoSchema.find().distinct('email');
    const numUsuarios = data1.length;
    axios.get('http://localhost:5001/gastos/gasto/total').then((data2) => {
    saldo -= data2.data/numUsuarios;
    res.json(saldo);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    }
    );}
);

//Obtener gasto total
router.get("/gasto/total", async (req, res) => {
    const data = await gastoSchema.find();
    let total = 0;
    data.forEach((gasto) => {
        total += gasto.importe;
    });
    res.json(total);
}
);

//Obtener cuanto pago usuarui con email X
router.get("/gasto/:email", async (req, res) => {
    const data = await gastoSchema.find({ email: req.params.email });
    let total = 0;
    data.forEach((gasto) => {
        total += gasto.importe;
    });
    res.json(total);
}
);


module.exports = router;