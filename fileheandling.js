//File create


//Sync...
// {
// const fs=require("fs")
// fs.writeFileSync('./text.txt','Hey there najmul Akash')
// }


// //Async....
//{
// const fs=require('fs')
// fs.writeFile('./text.txt','My name is najmul Akash',(err)=>{})
// }


//read file Sync...
// {
//     const fs=require("fs")
//     const result=fs.readFileSync('./text.txt','utf-8')
//     console.log(result)
// }

//read file Aync...
// {
//     const fs=require('fs')
//     const result=fs.readFile('./text.txt','utf-8')
//     console.log(result)
// }

//Create file code
// {
// const fs=require('fs')
// fs.copyFileSync('./text.txt','copy.text')
// }

//Delete file code
// {
//  const fs=require('fs')
// fs.unlinkSync('./copy.text')
// }

//Delete file  Aync....
// {
//  const fs=require('fs')
// fs.unlink('./text.txt',(err)=>{})
// }

//Details file code 
// {
//     const fs=require('fs')
//     console.log(fs.statfsSync('text.txt'))
// }

const fs=require('fs')
const result=fs.readFileSync('./text.txt','utf-8')
console.log(result)