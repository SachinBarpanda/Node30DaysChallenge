const cp = require("child_process");

function executeCommand(command) {
    // Implementation
    cp.exec(command,function (err,op){
        if(err){
            console.log(err);
            return ;
        }
        console.log(op);
    });
}
executeCommand('ls');
executeCommand('echo "Hello, Node.js!"');