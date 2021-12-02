// const iframebtn = document.getElementById("iframebtn");
// iframebtn.addEventListener("click", (event) => {
//   iframesettings();
//   console.log("clicked");
// })

var iframes = document.getElementById("iframes");
var check=1;
var checke = document.getElementById("checke");   // for the focus mode
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.sync.set({ check });
})
chrome.storage.sync.get("check", ({ check }) => {
  console.log(check);
});
if (checke.checked===true){
  alert("checkbox fnc working");
}
// function iframesettings() {
//   let iframewindow = iframes.contentWindow;
//   // let iframedoc = iframewindow.document;
//   console.log(iframewindow);
//   // console.log(iframedoc);
// }

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {

//     geturls();

//   }
// })
// function geturls() {

//   chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
//     let url = tabs[0].url;
//     console.log(url);
//     alert(url);
//   });
// }




// let color = '#3aa757';

// chrome.runtime.onStartup.addListener(() => {
//   // chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });


// });

// chrome.storage.sync.get("check", ({ check }) => {
//   // console.log(check);
//   if (check == 1) {
//       checked.innerHTML=true;
//       // alert("in focus mode");
//       console.log = ("true");
//   }
//   else {
//       console.log("false");
//       checked.innerHTML=false;
//   }
// });