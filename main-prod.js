const { app, shell, BrowserWindow } = require('electron');
// const { autoUpdater } = require('electron-updater');

// Default autoUpdate Flags
// autoUpdater.autoDownload = true;
// autoUpdater.autoInstallOnAppQuit = true;
// autoUpdater.autoRunAppAfterInstall = true;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: false,
    },
  });

  mainWindow.setMenu(null);
  mainWindow.loadFile('./public/index.html');

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  if (process.platform === 'win32')
    app.setAppUserModelId('AppName');
  
  // autoUpdater.checkForUpdates();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// autoUpdater.on("update-available", (info) => {
//   // Action for update available.
// });

// autoUpdater.on("update-downloaded", (info) => {
//   // Action for update downloaded.
// });