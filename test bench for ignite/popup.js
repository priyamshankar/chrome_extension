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

function alarm_trigger(){
    const minutes=2;
    
}