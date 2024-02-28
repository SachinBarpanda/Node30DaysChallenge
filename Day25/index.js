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

const product = mongoose.model('Product', Product);
app.post('/products', async(req,res)=>{
  try{
    const prodcutSave = await product.create(req.body);
    res.json(prodcutSave);
  }catch(err){

  }
})
app.get('/products',async (req,res)=>{
  try{
    const products = await product.find();
    res.json(products);
  }catch(err){

  }
})
app.get('/products/:id',async (req,res)=>{
  try{
    const {id} = req.params;
    const products = await product.findById(id);
    if(!products){
      return res.json("Error !")
    }
    res.json(products);
  }catch(err){

  }
})

app.delete('/products/:id',async (req,res)=>{
  try{
    const {id} = req.params;
    const products = await product.findByIdAndDelete(id);
    if(!products){
      return res.json("Error !")
    }
    res.json(products);
  }catch(err){

  }
})

connectToMongoDB()


app.listen(8080, () => {
  console.log('Server is running on port 8080');
})
