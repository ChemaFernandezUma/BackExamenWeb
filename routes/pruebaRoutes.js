const express = require('express');
const router = express.Router();
const pruebaSchema = require("../models/prueba");
const axios = require('axios');

//CRUD PRUEBA
//Get
router.get("/", async (req, res) => {
    pruebaSchema.find().then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

//Get by id
router.get("/:id", async (req, res) => {
    pruebaSchema.findById(req.params.id).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

//Post
router.post("/", async (req, res) => {
    pruebaSchema.create(req.body).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

//Put
router.put("/:id", async (req, res) => {
    pruebaSchema.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.json(data);
    }
    ).catch((error) => {
        res.status(500).json({ error: error.message });
    });
}
);

//Delete
router.delete("/:id", async (req, res) => {
    pruebaSchema.findByIdAndDelete(req.params.id).then((data) => {
        res.json(data);
    }
    ).catch((error) => {
        res.status(500).json({ error: error.message });
    });
}
);

module.exports = router;