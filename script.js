//your JS code here. If required.
let btn=document.getElementById('btn-save')
let cookies = document.cookie.split("; ");

let fontSize = cookies.find((cookie) => cookie.startsWith("fontSize="));
let fontColor = cookies.find((cookie) => cookie.startsWith("fontColor="));

fontSize = fontSize?.split("=")[1];
fontColor = fontColor?.split("=")[1];

if (fontSize) {
  document.body.style.fontSize = fontSize + "px";
}

if (fontColor) {
  document.body.style.color = fontColor;
}
btn.addEventListener('click',()=>{
let fontSize = document.getElementById("font-size").value;
let fontColor = document.getElementById("font-color").value;
   document.cookie = `fontSize=${fontSize}`;
  document.cookie = `fontColor=${fontColor}`;
})
