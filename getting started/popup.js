// let color = '#3aa757';
let changeColor = document.getElementById("changeColor");
let click=document.getElementById("click");
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  setInterval(eyetimer, 1000);
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: setPageBackgroundColor,
    // function: tick
    // function: tick,                             // this script is perfectly working in the background
  // function: eye,
  });
  // alert("heyy there");
});
// tick();
// setInterval(tick,1000);
// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
  
}
// function tick() {
//   for (let i = 0; i < 5; i++) {
//     // chrome.storage.sync.set({ brick });
//     chrome.storage.sync.get("brick", ({ brick }) => {
      
//       alert(brick);
//       brick++;
//       console.log(brick);
//       chrome.storage.sync.set({ brick });
//     });                // this script is perfectly working in the background 
    
//   }
// }
  
let eyeprot_output=document.getElementById("eyeprot_output");
function eye(){

}
click.addEventListener("click",(event)=>{
  setInterval(eyetimer, 1000);

  alert("message sent");
})
function eyetimer() {
  // chrome.storage.sync.get("eyetim_value", ({ eyetim_value }) => {
    var minutes = parseInt((eyetim_value) / 60);
    var seconds = ((eyetim_value) % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    eyeprot_output.innerHTML = `${minutes}:${seconds}`;
    eyetim_value--; // timervalue.value;
  // })
}
// eyeprot_output.innerHTML="helloworld";
// }

