const manageWifi = require('manage-wifi');

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

var importedObject = JSON.parse(process.env.details);

console.log("Passed object: " + importedObject.custom);

manageWifi
    .off()
    .then(() => {
        console.log('Wi-Fi is off');
        sleep(5000, function() {
            // executes after one second, and blocks the thread
        });
    })
    .then(manageWifi.on)
    .then(() => {
        console.log('Wi-Fi is on');
    });