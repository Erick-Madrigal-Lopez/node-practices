const { Router } = require('express');
const router = Router();

//Routes 
router.get('/', (req, res) => {
    const data = {
        "Nombre": "Erick Guadalupe",
        "AppelidoPat": "Madrigal",
        "ApellidoMat": "López",
        "Direccion": {
            "Calle": "Hidalgo",
            "No. Exterior": 65,
            "No. Interior": null,
            "CP": 37320,
            "Colonia": "Obregon",
            "Ciudad": "León",
            "Estado": "Guanajuato"
        }
    }
    res.json(data)
});

module.exports = router;