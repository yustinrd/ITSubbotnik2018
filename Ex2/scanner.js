const { ipcRenderer } = require('electron');
const SerialPort = require('serialport');
const port = new SerialPort('COM4', { autoOpen: false });

port.open(function() {
    ipcRenderer.send('scanner is ready');
});

port.on('data', function (value) {
    ipcRenderer.send('get message', { value: value.toString() });
});


