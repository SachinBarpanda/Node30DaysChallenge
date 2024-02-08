const express = require('express');
const app = express();
function requestLoggerMiddleware(req, res, next) {
    const timestamp = new Date().toISOString();
    const method = req.method
    console.log(`${timestamp} - ${method} request recieved.`);
  }
  app.use(requestLoggerMiddleware);
  
  app.get('/',(req,res)=>{
    res.send("hello world ");
  })
  app.listen(8080,()=>{
    console.log("server connected at 8080")
  })