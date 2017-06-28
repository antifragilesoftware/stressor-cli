const manageWifi = require('manage-wifi');

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

const parameters = JSON.parse(process.env.stressor);
console.log("Parameters received: " + parameters.delay);
const delay = parameters.delay;

console.log("Delay setting is: " + delay);

manageWifi
    .off()
    .then(() => {
        console.log('Wi-Fi is off');
        sleep(delay * 1000, function() {
        });
    })
    .then(manageWifi.on)
    .then(() => {
        console.log('Wi-Fi is on');
    });