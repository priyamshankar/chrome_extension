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
  chrome.alarms.create("blink_eye", { periodInMinutes: 1.0 });
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
// function eyetimer_notif() {
//   chrome.notifications.create("eye_tim_notif", {
//     type: "basic",
//     iconUrl: "/icons/32.png",
//     title: "Care for your eyes : Ignite",
//     message: "look away you have been seeing your screens since 20 minutes straight it will harm your eyes"
//   }, function () { console.log("notificaiton api in action") })               // call back funciton in case you don't understand.
// }
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.greeting == "put_eye_alarm") {
      console.log("passed message to set alarm reached");
      create_alarm();
    }
  });
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.greeting == "clear_eye_alarm") {
      clear_alarms();
      console.log("clear");
    }
  });


// **************************   EYE protection    ********************************


// ************************ focus mode ********************************

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.greeting == "focusmode_on") {
      chrome.tabs.executeScript({
        target: { tabId: tab.id },
        files: ['focusprompt.js']
      });
    }
  });
// ********************************motivational quotes************************
function loadJSON(callback) {

  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './quotes.json', true);
  xobj.onreadystatechange = () => {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  }
  xobj.send(null);
}
let quote = '';
let author = '';

function motivation_notif() {
  loadJSON((response) => {
    // Parse JSON string into object
    let quotes = JSON.parse(response);
    let randomNumber = Math.random() * (Object.keys(quotes).length - 1);
    randomNumber = Math.round(randomNumber);
    quote = quotes[randomNumber].quote;
    author = quotes[randomNumber].author;
    // alert(quote);
    
  })
  chrome.notifications.create("motivation_notification", {

    type: "basic",
    iconUrl: "/icons/32.png",
    title: quote,
    message: author, 
  }, function () { console.log("notificaiton api in action") })               // call back funciton in case you don't understand.
}

function create_motivation_alarm() {
  console.log("alarm set");
  chrome.alarms.create("motivaite_notif", { periodInMinutes: 1.0 });
}

// create_alarm(minute);
chrome.alarms.onAlarm.addListener(function () {
  // alert("its been soo long look away");
  motivation_notif();
  console.log("inside motivation alarm functions");
})

function clear_motiv_alarms() {
  chrome.alarms.clear(
    "motivaite_notif", function () {
      alert("All alarms cleared");
    }
  )
}

chrome.runtime.onMessage.addListener(
  function (request3, sender, sendResponse) {
    if (request3.greeting == "put_motivation") {
      console.log("passed message to set motivation alarm reached");
      create_motivation_alarm();
    }
  });
chrome.runtime.onMessage.addListener(
  function (request2, sender, sendResponse) {
    if (request2.greeting == "clear_motivation") {
      clear_motiv_alarms();
      console.log("motivation clear");
    }
  });



  // ********************************motivational quotes************************

