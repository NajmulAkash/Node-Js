//create file

// const fs=require('fs')
// fs.writeFileSync('./text.html','najmul akash')

//Delete file

// const fs=require('fs')
// fs.unlinkSync('./text.html')

//Read File
const fs=require('fs')
const result=fs.readFileSync('./text.txt','utf-8')
console.log(result)