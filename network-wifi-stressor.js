const manageWifi = require('manage-wifi');
const uuidv4 = require('uuid/v4');

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

const parameters = JSON.parse(process.env.stressor);
const delay = parameters.delay;

manageWifi
    .off()
    .then(() => {
        sleep(delay * 1000, function() {
        });
    })
    .then(manageWifi.on);

const event = {
    id : uuidv4(),
    name : "network-wifi-stressor",
    timestamp : new Date(),
    payload : {
        delay : delay,
    },
}

console.log(JSON.stringify(event))