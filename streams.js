const fs=require('fs');
const readstream=fs.createReadStream('./blog3.txt',{encoding:'utf-8'});
const writestream=fs.createWriteStream('./blog4.txt');
const writestream1=fs.createWriteStream('./blog5.txt');

readstream.on('data',(chunk)=>{
    console.log('--------new chunk------');
    console.log(chunk);
    writestream.write('\nNEW CHUNK\n')
    writestream.write(chunk);
})

//piping
readstream.pipe(writestream1);