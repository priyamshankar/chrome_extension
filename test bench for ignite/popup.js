// var check_text = document.getElementById("check");
// var checke = document.getElementById("checke");   // for the focus mode
// var btn = document.getElementById("btn");


// chrome.storage.sync.get("check", ({ check }) => {
//     check_text.value = check;
// })

// btn.addEventListener("click", (event) => {
//     chrome.storage.sync.set({ check }, function () {

//         check = check_text.value;
//     })
// })

// checke.addEventListener("click",(event)=>{
//     chrome.storage.sync.get("checke",({checke})=>{
//         if (checke.checked==false){
//             checke.checked=true;
//             alert("check inside");
//         }
//         else {
//             checke.checked=false;
//             alert("else ke andar");
//         }
//     })    
// })

document.getElementById("motivation_on").addEventListener("click", newQuote);
document.getElementById("motivation_off").addEventListener("click", clear_quote);
// document.getElementById("focus_mode").addEventListener("click",foucsmode_trigger);

function clear_quote() {
    chrome.runtime.sendMessage({
        greeting: "clear_motivation"
    })
    // alert("press");
}

function newQuote() {
    const minutes = 1.0;
    chrome.runtime.sendMessage({
        greeting: "put_motivation"
    })
}

function foucsmode_trigger() {
    chrome.runtime.sendMessage({
        greeting: "focusmode_on"
    })
}


// function loadJSON(callback) {  

//     let xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', './quotes.json', true);
//     xobj.onreadystatechange = () => {
//       if (xobj.readyState == 4 && xobj.status == "200") {
//         callback(xobj.responseText);
//       }
//     }
//     xobj.send(null);
//   }

//   function newQuote() {
//     loadJSON((response) => {
//       // Parse JSON string into object
//       let quotes = JSON.parse(response);
//       let randomNumber = Math.random() * (Object.keys(quotes).length - 1);
//       randomNumber = Math.round(randomNumber);
//       quote = quotes[randomNumber].quote;
//       author = quotes[randomNumber].author;
//       alert(quote);
//     })
//   }
