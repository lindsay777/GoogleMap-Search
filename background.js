chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined) {
    if (tab.title.includes(" - Google 地圖")) {
      console.log(tab); // log on extension's background page

      chrome.tabs.sendMessage(tab.id, { args: tab.title }, function (response) {
        // call contentScript to add button
      });
    }
  }
});
