if(MQTT_ACTIVE) {
    const client = mqtt.connect(MQTT_URL)
    client.subscribe(MQTT_TOPIC)
    
    let swingMap = {}
    
    client.on("message", function (topic, payload) {
        let msg = JSON.parse([payload].join(':'))
        console.log(msg)
    })
}
