
var util = require('util')

var exec = require('child_process').exec;

function puts(error, stdout, stderr) { console.log(stdout) }
console.log("Using command: " + process.argv[2])
exec(process.argv[2], puts);
