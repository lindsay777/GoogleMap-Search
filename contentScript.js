chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    addSearchBtn(request.args)
    sendResponse(true);
});

// TODO: avoid duplicate button
function addSearchBtn(title) {
    createButton(title, "google", null);

  }

function createButton(title, keyword, previousElement) {
    if (previousElement == null) {
       var position = document.querySelector(".section-hero-header-title-title");
    }else{
       var position = previousElement
    }

    // TODO: add addition keyword option
    var button = document.createElement("button");
    button.id = keyword + "_icon";
    button.type = "button";
    button.setAttribute("style", "padding-left:5px;");
    button.onclick = function() {
        query = title.split(" ")[0] + " " + keyword;
        window.open('http://google.com/search?q='+query);
    };

    var icon = document.createElement("img");
    icon.src = chrome.extension.getURL("icon/" + keyword + ".png");

    // also check button exist
    buttonExist = document.getElementById(button.id);

    if (position != null && buttonExist == null){
        button.appendChild(icon);
        position.appendChild(button);
    }
  }