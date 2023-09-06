if(MQTT_ACTIVE) {
    const options = {
        clean: true,
        connectTimeout: 4000,
        username: MQTT_USERNAME,
        password: MQTT_PASSWORD,
    };

    const client = mqtt.connect(MQTT_URL, options);

    client.subscribe(MQTT_TOPIC)
    
    client.on("message", function (topic, payload) {
        let msg = JSON.parse([payload].join(':'))
        console.log(msg)

        window.dispatchEvent(
            new CustomEvent("swing.update", {
                detail: {
                    swing: msg.swing,
                    intensity: msg.intensity,
                    active: msg.intensity > 0,
                },
            })
        );
    })
}
