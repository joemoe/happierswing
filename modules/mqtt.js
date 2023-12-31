
const options = {
    clean: true,
    connectTimeout: 4000,
    //username: MQTT_USERNAME,
    //password: MQTT_PASSWORD,
};

let mqttClient

function initMQTT() {
    mqttClient = mqtt.connect(MQTT_URL, options);

    mqttClient.subscribe(MQTT_TOPIC)

    mqttClient.on("message", function (topic, payload) {
        let msg = JSON.parse([payload].join(':'))
        document.getElementById('swing-' + msg.swing).value = msg.intensity
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