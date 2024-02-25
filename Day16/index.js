const express = require('express');
const app = express();
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/mydb';

async function connectToMongoDB() {
  // Your implementation here
  try{
    mongoose.connect(url);
    console.log("Db connected...");
  }catch(error){
    console.log("Db error...");
  }
}

connectToMongoDB()
.then(()=>{
  app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });
})
.catch((error)=>{
  console.error('Failed to start server',error);
})

