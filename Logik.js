const http = require("http");
const { url } = require ("inspector");
let name=a="najmul akash";
let password=b="najmulbalghari";
const server = http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url==="/Home"){
      res.setHeader('Contact-Type','text-html')
      res.write('<html>')
      res.write('<head>')
      res.write('<body><h1>Wellcome to Backend Courses</h1></body>')
      if(name=== a && password=== b){
       console.log("pass")
      }
      else{
        console.log("Fail")
      }
      res.write('</head>')
      res.write('</html>')
      res.end()
    }
    res.setHeader('Contact-Type','text-html')
      res.write('<html>')
      res.write('<head>')
      res.write('<body><h1>Good</h1></body>')
      res.write('</head>')
      res.write('</html>')
})
const port = 3001;
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})