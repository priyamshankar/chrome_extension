// var counter = 0;
// chrome.browserAction.onClicked.addListener(function (tab) {
//     counter++;
//     if (counter == 5) {
//         alert("Hey !!! You have clicked five times");
//     }
// });
let color = '#3aa757';
let brick = 0;
chrome.runtime.onStartup.addListener(() => {
// chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ brick });


  console.log('Default background color set to %cgreen', `color: ${color}`);
});