#!/usr/bin/env node

var program = require('commander');

var util = require('util');

var exec = require('child_process').exec;

program
  .version('0.1.0')
  .arguments('<stressorCommand> [stressorCommandParams]')
  .action(function (stressorCommand, stressorCommandParams) {
    console.log(`Executing stressor ${stressorCommand} with parameters ${stressorCommandParams}`);
    stressorCommandValue = stressorCommand;
    stressorCommandParamsValue = stressorCommandParams;
    });
  
program.parse(process.argv);

if (typeof stressorCommandValue === 'undefined') {
   console.error('no stressor command indicated!');
   process.exit(1);
}

function stressorResponse(error, stdout, stderr) { console.log(`Stressor responded with: ${stdout}`) };

if (stressorCommandParamsValue) {
    process.env.stressor = process.argv[3];
}
    
var options = {
    env : process.env
};

exec(stressorCommandValue, stressorResponse);

