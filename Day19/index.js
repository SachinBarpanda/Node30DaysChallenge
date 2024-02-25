const express = require('express');
const app = express();
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/mydb';

async function connectToMongoDB() {
  // Your implementation here
  try{
    await mongoose.connect(url);
    console.log("Db connected...");
    // addUserToDatabase({ username: 'john_doe', email: 'john@example.com' })
  }catch(error){
    console.log("Db error...");
  }
}

const userSchema = new mongoose.Schema({
  username: {type : String , required : true},
  email : {type : String , required : true , 
    unique : true,
    validate : {
      validator : function (value){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
      },
      message : props => `${props.value}`
    }
  }
})

const User = mongoose.model ('User', userSchema);

connectToMongoDB()

async function addUserToDatabase(user){
  try{
    const newUser = new User(user);
    await newUser.save()
    console.log("User added successfully!");
  }catch(error){
    console.log(error.message);
  }
}

const userRouter = express.Router();

userRouter.get('/users', async (req, res) => {
    const users = await User.find({});
    res.send(res.json(users));
});

app.use(userRouter)

app.listen(8080, () => {
  console.log('Server is running on port 8080');
})
