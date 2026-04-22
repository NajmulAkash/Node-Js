const http=require('http');
const { url } = require('inspector');
const Server=http.createServer((req,res)=>{
   console.log(req.url)
   if(req.url==='/Home'){
   }
})
const PORT=3004;
Server.listen(PORT,()=>{
    console.log(`programm is running http://localhost:${PORT}`)
})