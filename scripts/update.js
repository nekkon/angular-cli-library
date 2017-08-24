
var latest_version = '1.3.2'

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Latest version is:' + latest_version);
rl.question('Upgrade to latest version? (y/n) ', function(answer) {
    if(answer == 'y' || answer == 'Y'){
        console.log('Updating project to latest version...');
    } else {
        
    }
    rl.close();
});