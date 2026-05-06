const express=require('express')
const user=require('./projectU.json')
const app=express()
const PORT=8000;
app.get("/api/user",(req,res)=>{
    return res.json(user)
});
app.get("/users",(req,res)=>{
    const html=`
    <ul>
    ${user.map((user)=>`<li>${user.firstname}</li>`)}
    </ul>
    `
    res.send(html)
})
app.listen(PORT,()=>console.log("Started!"))