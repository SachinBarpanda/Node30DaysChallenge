const path = require('path')

function resolvePath(relativePath) {
    // Implementation
    const absPath = path.resolve(__dirname,relativePath);
    console.log(absPath);
}

resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');