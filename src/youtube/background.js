const configWindow = {
  bounds: {
    width: 800,
    height: 500
  },
  minWidth: 800,
  minHeight: 500,
  resizable: true,
  frame: "none",
  alwaysOnTop: true,
  hidden: true
};

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html", configWindow, function(appWin) {
    appWin.contentWindow.addEventListener("DOMContentLoaded", function(e) {
      var webview = appWin.contentWindow.document.querySelector("webview");
      //webview.src = "https://www.youtube.com/tv";
      webview.src = "https://youtube.com/";
        
      appWin.show();
    });
  });
});
