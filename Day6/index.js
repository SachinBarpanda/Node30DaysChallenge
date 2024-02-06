const express = require('express')
const app = express();
const path = require('path')

function greetHandler(req, res) {
    // Your implementation here
    app.get('/greet',(req,res)=>{
        console.log(req.query);
        const name = req.query.name;
        name ? 
            res.send(`Hello,+${name}!`) : res.send("Hello, Guest!")
        
    })

}
greetHandler('','');

app.listen(8080,(req,res)=>{
    console.log("Server running...")
})