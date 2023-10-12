controls.innerHTML = controls.innerHTML + ' <a href="javascript:initLight()" id="light">Use light</a> '



let lightElements = {}
let lightInterval
let lightOffInterval
let beat = 0

let lightPattern = [
    [0, 0, 0, 0]
    ,   [0.2, 0, 0, 0]
    ,   [0.2, 0, 0.2, 0]
    ,   [0.4, 0, 0.4, 0]
    ,   [0.6, 0.6, 0.6, 0.6]
    ,   [1.0, 1.0, 1.0, 1.0]
]

swings.forEach(id => {
    lightElements[id] = document.getElementById("swing-" + id).parentElement
})

function lightBeat() {
    swings.forEach(id => {
        if(lightPattern[swingState[id].intensity][beat] > 0) {
            mqttClient.publish(
                'cmd/led/' + (id - 1) + '/dim_for_time', 
                '' + Math.round(lightPattern[swingState[id].intensity][beat] * 100) + ',' + 60 / bpm / 2
            )
        }
        setLightness(lightElements[id], lightPattern[swingState[id].intensity][beat])
    })
    beat++
    if(beat >= 4) beat = 0
}

function lightOffBeat() {
    swings.forEach(id => {
        setLightness(lightElements[id], 0)
    })
}

function setLightness(el, intensity) {
    el.style.backgroundColor = 'rgba(255,255,0,' + intensity + ')'
}

function initLight() {
    document.getElementById('light').remove()
    lightInterval = window.setInterval(lightBeat, 60 * 1000 / bpm)
    window.setTimeout(_ => {
        lightOffInterval = window.setInterval(lightOffBeat, 60 * 1000 / bpm)
    }, 60 * 1000 / bpm / 2)
}