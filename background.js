chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined) {
    if (tab.title.includes(" - Google 地圖")) {
      console.log(tab); // log on extension's background page
      addSearchBtn()
    }
  }
}); 

function addSearchBtn() {
  var buttton = document.createElement("input");
  buttton.type = "button";
  buttton.value = "googleSearch";
  buttton.name = "googleSearch";
  buttton.onclick = function() {
    alert("blabla");
  };

  var title = document.getElementsByClassName("GLOBAL__gm2-headline-5 section-hero-header-title-title"); // TODO: Get title correctly.
  console.log(title);
  title.appendChild(buttton);
}

