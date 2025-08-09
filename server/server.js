const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 3000;

// Import Routes
const productRoutes = require('./route/product.route');


// Connect to MongoDB
const mongodbURL = process.env.MONGODB_URL;
mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Connection Error => "));

db.once("open", () => {
    console.log(`Database is connected successfully with host ${db.host}`);
});

// Middleware
app.use(express.json());
app.use(productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})
