// const http = require("http");
// const server = http.createServer((req, res)=>{
//     console.log(server)
// })
// const port = 3001;
// server.listen(port,()=>{
//     console.log(`Server running at http://localhost:${port}`)
// })


const http = require("http")
const { url } = require("inspector")
const Server = http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url==='/Home'){
         res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Node JS</title></head>')
    res.write('<body><h1>Wellcome</h1></body>')
    res.write('<form>')
    res.write('<input type="text" name="Username" placeholder="Enter your Details">')
      res.write('<input type="text" name="UserEmail" placeholder="Enter your Details">')
      res.write('<submit type="submit" value="submit">')
    res.write('</form>')
    res.write('</html>')
   return res.end()
    }
 
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Node JS</title></head>')
    res.write('<body><h1>Conding In Node JS</h1></body>')
    res.write('</html>')
    res.end()
    // process.exit();
})
const port = 3005
Server.listen(port,()=>{
    console.log(`server runing at http://localhost:${port}`
        
    )
    // console.log("najmul akash")
    // console.log("Print ffff")
    // console.log("function 1")
    // console.log("fuction 2")
    // console.log("fuction 3")
})   
