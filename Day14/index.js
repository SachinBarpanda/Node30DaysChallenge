const express = require('express');
const app = express();
const path = require('path')
const NodeCache = require('node-cache')
const cache = new NodeCache({stdTTL : 60 * 5});

function cacheMiddleware(req,res,next){
  const key = req.originalUrl;

  const cacheRes = cache.get(key);
  if(cacheRes){
    console.log("Cache hit!");
    return res.json(cacheRes);
  }
  console.log("Cache miss!");

  const originalJson = res.json;
  res.json = function(body){
    cache.set(key,body);
    originalJson.call(this,body);
  }
  next();
}

app.get('/data',cacheMiddleware,(req,res)=>{
  const data = {
    message : "This is cached data!",
    timeStamp : new Date().toISOString()
  };
  res.json(data);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
