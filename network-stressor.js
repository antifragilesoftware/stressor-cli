var shell = require('shelljs');
const uuidv4 = require('uuid/v4');
var network = require('network');
var timestamp = require('console-timestamp');

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

const parameters = JSON.parse(process.env.stressor);
const delay = parameters.delay;
console.log("started");

network.get_interfaces_list(function(err,list)
{
    console.log("network active");
    console.log(err);
    //console.log(list);
    for (var i = 0; i < list.length; i++)
     {
         if (list[i].ip_address!=null)
         {
            console.log(list[i]);
            var name = list[i].name;
            shell.exec('ifconfig ' + name + ' down', {silent:true}, function (code,stout,stderr)
            {
                console.log('hh:mm:ss'.timestamp);
                console.log('Exit code:',code);
                console.log('stout:',stout);
                console.log('stderr:',stderr);
                sleep(delay * 1000, function()
                {
                    console.log('done sleep');
                    
                    shell.exec('ifconfig ' + name + ' up', function (code,stout,stderr)
                    {
                        console.log('hh:mm:ss'.timestamp);           
                        console.log('Exit code:',code);
                        console.log('stout:',stout);
                        console.log('stderr:',stderr);
                    });
            

                });

            });
         }
            
     }
});