[
    document.getElementById('swing-1'),
    document.getElementById('swing-2'),
    document.getElementById('swing-3'),
    document.getElementById('swing-4'),
    document.getElementById('swing-5'),
    document.getElementById('swing-6')
].forEach(el => el.addEventListener("change", ev => {
    window.dispatchEvent(new CustomEvent("swing.update", {detail: {
        swing: ev.target.dataset.swing,
        intensity: ev.target.value * 1,
        active: ev.target.value * 1 > 0
    }}))
}))

let swings = [1, 2, 3, 4, 5, 6]


let tracks, bpm

let gains = {
}

let swingState = {
    1: {
        active: false,
        intensity: 0
    }, 2: {
        active: false,
        intensity: 0
    }, 3: {
        active: false,
        intensity: 0
    }, 4: {
        active: false,
        intensity: 0
    }, 5: {
        active: false,
        intensity: 0
    }, 6: {
        active: false,
        intensity: 0
    }

}

let audio = null
let fileBuffer = {}
let loaded = 0;

window.addEventListener("swing.update", (ev) => {
    swingState[ev.detail.swing].intensity = ev.detail.intensity
    swingState[ev.detail.swing].active = ev.detail.active
    updateSample(ev.detail.swing)
})

window.addEventListener("swing.event", (ev) => {

})

function loadFile(file) {
    loaded++
    var audioURL='sounds/' + file
    var request = new XMLHttpRequest()
    request.open("GET",audioURL,true)
    request.responseType='arraybuffer'
    request.addEventListener('load', function() {
        audio.decodeAudioData(request.response, function(buffer){ 
            fileBuffer[file] = buffer
            loaded--
            if(loaded == 0) playAll()
        });
    });
    request.send();
}

function playAll() {
    swings.forEach(id => {
        tracks[id].samples.forEach(sample => {
            playFile(sample.file)
        })
        updateSample(id)
    })
}

function updateSample(id) {
    tracks[id].samples.forEach(sample => {
        gains[sample.file].gain.value = 0
        if(swingState[id].active && swingState[id].intensity >= sample.minIntensity && swingState[id].intensity <= sample.maxIntensity) {
            if(sample.buildUp)
                gains[sample.file].gain.value = (swingState[id].intensity - sample.minIntensity + 1) / (sample.maxIntensity - sample.minIntensity + 1)
            else
                gains[sample.file].gain.value = 1
        }
    })
}

function playFile(file) {
    var source = audio.createBufferSource()
    var gainNode = audio.createGain();

    gains[file] = gainNode
    gainNode.gain.value = 0

    source.connect(gainNode).connect(audio.destination)
    source.buffer = fileBuffer[file]
    source.loop = true
    source.start(0)
    return source
}

function initAudio(kind) {
    switch(kind) {
        case 'house':
            tracks = sampler.house
            break;
        case 'italo':
            tracks = sampler.italo
            break;
        case 'hiphop':
            tracks = sampler.hiphop
            break;
        case 'disco':
            tracks = sampler.disco
            break;
        case 'fly':
        default:
            tracks = sampler.fly
            break;
    }
    bpm = tracks.bpm
    document.getElementById("audio").remove()
    swingControls.style.display = "block"
    audio = new AudioContext()
    swings.forEach(id => {
        document.getElementById("swing-" + id + "-info").innerHTML = " (" + tracks[id].name + ")"
        tracks[id].samples.forEach(sample => {
            loadFile(sample.file)
        })
    })
}

let controls = document.getElementById("controls")
let swingControls = document.getElementById("swingControls")
swingControls.style.display = "none"

controls.innerHTML = controls.innerHTML + ' <ul id="audio">'
+ '<li><a href="javascript:initAudio(\'fly\')" id="audio">Use Audio (fly)</a></li>'
+ '<li><a href="javascript:initAudio(\'disco\')" id="audio">Use Audio (disco)</a></li>'
+ '<li><a href="javascript:initAudio(\'italo\')" id="audio">Use Audio (italo)</a></li>'
+ '<li><a href="javascript:initAudio(\'hiphop\')" id="audio">Use Audio (hip hop)</a></li>'
+ '<li><a href="javascript:initAudio(\'house\')" id="audio">Use Audio (house)</a></li>'
+ '</ul>'