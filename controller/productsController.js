const Product = require('../models/productModel.js');
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(`error:${error.message}`);
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
        return res.status(404).json({ message: `cannot found product with Id: ${id}` });
    }
    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    if (!product) {
        return res.status(404).json({ message: `cannot found product with Id: ${id}` });
    }

    res.status(200).json(product);
};


const allProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(`error:${error.message}`);
    }
};

const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(`error:${error.message}`);
    }
};



module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    allProduct, getOneProduct

}