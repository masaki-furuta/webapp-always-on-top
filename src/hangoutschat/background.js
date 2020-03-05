const configWindow = {
  bounds: {
    width: 768,
    height: 1024
  },
  minWidth: 768,
  minHeight: 1024,
  resizable: true,
  frame: "none",
  alwaysOnTop: true,
  hidden: true
};

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html", configWindow, function(appWin) {
    appWin.contentWindow.addEventListener("DOMContentLoaded", function(e) {
      var webview = appWin.contentWindow.document.querySelector("webview");
      webview.src = "https://chat.google.com/u/1/";

      appWin.show();
    });
  });
});
