

function updateText() {
    let input = document.getElementById('text-input').value
    document.getElementById('text-output').innerText = input
}

function makeBold(elem) {
    elem.classList.toggle("active");
    document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(elem) {
    elem.classList.toggle("active");
    document.getElementById('text-output').classList.toggle('italic');
}

// using contains, add and remove functions
function addUnderline(elem) {
    elem.classList.toggle("active");
    if (elem.classList.contains("underline")) {
        document.getElementById('text-output').classList.remove('underline');
    } else {
        document.getElementById('text-output').classList.add('underline');
    }
}

function alignText(elem, alignType) {
    let list = document.getElementsByClassName('align');
    for (var i = 0; i < list.length; i++) {
        if (list[i].classList.contains("active")) {
            list[i].classList.remove("active");
        }
    }
    elem.classList.add("active");
    document.getElementById('text-output').style.textAlign = alignType;
}