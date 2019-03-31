chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendRequest(tab.id, {
    event: 'refresh'
  })
})

chrome.tabs.onActivated.addListener(({ tabId, windowId }) => {
  chrome.windows.get(windowId, null, win => {
    if (win.type === 'popup') {
      // Desktop PWA window
      chrome.browserAction.enable(tabId, () => {
        // chrome.browserAction.setIcon({ path: 'refresh.png' })
      })
    } else {
      chrome.browserAction.disable(tabId, () => {
        // chrome.browserAction.setIcon({ path: 'refresh-disable.png' })
      })
    }
  })
});
