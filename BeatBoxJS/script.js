let beats = {
    "65": {
        beat: new Beat("./assets/piano_D.mp3"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/piano_C_sharp.mp3"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/piano_A.mp3"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat('./assets/Drum Sticks Hit.mp3'),
        button: new Button("#ff00ff", 70)
    },
    "71": {
        beat: new Beat("./assets/Snare Drum Roll.mp3"),
        button: new Button("#ff00ff", 71)
    },
    "72": {
        beat: new Beat("./assets/Bass Drum.mp3"),
        button: new Button("#ff00ff", 72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal suspended.mp3"),
        button: new Button("#ff00ff", 74)
    },
    "75": {
        beat: new Beat("./assets/Basic Beat1.mp3"),
        button: new Button("#ffffff", 75)
    },
    "76": {
        beat: new Beat("./assets/Basic Beat2.mp3"),
        button: new Button("#ffffff", 76)
    }
}

triggerBeat = (event) => {
    const key = event.keyCode;
    console.log(key)
    if(key in beats) {
        beats[key].beat.play();
        beats[key].button.select();
    }
}


document.addEventListener('keydown', triggerBeat);
