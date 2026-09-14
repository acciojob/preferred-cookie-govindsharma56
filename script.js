//your JS code here. If required.
let btn=document.getElementById('btn-save')
let cookies = document.cookie.split("; ");

let fontSize = cookies.find((cookie) => cookie.startsWith("fontsize="));
let fontColor = cookies.find((cookie) => cookie.startsWith("fontcolor="));

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
   document.cookie = `fontsize=${fontSize}`;
  document.cookie = `fontcolor=${fontColor}`;
})
