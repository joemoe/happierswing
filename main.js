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


let tracks = {
    1: {
        name: "rythm",
        samples: [
            {
                file: 'SO_JAM_90_perc_loop_topaz.wav',
                minIntensity: 1,
                maxIntensity: 5,
                buildUp: true
            }, {
                file: 'SO_JAM_90_drum_loop_emerald.wav',
                minIntensity: 3,
                maxIntensity: 5,
                buildUp: true
            }
        ]
    }, 2: {
        name: "bass",
        samples: [
            {
                file: 'SO_JAM_90_bass_upright_simple_emerald_Ebmaj.wav',
                minIntensity: 1,
                maxIntensity: 3,
                buildUp: true
            }, {
                file: 'SO_JAM_90_bass_upright_walk_simple_emerald_Ebmaj.wav',
                minIntensity: 4,
                maxIntensity: 5,
                buildUp: false
            }
        ]
    }, 3: {
        name: "piano",
        samples: [
            {
                file: 'SO_JAM_90_electric_piano_melody_emerald_Ebmaj.wav',
                minIntensity: 1,
                maxIntensity: 3,
                buildUp: true
            }, {
                file: 'SO_JAM_90_piano_chords_emerald_Ebmaj.wav',
                minIntensity: 3,
                maxIntensity: 5,
                buildUp: true
            }
        ]
    }, 4: {
        name: "strings",
        samples: [
            {
                file: 'SO_JAM_90_guitar_rhythm_emerald_Ebmaj.wav',
                minIntensity: 1,
                maxIntensity: 5,
                buildUp: true
            }, {
                file: 'SO_JAM_90_string_stack_eggshell_Ebmaj.wav',
                minIntensity: 3,
                maxIntensity: 5,
                buildUp: true
            }
        ]
    }, 5: {
        name: "horns",
        samples: [
            {
                file: 'SO_JAM_90_horn_stack_eggshell_Ebmaj.wav',
                minIntensity: 1,
                maxIntensity: 5,
                buildUp: true
            }, {
                file: 'SO_JAM_90_trumpet_stack_ebony_Ebmaj.wav',
                minIntensity: 3,
                maxIntensity: 5,
                buildUp: true
            }
        ]
    }, 6: {
        name: "vocal",
        samples: [
            {
                file: 'SO_JAM_90_vocal_hook_icouldfly_Ebmaj.wav',
                minIntensity: 4,
                maxIntensity: 5,
                buildUp: true
            }, {
                file: 'SO_JAM_90_vocal_riff_emerald_Ebmaj.wav',
                minIntensity: 1,
                maxIntensity: 5,
                buildUp: true
            }
        ]
    }   
}

let gains = {}

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

function initAudio() {
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

controls.innerHTML = controls.innerHTML + '<a href="javascript:initAudio()" id="audio">Activate Audio</a>'