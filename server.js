const express = require('express');
const app = express();
const Product = require('./models/productModel.js');
const mongoose = require('mongoose');

// so our application can understand the json formate

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(`error:${error.message}`);
    }
})

// updating data in database 
app.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
        return res.status(404).json({ message: `cannot found product with Id: ${id}` });
    }
    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
})

// delete data in database
app.delete('/product/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    if (!product) {
        return res.status(404).json({ message: `cannot found product with Id: ${id}` });
    }

    res.status(200).json(product);
})

// getting all product
app.get('/product', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(`error:${error.message}`);
    }
})

// getting one product
app.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(`error:${error.message}`);
    }
})

app.get('/', (req, res) => {
    res.send("Hello World this is nodejs framework express js");
})

app.get('/blogs', (req, res) => {
    res.send("this is second page");
})



// connect this to mongodb
mongoose
    .connect('mongodb+srv://Bhuvan:12345Admin@bhuvanapi.pnpzdok.mongodb.net/NODE-API?retryWrites=true&w=majority')
    .then(() => {
        console.log("connected to database");
        // server listen at 3000 ok       
        app.listen(3000, () => {
            console.log(`server is running on port ${3000}`);
        })
    }).catch((error) => {
        console.log(error);
    });