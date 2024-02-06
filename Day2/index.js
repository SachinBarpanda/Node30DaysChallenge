const fs = require('fs');
function writeToFile(filePath, content) {
    // Implementation
    
    fs.writeFile(filePath,content,{
        encoding:'utf-8',
        flag:'w'
    },(err)=>{
        if(err) {console.log(err)}
        else{
            console.log("Data written to output.txt");
        }
    })
}
writeToFile('test-files/output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
