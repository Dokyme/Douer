import { app, BrowserWindow } from "electron";

let win: Electron.BrowserWindow = null;

function createWindow() {
    win = new BrowserWindow({
        width: 700,
        height: 500,
        show: false
    });
    win.loadURL("file://" + __dirname + "/../renderer/index.html");
    win.on("closed", () => win = null);
    win.on("ready-to-show", () => {
        win.show();
        win.focus();
    });
}

app.on("ready", () => createWindow());
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());
app.on("activate", () => win === null && createWindow());