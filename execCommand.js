function copyText() {
    var copyText = document.getElementById('myText');
    copyText.select();
    document.execCommand('copy');
}

function pasteText() {
    var pasteText = document.getElementById('pasteArea');
    pasteText.focus();
    document.execCommand('paste');
}

function copyText() {
const textToCopy = document.getElementById('myText').innerText;

navigator.clipboard.writeText(textToCopy)
    .then(() => {
    console.log('Text copied successfully!');
    })
    .catch((error) => {
    console.error('Error copying text:', error);
    });
}

function pasteText() {
const pasteArea = document.getElementById('pasteArea');

navigator.clipboard.readText()
    .then((text) => {
    pasteArea.value = text;
    console.log('Text pasted successfully!');
    })
    .catch((error) => {
    console.error('Error pasting text:', error);
    });
}