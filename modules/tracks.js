let sampler = {
    fly: {
        bpm: 90,
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
            name: "trumpet",
            samples: [
                {
                    file: 'fly/SO_JAM_90_trumpet_melody_chino_Ebmin.wav',
                    minIntensity: 1,
                    maxIntensity: 3,
                    buildUp: true
                }, {
                    file: 'fly/SO_JAM_90_trumpet_stack_chintz_Ebmin.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: false
                }
            ]
        }, 5: {
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
        }, 6: {
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
        }   
    }, disco: {
        bpm: 118,
        1: {
            name: "drums-top",
            samples: [
                {
                    file: 'disco/ndfa_kit04_Drums_top_118_gs.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        2: {
            name: "bass",
            samples: [
                {
                    file: 'disco/ndfa_kit03_Bassline_118_gs.wav',
                    minIntensity: 1,
                    maxIntensity: 2,
                    buildUp: true
                }, {
                    file: 'disco/ndfa_kit04_Bassline_118_gs.wav',
                    minIntensity: 3,
                    maxIntensity: 5,
                    buildUp: false
                }, {
                    file: 'disco/ndfa_BassLoop_03_118_gs.wav',
                    minIntensity: 5,
                    maxIntensity: 5,
                    buildUp: false
                }, 
            ]
        },
        3: {
            name: "synth",
            samples: [
                {
                    file: 'disco/ndfa_kit03_SynthChords_118_gs.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: false
                }, {
                    file: 'disco/ndfa_kit05_LongChords_118_e.wav',
                    minIntensity: 2,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'disco/ndfa_SynthLoop_03_118_c.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        4: {
            name: "vocals",
            samples: [
                {
                    file: 'disco/ndfa_kit04_VocalChops_118_gs.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: false
                }, {
                    file: 'disco/ndfa_kit05_Vocal_118_e.wav',
                    minIntensity: 2,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'disco/ndfa_kit03_VocalChops_dry_118_gs.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        5: {
            name: "guitar",
            samples: [
                {
                    file: 'disco/ndfa_kit04_ElecGtar_118_gs.wav',
                    minIntensity: 1,
                    maxIntensity: 3,
                    buildUp: true
                }, {
                    file: 'disco/ndfa_kit05_ElecGtar_Rhythm_118_e.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: false
                }
            ]
        },
        6: {
            name: "drums-kick",
            samples: [
                {
                    file: 'disco/ndfa_kit04_Drums_kick_118_gs.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'disco/ndfa_kit05_Drums_kick_118_e.wav',
                    minIntensity: 3,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        }, 
    }, italo: {
        bpm: 123,
        1: {
            name: "arp/vocal",
            samples: [
                {
                    file: 'italo/sid_music_123_girls_arp_Gm.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'italo/DS_BTH_123_vocal_harmonies_female_loop_closer_verse_dry_Gmaj.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }, 
            ]
        },
        2: {
            name: "pluck",
            samples: [
                {
                    file: 'italo/sid_music_123_girls_pluck_Gm.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'italo/sid_music_123_girls_lead2_Gm.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                } 
            ]
        },
        3: {
            name: "synth",
            samples: [
                {
                    file: 'italo/sid_music_123_girls_synth_Gm.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'italo/sid_music_123_girls_lead1_Gm.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        4: {
            name: "bass",
            samples: [
                {
                    file: 'italo/sid_music_123_girls_bass_Gm.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        5: {
            name: "drums-1",
            samples: [
                {
                    file: 'italo/sid_drum_123_golden_snare.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'italo/sid_drum_123_golden_hats.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: false
                }
            ]
        },
        6: {
            name: "drums-2",
            samples: [
                {
                    file: 'italo/sid_drum_123_golden_kick.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'italo/sid_drum_123_golden_perc.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: false
                }
            ]
        }, 
    }, hiphop: {
        bpm: 90,
        1: {
            name: "drums-1",
            samples: [
                {
                    file: 'hiphop/RHH2_90_drum_loop_sunken_kick.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'hiphop/RHH2_90_drum_loop_sunken_rides.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }, 
            ]
        },
        2: {
            name: "drums-2",
            samples: [
                {
                    file: 'hiphop/RHH2_90_drum_loop_sunken_snare.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'hiphop/RHH2_90_drum_loop_sunken_hats.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                } 
            ]
        },
        3: {
            name: "bass",
            samples: [
                {
                    file: 'hiphop/RHH2_90_kit_loop_flash_bass_Fmin.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'hiphop/RHH2_90_kit_loop_jazz_bass_Fmin.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        4: {
            name: "piano",
            samples: [
                {
                    file: 'hiphop/RHH2_90_kit_loop_flash_piano_Fmin.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'hiphop/RHH2_90_kit_loop_jazz_piano_Fmin.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: true
                }
            ]
        },
        5: {
            name: "trumpet",
            samples: [
                {
                    file: 'hiphop/RHH2_90_kit_loop_flash_trumpet_Fmin.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'hiphop/RHH2_90_kit_loop_jazz_trumpet_Fmin.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: false
                }
            ]
        },
        6: {
            name: "vocals",
            samples: [
                {
                    file: 'hiphop/RHH2_90_scratch_loop_turnitup.wav',
                    minIntensity: 1,
                    maxIntensity: 5,
                    buildUp: true
                }, {
                    file: 'hiphop/RHH2_90_synth_loop_dusty_philly_Asmaj.wav',
                    minIntensity: 4,
                    maxIntensity: 5,
                    buildUp: false
                }
            ]
        }, 
    }
}

/*
italo: {
        bpm: 100,
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