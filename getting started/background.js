// var counter = 0;
// chrome.browserAction.onClicked.addListener(function (tab) {
//     counter++;
//     if (counter == 5) {
//         alert("Hey !!! You have clicked five times");
//     }
// });
let color = '#3aa757';
let brick = 0;
let eyetim_value = 20 * 60;

chrome.runtime.onStartup.addListener(() => {
  // chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ brick });
  chrome.storage.sync.set({ eyetim_value });
 


  // console.log('Default background color set to %cgreen', `color: ${color}`);
});

// function eyetimer() {
//   chrome.storage.sync.get("eyetim_value", ({ eyetim_value }) => {
//     var minutes = parseInt((eyetim_value) / 60);
//     var seconds = ((eyetim_value) % 60);
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     eyeprot_output.innerHTML = `${minutes}:${seconds}`;
//     eyetim_value--; // timervalue.value;
//   })
// }
// eyeprot_output.innerHTML="helloworld";
