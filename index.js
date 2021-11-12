const electron = require("electron");

const { app, BrowserWindow, Menu } = electron;

app.on("ready", () => {
  // start a new broswer window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "New Todo",
      },
    ],
  },
];
