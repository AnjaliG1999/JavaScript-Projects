class Beat {
    constructor(fileLink) {
        this.audio = new Audio(fileLink);
        console.log(this.audio)
        // this.play()
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

console.log()

class Button{
    constructor(color, keycode) {

    }
    setButtonColorInHTML = () => {

    }

    select = () => {
        
    }

    deselect = () => {
        
    }
}

