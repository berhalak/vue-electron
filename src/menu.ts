import { app, protocol, BrowserWindow, Menu, shell, ipcMain, dialog } from 'electron'

export function createMenu(menu: Electron.MenuItemConstructorOptions[], win: BrowserWindow) {
  const template =
  {
    label: 'Actions',
    submenu: [
      {
        label: 'Hello',
        click: () => {
          win.webContents.send('menu', 'Hello');
        }
      }
    ]
  };

  // add as last
  menu.push(template as any);
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}