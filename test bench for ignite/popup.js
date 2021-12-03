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

document.getElementById("btn").addEventListener("click",alarm_trigger);
document.getElementById("checke").addEventListener("click",clear_message);

function clear_message(){
    var clear="helloworld";
    chrome.runtime.sendMessage({clear},function(clear){
        console.log("message sent to clear");
    })
}

function alarm_trigger(){
    const minutes=1.0;
    chrome.runtime.sendMessage({minutes}, function(minutes){
        console.log("message sent to the background.js");
    })

}