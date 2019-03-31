chrome.extension.onRequest.addListener((request, sender, sendResponse) => {
  switch (request.event) {
    case 'refresh': {
      window.location.reload()
    }
  }
})
