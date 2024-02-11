const express = require('express');
const app = express();

function positiveIntegerHandler(req, res) {
    // Your implementation here
    const num = parseInt(req.query.num);
    if(Number.isInteger(num) && num > 0){
        res.send("success")
    }else{
        const error = new Error("Number is not positive");
        error.status = 400;
        throw error;
    }
  }
  function errorHandler(req,res,err,next){
    if(err.status === 400){
        res.status(400).send("Error occured")
    }
    else{
        next(err);
    }
  }
  app.use(errorHandler);
  app.get('/route',positiveIntegerHandler);

  app.listen(8080,()=>{
    console.log("server connected at 8080")
  })
