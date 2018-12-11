const { app, BrowserWindow, ipcMain } = require('electron');
const { iterationTimeout, values } = require('./helpers');

app.on('ready', function () {
    require('devtron').install();
    createWindow({ path: 'index1.html' });
    createWindow({ path: 'index2.html' });
    // startWorkers();
    iterationTimeout({});
});

function startWorkers() {
    createWindow({
        path: 'index3.html',
        browserOptions: {
            show: false,
        }
    });

    createWindow({
        path: 'index3.html',
        browserOptions: {
            show: false,
        }
    });
}

function createWindow({ path , browserOptions = {} } = {}) {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        ...browserOptions,
    });

    win.loadFile(path);
    win.webContents.openDevTools();
}



ipcMain.addListener('changeMilliseconds', function (e, { value }) {
    values.milliseconds = +value;
});

ipcMain.addListener('changeTimeoutMilliseconds', function (e, { value }) {
    values.timeoutMilliseconds = +value;
});
