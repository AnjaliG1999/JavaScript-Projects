let beats = {
    "65": {
        beat: new Beat("./assets/piano_D.mp3")
    },
    "83": {
        beat: new Beat("./assets/piano_C_sharp.mp3")
    },
    "68": {
        beat: new Beat("./assets/piano_A.mp3")
    },
    "65": {
        beat: new Beat('./assets/Drum Sticks Hit.mp3')
    },
    "71": {
        beat: new Beat("./assets/Snare Drum Roll.mp3")
    },
    "72": {
        beat: new Beat("./assets/Bass Drum.mp3")
    },
    "74": {
        beat: new Beat("./assets/Cymbal suspended.mp3")
    },
    "75": {
        beat: new Beat("./assets/Basic Beat1.mp3")
    },
    "76": {
        beat: new Beat("./assets/Basic Beat2.mp3")
    }
}

triggerBeat = (event) => {
    const key = event.keyCode;
    console.log(key)
    if(key in beats) {
        beats[key].beat.play()
    }
    
}


document.addEventListener('keydown', triggerBeat)
