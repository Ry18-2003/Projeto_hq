const container = document.querySelector(".user_perfio");
const img1 = container.querySelector("img:first-child");
const img2 = container.querySelector("img:last-child");

img2.addEventListener("mouseenter", () => {
  img2.style.zIndex = 1;
});
