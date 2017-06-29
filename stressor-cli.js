#!/usr/bin/env node

var util = require('util');

var exec = require('child_process').exec;

console.log(`Executing stressor ${process.argv[2]} with parameters ${process.argv[3]}`)

function stressorResponse(error, stdout, stderr) { console.log(`Stressor responded with: ${stdout}`) }

process.env.stressor = process.argv[3];

var options = {
    env : process.env
};

exec(process.argv[2], stressorResponse);
