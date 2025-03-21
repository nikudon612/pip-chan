const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 300, // match avatar size
    height: 400,
    frame: false,             // <-- THIS REMOVES THE TITLE BAR & BUTTONS
    transparent: true,        // Makes window background invisible
    alwaysOnTop: true,
    resizable: false,
    skipTaskbar: true,        // Hides it from dock/taskbar
    hasShadow: false,         // Optional: no shadow border
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
      autoplayPolicy: 'no-user-gesture-required',
      contextIsolation: false
    }
  });

  win.setIgnoreMouseEvents(false); // Optional: lets you interact if needed

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
