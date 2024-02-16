const express = require('express');
const app = express();
const path = require('path')

function loggingMiddleware(req, res, next) {
  // Your implementation here
  console.log(`[${new Date().toDateString()}] `);
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
  console.log(req.body);
  next();
}

app.use(express.json());
app.use(loggingMiddleware);

app.get('/',(req,res)=>{
  res.send('Landing page')
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
