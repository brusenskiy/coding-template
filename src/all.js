//require("./all.css");
require("./all.styl");

var contentEle = document.getElementsByClassName("content")[0];
contentEle.innerHTML += "<br>" + require("./content.js");
