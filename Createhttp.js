const http=require("http")
const {url}=require("inspector")
const Server=http.createServer((req,res)=>{
        console.log(`porgram is running${req.url}`)
        if(req.url==="/home"){
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
        }
        setTimeout(() => {
            console.log("complete ho ga ya")
        }, 5000); 
})
const port=2345;
Server.listen(port,()=>{
    console.log(`Create http http://localhost:${port}`)
})