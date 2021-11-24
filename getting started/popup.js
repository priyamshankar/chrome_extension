// let color = '#3aa757';
let changeColor = document.getElementById("changeColor");
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: setPageBackgroundColor,
    function: tick,                               // this script is perfectly working in the background
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
function tick() {
  // function sick() {
  // let brick = 0;
  for (let i = 0; i < 5; i++) {
    // chrome.storage.sync.set({ brick });
    chrome.storage.sync.get("brick", ({ brick }) => {   

      alert(brick);
      brick++;
      console.log(brick);
      chrome.storage.sync.set({ brick });
    });                // this script is perfectly working in the background 
      
    }

}
// }

