const express = require('express');
const app = express();
const mongoose = require('mongoose')
const productSchema = requrie('./Model/product_schema.js')

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

app.post('/products',async (req,res)=>{
  try{
    const {name , price , quantity} = req.body;
    const product = new Product({name, price , quantity});
    await product.save();
  }catch(err){

  }
})

app.get('/products',async (req,res)=>{
  try{
    const products = await Product.find();
    res.json(products);
  }catch(err){

  }
})

app.patch('/products/:id/edit',async (req,res)=>{
  try{
    const {id} = req.params;
    const {name , price , quantity} = req.body;
    const updatedProduct = await Product.findbyIdAndUpdate(
      id,
      {name , price , quantity},
      {new : true}
    );
    
  }catch(err){
  }
})
app.delete('/products/:id',async (req,res)=>{
  try{
    const {id} = req.params;
    await Product.findbyIdAndDelete(id);    
  }catch(err){

  }
})

connectToMongoDB()


app.listen(8080, () => {
  console.log('Server is running on port 8080');
})
