class Beat {
    constructor(fileLink) {
        this.audio = new Audio(fileLink);
        // console.log(this.audio)
        // this.play()
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

// console.log()

class Button{
    constructor(color, keycode) {
        this.color = color;
        this.keycode = keycode;
        this.element = document.getElementById(keycode);
        console.log(this.element)
        this.setButtonColorInHTML()
        // this.select()
    }
    setButtonColorInHTML = () => {
        console.log(this.element)
        this.element.style.borderColor = this.color;
    }

    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
        this.element.addEventListener("transitionend", this.deselect)
        // setTimeout(this.deselect, 3000)
    }

    deselect = () => {
        this.element.style.backgroundColor = ''; // or 'transparent'
        this.element.style.boxShadow = ''; // or 'none'
    }
}

