const {ipcRenderer} = require('electron');

function setMessage(message) {
    document.getElementById('block').innerHTML = message;
}

ipcRenderer.addListener('get message', function (e, {value} = {}) {
    setMessage(value);
});

