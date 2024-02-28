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

function authenticateAndAuthorize(req, res, next) {
  // Your implementation here
  const token = req.headers.authorization;
  if(!token){
    return res.json({
      message: "No Token found"
    })
  }
  const decoded = jwt.verify(token,'abc');
  if(decoded.role !== "admin"){
    return res.json({
      message : "Unauthorised access "
    })
  }
  req.user = decoded;
  next();
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

function getProductStatistics() {
  // Your implementation here
  const pipeline = [
    {
      $group : {
        _id : null,
        totalProducts : {$sum : 1},
        averagePrice : {$avg : "$price"},
        highestQuantity : {$max : "$quantity"}
      }
    }
  ]

  return Product.aggregate(pipeline)
  .then(result => {
    return result[0];
  })
  .catch(error => {
    console.log(error);
    throw error;
  })
}




connectToMongoDB()
getProductStatistics();

app.listen(8080, () => {
  console.log('Server is running on port 8080');
})
