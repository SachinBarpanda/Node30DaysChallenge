const path = require('path')

function checkFileExtension(filePath, expectedExtension) {
    // Implementation
    const gotExtension = path.extname(filePath);
    if(gotExtension===expectedExtension){
        console.log(`File has the expected extension:${gotExtension}`)
    }else{
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${gotExtension}`)
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');