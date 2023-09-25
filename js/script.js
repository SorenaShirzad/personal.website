let btn = document.getElementById("cls");
let div = document.getElementById("div");
let show = document.getElementById("show");
let ss = document.querySelector("#ss");
console.log(ss);
console.log(cls);
console.log(show);
console.log(div);
btn.addEventListener("click", () => {
  div.classList.toggle("hidden");
  div.classList.remove("block");
});
show.addEventListener("click", () => {
  div.classList.toggle("block");
  div.classList.remove("hidden");
});
