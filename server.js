require('dotenv').config()
const express = require('express');
const app = express();
const productRouter = require('./routes/productRoute.js');

const mongoose = require('mongoose');

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;



// so our application can understand the json formate

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/product', productRouter);


app.get('/', (req, res) => {
    res.send("Hello World this is nodejs framework express js");
})

app.get('/blogs', (req, res) => {
    res.send("this is second page");
})



// connect this to mongodb
mongoose
    .connect(URL)
    .then(() => {
        console.log("connected to database");
        // server listen at 3000 ok       
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    });

