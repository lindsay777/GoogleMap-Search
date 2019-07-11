chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    addSearchBtn(request.args)
    sendResponse(true);
});

// TODO: avoid duplicate button
function addSearchBtn(title) {
    var titlePosition = document.querySelector(".section-hero-header-title-title");

    // TODO: beautify button
    // TODO: add addition keyword option
    var buttton = document.createElement("input");
    buttton.type = "button";
    buttton.value = "googleSearch";
    buttton.name = "googleSearch";
    buttton.onclick = function() {
        query = title.split(" ")[0];
        window.open('http://google.com/search?q='+query);
    };

    // HINT: also check button exist
    if (titlePosition != null){
        titlePosition.appendChild(buttton);
    }
  }