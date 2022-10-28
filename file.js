//reading files
const fs=require('fs');
fs.readFile('./blog.txt',(err,data)=>{
if(err){
    console.log(err);
}
console.log(data.toString());
})
console.log('Last Line')
//writing files
fs.writeFile('./blog.txt','hello world',()=>{
    console.log("file was modified")

})
fs.writeFile('./blog2.txt','hello world',()=>{
    console.log("file was modified")

})
//directories
if(!fs.existsSync('./assets'))
{
    fs.mkdir('./assets',(err)=>{
if(err){
    console.log(err);
}
console.log('Folder created')
});

}
else{
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Folder Deleted")
    });
}

//deleting files
if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}
    else{
        fs.mkdir('./demo',(err)=>{
            if(err){
                console.log(err)
            }
            console.log("Folder created")
        })
    }
