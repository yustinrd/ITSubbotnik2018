const { app, BrowserWindow, ipcMain } = require('electron');

let window;
let worker;

app.on('ready', function () {
    require('devtron').install();
    window = createWindow({
        path: 'index.html',
        devtools: true,
    });
    worker = createWindow({
        path: 'worker.html',
        devtools: true,
        browserOptions: {
            show: true,
        }
    });
});

function createWindow({ path, devtools = false, browserOptions = {} }) {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        ...browserOptions,
    });

    if (path) {
        win.loadFile(path)
    }

    if (devtools) {
        win.webContents.openDevTools();
    }

    return win;
}

ipcMain.addListener('scanner is ready', function (e) {
    console.log('scanner is ready');
});

ipcMain.addListener('get message', function (e, value) {
    window.send('get message', value)
});
