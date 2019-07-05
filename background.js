chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined) {
    console.log(tab); // log on extension's background page
  }
}); 