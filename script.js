
// your JS code here. If required.

let btn = document.getElementById("btn-save");

function getCookie(name) {
  let cookies = document.cookie.split("; ");

  let cookie = cookies.find((cookie) =>
    cookie.startsWith(name + "=")
  );

  if (!cookie) return null;

  return decodeURIComponent(cookie.split("=")[1]);
}

// Load saved preferences on page load
let fontSize = getCookie("fontsize");
let fontColor = getCookie("fontcolor");

if (fontSize) {
document.documentElement.style.setProperty("--fontsize", "20px");
}

if (fontColor) {
  document.body.style.color = fontColor;
}


// Save preferences
btn.addEventListener("click", () => {
  let fontSize = document.getElementById("fontsize").value;
  let fontColor = document.getElementById("fontcolor").value;

  let expires = new Date();
  expires.setDate(expires.getDate() + 30);

  document.cookie =
    `fontsize=${encodeURIComponent(fontSize)}; expires=${expires.toUTCString()}; path=/`;

  document.cookie =
    `fontcolor=${encodeURIComponent(fontColor)}; expires=${expires.toUTCString()}; path=/`;
});

