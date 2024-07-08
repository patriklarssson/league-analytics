import SquirrelEvents from './app/events/squirrel.events';
import ElectronEvents from './app/events/electron.events';
import UpdateEvents from './app/events/update.events';
import { app, BrowserWindow, ipcMain } from 'electron';
import App from './app/app';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

export default class Main {
  static initialize() {
    if (SquirrelEvents.handleEvents()) {
      // squirrel event handled (except first run event) and app will exit in 1000ms, so don't do anything else
      app.quit();
    }
  }

  static bootstrapApp() {
    App.main(app, BrowserWindow);
  }

  static bootstrapAppEvents() {
    ElectronEvents.bootstrapElectronEvents();

    ipcMain.handle('create-text-file', async (event, fileName) => {
      const desktopPath = path.join(os.homedir(), 'Desktop', fileName);
      fs.writeFileSync(desktopPath, '');
      return `File created at ${desktopPath}`;
    });

    // initialize auto updater service
    if (!App.isDevelopmentMode()) {
      // UpdateEvents.initAutoUpdateService();
    }
  }
}

// handle setup events as quickly as possible
Main.initialize();

// bootstrap app
Main.bootstrapApp();
Main.bootstrapAppEvents();
