const http=require('http')
const express=require('express')
const app=express();
app.get("/",(req,res)=>{
    return res.send("Home Page")
})
app.get("/About",(req,res)=>{
    return res.send("About page")
})
const server=http.createServer(app)
server.listen(2000,()=>console.log("start"))