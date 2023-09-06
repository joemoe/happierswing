let sampler = {
    fly: {
        1: {
            name: "rythm",
            samples: [
                {
                    file: 'fly/SO_JAM_90_perc_loop_topaz.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'fly/SO_JAM_90_drum_loop_emerald.wav',
                    minIntensity: 3,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        }, 2: {
            name: "bass",
            samples: [
                {
                    file: 'fly/SO_JAM_90_bass_upright_simple_emerald_Ebmaj.wav',
                    minIntensity: 1,
                    maxIntensity: 3,
                    buildUp: true
                }, {
                    file: 'fly/SO_JAM_90_bass_upright_walk_simple_emerald_Ebmaj.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: false
                }
            ]
        }, 3: {
            name: "piano",
            samples: [
                {
                    file: 'fly/SO_JAM_90_electric_piano_melody_emerald_Ebmaj.wav',
                    minIntensity: 1,
                    maxIntensity: 3,
                    buildUp: true
                }, {
                    file: 'fly/SO_JAM_90_piano_chords_emerald_Ebmaj.wav',
                    minIntensity: 3,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        }, 4: {
            name: "strings",
            samples: [
                {
                    file: 'fly/SO_JAM_90_guitar_rhythm_emerald_Ebmaj.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'fly/SO_JAM_90_string_stack_eggshell_Ebmaj.wav',
                    minIntensity: 3,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        }, 5: {
            name: "horns",
            samples: [
                {
                    file: 'fly/SO_JAM_90_horn_stack_eggshell_Ebmaj.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'fly/SO_JAM_90_trumpet_stack_ebony_Ebmaj.wav',
                    minIntensity: 3,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        }, 6: {
            name: "vocal",
            samples: [
                {
                    file: 'fly/SO_JAM_90_vocal_hook_icouldfly_Ebmaj.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'fly/SO_JAM_90_vocal_riff_emerald_Ebmaj.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        }   
    }, italo: {
        1: {
            name: "drums",
            samples: [
                {
                    file: 'italo/sid_drum_123_neon_snare.wav',
                    minIntensity: 1,
                    maxIntensity: 1,
                    buildUp: false
                }, {
                    file: 'italo/sid_drum_123_neon_full.wav',
                    minIntensity: 2,
                    maxIntensity: 3,
                    buildUp: false
                }, {
                    file: 'italo/sid_drum_123_reel_full.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: false
                }
            ]
        },
        2: {
            name: "bass",
            samples: [
                {
                    file: 'italo/sid_music_123_silent_bass_Gm.wav',
                    minIntensity: 1,
                    maxIntensity: 3,
                    buildUp: false
                }, {
                    file: 'italo/sid_music_123_girls_bass_Gm.wav',
                    minIntensity: 1,
                    maxIntensity: 3,
                    buildUp: false
                }
            ]
        },
        3: {
            name: "synth",
            samples: [
                {
                    file: 'italo/sid_music_123_haert_synth_Am.wav',
                    minIntensity: 1,
                    maxIntensity: 1,
                    buildUp: false
                }, {
                    file: 'italo/sid_music_123_silent_synth_Gm.wav',
                    minIntensity: 2,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'italo/sid_music_123_girls_synth_Gm.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        4: {
            name: "chord/pluck",
            samples: [
                {
                    file: 'italo/sid_music_123_silent_chord_Gm.wav',
                    minIntensity: 1,
                    maxIntensity: 3,
                    buildUp: true
                }, {
                    file: 'italo/sid_music_123_girls_pluck_Gm.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        5: {
            name: "",
            samples: []
        },
        6: {
            name: "",
            samples: []
        }, 
    }
}

/*
italo: {
        1: {
            name: "",
            samples: []
        },
        2: {
            name: "",
            samples: []
        },
        3: {
            name: "",
            samples: []
        },
        4: {
            name: "",
            samples: []
        },
        5: {
            name: "",
            samples: []
        },
        6: {
            name: "",
            samples: []
        }, 
    }
*/