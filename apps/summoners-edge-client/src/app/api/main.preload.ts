import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  createTextFile: (fileName: string) => ipcRenderer.invoke('create-text-file', fileName),
  platform: process.platform,
});
