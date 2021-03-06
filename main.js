const {app, BrowserWindow, ipcMain} = require('electron')

let mainWindow, docWindow

function createMain() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    resizable: false,
    useContentSize: true,
    autoHideMenuBar: true
  })
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', () => {
    mainWindow = null
    docWindow = null
  })
}

app.on('ready', createMain)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createMain()
})

ipcMain.on('createDoc', (event) => {
  docWindow = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    backgroundColor: '#282828',
    useContentSize: true,
    autoHideMenuBar: true
  })
  docWindow.loadFile('document/index.html')
  docWindow.on('closed', () => docWindow = null)
  event.sender.send('message', { docOpen: !!docWindow })
})
ipcMain.on('mounted', (event) => {
  event.sender.send('message', { docOpen: !!docWindow })
})
