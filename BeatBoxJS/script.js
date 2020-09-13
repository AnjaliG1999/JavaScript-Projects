let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat('./assets/Drum Sticks Hit 3.mp3'),
        button: new Button("#ff00ff", 70)
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#ff00ff", 71)
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#ff00ff", 72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#ff00ff", 74)
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#ffffff", 75)
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
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
