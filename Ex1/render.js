const { ipcRenderer } = require('electron');

document.getElementById('milliseconds').addEventListener('change', function (e) {
    ipcRenderer.send('changeMilliseconds', {value: +e.target.value});
});

document.getElementById('timeoutMilliseconds').addEventListener('change', function (e) {
    ipcRenderer.send('changeTimeoutMilliseconds', {value: +e.target.value});
});
