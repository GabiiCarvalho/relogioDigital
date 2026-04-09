const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    }
  });

  
  win.loadFile(path.join(__dirname, 'relogioDinamico.html'));
}

app.whenReady().then(createWindow);

// Fecha o app se apertar ESC
app.on('browser-window-created', (e, window) => {
    window.webContents.on('before-input-event', (event, input) => {
        if (input.key === 'Escape') app.quit();
    });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});