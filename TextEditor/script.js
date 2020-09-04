updateText = () => {
    let input = document.getElementById('text-input').button;
    document.getElementById('text-output').innerText = input;
}

makeBold = (elem) => {
    elem.classList.toggle("active");
    document.getElementById('text-output').classList.toggle('bold');
}

makeItalic = (elem) => {
    elem.classList.toggle("active");
    document.getElementById('text-output').classList.toggle('italic');
}

// using contains, add and remove functions
addUnderline = (elem) => {
    let formattedTextList = document.getElementById('text-output').classList
    // if (elem.classList.contains("active")) {
    //     formattedTextList.remove('underline');  
    // } else {
    //     formattedTextList.add('underline');
    // }

    elem.classList.contains("active") ? formattedTextList.remove('underline') : formattedTextList.add('underline');

    elem.classList.toggle("active");
    // formattedTextList.toggle('underline');
}

alignText = (elem, alignType) => {
    let alignButtons = document.getElementsByClassName('align');
    // for (var i = 0; i < alignButtons.length; i++) {
    //     if (alignButtons[i].classList.contains("active")) {
    //         alignButtons[i].classList.remove("active");
    //     }
    // }
    console.log(alignButtons)

    for (let button of alignButtons) {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }
    };
    // map() or foreach loop doesn't work: alignButtons is a collection, not an array

    elem.classList.add("active");
    document.getElementById('text-output').style.textAlign = alignType;
}