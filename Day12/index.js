const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    window:10000,
    max:2,
    message:'Too many requests'
})
app.use(limiter);

app.get('/',(req,res)=>{
    res.send('Hello welcome')
})

// Your routes go here

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});