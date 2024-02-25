const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Product = requrie('./Model/product_schema.js')
const Category = require('./Model/category')

const url = 'mongodb://127.0.0.1:27017/mydb';
app.use(express.json());

async function connectToMongoDB() {
  // Your implementation here
  try{
    await mongoose.connect(url);
    console.log("Db connected...");
  }catch(error){
    console.log("Db error...");
  }
}

async function getProductCategory(){
  try{
    const productsCategory = await Product.find().populate('Category')
    return productsCategory;
  }catch(Error){

  }
}

connectToMongoDB()


app.listen(8080, () => {
  console.log('Server is running on port 8080');
})
