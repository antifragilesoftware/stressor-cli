#!/usr/bin/env node

var util = require('util');

var exec = require('child_process').exec;

function puts(error, stdout, stderr) { console.log(stdout) }
console.log("Using command: " + process.argv[2])

process.env.stressor = JSON.stringify({
   delay : 5,
});
var options = {
    env : process.env
};

exec(process.argv[2], puts);
