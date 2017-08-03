chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  var curURL = tabs[0].url;
  $('#qrcode').qrcode(curURL);
});


