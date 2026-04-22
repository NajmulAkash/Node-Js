// const os=require('os')
// console.log(os.cpus().length);

//Blocking 

// console.log("Ali")
// const fs=require('fs')
// const result=fs.readFileSync('./text.txt','utf-8')
// console.log(result)
// console.log("Tajwar")

//Non-Blocking

console.log("inam")
const fs=require('fs')
fs.readFile('./text.txt','utf-8',(err,resul)=>{
    console.log(resul)
})
console.log("Yaseen")