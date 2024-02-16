const express = require('express');
const app = express();
const WebSocket = require('ws');
const http = require('http')
const server  = http.createServer(app);
const wss = new WebSocket.Server({server})
const path = require('path')

const file1 = path.join(__dirname,"public/index.html")
const file2 = path.join(__dirname,"public/socket.html")

app.get("/",(req,res)=>{
  res.status(200).sendFile(file1);
})
app.get("/socket",(req,res)=>{
  res.status(200).sendFile(file2);
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
wss.on('connection',(ws)=>{
  console.log("connected");
  ws.on('message',(msg)=>{
    console.log(msg);
    ws.send(msg);
  })
  ws.on('close',()=>{
    console.log("disconnected");
  })
})