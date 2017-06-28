const manageWifi = require('manage-wifi');

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

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