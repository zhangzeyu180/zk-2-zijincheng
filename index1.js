const child_process = require('child_process');

console.log(process.pid)


let child1 = child_process.exec('node ./child.js',(error,stdout,stderr) =>{
    if(error) throw error;

    console.log("stdout",stdout);
    
    console.log("stderr",stderr);
})

console.log(child1.pid)

let child2 = child_process.spawn('node',['./child.js'])

child2.stdout.on('data',data=>{
    console.log('spawn out',data)
})

let child2 = child_process.spawn('node',['./child.js'])

 

child2.stderr.on('data',data=>{
    console.log("spawn err",data.toString())
}) 

console.log(child2.pid)