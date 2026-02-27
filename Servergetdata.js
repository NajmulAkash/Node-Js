// const http = require("http");
// const server = http.createServer((req, res)=>{
//     console.log(server)
// })
// const port = 3001;
// server.listen(port,()=>{
//     console.log(`Server running at http://localhost:${port}`)
// })


const http = require("http")
const Server = http.createServer((req, res)=>{
    console.log(Server)
})
const port = 3005
Server.listen(port,()=>{
    console.log(`server runing at http://localhost:${port}`
        
    )
    // console.log("najmul akash")
    // console.log("Print ffff")
})   
