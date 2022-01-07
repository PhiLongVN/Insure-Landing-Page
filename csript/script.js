const toggle = document.querySelector(".head-toggle");
console.log("toggle", toggle);
const menu = document.querySelector(".head-menu");

toggle.onclick = () => {
  menu.classList.toggle("active");
};
