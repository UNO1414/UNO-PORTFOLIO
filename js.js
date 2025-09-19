let menu = document.querySelector("nav ul");
let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-circle-xmark");

openBtn.onclick = () => {
  menu.style.right = "0";
};

closeBtn.onclick = () => {
  menu.style.right = "-200px";
};
