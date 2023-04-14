//your JS code here. If required.
const paraElement = document.querySelector("status");
const EnterBtn = document.querySelector("enterBtn");

EnterBtn.addEventListener("click",(event)=>{
  paraElement.innerHTML = "<h1>Entered Metaverse</h1>"
})
