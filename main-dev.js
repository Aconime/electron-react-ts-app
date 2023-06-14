const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('./public/index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  if (process.platform === 'win32')
    app.setAppUserModelId('APP_NAME');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

require('electron-reload')(__dirname, {
  elecrton: path.join(__dirname, 'node_modules', '.bin', 'electron'),
});

