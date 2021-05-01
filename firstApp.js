const http = require('http')
const mqtt = require("mqtt");

var client = mqtt.connect("mqtt://broker.hivemq.com", {clientId:"mqttjs01_so"});

// initialize the request

// Automatically update sensor value every 2 seconds
//we use a nested function (function inside another function)
setInterval(function() {

    const data = JSON.stringify({
        'sensor': 'ID1',
        'timestamp': 12345678,
        'temperature': Math.random()
    })

    client.publish("test-topic-handson/so", data);
}, 2000);
