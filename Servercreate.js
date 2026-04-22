// const http=require('http')
// const {url}=require('inspector');
// const server=http.createServer((req, res)=>{
//    switch(req.url){
//     case "/Home":
//     res.end("Home page")
//      case "/About":
//         res.end("About page")
//         break;
//    }
//     res.end("najmul akash")
// })
// server.listen(3000,()=>console.log("start ho ga ya !"))

const http=require('http')
const {url}=require('inspector');
const server=http.createServer((req, res)=>{
   if(req.url==='/Home'){
    res.end("Home Page");
   }
     else if(req.url==='/About'){
        res.end("About page")
    }
    res.end("najmul akash")
})
server.listen(3000,()=>console.log("start ho ga ya !"))