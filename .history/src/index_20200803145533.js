import fn from "./fn.js";
import logo from "./images/logo.png";
import css from "./css/css.css";

console.log(fn);
console.log("logo", logo);
console.log("css", css);

let logoImage = new Image();
logoImage.src = logo;
document.body.appendChild(logoImage);


const login = document.querySelector('.login');
login.onclick = function(){
    console.log("开课吧-李靖");
}
// let styleEle = document.createElement("style");
// styleEle.innerHTML = css[0][1];
// document.head.appendChild(styleEle);
