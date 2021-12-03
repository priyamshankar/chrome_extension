// const iframebtn = document.getElementById("iframebtn");
// iframebtn.addEventListener("click", (event) => {
//   iframesettings();
//   console.log("clicked");
// })

// var iframes = document.getElementById("iframes");

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


// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ check });
//   var check = 2;
//   chrome.storage.sync.set({checke});
// })


// window.onload = (event) => {
//   if (check.value == 1) {
//     checke.checked = true;
//     // alert("in focus mode");
//     console.log = ("true");
//   }
//   else {
//     console.log("false");
//     checke.checked = false;
//   }
// }

// });

// window.onload = (event) => {

//   chrome.storage.sync.get("check", ({ check }) => {
//     // console.log(check);
//     if (check == 1) {
//       checke.checked = true;
//       // alert("in focus mode");
//       console.log = ("true");
//     }
//     else {
//       console.log("false");
//       checke.checked = false;
//     }
//   });
// };

// checke.addEventListener("click",(event)=>{
//   chrome.storage.sync.get("checke",({checke})=>{
//       if (checke.checked==false){
//           checke.checked=true;
//           alert("check inside");
//       }
//       else {
//           checke.checked=false;
//           alert("else ke andar");
//       }
//   })    
// })
console.log("inside the background script");

// *************************    EYE protection    *********************************

function create_alarm() {
  console.log("alarm set");
  chrome.alarms.create("blink_eye", { periodInMinutes: mints });
}
// create_alarm(minute);
chrome.alarms.onAlarm.addListener(function () {
  // alert("its been soo long look away");
  eyetimer_notif();
  console.log("inside on alarm functions");
})
function clear_alarms() {
  chrome.alarms.clear(
    "blink_eye", function () {
      alert("All alarms cleared");
    }
  )
}
// eyetimer_notif();   //just to check if the notificaiton api is working or not, this line can be deleted
function eyetimer_notif() {
  chrome.notifications.create("eye_tim_notif", {
    type: "basic",
    iconUrl: "/icons/32.png",
    title: "Care for your eyes : Ignite",
    message: "look away you have been seeing your screens since 20 minutes straight it will harm your eyes"
  }, function () { console.log("notificaiton api in action") })               // call back funciton in case you don't understand.
}

chrome.runtime.onMessage.addListener(function (clear){
  clear_alarms();
  console.log(clear);
})

chrome.runtime.onMessage.addListener(function(minutes){
  console.log("passed message to set alarm reached");
  mints=minutes.minutes*1.0;
  create_alarm();
})

// **************************   EYE protection    ********************************