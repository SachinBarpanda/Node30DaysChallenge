const express = require('express');
const app = express();
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/mydb';

async function connectToMongoDB() {
  // Your implementation here
  try{
    await mongoose.connect(url);
    addUserToDatabase({ username: 'john_doe', email: 'john@example.com' })
    console.log("Db connected...");
  }catch(error){
    console.log("Db error...");
  }
}

const userSchema = new mongoose.Schema({
  username: {type : String , required : true},
  email : {type : String , required : true}
})

const User = mongoose.model ('User', userSchema);

connectToMongoDB()

async function addUserToDatabase(user){
  const newUser = new User(user);
  await newUser.save()
  console.log("User added successfully!");
}


app.listen(8080, () => {
  console.log('Server is running on port 8080');
})
