const http=require('http')
const { url } = require('inspector')
const Server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/home'){
        res.setHeader('Contact-Type','text/html')
        res.write('<html><head><titel><body><h3 style="color: red;">Wellcome</h3><input type="text" name="username" placeholder="Enter your username"></body></titel></head></html>')
        return res.end();
    }
    res.setHeader('Contact-Type','text/html')
    res.write('<html><head><titel><body><h3>Good Najmul </h3></body></titel></head></html>')
    return res.end();
})
const PORT=3002;
Server.listen(PORT,()=>{
    console.log(`Server running is address http://localhost:${PORT}`)
})