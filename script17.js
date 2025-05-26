//1
const pEl = document.querySelector("#paragraf")
const buttonEl = document.querySelector("#button")

buttonEl.textContent = pEl.textContent;

console.log(pEl);
console.log(buttonEl);

//2
const img = document.querySelector(".img")
img.src = "https://cdn.pixabay.com/photo/2025/02/09/12/19/lake-9394214_1280.jpg"
console.log(img);

//3
const link = document.querySelector(".link")
link.href = "https://cdn.pixabay.com/photo/2025/05/16/16/14/investigation-9604083_1280.png";
console.log(link);

const imgEl = document.querySelector(".image")
imgEl.alt = "Sahara";
console.log(imgEl);

//4
const firstEl = document.querySelector(".list")
firstEl.firstElementChild.textContent = "4";
console.log(firstEl);