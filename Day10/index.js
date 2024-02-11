const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})
app.get('/styles/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/styles/style.css'))
})

app.listen(8080,()=>{
    console.log("server connected at 8080")
  })
