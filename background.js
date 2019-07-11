chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined) {
    if (tab.title.includes(" - Google 地圖")) {
      console.log(tab); // log on extension's background page

      chrome.tabs.sendMessage(tab.id, { args: 123 }, function (response) {
        console.log(response)
      });
    }
  }
});



