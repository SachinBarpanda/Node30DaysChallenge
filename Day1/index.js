const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath,{
        encoding:'utf-8',
        flag:'r'
    },(err,item)=>{
        if(err) {
            console.log(err);
        } 
        console.log(item);
    })
}
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');