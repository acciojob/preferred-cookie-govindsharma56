//your JS code here. If required.
let btn=document.getElementById('btn-save')
btn.addEventListener('click',()=>{
let fontSize = document.getElementById("font-size").value;
let fontColor = document.getElementById("font-color").value;
   document.cookie = `fontSize=${fontSize}`;
  document.cookie = `fontColor=${fontColor}`;
})
