const express = require('express');
const router = express.Router();

const {
    createProduct,
    updateProduct,
    deleteProduct,
    allProduct,
    getOneProduct
} = require('../controller/productsController.js');

// routes
router.post('/', createProduct);

// updating data in database 
router.put('/:id', updateProduct);

// delete data in database
router.delete('/:id', deleteProduct)

// getting all product
router.get('/', allProduct)

// getting one product
router.get('/:id', getOneProduct)

module.exports = router;