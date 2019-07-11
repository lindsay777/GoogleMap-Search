chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse(addSearchBtn(request.args));
});

function addSearchBtn() {
    var title = document.querySelector(".section-hero-header-title-title");
    // TODO: Get title's text correctly.

    var buttton = document.createElement("input");
    buttton.type = "button";
    buttton.value = "googleSearch";
    buttton.name = "googleSearch";
    buttton.onclick = function() {
        query = title.innerTEXT;
        window.open('http://google.com/search?q='+query);
    };

    if (title != null){
       title.appendChild(buttton);
    }

    return title
  }