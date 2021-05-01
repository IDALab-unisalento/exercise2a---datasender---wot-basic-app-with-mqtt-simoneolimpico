const mqtt = require("mqtt");

var client = mqtt.connect("mqtt://broker.hivemq.com", {clientId:"mqttjs01_so"});

client.on("connect", function(){
    console.log("Connected");
});

client.on("error", function(error){
    console.log("Can't connect" +error);
});

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
